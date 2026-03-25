"use client"

import Layout from "../../../src/components/layout"
import FramedPlayer from "../../../src/components/FramedPlayer"
import NFTLayout from "../../../src/components/NFTLayout"

export default function PortalPeaksPage() {
  return <Layout>
    <NFTLayout ogimage="/nfts/portal_peaks_daytime.jpg" title="Portal Peaks" date="June 23, 2023">
      <FramedPlayer
        controls={true}
        className='react-player'
        url='/nfts/portal_peaks_daytime_ffmpeg.mp4'
        width='100%'
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        playsinline={true}
      >
        <i>
          <p>
            The Granting Voice&apos;s mandate required infrastructure built in all corners of the galaxy. Its functional design was made to survive through eons, while claiming no aesthetic aims on its surroundings.
          </p>
          <p>
            You could stare at an unremarkable landscape for a century, or two, before it suddenly came to life to fullfill its task.
          </p>
        </i>
      </FramedPlayer>
    </NFTLayout>
  </Layout>
}
