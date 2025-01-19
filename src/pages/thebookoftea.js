import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "./thebookoftea.scss"

const TheBookOfTeaPage = () => {
  return (
    <Layout>
      <SEO title="The Book of Tea - Coming Soon" />
      <div className="coming-soon-container">
        <h1>Coming Soon</h1>
        <p>
          Check back in on January 31st for the VR experience of "The Book of
          Tea"!
        </p>
        <p className="social-link">
          Follow me on <Link to="/links">social media</Link> for more art, music
          and updates
        </p>
      </div>
    </Layout>
  )
}

export default TheBookOfTeaPage
