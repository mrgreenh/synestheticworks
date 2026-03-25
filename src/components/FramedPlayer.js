"use client"

import React from 'react'
import MediaPlayer from './MediaPlayer'

const FramedPlayer = (props) => <div className="framed">
    <MediaPlayer {...props}/>
    <div className="caption">
        {props.children}
    </div>
</div>

export default FramedPlayer
