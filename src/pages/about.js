import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"

import "./about.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="About Synwrks" date="July 8th, 2023" />
    <p>I'm a digital artist, DJ, and music producer dedicated to extending DJing and music production to the visual realm by mimicking the effects of <a href="https://en.wikipedia.org/wiki/Synesthesia" target="_blank" rel="noopener noreferrer">"synesthesia"</a>. I'm based in San Francisco (California).</p>
    
    <p>A few years ago I began working on the Synesthetic Works project, combining my passion for electronic music, digital arts and technology together. This later got abbreviated into my art name "Synwrks", as I began to perform live VJ and DJ sets at various events in the Bay Area.</p>

    <p>My works include original music, VR music videos, looping visuals and "synesthetic" DJ sets (hours-long DJ sets that are fully visualized to precisely match the beats and feeling of each track). I create through abundant use of software prototypes and procedurally re-combining my work, which mostly involves 3D animation with dashes of generative AI here and there.</p>

    <p>I am a resident DJ and VJ at the psytrance-focused monthly <i>Secret Psychedelica</i> parties held in DNA Lounge, an iconic San Francisco venue. I also perform at other events as the occasions present themselves, ranging from block parties and festivals like How Weird Street Faire or Neotropolis to lovely gatherings in nature like Bare Burn. Additionally, you can find me streaming every week on Twitch raid trains together with other artists.</p>

    <p>If you'd like to see me perform in a venue or event near you, check out the <Link to="/bookings">Bookings</Link> page for more information!</p>
  </Layout>;
}

export default About