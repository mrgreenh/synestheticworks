---
name: add-loop-to-website
description: >-
  Add an Original VJ Loop (or its composing layers) to the website: encode the
  web-optimised video assets with ffmpeg, place them in the conventional folder
  structure, and wire them into the centralized config. Use when the user wants
  to publish a new loop, or add the layer breakdown to an existing loop page.
---

# Adding a Loop to the Website

Every loop on the site is driven by a single config entry in
`src/data/vjLoops.js`. The pages (`/art/[slug]`), the gallery (`/vj-loops`) and
the home-page mosaic all read from it. Adding a loop therefore means two things:

1. **Encode the assets** with the pinned ffmpeg settings → `encode-loop.sh`.
2. **Write the config entry** (curation: order, layer names, description) → by hand.

## What you need from the user

Ask for any of these that are missing before starting:

- **Name** of the loop, e.g. `Portal Peaks`. Derive a `slug` (lowercase, no
  spaces): `portalpeaks`.
- **Date made** — usually **month + year** (e.g. `June 2023`), not a full date.
- **Top video** — the single full-resolution file shown at the top of the page.
  (Skip if the loop already has one.) Pass it as `--top` to re-encode to the
  house style, or `--top-copy` when the file is already web-ready and you only
  want to strip its audio without a (potentially bloating) re-encode.
- **Layer folders / files** — one or more paths. Each folder holds the
  individual layer videos that compose the loop. Example for Portal Peaks:
  - `/Users/perfs/Movies/Vizloom Loops/Portal Peaks` (Floor, Shimmer)
  - `/Users/perfs/Movies/Vizloom Loops/Portal Peaks Glares` (the glare passes)
- **Thumbnail** (optional) — a specific image for the gallery tile. If not
  given, the first frame of the top video is used.
- **Gumroad link** (optional) — the loop's purchase URL, e.g.
  `https://synwrks.gumroad.com/l/portalpeaks`. When provided it becomes a "Buy"
  button on both the gallery card and the loop page; omit it and no button shows.
  It isn't an asset to encode — it's just a config value (see Step 2). You can
  pass it to the script as `--gumroad <url>` to have it included in the printed
  snippet, or simply add the `gumroad:` line by hand.

## Step 1 — Encode with `encode-loop.sh`

The script lives next to this file and writes into the repo's `public/`. It
pins the ffmpeg settings so every loop is encoded identically — **always use it
rather than calling ffmpeg by hand.**

```bash
.claude/skills/add-loop-to-website/encode-loop.sh --slug <slug> [options] [LAYER_SPEC ...]
```

A `LAYER_SPEC` is a folder (every `*.mp4/*.mov/*.webm` inside becomes a layer,
names humanised from filenames) or a single file. Append `::Display Name` to set
the label explicitly — useful when source filenames are ugly
(`floor_glare_render_loop.mp4::Floor Glare`).

**Layers only** (top video & thumbnail already exist — e.g. Portal Peaks):

```bash
.claude/skills/add-loop-to-website/encode-loop.sh --slug portalpeaks \
  "/Users/perfs/Movies/Vizloom Loops/Portal Peaks/Floor.mp4::Floor" \
  "/Users/perfs/Movies/Vizloom Loops/Portal Peaks/Shimmer.mp4::Shimmer" \
  "/Users/perfs/Movies/Vizloom Loops/Portal Peaks Glares/floor_glare_render_loop.mp4::Floor Glare" \
  "/Users/perfs/Movies/Vizloom Loops/Portal Peaks Glares/shimmer_glare_render_loop.mp4::Shimmer Glare"
```

**A brand-new loop** (top video + whole folders of layers):

```bash
.claude/skills/add-loop-to-website/encode-loop.sh --slug watery \
  --top "/exports/water_top.mp4" \
  --thumb "/exports/water_cover.png" \
  --layers "/exports/Water Planet" "/exports/Water Planet Glares"
```

**Top already web-ready** — keep the file as-is, just drop its audio (no
re-encode), still build the preview & thumbnail from it:

```bash
.claude/skills/add-loop-to-website/encode-loop.sh --slug portalpeaks \
  --top-copy "/exports/portal_peaks_baq.mp4"
```

The script prints a config snippet to paste in Step 2.

### Audio is always stripped

Every video the script outputs is audio-free. All re-encodes pass `-an`, and
`--top-copy` stream-copies the video while dropping the audio
(`-map 0:v -c:v copy -an`). After each encode the output is verified with
`ffprobe` and re-stripped if a track somehow remains, so "no audio on the site"
holds no matter how a file was produced.

### The pinned ffmpeg settings (for reference / consistency)

All re-encodes are H.264, `yuv420p`, faststart, **audio stripped** (`-an`). The
numbers below are the house style; change them in `encode-loop.sh` only, so all
future loops follow.

| Asset                   | Size        | ffmpeg video args                                                                                                                        | Output                                    |
| ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Top (full, `--top`)     | source res  | `-crf 20 -preset slow -profile:v high`                                                                                                   | `public/nfts/<slug>.mp4`                  |
| Top (`--top-copy`)      | source res  | `-map 0:v -c:v copy -an` (no re-encode)                                                                                                  | `public/nfts/<slug>.mp4`                  |
| Hover preview (gallery) | width 640   | `-vf scale=640:-2:flags=lanczos -crf 30 -preset veryslow`                                                                                | `public/nfts/previews/<slug>.mp4`         |
| Layer                   | **320×180** | `-vf "scale=320:180:force_original_aspect_ratio=decrease,pad=320:180:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1" -crf 30 -preset veryslow` | `public/nfts/layers/<slug>/NN_<name>.mp4` |
| Layer thumb             | ≤320×180    | first frame: `-frames:v 1 -vf "scale=320:180:force_original_aspect_ratio=decrease" -q:v 3`                                               | `public/nfts/layers/<slug>/NN_<name>.jpg` |
| Gallery thumb           | width ≤640  | first frame (or `--thumb`): `-frames:v 1 -vf scale=640:-2 -q:v 3`                                                                        | `public/images/nft_thumbs/<slug>.jpg`     |

### Folder structure produced

```
public/
  nfts/
    <slug>.mp4                     # top loop (if --top)
    previews/<slug>.mp4            # gallery hover preview (if --top)
    layers/<slug>/                 # layers grouped under their loop
      01_floor.mp4   01_floor.jpg
      02_shimmer.mp4 02_shimmer.jpg
      ...
  images/nft_thumbs/<slug>.jpg     # gallery thumbnail
```

## Step 2 — Wire up `src/data/vjLoops.js`

Add or update the loop's entry. A full entry looks like:

```js
{
  slug: "portalpeaks",
  title: "Portal Peaks",
  thumb: "/images/nft_thumbs/portalpeaks.jpg",   // or the existing thumb
  video: "/nfts/portalpeaks.mp4",                // top loop
  preview: "/nfts/previews/portalpeaks.mp4",     // gallery hover preview
  ogimage: "/nfts/portalpeaks.jpg",
  light: true,                                   // light label on the mosaic tile
  gumroad: "https://synwrks.gumroad.com/l/portalpeaks", // optional → Buy button
  // published: false,                           // optional → hide the loop everywhere
  // forSale: false,                             // optional → keep the loop but hide Buy
  date: "June 2023",                             // month + year
  year: "2023",
  making: ( <><p>How / why it was made…</p></> ), // the default description (JSX node)
  // story: [ "Italic narrative…" ],             // ONLY if the user gives a story / lore
  layers: [   // paste the snippet printed by encode-loop.sh
    { name: "Floor",        video: "/nfts/layers/portalpeaks/01_floor.mp4",        thumb: "/nfts/layers/portalpeaks/01_floor.jpg" },
    { name: "Shimmer",      video: "/nfts/layers/portalpeaks/02_shimmer.mp4",      thumb: "/nfts/layers/portalpeaks/02_shimmer.jpg" },
    // …
  ],
}
```

Notes:

- `layers` is an **array**; the displayed layer count is derived from its
  length via `layerCount(loop)` — no separate number to keep in sync. Loops that
  haven't had their layers collected yet may still use a plain number for
  `layers` (a placeholder count); `layerCount` handles both.
- `gumroad` is optional. When set (and `forSale` isn't false) a "Buy" button
  appears on the gallery card (solid accent CTA) and on the loop page, both
  opening the URL in a new tab; when omitted, no button is rendered.
- Two optional visibility flags, both default ON (omit them to show everything):
  - `published: false` hides the loop everywhere — gallery, home mosaic, "see
    also" rows, and its own generated page (`isPublished`/`publishedLoops`).
  - `forSale: false` keeps the loop listed but hides its Buy links — for when the
    Gumroad product is temporarily unlisted — without dropping the url
    (`isForSale`).
- **Description — `making` vs `story`.** A description the user gives you is the
  **`making`** by default (rendered under "How it was made"; a JSX node, so it
  takes rich formatting). Only add a **`story`** (the italic narrative at the top)
  if the user explicitly says they're giving you a "story" or "lore". **Never
  invent either** — if no text was provided, leave both off. Both are optional and
  a loop can have one, the other, or neither.
- The dynamic route, gallery card and layers grid pick the new entry up
  automatically — no per-page code to add. Every `/art/<slug>` page also shares
  the gallery's "nft" side flow animation automatically (handled generically in
  `FlowReadingTracker.js`) — there's nothing to register per loop.
- Every loop page shows the layers grid (when `layers` is an array).

## Step 3 — Verify

```bash
npm run dev   # then open /art/<slug> and /vj-loops
```

Check: top loop plays, the stats bar shows the right layer count and date, the
layers grid renders and each tile animates on hover, and — if a `gumroad` link
was set — the Buy button shows on both the card and the page and opens the URL.
Use the `test-with-agent-browser` skill to confirm visually. For a production check,
`npm run build` (static export) should list `/art/<slug>` under the generated
routes.
