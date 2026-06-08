"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next-image-export-optimizer"

// A thumbnail that fades into a muted, looping video while "active".
//
// Two modes:
//   - uncontrolled (default): manages its own hover/focus and plays while the
//     pointer is over it. Used by the layer tiles.
//   - controlled: pass `active` and the parent decides when it plays (e.g. a
//     card that triggers on hover of its whole body). Used by LoopCard.
//
// The <video> is only mounted once it first becomes active, and its source is
// `preload="none"`, so a grid of these costs nothing until reached for.
const HoverVideo = ({
  thumb,
  video,
  alt = "",
  active,
  className = "",
  imgWidth = 800,
  imgHeight = 450,
}) => {
  const controlled = active !== undefined
  const [hovered, setHovered] = useState(false)
  const isActive = controlled ? active : hovered

  const [armed, setArmed] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isActive) setArmed(true)
  }, [isActive])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (isActive) {
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    } else {
      v.pause()
    }
  }, [isActive, armed])

  const handlers = controlled
    ? {}
    : {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setHovered(true),
        onBlur: () => setHovered(false),
      }

  return (
    <div
      className={"hover-video" + (className ? " " + className : "")}
      {...handlers}
    >
      <Image
        className="hover-video__thumb"
        src={thumb}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        style={{ width: "100%", height: "auto" }}
      />
      {armed && (
        <video
          ref={videoRef}
          className={"hover-video__video" + (isActive ? " is-playing" : "")}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={thumb}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default HoverVideo
