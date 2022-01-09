import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const MixesMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
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
  }
  `)

  const mixes =[
    {
      title: "Psytrance #1",
      imageData: data.psytrance1,
      href: "https://youtu.be/DUwFmC_DLdw",
      external: true,
      light: true,
    },
    {
      title: "House #1",
      imageData: data.journeyWithin,
      href: "https://youtu.be/LL4K5gzHX3U",
      external: true,
      light: true,
    },
    {
      title: "House #2",
      imageData: data.boosterShot,
      href: "https://youtu.be/pd1PbuJSums",
      external: true,
      light: true,
    },
  ]

  return <Mosaic items={mixes}/>
};

export default MixesMosaic;