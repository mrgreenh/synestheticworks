import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"

import "./about.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="About Synwrks" date="July 8th, 2023" />
    <p>I'm a digital artist, DJ, and music producer dedicated to bringing the experience of "synesthesia" to the dance floor and beyond. I'm based in San Francisco (California).</p>
    <p>I have been experimenting with electronic music production for as long as I can remember, and my experiences with DJing go back to many years ago, when I was a high school student in Italy (my country of origin).</p>
    
    <p>It is more recently however (about 2016) that I embarked in the Synesthetic Works project, combining my passion for music with my love for visual arts and technology, with the aim to represent the experience of <a href="https://en.wikipedia.org/wiki/Synesthesia" target="_blank" rel="noopener noreferrer">synesthesia</a>. This later got abbreviated into my art name "Synwrks", as I began to perform live VJ and DJ sets at various events in the Bay Area.</p>

    <p>My works include original music, VR music videos, looping visuals and "synesthetic" DJ sets (hours-long DJ sets that are fully visualized to precisely match the beats and feeling of each track). I create through abundant use of software prototypes and procedural techniques, mostly involving 3D animation but lately also including dashes of generative AI.</p>

    <p>I am a resident DJ and VJ at the psytrance-focused monthly <i>Secret Psychedelica</i> parties held in DNA Lounge, an iconic San Francisco venue. Additionally, you can find me streaming every week on Twitch raid trains like the <i>Joyride Express</i> (as resident) or PsyLife, OMFG!, Fundamental, Momentum and others. I also perform at other events as the occasions present themselves, ranging from lovely gatherings in the nature like Bare Burn to bigger city parties like How Weird Street Faire.</p>

    <p>If you'd like to see me perform in a venue or event near you, check out the <Link to="/bookings">Bookings</Link> page for more information!</p>
  </Layout>;
}

export default About