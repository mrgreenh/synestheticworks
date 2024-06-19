import React from 'react';
import Mosaic from '../../components/mosaic';
import { useStaticQuery, graphql } from "gatsby"

const BookingsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    youtube: file(relativePath: { eq: "youtube_thumb.png" }) {
      childImageSharp {
      fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
      }
      }
    },
    twitch: file(relativePath: { eq: "twitch_thumb.png" }) {
      childImageSharp {
      fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
      }
      }
    },
    journeyWithin: file(relativePath: { eq: "journey_within_mix.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    boosterShot: file(relativePath: { eq: "booster_shot_mix.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psytrance1: file(relativePath: { eq: "psytrance_1_mix.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quickSpacewalk: file(relativePath: { eq: "a_quick_spacewalk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portalpeaks: file(relativePath: { eq: "nft_thumbs/portal_peaks_daytime.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

  const YOUTUBE_PLAYLIST_LINK = "https://youtube.com/playlist?list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7"

  const mixes =[
    {
      title: "Meditative House Demo",
      imageData: data.portalpeaks,
      href: "https://www.youtube.com/watch?v=2FIGPF3Mg08&list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7&index=8",
      light: true,
      external: true,
    },
    {
      title: "Hyperdrive Psytrance Demo",
      imageData: data.journeyWithin,
      href: "https://youtu.be/fICLKB0IfBo?si=uQRpuUP7DQm2sNLu",
      light: true,
      external: true,
    },
  ]

  return <div className="bookings-mosaic">
    <Mosaic items={mixes}/>
    <h3 className="choose-vibe big-label">⬇ Pick a vibe ⬇</h3>
  </div>
};

export default BookingsMosaic;