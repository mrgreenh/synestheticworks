"use client"

import React from 'react';
import Mosaic from '../mosaic';

const MixesMosaic = () => {
  const YOUTUBE_PLAYLIST_LINK = "https://youtube.com/playlist?list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7"

  const mixes = [
    {
      title: "Live! ^^^",
      imageSrc: "/images/twitch_thumb.png",
      href: "https://www.twitch.tv/synwrks",
      external: true,
      light: false,
    },
    {
      title: "Recordings >>>",
      imageSrc: "/images/youtube_thumb.png",
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: false,
    },
    {
      imageSrc: "/images/psytrance_1_mix.png",
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: true,
    },
    {
      imageSrc: "/images/a_quick_spacewalk.jpg",
      href: YOUTUBE_PLAYLIST_LINK,
      external: true,
      light: true,
    },
  ]

  return <Mosaic items={mixes}/>
};

export default MixesMosaic;
