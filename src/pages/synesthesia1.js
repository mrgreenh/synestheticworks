import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import ReactPlayer from "react-player"

import "./player.scss"

const SecondPage = () => (
  <Layout>
    <BlogHeader title="Synesthesia #1" date="April 2, 2018"/>
    <h4>What does music "look" like?</h4>
    <i>Synesthesia #1 can be watched as a normal video, or it can be experienced in a VR headset. You'll find the normal video below. If instead you'd like to try it in VR, <a href="https://bit.ly/3gJTWYz" target="_blank">follow this link</a> to the VR video on Youtube. From there you can bookmark it and then reach it using the Youtube VR app on your headset of choice! In the 360 3D video, you will see the visualization unfold all around you. </i>
    <div className='player-wrapper'>
      <div className="placeholder">
        Loading Player...
      </div>
      <ReactPlayer
        controls={true}
        className='react-player'
        url='https://youtu.be/hwgDUP6zzMk'
        width='100%'
        height="100%"
        />
    </div>
    <p>Synesthesia #1 is the first video of this kind I tried to make. It tries to visualize Drum and Bass music, which in my mind always felt like an endless flow of particles, explosions, vibrating shapes crashing into waves of energy.</p>
    <p>It was interesting to discover how pure imagination would come to terms with the constraints of a "real" three-dimensional space. I always imagined the bass to be coming from deep below, and being somewhat all-enveloping; and yet here we have the waves of the kick already occupying that space: where will the bass end up appearing? The final result is slightly distorted, and yet so much more detailed, than any Drum and Bass track I've "seen" before. However at the same time, it is also not conveying as well the sense of energy flowing through these shapes.</p>
    <p>I've been asked before "what does the anthropomorphic piano represent"? It's difficult to express, as it represents a collection of emotions. This is what I love about "bedroom productions": it's just you, and the clay, and your very own visceral feelings. This being the first video I made out of and about music itself, I wanted there to be a representation of my relationship with that art form.</p>
    <p>For the technicalities involved in the creation of this video, I'll defer to posts I'll be writing in <Link to="/">the blog</Link>.</p>
    <p>Check out the <a target="_blank" href="https://bit.ly/synwrks-soundcloud">SynestheticWorks Soundcloud</a> where you can find the original soundtrack, or the <a target="_blank" href="https://bit.ly/synwrks-instagram">Instragram</a> and <a target="_blank" href="https://bit.ly/synwrks-facebook">Facebook</a> pages where you can find additional artwork, and perhaps more synesthesias.</p>
    <i>- Carlo</i>
  </Layout>
)

export default SecondPage
