"use client"

import React from "react"
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const MediaPlayer = (props) => <div className='player-wrapper'>
    <div className="placeholder">
        Loading Player...
    </div>
    <ReactPlayer
        {...props}
        className='react-player'
    />
</div>

export default MediaPlayer
