"use client"

import React from 'react';
import Mosaic from '../mosaic';

const BookingsMosaic = () => {
  const YOUTUBE_PLAYLIST_LINK = "https://youtube.com/playlist?list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7"

  const mixes = [
    {
      title: "Meditative House Demo",
      imageSrc: "/images/nft_thumbs/portal_peaks_daytime.jpg",
      href: "https://www.youtube.com/watch?v=2FIGPF3Mg08&list=PL7gzsMg4b2X4iWNK8AsWMRBaGOgxruCe7&index=8",
      light: true,
      external: true,
    },
    {
      title: "Hyperdrive Psytrance Demo",
      imageSrc: "/images/journey_within_mix.png",
      href: "https://youtu.be/fICLKB0IfBo?si=uQRpuUP7DQm2sNLu",
      light: true,
      external: true,
    },
  ]

  return <div className="bookings-mosaic">
    <Mosaic items={mixes}/>
    <h3 className="choose-vibe big-label">⬇ Pick a vibe ⬇</h3>
  </div>
};

export default BookingsMosaic;
