"use client"

import React from "react"
import Mosaic from "../mosaic"

const ShortsMosaic = () => {
  const shorts = [
    {
      title: "The Book of Tea",
      imageSrc: "/images/thebookoftea.jpg",
      href: "/thebookoftea/",
    },
    {
      title: "First Flight",
      imageSrc: "/images/promenade.png",
      href: "/firstflight/",
    },
    {
      title: "A Blue Dwarf's Tale",
      imageSrc: "/images/asteroid-field-cropped.png",
      href: "/abluedwarftale/",
      light: true,
    },
    {
      title: "Synesthesia #1",
      imageSrc: "/images/synesthesia_cropped.png",
      href: "/synesthesia1/",
    },
  ]

  return <Mosaic items={shorts} />
}

export default ShortsMosaic
