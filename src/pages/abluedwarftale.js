import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactPlayer from "react-player"

import "./abluedwarfstale.scss"
import "./player.scss"

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
      asteroids: file(relativePath: { eq: "asteroid-field-cropped.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      replicator: file(relativePath: { eq: "replicator.png" }) {
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
    <div className="laurels">
      <img src={"/laurels/indiex.png"}/>
      <img src={"/laurels/californiainternationalshorts.png"}/>
      <img src={"/laurels/indieshorts.png"}/>
    </div>
    <div style={{height: 200, width:"100%", position: "relative"}}>
      <ReactPlayer
          className='react-player'
          style={{marginHorizontal: "auto"}}
          config={{show_artwork: false}}
          url='https://soundcloud.com/user-532945997/synesthesia-2-a-blue-dwarfs-tale-soundtrack'
          width='100%'
          height="100"
          />
    </div>
    <Img className={"movie-screenshot"} fluid={data.replicator.childImageSharp.fluid}/>
    <Img className={"movie-screenshot"} fluid={data.asteroids.childImageSharp.fluid}/>
    <Img className="movie-poster" fluid={data.syn2poster.childImageSharp.fluid}/>
    
  </Layout>;
}

export default SecondPage