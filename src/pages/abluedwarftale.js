import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./abluedwarfstale.scss"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      syn2poster: file(relativePath: { eq: "syn2_poster.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return <Layout>
    <BlogHeader ogimage="/asteroids.png" title="A Blue Dwarf's Tale [Synesthesia #2]" date="August 11, 2020" />
    <i>A mysterious, far away star will pull you through the parallel universe where music and space-time are entangled.</i>
    <p>This project is landing here soon. Follow on <a href="https://bit.ly/synwrks-facebook" target="_blank">Facebook</a>, <a href="https://bit.ly/synwrks-twitter" target="_blank">Twitter</a> or <a href="https://bit.ly/synwrks-instagram" target="_blank">Instagram</a> to stay tuned!</p>
    <Img className="movie-poster" fluid={data.syn2poster.childImageSharp.fluid}/>
    
  </Layout>;
}

export default SecondPage