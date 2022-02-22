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
    terraforming: file(relativePath: { eq: "nft_thumbs/ancient_path_purple.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

  // const hec_colorways = [
  //   {
  //     title: "Planetary Bridges",
  //     imageData: thumbnails.terraforming,
  //     href: "https://hicetnunc.art/objkt/571720",
  //     external:true
  //   },
  // ]

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
            Were you to ask any of the Blessed Children whether they were part of a multi-planetary civilization, they wouldn't understand the meaning of your question. They wouldn't know their home to be Artificial Planet #163 (AP163), orbiting Artificial Sun #9 (AS9).
          </p>
          <p>
            They would however invite you to enjoy the beauty of the grass field and its hypnotic motion. One of millions of identical fields that nobody had ever set eyes on, waiting to be inhabited, waving in the wind.
          </p>
        </i>
      </FramedPlayer>
      {/* <h3>Colorways minted on <strong>Hic Et Nunc</strong></h3> */}
      {/* <Mosaic items={hec_colorways} thumbnailSize='small' showTitles={false} /> */}
    </NFTLayout>
  </Layout>;
}

export default SecondPage