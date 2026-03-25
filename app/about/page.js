import Layout from "../../src/components/layout"
import BlogHeader from "../../src/components/blogHeader"

export const metadata = {
  title: "About Synwrks",
  openGraph: {
    images: [{ url: "https://www.synestheticworks.com/home.png" }],
  },
}

export default function About() {
  return (
    <Layout>
      <BlogHeader
        ogimage="/home.png"
        title="About Synwrks"
        date="July 8th, 2023"
      />
      <p>
        I&apos;m a digital artist, DJ, and music producer dedicated to extending
        DJing and music production to the visual realm by mimicking the effects
        of{" "}
        <a
          href="https://en.wikipedia.org/wiki/Synesthesia"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;synesthesia&quot;
        </a>
        . I&apos;m based in San Francisco (California).
      </p>

      <p>
        A few years ago I began working on the Synesthetic Works project,
        combining my passion for electronic music, digital arts and technology
        together. This later got abbreviated into my art name
        &quot;Synwrks&quot;, as I began to perform live VJ and DJ sets at
        various events in the Bay Area.
      </p>

      <p>
        My works include original music, VR music videos, looping visuals and
        &quot;synesthetic&quot; DJ sets (hours-long DJ sets that are fully
        visualized to precisely match the beats and feeling of each track). I
        create through abundant use of software prototypes and procedurally
        re-combining my work, which mostly involves 3D animation with dashes of
        generative AI here and there. An explanation of my process can be found
        in{" "}
        <a
          href="https://youtu.be/hgfgBuqa5Mg?si=_ZNKobENosMsLffp"
          target="_blank"
          rel="noopener noreferrer"
        >
          this video
        </a>
        . I&apos;m also the developer behind{" "}
        <a href="https://vizloom.com" target="_blank" rel="noopener noreferrer">
          Vizloom
        </a>
        , a procedural video editor for DJs, producers and visual artists and
        integral part of my workflow.
      </p>

      <p>
        I am a resident DJ and VJ at the psytrance-focused monthly Secret
        Psychedelica parties held in DNA Lounge, an iconic San Francisco venue.
        I also perform at other events as the occasions present themselves,
        ranging from city parties and festivals like How Weird Street Faire,
        Acid Rain or Neotropolis to lovely gatherings in nature like Bare Burn.
        Additionally, you can find me streaming every week on Twitch raid trains
        together with other artists.
      </p>

      <p>
        For bookings:{" "}
        <a href="mailto:info@synwrks.com?subject=Booking inquiry">
          info@synwrks.com
        </a>
      </p>
    </Layout>
  )
}
