"use client"

import React from "react"
import ProjectThumb from "../ProjectThumb"
import {
  publishedLoops,
  loopHref,
  galleryHref,
  MOSAIC_LIMIT,
} from "../../data/vjLoops"

// The "Original VJ Loops" mosaic: a leading "See All" tile that opens the full
// gallery, followed by up to MOSAIC_LIMIT published loops.
const NFTsMosaic = ({ showTitles = true }) => {
  const shown = publishedLoops.slice(0, MOSAIC_LIMIT)

  return (
    <div className="carousel loops-mosaic">
      <ProjectThumb seeAll href={galleryHref} count={publishedLoops.length} />
      {shown.map(loop => (
        <ProjectThumb
          key={loop.slug}
          title={showTitles ? loop.title : null}
          imageSrc={loop.thumb}
          href={loopHref(loop)}
          light={loop.light}
        />
      ))}
    </div>
  )
}

export default NFTsMosaic
