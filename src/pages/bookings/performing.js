import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import BlogHeader from "../../components/blogHeader"

import "./performing.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="performing" date="November 2nd, 2023" />
    <div id="performing_options">
      <div class="performing_column" id="DJing">
        <h2>DJing</h2>
        <h3>(Scrap the visuals)</h3>
      </div>
      <div class="performing_column highlighted">
        <h2>Synesthetic DJ Sets</h2>
        <h3>(Video-DJing)</h3>
      </div>
      <div class="performing_column" id="VJing">
        <h2>VJing</h2>
        <h3>(You bring the beats)</h3>
      </div>
    </div>
    <h2>Equipment</h2>
  </Layout>;
}

export default About