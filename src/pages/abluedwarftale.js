import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FramedPlayer from "../components/FramedPlayer"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "./abluedwarfstale.scss"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      otv_syn2_instructions: file(relativePath: { eq: "otv_syn2_instructions_ink_cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return <Layout>
    <BlogHeader ogimage="/asteroids.png" title="A Blue Dwarf's Tale [Synesthesia #2]" date="August 11, 2020" />
    <FramedPlayer
      controls={true}
      className='react-player'
      url='https://youtu.be/u6u-NTJGmqs'
      width='100%'
      height="100%"
    >
      <i>A mysterious, far away star will pull you through the parallel universe where music and space-time are entangled.</i> <br/>
      <AnchorLink to="/abluedwarftale#vr_instructions" title="Instructions for VR viewing">How to view in VR</AnchorLink>
    </FramedPlayer>
    <div className="laurels">
      <img src={"/laurels/indiex.png"}/>
      <img src={"/laurels/indieshorts.png"}/>
      <img src={"/laurels/jelly.png"}/>
      <img src={"/laurels/californiainternationalshorts.png"}/>
      <div className=".separator"/>
      <img src={"/laurels/sanfranindependentshorts.png"}/>
      <img src={"/laurels/socal.png"}/>
      <img src={"/laurels/goldenstate.png"}/>
    </div>
    <a name="vr_instructions"/>
    <h3>How to view in VR</h3>
    <p><b>This looks even better in VR!</b> If you have a headset, there are a couple ways to watch:
    <ul>
      <li>Youtube (best audio-video sync): <a href="https://bit.ly/2GZUtJa" title="Youtube VR video" target="_blank">save this video</a> to a playlist, then find it in your headset on the Youtube VR app!</li>
      <li>Oculus TV (best visual quality): <a href="https://bit.ly/synesthesia2" title="Oculus VR video" target="_blank">save this video</a>, then find it in your Oculus headset (Go, Quest) > Oculus TV > Saved</li>
      <ul>
        <li>For the <b>best visual quality</b>, when you find the video in the headset, tap on the 3 dots and select "Cache High Quality". Allow time for the download > enjoy!</li>
        <li><Img fluid={data.otv_syn2_instructions.childImageSharp.fluid}/></li>
      </ul>
    </ul>
    </p>
    <p>
      This is a 180 3D video, so don't forget to look around. Use headphones if you can ;) 
    </p>
    <p>Check out the <a target="_blank" href="https://bit.ly/synwrks-soundcloud">SynestheticWorks Soundcloud</a> where you can find the original soundtrack, or the <a target="_blank" href="https://bit.ly/synwrks-instagram">Instragram</a> and <a target="_blank" href="https://bit.ly/synwrks-facebook">Facebook</a> pages where you can find updates, additional artwork, and perhaps more synesthesias.</p>
    <i>- Yours Truly</i>
  </Layout>;
}

export default SecondPage