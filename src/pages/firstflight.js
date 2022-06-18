import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FramedPlayer from "../components/FramedPlayer"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ShortsMosaic from '../components/mosaics/ShortsMosaic'

import "./firstflight.scss"

const ThirdPage = () => {
  return <Layout>
    <BlogHeader ogimage="/promenade.png" title="First Flight [Synesthesia #3]" date="June 11, 2022" />
    <FramedPlayer
      controls={true}
      className='react-player'
      url='https://youtu.be/iKHyPRR26DA'
      width='100%'
      height="100%"
    >
      <i>In this third installment of the Synesthesias, we’ll glide on the musical strings weaving the kaleidoscope of nature.</i> <br/>
      <AnchorLink to="/firstflight#vr_instructions" title="Instructions for VR viewing">How to view VR version</AnchorLink>
    </FramedPlayer>

    <a name="vr_instructions"/>
    <h3>How to view in VR</h3>
    It's easy! Two ways really:
    <ul>
      <li>If you have an Oculus Quest Headset, you can easily save it at this link, and find it in the "Saved" tab in Oculus TV: <a target="_blank" href="https://www.oculus.com/experiences/media/519477833195639/">Oculus TV Link</a></li>
      <li>If you have... well any headset really (I think?) then you can watch it on YouTube VR, add it to a playlist to find it more easily: <a target="_blank" href="https://youtu.be/9sl8W2wsNPs">Youtube VR Link</a></li>
    </ul>
    <p>
      This is a 180 3D video, so don't forget to look around. Use headphones if you can ;) 
    </p>
    <h3>Notes About the Process</h3>
    <p>This video is quite a departure from the previous two: while those evolved gradually through some sort of narrative, this one looks more like a "reel" collecting various independent works implementing common aesthetic rules. This is the result of a choice to invest more towards the "process" than the ideal characteristics of any specific final result. At the same time the same process leverages modularity to produce a wider number of diverse outcomes (like the visual DJ mixes, also posted on this site).</p>

    <p>In previous videos a large amount of effort would go towards scripting the 3D rendering software itself to produce a very specific journey for a very specific song. In this new process instead, the 3D renderings aim at capturing the array of feelings evoked by the music genre at large, while following some common rules on style (e.g. forward-scrolling sci-fi landscapes), format (seamless loops), implementation (how to divide composable layers) etc... It then recycles the same software prototype used for the previous Synesthesias to translate MIDI and waveforms into animation envelopes (let's call this "Synesthetizer").</p>

    <p>The new software component prototyped for this process is an application that interfaces with all the elements mentioned above, and presents them through a simple GUI (let's call this "Composer"). In fact, this video hasn't been made with any commercial video editor. Both the "flat" and the VR versions of First Flight are the direct output of this prototype. Both the Composer and the Synesthetizer can also work together as a batch video creation tool (for creating the visuals used in the DJ mixes). Finally, one very useful functionality is offered by not grounding a project on settings like resolution or aspect ratio: the same project outputs both the "flat" and the VR renderings, just by flipping a couple switches.</p>

    <p>The surprising (and hoped for) result has been the malleability with which these diverse inputs (flat loops, VR loops, DJing songs library, personal music productions) can be intertwined like lego bricks, to produce the visual DJ mixes, the synesthetic journeys, and more things yet to try. The fulfilling aspect of this isn't necessarily the quality of every single final output, but rather the range of what can be visualized (low-input data granularity / long duration on one side, high input data granularity / short duration on the other) and the ease with which it can be done. In addition to that, the various aspects of the creative process are set free to evolve independently: the 3D landscapes can aim specifically at visual impact, while the electronic music track can similarly be built around what's best for the song. In the end, a melancholic opening will find a subdued landscape to go with, and a high-energy drop will find a flashing geometry to follow its beat.</p>

    <p>In the end this process goes a long way towards finding "flow" in each of its individual steps, while obtaining a "good enough" range of results in the end. As for everything, it's the journey that matters. Speaking of journeys, I hope you'll enjoy this one.</p>

    <p>Check out the <a target="_blank" href="https://soundcloud.com/synwrks">SynestheticWorks Soundcloud</a> where you can find the original soundtrack, or the <a target="_blank" href="https://www.instagram.com/synwrks/">Instagram</a> and <a target="_blank" href="https://bit.ly/synwrks-facebook">Facebook</a> pages where you can find updates, additional artwork, and perhaps more synesthesias.</p>
    <span style={{fontStyle: "italic"}}>- C</span>
    <hr/>
    <ShortsMosaic/>
  </Layout>;
}

export default ThirdPage