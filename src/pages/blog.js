import React from "react"
import BlogHeader from "../components/BlogHeader"

import Layout from "../components/layout"

import "./index.scss"
import BlogContents from "../components/blogContents"

const IndexPage = () => {  
  return (
    <Layout>
        <BlogHeader ogimage="/home.png" title="All the ramblings"/>
        <BlogContents count={0} includeDescriptions={true}/>
    </Layout>
  )
}

export default IndexPage
