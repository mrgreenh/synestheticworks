import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const MixesMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    secretPsychedelica: file(relativePath: { eq: "secret_psychedelica_2023_draft.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    fridayGlide: file(relativePath: { eq: "friday_glide.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
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

  const mixes =[
    {
      title: "Secret Psychedelica",
      imageData: data.secretPsychedelica,
      href: "https://www.youtube.com/live/TwQ5kF9Hfeo?feature=share",
      external: true,
      light: true,
    },
    {
      title: "Friday Glide",
      imageData: data.fridayGlide,
      href: "https://www.youtube.com/live/KM5AtFCFBvU?feature=share",
      external: true,
      light: true,
    },
    {
      title: "Quick Spacewalk",
      imageData: data.quickSpacewalk,
      href: "https://youtu.be/geIABX7JHSI",
      external: true,
      light: true,
    },
    {
      title: "Psytrance #1",
      imageData: data.psytrance1,
      href: "https://youtu.be/DUwFmC_DLdw",
      external: true,
      light: true,
    },
    {
      title: "House #2",
      imageData: data.journeyWithin,
      href: "https://youtu.be/pd1PbuJSums",
      external: true,
      light: true,
    },
  ]

  return <Mosaic items={mixes} thumbnailSize="small"/>
};

export default MixesMosaic;