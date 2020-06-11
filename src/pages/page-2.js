import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Test test test</h1>
    <p>Jennyyyyy look what I made! ~~</p>
    <Link to="/blogarticle2/">My passion project</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
