import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"

import "./about.scss"

const About = () => {
  return <Layout>
    <BlogHeader ogimage="/home.png" title="About Synwrks" date="July 8th, 2023" />
    <p>Hello! I am Synwrks (short for Synesthetic Works): a digital artist, DJ, and music producer dedicated to bringing the experience of "synesthesia" to the dance floor and beyond.</p>
    <p>My journey as a DJ began in southern Italy in the early 2000s. Back then, I used to perform at student parties and birthdays through a (fully manual) combination of lights and sound. While carefully synchronizing music, colors, and smoke machines I started fantasizing about better ways to maximize the expressive potential of synergy between the senses.</p>
    <p>Over the next 10+ years, work and life events forced me to put my DJing on hold. I however seized any available moment to build tools and develop processes for creating visual experiences inspired by synesthesia. This ranged from composing original soundtracks for shorts and ads, to crafting 3D VR music videos that garnered enthusiastic viewers among the early adopters of immersive media. For example, one of my videos was featured in Oculus Quest 2 as "demo content" when the headset first launched!</p>
    <p>During the pandemic I embarked on the latest phase of my artistic research: crafting procedurally visualized DJ mixes that transport viewers as if sticking their heads through a Stargate. It was at this point that my digital art found live audiences through music events in San Francisco and exciting raid trains on Twitch.</p>
    <p>In terms of regular engagements, I am proud to be a resident DJ and VJ at the psytrance-focused <i>Secret Psychedelica</i> parties held in DNA Lounge, an iconic San Francisco venue. Additionally, I am grateful to be member of the <i>Joyride Express</i> family, a group of legendary DJs hosting shows every Thursday on Twitch. I often stream psytrance or house mixes on other raid trains too, one ring in chains of talended artists that constantly inspire me, like the hardcore-sounding <i>OMFG!</i>, or TrueNorthRadio's <i>Fundamental</i> and <i>Momentum</i>.</p>
  </Layout>;
}

export default About