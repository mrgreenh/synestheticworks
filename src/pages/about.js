import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"

import "./about.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="About Synwrks" date="July 8th, 2023" />
    <p>Synwrks (short for Synesthetic Works) is a digital artist, DJ and music producer striving to bring more "synesthesia" to the dance floor and beyond.</p>
    <p>His DJing journey started back in his high school days, when he would animate student parties and birthdays through light and sound, frantically manipulating switches and faders to time together music, colors and smoke machines. It is during those performances he started dreaming of ways to maximize the expressive power of synergy between the senses.</p>
    <p>In the following 10+ years, while work and life events forced DJing into a pause, he kept spending cutouts of time building tools and processes to create visual experiences inspired by synesthesia. This ranged from composing original soundtracks for others, to creating 3D VR music videos that found enthusiastic viewers among the earliest "metaverse" adopters (one being included between the top "featured" media in Meta Quest 2 at its launch).</p>
    <p>Eventually, all the pieces came back together during the pandemic, through the latest iteration of this artistic research: procedurally visualized, hours-long DJ mixes that feel like sticking your head through a Stargate. It is at this point that the digital art found its live audiences through music events in San Francisco and "raid trains" on Twitch.</p>
    <p>Synwkrs is a resident DJ / VJ at the legendary Secret Psychedelica events (held in DNA Lounge, San Francisco), and part of the truly magical Joyride Express family (every Thursday on Twitch).</p>

  </Layout>;
}

export default About