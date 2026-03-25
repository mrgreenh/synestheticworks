"use client"

import Layout from "../../../src/components/layout"
import FramedPlayer from "../../../src/components/FramedPlayer"
import NFTLayout from "../../../src/components/NFTLayout"

export default function HarvesterPage() {
  return <Layout>
    <NFTLayout ogimage="/nfts/harvester_full.png" title="Harvester" date="December 5, 2021">
      <FramedPlayer
        controls={true}
        className='react-player'
        url='/nfts/harvester_full_ffmpeg.mp4'
        width='100%'
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        playsinline={true}
      >
        <i>
          <p>
            There were only two types of civilization in the universe: those on the right side and those on the wrong side of the Granting Voice. The former only comprised the Blessed Children, while the latter extended to any other present and future form of life within the light cone of the Granting Voice&apos;s birth.
          </p>
          <p>
            Harvesters only understood the above distinction when it came to selecting celestial bodies to mine for resources, placing all forms of life but one in the path of destruction.
          </p>
        </i>
      </FramedPlayer>
    </NFTLayout>
  </Layout>
}
