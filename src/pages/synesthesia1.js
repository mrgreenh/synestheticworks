import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import ReactPlayer from "react-player"

import "./player.scss"

const SecondPage = () => (
  <Layout>
    <div className='player-wrapper'>
      <div className="placeholder">
        Loading Player...
      </div>
      <ReactPlayer
        controls={true}
        className='react-player'
        url='https://www.youtube.com/watch?v=zB7PE4zngq0'
        width='100%'
        height="100%"
        />
    </div>
    <p>This is the first of what I hope will be many similar projects.<br/>
    I “hope” because then you know, life happens, or laziness, or carpal tunnel etc... So I’m thankful already I could get the bandwidth and peace of mind necessary to work on this first one.</p>
    <p>The idea is: augment the experience of producing music, by adding a compelling visual dimension to it. Such visual dimension is supposed to be engaging and fully expressive (not having to compromise too much in terms of visual quality/realism/abstraction) and is enabled by the data typically available to electronic music producers (MIDI + audio + automations).<br/>
    This first project itself had the objective of paving a workflow that would make it possible to produce this kind of content single-handedly, on a regular basis (2-3 months cycles?), thus maintaining the personal nature of “bedroom music production”.</p>
  </Layout>
)

export default SecondPage
