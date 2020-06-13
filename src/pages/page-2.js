import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <BlogHeader title="Test test test"/>
    <p>Jennyyyyy look what I made! ~~</p>
    <Link to="/blogarticle2/">My passion project</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
