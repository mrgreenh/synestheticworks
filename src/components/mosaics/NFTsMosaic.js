"use client"

import React from 'react';
import Mosaic from '../mosaic';

const NFTsMosaic = () => {
  const shorts = [
    {
      title: "Terraforming",
      imageSrc: "/images/nft_thumbs/ancient_path_purple.jpg",
      href: "/nft/terraforming/",
      light: true,
    },
    {
      title: "Planetary Bridges",
      imageSrc: "/images/nft_thumbs/planetary_bridges_full.png",
      href: "/nft/planetarybridges/",
      light: true,
    },
    {
      title: "Harvester",
      imageSrc: "/images/nft_thumbs/harvester_full.png",
      href: "/nft/harvester/",
      light: true,
    },
    {
      title: "Portal Peaks",
      imageSrc: "/images/nft_thumbs/portal_peaks_daytime.jpg",
      href: "/nft/portalpeaks/",
      light: true,
    },
  ]

  return <Mosaic showTitles={true} items={shorts}/>
};

export default NFTsMosaic;
