"use client"

import React from 'react';
import Mosaic from '../mosaic';

const MiscMosaic = () => {
  const shorts = [
    {
      title: "About",
      imageSrc: "/images/synwrks_profile_pic_no_frills.png",
      href: "/about/",
      light: false,
      className: ["website-logo", "nopadding"]
    },
    {
      title: "Vizloom >>",
      imageSrc: "/images/vizloom.jpg",
      href: "https://vizloom.com",
      light: true,
      external: true,
      className: ["website-logo", "nopadding"]
    },
    {
      title: "Events >>",
      imageSrc: "/images/twitch.png",
      href: "https://www.twitch.tv/synwrks/schedule",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageSrc: "/images/instagram.png",
      href: "https://www.instagram.com/synwrks/",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageSrc: "/images/facebook.png",
      href: "https://bit.ly/synwrks-facebook",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      title: "Tracks >>",
      imageSrc: "/images/soundcloud.png",
      href: "https://soundcloud.com/synwrks",
      light: true,
      external: true,
      className: ["website-logo"]
    },
    {
      imageSrc: "/images/spotify.png",
      href: "https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK?si=yazckQCFSemWAT1aoIpLrQ",
      light: true,
      external: true,
      className: ["website-logo"]
    },
  ]

  return <Mosaic showTitles={true} items={shorts} thumbnailSize="small"/>
};

export default MiscMosaic;
