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
    harvester: file(relativePath: { eq: "nft_thumbs/harvester_nightfall1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

  const hec_colorways = [
    {
      title: "Harvester - nightfall 1",
      imageData: thumbnails.harvester,
      href: "https://hicetnunc.art/objkt/571684",
      external: true,
    },
  ]

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
            There were only two types of civilization in the universe: those on the right side and those on the wrong side of the Granting Voice. The former only comprised the Blessed Children, while the latter extended to any other present and future form of life within the light cone of the Granting Voice's birth.

          </p>

          <p>
            Harvesters only understood the above distinction when it came to selecting celestial bodies to mine for resources, placing all forms of life but one in the path of destruction.
          </p>
        </i>
      </FramedPlayer>
      {/* <h3>Colorways minted on <strong>Hic Et Nunc</strong></h3>
      <Mosaic items={hec_colorways} thumbnailSize='small' showTitles={false} /> */}
    </NFTLayout>
  </Layout>;
}

export default SecondPage