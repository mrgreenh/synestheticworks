import React from 'react'
import MediaPlayer from './MediaPlayer'

export default (props) => <div className="framed">
    <MediaPlayer {...props}/>
    <div className="caption">
        {props.children}
    </div>
</div>;