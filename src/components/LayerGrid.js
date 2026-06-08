"use client"

import React, { useState } from "react"
import HoverVideo from "./HoverVideo"

// One layer tile. Plays on hover (pointer devices) OR while it is the grid's
// tapped tile (touch devices, via the play button). The grid owns the single
// "tapped" index so starting one tile stops any other.
const LayerTile = ({ layer, index, tapped, onToggle }) => {
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
        <span className="layer-tile__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {name}
      </figcaption>
    </figure>
  )
}

// The grid of individual layers that compose a loop.
const LayerGrid = ({ layers = [] }) => {
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
        />
      ))}
    </div>
  )
}

export default LayerGrid
