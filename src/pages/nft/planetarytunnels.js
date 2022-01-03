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
      title: "Planetary Bridges",
      imageData: thumbnails.planetaryTunnels,
      href: "https://hicetnunc.art/objkt/571720",
      external:true
    },
  ]

  return <Layout>
    <NFTLayout ogimage="/nfts/planetary_tunnels_daytime1.png" title="Planetary Bridges" date="December 5, 2021">
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
        <p>
          It was no secret among maritime merchants that structures of unfathomable size could be sighted in the distant horizons. These stretched through the skies so far that, on a clear day, they could be seen touching the gods.
        </p>
        <p>
          It was observed by those knowledgeable about the ways of the Granting Voice, that intense lightings often propagated through the constructions just after the voice was exercised.
        </p>

      </FramedPlayer>
      <h3>Colorways minted on <strong>Hic Et Nunc</strong></h3>
      <Mosaic items={hec_colorways} thumbnailSize='small' showTitles={false} />
    </NFTLayout>
  </Layout>;
}

export default SecondPage