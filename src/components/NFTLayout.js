"use client"

import React from 'react'
import BlogHeader from "./blogHeader"
import NFTsMosaic from './mosaics/NFTsMosaic'

const NFTLayout = (props) => {
    return <>
        <BlogHeader {...props} />
        <div className="nft-layout">
        {props.children}
        </div>

        <div className="footer-text">
            <hr/>
            See also
        </div>
        <NFTsMosaic/>
    </>
}

export default NFTLayout
