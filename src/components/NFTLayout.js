import React from 'react'
import BlogHeader from "../components/blogHeader"
import NFTsMosaic from './mosaics/NFTsMosaic'

import './NFTLayout.scss'

export default (props) => {
    return <>
        <BlogHeader {...props} />
        {props.children}
        
        <div className="footer-text">
            <hr/>
            See also:
        </div>
        <NFTsMosaic/>
    </>
}