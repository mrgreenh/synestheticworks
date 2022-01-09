import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const NFTsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    planetaryTunnels: file(relativePath: { eq: "nft_thumbs/planetary_bridges_full.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    harvester: file(relativePath: { eq: "nft_thumbs/harvester_full.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

  const shorts =[
    {
      title: "Planetary Bridges",
      imageData: data.planetaryTunnels,
      href: "/nft/planetarybridges/",
      light: true,
    },
    {
      title: "Harvester",
      imageData: data.harvester,
      href: "/nft/harvester/",
      light: true,
    },

  ]

  return <Mosaic showTitles={true} items={shorts}/>
};

export default NFTsMosaic;