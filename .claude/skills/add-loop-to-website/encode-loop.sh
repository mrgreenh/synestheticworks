#!/usr/bin/env bash
#
# encode-loop.sh — encode all the web assets for one Original VJ Loop and print
# a ready-to-paste configuration snippet for src/data/vjLoops.js.
#
# This is the deterministic half of the "add-loop-to-website" skill: it pins the
# exact ffmpeg invocations so every loop on the site is encoded identically. The
# curation half (choosing layer order, display names, writing the story, wiring
# the config) is done by the agent following SKILL.md.
#
# Usage:
#   encode-loop.sh --slug <slug> [options] [LAYER_SPEC ...]
#
# Audio is ALWAYS stripped from every video this script touches — including the
# --top-copy case where the video itself is not re-encoded (see assert_no_audio).
#
# Options:
#   --slug <slug>        Required. URL/identifier for the loop, e.g. portalpeaks.
#   --top <file>         Optional. Source for the full-resolution loop shown at
#                        the top of the page. RE-ENCODES to the house style.
#                        Produces:
#                          public/nfts/<slug>.mp4              (full-res, faststart)
#                          public/nfts/previews/<slug>.mp4     (640px hover preview)
#   --top-copy <file>    Optional. Like --top, but the full-res top is stream-
#                        COPIED (no video re-encode) — only the audio track is
#                        dropped and faststart applied. Use when the source is
#                        already web-ready and re-encoding would only bloat it.
#                        Still generates the re-encoded 640px preview.
#                        Mutually exclusive with --top.
#   --thumb <file>       Optional. Image/video to use as the gallery thumbnail.
#                        If omitted and --top is given, the top video's first
#                        frame is used. Produces public/images/nft_thumbs/<slug>.jpg
#   --gumroad <url>      Optional. Purchase URL for the loop. Not an asset —
#                        nothing is encoded; it's just added to the printed
#                        config snippet as `gumroad: "<url>"`, which makes a Buy
#                        button appear on the card and the loop page.
#   --layers <spec ...>  Everything after --layers is treated as a layer spec.
#                        A spec is either:
#                          a FOLDER  -> every *.mp4/*.mov inside is a layer
#                          a FILE    -> that single file
#                        and may carry an explicit display name with "::Name":
#                          "/path/Glare.mp4::Floor Glare"
#
# Layer specs may also be passed as bare positional args (no --layers needed).
#
# Examples:
#   # Layers only (a loop whose top video & thumb already exist):
#   encode-loop.sh --slug portalpeaks \
#     "/Movies/Vizloom Loops/Portal Peaks/Floor.mp4::Floor" \
#     "/Movies/Vizloom Loops/Portal Peaks/Shimmer.mp4::Shimmer"
#
#   # A brand new loop, top video + a whole folder of layers:
#   encode-loop.sh --slug watery --top "/exports/water_top.mp4" \
#     --layers "/exports/Water Planet"
#
set -euo pipefail

# ---------------------------------------------------------------------------
# Encoding parameters — change here to evolve the house style for ALL loops.
# ---------------------------------------------------------------------------
LAYER_W=320
LAYER_H=180
PREVIEW_W=640      # gallery hover-preview width (height keeps aspect)
THUMB_W=640        # gallery thumbnail max width

x264_common=(-c:v libx264 -pix_fmt yuv420p -movflags +faststart -an)

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"

# ---------------------------------------------------------------------------
slug=""
top=""
top_copy=""
thumb=""
gumroad=""
specs=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --slug)     slug="$2"; shift 2 ;;
    --top)      top="$2"; shift 2 ;;
    --top-copy) top_copy="$2"; shift 2 ;;
    --thumb)    thumb="$2"; shift 2 ;;
    --gumroad)  gumroad="$2"; shift 2 ;;
    --layers)   shift; while [[ $# -gt 0 ]]; do specs+=("$1"); shift; done ;;
    *)          specs+=("$1"); shift ;;
  esac
done

[[ -n "$slug" ]] || { echo "ERROR: --slug is required" >&2; exit 1; }
if [[ -n "$top" && -n "$top_copy" ]]; then
  echo "ERROR: use either --top or --top-copy, not both" >&2; exit 1
fi
top_src="${top:-$top_copy}"   # whichever top source was provided

sanitize() { # -> lowercase, non-alphanumeric collapsed to single underscore
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/_/g; s/^_+//; s/_+$//'
}
humanize() { # filename -> "Title Case Words", dropping render-export noise
  local stem="${1%.*}"                 # strip extension
  echo "$stem" | tr '_-' '  ' | awk '
    { out = ""
      for (i = 1; i <= NF; i++) {
        w = tolower($i)
        if (w == "render" || w == "loop" || w == "loops") continue
        out = out (out == "" ? "" : " ") toupper(substr($i,1,1)) substr($i,2)
      }
      print out
    }'
}

# Guarantee no output keeps an audio track. Every encode below already passes
# -an, but this verifies it and self-heals (stream-copy strip) if a track ever
# slips through — so "no audio on the site" holds regardless of how a file was
# produced.
assert_no_audio() {
  local f="$1"
  local has
  has=$(ffprobe -v error -select_streams a -show_entries stream=index \
    -of csv=p=0 "$f" 2>/dev/null || true)
  if [[ -n "$has" ]]; then
    echo "   !! audio track found in $(basename "$f") — stripping" >&2
    local tmp="${f%.*}.__noaudio.mp4"
    ffmpeg -y -loglevel error -i "$f" -map 0:v -c:v copy -an \
      -movflags +faststart "$tmp"
    mv -f "$tmp" "$f"
  fi
}

layers_dir="$REPO_ROOT/public/nfts/layers/$slug"

# --- top video + preview ----------------------------------------------------
if [[ -n "$top_src" ]]; then
  mkdir -p "$REPO_ROOT/public/nfts/previews"
  out_top="$REPO_ROOT/public/nfts/$slug.mp4"
  if [[ -n "$top_copy" ]]; then
    # No re-encode — copy the video stream and just drop the audio track.
    echo ">> top    public/nfts/$slug.mp4 (stream copy, audio stripped)" >&2
    ffmpeg -y -loglevel error -i "$top_copy" -map 0:v -c:v copy -an \
      -movflags +faststart "$out_top"
  else
    echo ">> top    public/nfts/$slug.mp4 (re-encoded)" >&2
    ffmpeg -y -loglevel error -i "$top" "${x264_common[@]}" \
      -profile:v high -crf 20 -preset slow "$out_top"
  fi
  assert_no_audio "$out_top"

  echo ">> preview public/nfts/previews/$slug.mp4" >&2
  ffmpeg -y -loglevel error -i "$top_src" "${x264_common[@]}" \
    -profile:v main -crf 30 -preset veryslow \
    -vf "scale=${PREVIEW_W}:-2:flags=lanczos" \
    "$REPO_ROOT/public/nfts/previews/$slug.mp4"
  assert_no_audio "$REPO_ROOT/public/nfts/previews/$slug.mp4"
fi

# --- gallery thumbnail ------------------------------------------------------
thumb_out="$REPO_ROOT/public/images/nft_thumbs/$slug.jpg"
if [[ -n "$thumb" ]]; then
  mkdir -p "$(dirname "$thumb_out")"
  echo ">> thumb  public/images/nft_thumbs/$slug.jpg (from --thumb)" >&2
  ffmpeg -y -loglevel error -i "$thumb" -frames:v 1 \
    -vf "scale='min(${THUMB_W},iw)':-2" -q:v 3 "$thumb_out"
elif [[ -n "$top_src" ]]; then
  mkdir -p "$(dirname "$thumb_out")"
  echo ">> thumb  public/images/nft_thumbs/$slug.jpg (first frame of top)" >&2
  ffmpeg -y -loglevel error -i "$top_src" -frames:v 1 \
    -vf "scale=${THUMB_W}:-2" -q:v 3 "$thumb_out"
fi

# --- expand layer specs into a flat (path, name) list -----------------------
paths=(); names=()
add_layer() {
  local p="$1" n="$2"
  paths+=("$p"); names+=("$n")
}
for spec in "${specs[@]:-}"; do
  [[ -z "$spec" ]] && continue
  name=""
  path="$spec"
  if [[ "$spec" == *"::"* ]]; then
    path="${spec%%::*}"
    name="${spec##*::}"
  fi
  if [[ -d "$path" ]]; then
    # a folder: every video inside, sorted, humanized names
    while IFS= read -r f; do
      add_layer "$f" "$(humanize "$(basename "$f")")"
    done < <(find "$path" -maxdepth 1 -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.webm' \) | sort)
  elif [[ -f "$path" ]]; then
    [[ -z "$name" ]] && name="$(humanize "$(basename "$path")")"
    add_layer "$path" "$name"
  else
    echo "WARNING: skipping missing layer spec: $path" >&2
  fi
done

# --- encode layers ----------------------------------------------------------
snippet_layers=""
if [[ ${#paths[@]} -gt 0 ]]; then
  # Re-runs are authoritative: clear stale layer files so renamed/removed
  # layers don't linger.
  rm -rf "$layers_dir"
  mkdir -p "$layers_dir"
  i=0
  for idx in "${!paths[@]}"; do
    i=$((i + 1))
    nn=$(printf "%02d" "$i")
    src="${paths[$idx]}"
    name="${names[$idx]}"
    base="${nn}_$(sanitize "$name")"
    echo ">> layer  public/nfts/layers/$slug/$base.mp4  ($name)" >&2
    ffmpeg -y -loglevel error -i "$src" "${x264_common[@]}" \
      -profile:v main -crf 30 -preset veryslow \
      -vf "scale=${LAYER_W}:${LAYER_H}:force_original_aspect_ratio=decrease,pad=${LAYER_W}:${LAYER_H}:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1" \
      "$layers_dir/$base.mp4"
    assert_no_audio "$layers_dir/$base.mp4"
    ffmpeg -y -loglevel error -i "$src" -frames:v 1 \
      -vf "scale=${LAYER_W}:${LAYER_H}:force_original_aspect_ratio=decrease" -q:v 3 \
      "$layers_dir/$base.jpg"
    snippet_layers+="      { name: \"$name\", video: \"/nfts/layers/$slug/$base.mp4\", thumb: \"/nfts/layers/$slug/$base.jpg\" },"$'\n'
  done
fi

# --- print a config snippet -------------------------------------------------
echo "" >&2
echo "----- paste into the loop's entry in src/data/vjLoops.js -----"
if [[ -n "$top_src" ]]; then
  echo "    video: \"/nfts/$slug.mp4\","
  echo "    preview: \"/nfts/previews/$slug.mp4\","
fi
if [[ -n "$thumb" || -n "$top_src" ]]; then
  echo "    thumb: \"/images/nft_thumbs/$slug.jpg\","
fi
if [[ -n "$gumroad" ]]; then
  echo "    gumroad: \"$gumroad\","
fi
if [[ ${#paths[@]} -gt 0 ]]; then
  echo "    layers: ["
  printf "%s" "$snippet_layers"
  echo "    ],"
fi
echo "--------------------------------------------------------------"
