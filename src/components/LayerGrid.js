"use client"

import React, { useState } from "react"
import Image from "next-image-export-optimizer"
import HoverVideo from "./HoverVideo"

// One layer tile. Plays on hover (pointer devices) OR while it is the grid's
// tapped tile (touch devices, via the play button). The grid owns the single
// "tapped" index so starting one tile stops any other.
//
// `badge` is an optional image shown over the still thumbnail, in the spot the
// play button occupies — used to mark the Vizloom Templates row. It fades out
// as soon as the tile starts playing.
const LayerTile = ({ layer, index, tapped, onToggle, badge, numbered }) => {
  const [hovered, setHovered] = useState(false)
  const active = hovered || tapped
  const name = layer.name || `Layer ${index + 1}`

  const mql = q =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia(q).matches

  // Hover drives playback only on hover-capable devices; on touch a tap can
  // fire mouseenter without a matching mouseleave, which would latch a tile on.
  const handleEnter = () => {
    if (mql("(hover: hover)")) setHovered(true)
  }

  // Only let taps drive playback on devices without hover; on desktop the
  // pointer hover handles it and a stray click shouldn't latch playback.
  const handleClick = () => {
    if (mql("(hover: none)")) onToggle()
  }

  return (
    <figure className="layer-tile">
      <div
        className={"layer-tile__media" + (active ? " is-playing" : "")}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <HoverVideo
          thumb={layer.thumb}
          video={layer.video}
          alt={name}
          active={active}
          imgWidth={320}
          imgHeight={180}
        />
        {badge && (
          <Image
            className="layer-tile__badge"
            src={badge}
            alt=""
            aria-hidden="true"
            width={56}
            height={56}
          />
        )}
        <button
          type="button"
          className="layer-tile__play"
          aria-label={`Play ${name}`}
          onClick={e => {
            e.stopPropagation()
            onToggle()
          }}
        >
          <span className="layer-tile__play-icon" aria-hidden="true" />
        </button>
      </div>
      <figcaption className="layer-tile__name">
        {numbered && (
          <span className="layer-tile__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        {name}
      </figcaption>
    </figure>
  )
}

// A grid of hover-to-play video tiles. Used twice on a loop page: for the
// individual layers that compose the loop (numbered, in compositing order) and
// for its Vizloom Templates (unnumbered, badged with the Vizloom logo).
const LayerGrid = ({ layers = [], badge, numbered = true }) => {
  // Index of the tile currently tapped-to-play (touch); only one at a time.
  const [tappedIndex, setTappedIndex] = useState(null)

  if (!layers.length) return null

  return (
    <div className="layer-grid">
      {layers.map((layer, i) => (
        <LayerTile
          key={layer.video || i}
          layer={layer}
          index={i}
          tapped={tappedIndex === i}
          onToggle={() => setTappedIndex(prev => (prev === i ? null : i))}
          badge={badge}
          numbered={numbered}
        />
      ))}
    </div>
  )
}

export default LayerGrid
