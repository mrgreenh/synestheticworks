import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const ShortsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    asteroidsFieldCropped: file(relativePath: { eq: "asteroid-field-cropped.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    synesthesiaCropped: file(relativePath: { eq: "synesthesia_cropped.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    firstFlightCropped: file(relativePath: { eq: "promenade.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const shorts =[
    {
      title: "First Flight",
      imageData: data.firstFlightCropped,
      href: "/firstflight/",
    },
    {
      title: "A Blue Dwarf's Tale",
      imageData: data.asteroidsFieldCropped,
      href: "/abluedwarftale/",
      light: true,
    },
    {
      title: "Synesthesia #1",
      imageData: data.synesthesiaCropped,
      href: "/synesthesia1/",
    }
  ]

  return <Mosaic items={shorts}/>
};

export default ShortsMosaic;