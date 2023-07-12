import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const NFTsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
        fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
        }
        }
    },
    facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
        fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
        }
        }
    },
    spotify: file(relativePath: { eq: "spotify.png" }) {
        childImageSharp {
        fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
        }
        }
    },
    soundcloud: file(relativePath: { eq: "soundcloud.png" }) {
      childImageSharp {
      fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
      }
      }
    },
    about: file(relativePath: { eq: "synwrks_profile_pic_no_frills.png" }) {
      childImageSharp {
      fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
      }
      }
    },
    twitch: file(relativePath: { eq: "twitch.png" }) {
      childImageSharp {
      fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
      }
      }
    },
  }
  `)

  const shorts =[
    {
      title: "About",
      imageData: data.about,
      href: "/about/",
      light: false,
      className: ["website-logo", "nopadding"]
    },
    {
      title: "Events >>",
      imageData: data.twitch,
      href: "https://www.twitch.tv/synwrks/schedule",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageData: data.instagram,
      href: "https://www.instagram.com/synwrks/",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageData: data.facebook,
      href: "https://bit.ly/synwrks-facebook",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      title: "Tracks >>",
      imageData: data.soundcloud,
      href: "https://soundcloud.com/synwrks",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageData: data.spotify,
      href: "https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK?si=yazckQCFSemWAT1aoIpLrQ",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    
  ]

  return <Mosaic showTitles={true} items={shorts} thumbnailSize="small"/>
};

export default NFTsMosaic;