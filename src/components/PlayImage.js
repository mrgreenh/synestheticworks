import React from "react"
import Image from "next-image-export-optimizer"

const PlayImage = () => {
  return <span className="play-image"><Image src="/images/play_button.png" alt="Play" width={150} height={150}/></span>
}

export default PlayImage
