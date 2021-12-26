import React from "react"
import ReactPlayer from "react-player"

import "./player.scss"

export default (props) => <div className='player-wrapper'>
    <div className="placeholder">
        Loading Player...
    </div>
    <ReactPlayer
        {...props}
        className='react-player'
    />
</div>    
