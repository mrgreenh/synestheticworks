import React from 'react';
import Mosaic from '../mosaic';
import { useStaticQuery, graphql } from "gatsby"

const NFTsMosaic = () => {
  const data = useStaticQuery(graphql`
  query {
    terraforming: file(relativePath: { eq: "nft_thumbs/ancient_path_purple.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
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
    portalpeaks: file(relativePath: { eq: "nft_thumbs/portal_peaks_daytime.jpg" }) {
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
      title: "Terraforming",
      imageData: data.terraforming,
      href: "/nft/terraforming/",
      light: true,
    },
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
    {
      title: "Portal Peaks",
      imageData: data.portalpeaks,
      href: "/nft/portalpeaks/",
      light: true,
    },
  ]

  return <Mosaic showTitles={true} items={shorts}/>
};

export default NFTsMosaic;