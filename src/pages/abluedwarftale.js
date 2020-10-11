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
    <p><i>A mysterious, far away star will pull you through the parallel universe where music and space-time are entangled.</i></p>
    <div className='player-wrapper'>
      <div className="placeholder">
        Loading Player...
      </div>
      <ReactPlayer
        controls={true}
        className='react-player'
        url='https://youtu.be/u6u-NTJGmqs'
        width='100%'
        height="100%"
        />
    </div>    
    <div className="laurels">
      <img src={"/laurels/indiex.png"}/>
      <img src={"/laurels/californiainternationalshorts.png"}/>
      <img src={"/laurels/indieshorts.png"}/>
      <div className=".separator"/>
      <img src={"/laurels/sanfranindependentshorts.png"}/>
      <img src={"/laurels/socal.png"}/>
    </div>
    <p><b>This looks even better in VR!</b> If you have a headset, there are a couple ways to watch:
    <ul>
      <li>Youtube: <a href="https://bit.ly/2GZUtJa" title="Youtube VR video" target="_blank">save this video</a> to a playlist, then find it in your headset on the Youtube VR app!</li>
      <li>Oculus TV: <a href="https://bit.ly/synesthesia2" title="Oculus VR video" target="_blank">save this video</a>, then find it in your Oculus headset (Go, Quest) on the Oculus TV app!</li>
    </ul>
    </p>
    <p>
      This is a 180 3D video, so don't forget to look around. Use headphones if you can ;) 
    </p>
    <p>Check out the <a target="_blank" href="https://bit.ly/synwrks-soundcloud">SynestheticWorks Soundcloud</a> where you can find the original soundtrack, or the <a target="_blank" href="https://bit.ly/synwrks-instagram">Instragram</a> and <a target="_blank" href="https://bit.ly/synwrks-facebook">Facebook</a> pages where you can find updates, additional artwork, and perhaps more synesthesias.</p>
    <i>- Carlo</i>
    {/* <Img className={"movie-screenshot"} fluid={data.replicator.childImageSharp.fluid}/>
    <Img className={"movie-screenshot"} fluid={data.asteroids.childImageSharp.fluid}/>
    <Img className="movie-poster" fluid={data.syn2poster.childImageSharp.fluid}/> */}
  </Layout>;
}

export default SecondPage