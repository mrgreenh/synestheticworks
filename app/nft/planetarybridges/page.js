"use client"

import Layout from "../../../src/components/layout"
import FramedPlayer from "../../../src/components/FramedPlayer"
import NFTLayout from "../../../src/components/NFTLayout"

export default function PlanetaryBridgesPage() {
  return <Layout>
    <NFTLayout ogimage="/nfts/planetary_bridges_full.png" title="Planetary Bridges" date="December 5, 2021">
      <FramedPlayer
        controls={true}
        className='react-player'
        url='/nfts/planetary_tunnels_full_ffmpeg.mp4'
        width='100%'
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        playsinline={true}
      >
        <i>
          <p>
            It was no secret among maritime merchants that structures of unfathomable size could be sighted in the distant horizons. These stretched through the skies so far that, on a clear day, they could be seen touching the gods.
          </p>
          <p>
            It was observed by those knowledgeable about the ways of the Granting Voice, that intense lightings often propagated through the constructions just after the voice was exercised.
          </p>
        </i>
      </FramedPlayer>
    </NFTLayout>
  </Layout>
}
