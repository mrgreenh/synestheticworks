"use client"

import React, { useState } from "react"
import Link from "next/link"
import HoverVideo from "./HoverVideo"
import { loopHref, layerCount } from "../data/vjLoops"

// A single catalog card for the Original VJ Loops gallery.
//
// Desktop: hovering/focusing the card fades in the lightweight preview loop and
// clicking anywhere opens the loop page.
// Touch (no hover): the first tap kicks off the preview (using the tap as the
// "hover" cue); a second tap follows the link to the loop page.
const LoopCard = ({ loop, index }) => {
  const href = loopHref(loop)
  const [hovered, setHovered] = useState(false)
  const [tapped, setTapped] = useState(false)
  const active = hovered || tapped

  const matches = q =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia(q).matches

  // Hover only drives playback on hover-capable devices, so a touch's synthetic
  // mouseenter can't latch the card on.
  const enter = () => {
    if (matches("(hover: hover)")) setHovered(true)
  }
  const leave = () => setHovered(false)

  const onCoverClick = e => {
    // On touch, intercept the first tap to start the preview instead of
    // navigating; once it's playing, a further tap follows the link normally.
    if (matches("(hover: none)") && !active) {
      e.preventDefault()
      setTapped(true)
    }
  }

  return (
    <article
      className="loop-card"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      {/* Stretched link: the whole card navigates to the loop page, while the
          external Buy link stays a separate, non-nested sibling above it. */}
      <Link
        href={href}
        className="loop-card__cover"
        aria-label={`View ${loop.title}`}
        onClick={onCoverClick}
      />

      <div className="loop-card__media">
        <span className="loop-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <HoverVideo
          thumb={loop.thumb}
          video={loop.preview}
          alt={loop.title}
          active={active}
        />
      </div>

      <div className="loop-card__body">
        <h3 className="loop-card__title">{loop.title}</h3>

        <dl className="loop-card__stats">
          <div className="loop-card__stat">
            <dt>Layers</dt>
            <dd>{String(layerCount(loop)).padStart(2, "0")}</dd>
          </div>
          <div className="loop-card__stat">
            <dt>Made</dt>
            <dd>{loop.year}</dd>
          </div>
        </dl>

        <div className="loop-card__actions">
          <span className="loop-card__view">
            View
            <span className="loop-card__view-arrow" aria-hidden="true">
              &#x2192;
            </span>
          </span>
          {loop.gumroad && (
            <a
              className="loop-card__buy"
              href={loop.gumroad}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default LoopCard
