import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Some title" />
    <h1>Jenny is the...</h1>
    <p>Cutest ;) ~~</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage