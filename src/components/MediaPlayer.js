import React from "react"
import ReactPlayer from "react-player"

import "./player.scss"

export default (props) => <div className='player-wrapper'>
    <div className="placeholder">
        Loading Player...
    </div>
    <ReactPlayer
        controls={false}
        className='react-player'
        url={props.url}
        width='100%'
        height="100%"
        loop={true}
        playing={true}
        muted={true}
    />
</div>    
