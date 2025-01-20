import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHeader from "../components/blogHeader"
import FramedPlayer from "../components/FramedPlayer"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ShortsMosaic from "../components/mosaics/ShortsMosaic"
import { Link } from "gatsby"

import "../styles/vr_instructions_box.scss"
import "./thebookoftea.scss"

const TheBookOfTeaPage = () => {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false)

  return (
    <Layout>
      <SEO title="The Book of Tea - Coming Soon" />
      <BlogHeader
        ogimage="/thebookoftea.png"
        title="The Book of Tea [Synesthesia #4]"
        date="January 31, 2024"
      />
      <FramedPlayer
        controls={true}
        className="react-player"
        url="https://youtu.be/yGyv8UYKEZU"
        width="100%"
        height="100%"
      >
        <i>
          In this fourth installment of the Synesthesias, we'll explore the
          philosophy of tea through a VR journey.
        </i>{" "}
        <br />
        <AnchorLink
          to="/thebookoftea#vr_instructions"
          title="Instructions for VR viewing"
        >
          How to view VR version
        </AnchorLink>
      </FramedPlayer>

      <div className="instructions-box collapsible">
        <div
          className="header"
          onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
        >
          <span className={`arrow ${isInstructionsOpen ? "open" : ""}`}>▼</span>
          <h3>How to view in VR</h3>
          <span className="button-text">
            {isInstructionsOpen ? "Hide" : "View"} Instructions
          </span>
        </div>

        <div
          className={`collapsible-content ${isInstructionsOpen ? "open" : ""}`}
        >
          <a name="vr_instructions" />
          It's easy! Two ways really:
          <ul>
            <li>
              If you have a Meta Quest Headset, you can easily save it at this
              link, and find it in the "Saved" tab in Meta Quest TV:{" "}
              <a
                target="_blank"
                href="https://www.oculus.com/experiences/media/2931866863646525/"
                rel="noopener noreferrer"
              >
                Meta Quest TV Link
              </a>
              <ul>
                <li>
                  <strong>For best visual quality</strong>: click on the 3 dots
                  icon on the video's thumbnail, and select "Cache High
                  Quality".
                </li>
              </ul>
            </li>
            <li>
              If you have any other VR headset, you can watch it on YouTube VR,
              add it to a playlist to find it more easily:{" "}
              <a
                target="_blank"
                href="https://youtu.be/LiWqqaklWt4"
                rel="noopener noreferrer"
              >
                Youtube VR Link
              </a>
              <ul>
                <li>
                  <strong>For best visual quality</strong>: once you have opened
                  the video in the YouTube VR app, click on "Offline" button
                  (panel on the left) to download the video in high quality
                </li>
              </ul>
            </li>
          </ul>
          <p>
            This is a 180 3D video, so don't forget to look around. Use
            headphones if you can ;)
          </p>
        </div>
      </div>

      <div className="instructions-box">
        <h3>Listen to the Music</h3>
        <p>
          You can listen to the soundtrack on your preferred music streaming
          service here:{" "}
          <a
            target="_blank"
            href="https://distrokid.com/hyperfollow/synwrks/the-book-of-tea"
            rel="noopener noreferrer"
          >
            The Book of Tea - Music Release
          </a>
        </p>
      </div>

      <div className="article-text">
        <h3>Notes About the Process</h3>
        <p>
          In this 4th installment of the "synesthesias" we close the circle on
          an exploration begun back in 2016. This was the search for an artistic
          process aimed at sustainably expressing an experience of synesthesia
          intermingled with daydreaming. Just like all the previous ones, this
          one too can be watched as a flat video or as an immersive VR
          experience. The soundtrack is also available on all the major music
          streaming services.
        </p>

        <h4>On the Soundtrack</h4>
        <p>
          The Book of Tea is an actual book, written by Kakuzō Okakura and
          published in 1906. More than a century later, Clive Catterall recorded
          an{" "}
          <a
            href="https://librivox.org/the-book-of-tea-by-kakuzo-okakura-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            audiobook version
          </a>{" "}
          of it which I later found on Librivox, published through a Creative
          Commons license. The philosophical messages of the book struck a chord
          with me. Meanwhile, Clive Catterall's incredibly soothing voice,
          reminiscent of the many recordings by Alan Watts, just seemed to
          deserve a psytrance drop at the end of every sentence. I couldn't
          resist, and so I took note of many timestamps in the audiobook I felt
          would be nice to include, then narrowed down the selection to a few
          that I felt captured the experience of art that is so dear to me.
          Eventually I strung them together into the arrangement I hope you will
          enjoy listening to as much as I enjoyed making.
        </p>

        <p>
          Another note I would like to include is a huge thanks to Lost Memory
          (Fred Torres) for his amazing work on mastering this track. We crossed
          paths as he was performing right after my visual Dj set at Secret
          Psychedelica Aquarius 2023 and I'm grateful we stayed in touch since
          then to eventually work together on this.
        </p>

        <h4>On the Visual Experience</h4>
        <p>
          In order to explain the motivations behind this video, I think a recap
          is in order:
        </p>
        <ul>
          <li>
            <Link to="/synesthesia1/">Synesthesia #1</Link> was produced by
            exclusively using Blender and python scripting. One set of scripts
            was responsible of ingesting MIDI and wav files, and producing
            animation envelopes in response. Another set of scripts would read
            these animation envelopes and use them to procedurally populate a
            Blender scene frame by frame. Animation envelopes were inspected and
            previewed via matplotlib.
          </li>
          <li>
            <Link to="/abluedwarftale/">Synesthesia #2</Link>: this one was
            produced largely through the same process as its predecessor. There
            was however one major improvement made by plugging the first set of
            scripts into a GUI built in Unreal Engine, which let me build and
            preview the animation envelopes through a visual flow (which also
            synced them with the soundtrack). The scene would still be built
            procedurally in Blender via python scripts reading said envelopes.
          </li>
          <li>
            <Link to="/firstflight/">Synesthesia #3</Link>: the third
            installment involved a major departure from the original process. In
            this instance, seamless loops are made and rendered in blender
            completely independently from any song. This allowed me to begin
            exploring intermediate levels of detail in the representation of
            sounds, while reusing visual material. Lower levels of detail can
            more easily visualize music tracks for which the MIDI data or stems
            are not available, and the reusable visual material can bend to
            visualize different tracks very rapidly. I ended up building a
            second GUI responsible for reading animation envelopes (produced in
            the same way as in Synesthesia #2) and using them to blend multiple
            layers of multiple animated loops, as well as applying effects. The
            two GUIs together effectively form a procedural video editor which I
            then used both for visualizing First Flight (with a higher level of
            "synesthetic detail") as well as entire DJ sets (with a lower level
            of "synesthetic detail") which I then started performing on Twitch,
            YouTube and at IRL events.
          </li>
        </ul>

        <p>
          While I was satisfied with the resulting video for First Flight, I
          felt it was missing a very important element that was present in the
          previous two videos. While it did have the fly-through landscapes with
          elements that moved to the music, it now completely lacked any visual
          representation that actually resembled the effects of synesthesia. For
          this reason I set out to make the 4th video, in an attempt to explore
          ways to bring those elements into this new, less visually flexible
          process.
        </p>

        <p>
          I started introducing abstract-looking elements in the loops I was
          making, or even building scenes around this idea, like
          holograms-projecting rides through a futuristic Egyptian landscape.
          These holograms would be grounded in the environments they are
          rendered in (where their light can be observed bouncing on the statues
          and lighting up the walls), but they could also be extrapolated from
          their context and used as abstract overlays in any other loop. They
          could then be used to inject representations of synesthesia throughout
          any music video, regardless of the 3D environment being used.
        </p>

        <p>
          This cross-pollination between different environments would of course
          bring some potential issues. The composition of the image might not
          always work (not all the environments have the horizon centered at the
          same height, or the same tilt in the camera, etc…), and the VR version
          of the video might have to fight with conflicting stereoscopies
          (stereo-clipping) or just a break of the immersion due to the higher
          resolution of the medium highlighting the disembodied nature of the
          holograms in environments where they don't belong (after all,{" "}
          <a
            href="https://www.youtube.com/watch?v=bQECSInWVPY"
            target="_blank"
            rel="noopener noreferrer"
          >
            somebody once did describe VR
          </a>{" "}
          as "headphones for video").
        </p>

        <p>
          Did all these elements eventually coalesce like Lego bricks into a new
          Synesthetic dream? Or did they clash into a cacophony of lights? I'll
          let you decide, I enjoyed the journey either way.
        </p>

        <p style={{ textAlign: "right" }}>- Synwrks</p>
      </div>
      <hr />
      <ShortsMosaic />
    </Layout>
  )
}

export default TheBookOfTeaPage
