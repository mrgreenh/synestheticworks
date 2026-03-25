"use client"

import React from "react"
import ReactPlayer from "react-player"

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
