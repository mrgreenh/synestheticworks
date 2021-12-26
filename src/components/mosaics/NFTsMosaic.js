import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const NFTsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    planetaryTunnels: file(relativePath: { eq: "nft_thumbs/planetary_tunnels_daytime1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    harvester: file(relativePath: { eq: "nft_thumbs/harvester_nightfall1.png" }) {
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
      title: "Planetary Tunnels",
      imageData: data.planetaryTunnels,
      href: "/nft/planetarytunnels/",
      light: true,
    },
    {
      title: "Harvester",
      imageData: data.harvester,
      href: "/nft/harvester/",
      light: true,
    },

  ]

  return <Mosaic showTitles={false} items={shorts}/>
};

export default NFTsMosaic;