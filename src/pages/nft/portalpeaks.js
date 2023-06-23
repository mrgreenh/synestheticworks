import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogHeader from "../../components/blogHeader"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FramedPlayer from "../../components/FramedPlayer"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import NFTLayout from "../../components/NFTLayout"
import Mosaic from "../../components/mosaic"

const SecondPage = () => {
  const thumbnails = useStaticQuery(graphql`
  query {
    portalPeaks: file(relativePath: { eq: "nft_thumbs/portal_peaks_daytime.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

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
            The Granting Voice's mandate required infrastructure built in all corners of the galaxy. Its functional design was made to survive through eons, while claiming no aesthetic aims on its surroundings.
          </p>
          <p>
            You could stare at an unremarkable landscape for a century, or two, before it suddenly came to life to fullfill its task.
          </p>
        </i>
      </FramedPlayer>
    </NFTLayout>
  </Layout>;
}

export default SecondPage