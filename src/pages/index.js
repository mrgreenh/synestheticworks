import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"
import ShortsMosaic from "../components/mosaics/ShortsMosaic"
import MixesMosaic from "../components/mosaics/MixesMosaic"
import NFTsMosaic from "../components/mosaics/NFTsMosaic"
import MiscMosaic from "../components/mosaics/MiscMosaic"
import BlogContents from "../components/blogContents"

const IndexPage = () => {  
  return (
    <Layout>
        <SEO title={"Home"} image={"/home.png"}/>
        <div className="home-mosaic-container">
          <MixesMosaic/>
          <h2 className={"inset"}>Visual DJ Mixes</h2>
        </div>
        <div className="home-mosaic-container">
          <MiscMosaic/>
        </div>
        <div className="home-mosaic-container">
          <ShortsMosaic/>
          <h2 className={"inset"}>VR & Music Videos</h2>
        </div>
        <div className="home-mosaic-container">
          <NFTsMosaic/>
          <h2 className={"inset"}>Places</h2>
        </div>
        <div className="home-mosaic-container">
          <h2>Blog</h2>
        </div>
        <BlogContents count={2} includeDescriptions={true}/>
    </Layout>
  )
}

export default IndexPage
