import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="A Blue Dwarf's Tale [Synesthesia #2]" />
    <h1>"A Blue Dwarf's Tale"</h1>
    <i>A musical space trip at the speed of psytrance.</i>
    <p>This project is in the works... Follow me on social media for updates!</p>
    <Link to="/">Go back to the homepage</Link> <br />
  </Layout>
)

export default SecondPage