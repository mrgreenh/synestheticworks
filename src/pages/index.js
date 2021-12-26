import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"
import ShortsMosaic from "../components/mosaics/ShortsMosaic"
import MixesMosaic from "../components/mosaics/MixesMosaic"
import NFTsMosaic from "../components/mosaics/NFTsMosaic"
import BlogContents from "../components/blogContents"

const IndexPage = () => {  
  return (
    <Layout>
        <SEO title={"Home"} image={"/home.png"}/>
        <h2>Shorts & VR</h2>
        <ShortsMosaic/>
        <h2>Visual Mixes</h2>
        <MixesMosaic/>
        {/* <h2>NFTs</h2>
        <NFTsMosaic/> */}
        <h2>Blog</h2>
        <BlogContents count={2} includeDescriptions={false}/>
    </Layout>
  )
}

export default IndexPage
