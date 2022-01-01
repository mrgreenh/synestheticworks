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
    planetaryTunnels: file(relativePath: { eq: "nft_thumbs/planetary_tunnels_daytime1.png" }) {
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
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
    {
      title: "Planetary Tunnels",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
  ]

  return <Layout>
    <NFTLayout ogimage="/nfts/planetary_tunnels_daytime1.png" title="Planetary Tunnels" date="December 12, 2021">
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
        Some long text goes here about bla bla bla with <b>bold text</b> and all...
        Some long text goes here about bla bla bla with <b>bold text</b> and all...
        Some long text goes here about bla bla bla with <b>bold text</b> and all...
        Some long text goes here about bla bla bla with <b>bold text</b> and all...
      </FramedPlayer>
      <h3>Colorways minted on <strong>Hic Et Nunc</strong></h3>
      <Mosaic items={hec_colorways} thumbnailSize='small' showTitles={false} />
      <h3>Colorways minted on <strong>Open Sea</strong></h3>
      <Mosaic items={hec_colorways} thumbnailSize='small' showTitles={false} />
    </NFTLayout>
  </Layout>;
}

export default SecondPage