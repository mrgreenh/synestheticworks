import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./links.scss"

const LinksRoot = () => {
    const data = useStaticQuery(graphql`
        query {
        instagram: file(relativePath: { eq: "instagram.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        facebook: file(relativePath: { eq: "facebook.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        spotify: file(relativePath: { eq: "spotify.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        twitter: file(relativePath: { eq: "twitter.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        soundcloud: file(relativePath: { eq: "soundcloud.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        youtube: file(relativePath: { eq: "youtube.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        links_qrcode: file(relativePath: { eq: "links_qrcode.png" }) {
            childImageSharp {
            fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        }
    `)

  return (
    <Layout>
        <ul className="links-list">
            <li>
                <a href="https://bit.ly/synwrks-youtube" title="Link to Youtube page" target="_blank"><Img fluid={data.youtube.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://www.instagram.com/synwrks/" title="Link to Instagram page" target="_blank"><Img fluid={data.instagram.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK?si=yazckQCFSemWAT1aoIpLrQ" title="Link to Spotify artist page" target="_blank"><Img fluid={data.spotify.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://soundcloud.com/synwrks" title="Link to Soundcloud page" target="_blank"><Img fluid={data.soundcloud.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://bit.ly/synwrks-facebook" title="Link to Facebook page" target="_blank"><Img fluid={data.facebook.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://bit.ly/synwrks-twitter" target="_blank" title="Link to Twitter page"><Img fluid={data.twitter.childImageSharp.fluid}/></a>
            </li>
            <li>
                <a href="https://synwrks.com/" title="Link to Blog page" target="_blank"><h1>Blog</h1></a>
            </li>
            <li className="qrcode">
                <Img className="qrcode" fluid={data.links_qrcode.childImageSharp.fluid}/>
            </li>
        </ul>
    </Layout>
  )
}

export default LinksRoot
