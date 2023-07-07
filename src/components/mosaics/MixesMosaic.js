import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const MixesMosaic = () => {
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
  }
  `)

  const YOUTUBE_PLAYLIST_LINK = "blablabla"

  const mixes =[
    {
      title: "Live!",
      imageData: data.twitch,
      href: "https://www.twitch.tv/synwrks",
      external: true,
      light: false,
    },
    {
      title: "Recordings >>>",
      imageData: data.youtube,
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: false,
    },
    {
      imageData: data.journeyWithin,
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: true,
    },
    {
      imageData: data.psytrance1,
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: true,
    },
    {
      imageData: data.quickSpacewalk,
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: true,
    },
  ]

  return <Mosaic items={mixes} thumbnailSize="small"/>
};

export default MixesMosaic;