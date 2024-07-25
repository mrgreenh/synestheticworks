import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import BlogHeader from "../../components/blogHeader"
import PillsMixesMosaic from "../bookings_components/PillsMixesMosaic"

import "../bookings_components/synesthetic_mixes.scss"

const Exploration = () => {
  const data = useStaticQuery(graphql`
    query {
      introspection: file(
        relativePath: { eq: "introspection_transparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exploration: file(relativePath: { eq: "exploration_transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      just_weird: file(relativePath: { eq: "just_weird_transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BlogHeader ogimage="/home.png" title="Mix: Exploration" />

      <a
        href="https://youtu.be/fICLKB0IfBo?si=tl2o0WCsQOacrX4h"
        title="Take it"
        target="_blank"
      >
        <Img fluid={data.exploration.childImageSharp.fluid} />
      </a>
      <PillsMixesMosaic />
      <h3 className="big-label">
        Check out the <Link to="/">Home</Link> for more 🚀
      </h3>
    </Layout>
  )
}

export default Exploration
