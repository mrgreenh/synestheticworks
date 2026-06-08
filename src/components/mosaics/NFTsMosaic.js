"use client"

import React from "react"
import ProjectThumb from "../ProjectThumb"
import {
  vjLoops,
  loopHref,
  galleryHref,
  MOSAIC_LIMIT,
} from "../../data/vjLoops"

// The "Original VJ Loops" mosaic: up to MOSAIC_LIMIT loops followed by a
// "See All" tile that opens the full gallery.
const NFTsMosaic = ({ showTitles = true }) => {
  const shown = vjLoops.slice(0, MOSAIC_LIMIT)

  return (
    <div className="carousel">
      {shown.map(loop => (
        <ProjectThumb
          key={loop.slug}
          title={showTitles ? loop.title : null}
          imageSrc={loop.thumb}
          href={loopHref(loop)}
          light={loop.light}
        />
      ))}
      <ProjectThumb seeAll href={galleryHref} count={vjLoops.length} />
    </div>
  )
}

export default NFTsMosaic
