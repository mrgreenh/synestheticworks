"use client"

import Layout from "../../../src/components/layout"
import FramedPlayer from "../../../src/components/FramedPlayer"
import NFTLayout from "../../../src/components/NFTLayout"

export default function TerraformingPage() {
  return <Layout>
    <NFTLayout ogimage="/nfts/ancient_path_purple.jpg" title="Terraforming" date="February 21, 2022">
      <FramedPlayer
        controls={true}
        className='react-player'
        url='/nfts/ancient_path_purple_ffmpeg.mp4'
        width='100%'
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        playsinline={true}
      >
        <i>
          <p>
            Were you to ask any of the Blessed Children whether they were part of a multi-planetary civilization, they wouldn&apos;t understand the meaning of your question. They wouldn&apos;t know their home to be Artificial Planet #163 (AP163), orbiting Artificial Sun #9 (AS9).
          </p>
          <p>
            They would however invite you to enjoy the beauty of the grass field and its hypnotic motion. One of millions of identical fields that nobody had ever set eyes on, waiting to be inhabited, waving in the wind.
          </p>
        </i>
      </FramedPlayer>
    </NFTLayout>
  </Layout>
}
