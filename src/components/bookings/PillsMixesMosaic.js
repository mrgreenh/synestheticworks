"use client"

import React from "react"
import Mosaic from "../mosaic"

const PillsMixesMosaic = () => {
  const mixes = [
    {
      title: "Introspection",
      imageSrc: "/images/introspection_thumbnail.png",
      href: "/synesthetic_mixes/introspection/",
      light: true,
      external: false,
    },
    {
      title: "Exploration",
      imageSrc: "/images/exploration_thumbnail.png",
      href: "/synesthetic_mixes/exploration/",
      light: true,
      external: false,
    },
    {
      title: "Just Weird",
      imageSrc: "/images/just_weird_thumbnail.png",
      href: "/synesthetic_mixes/just_weird/",
      light: true,
      external: false,
    },
  ]

  return (
    <div className="bookings-mosaic">
      <Mosaic items={mixes} />
    </div>
  )
}

export default PillsMixesMosaic
