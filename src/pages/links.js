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
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spotify: file(relativePath: { eq: "spotify.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitch: file(relativePath: { eq: "twitch.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soundcloud: file(relativePath: { eq: "soundcloud.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "youtube.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      links_qrcode: file(relativePath: { eq: "links_qrcode.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const links = [
    {
      url: "https://distrokid.com/hyperfollow/synwrks/the-book-of-tea",
      title: "Listen to my latest release:",
      description: '"The Book of Tea"',
      symbol: "🔊",
    },
    {
      url: "https://bit.ly/synwrks-youtube",
      title: "YouTube",
      description: "Original music videos, VR & V-DJ sets recordings",
      icon: data.youtube.childImageSharp.fluid,
    },
    {
      url: "https://www.instagram.com/synwrks/",
      title: "Instagram",
      description: "Events, art, behind the scenes & updates",
      icon: data.instagram.childImageSharp.fluid,
    },
    {
      url: "https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK",
      title: "Spotify",
      description: "Original music",
      icon: data.spotify.childImageSharp.fluid,
    },
    {
      url: "https://soundcloud.com/synwrks",
      title: "SoundCloud",
      description: "Even more original music & mix recordings",
      icon: data.soundcloud.childImageSharp.fluid,
    },
    {
      url: "https://twitch.tv/synwrks",
      title: "Twitch",
      description: "Live V-DJ Sets every week",
      icon: data.twitch.childImageSharp.fluid,
    },
    {
      url: "https://bit.ly/synwrks-facebook",
      title: "Facebook",
      description: "Art & updates",
      icon: data.facebook.childImageSharp.fluid,
    },
    {
      url: "https://bit.ly/synwrks-twitter",
      title: "X",
      description: "Quick updates",
      icon: data.twitter.childImageSharp.fluid,
    },
    {
      url: "https://synwrks.com/",
      title: "Blog",
      description: 'Philosophy, instructions, "about" & hub',
      symbol: "📝",
    },
  ]

  return (
    <Layout>
      <div className="links-container">
        <ul className="links-list">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                title={`Link to ${link.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-container">
                  {link.icon ? (
                    <Img fluid={link.icon} alt={link.title} />
                  ) : (
                    <span className="symbol">{link.symbol}</span>
                  )}
                </div>
                <div className="link-text">
                  <h2>{link.title}</h2>
                  {link.description && <p>{link.description}</p>}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="qrcode-container">
          <Img fluid={data.links_qrcode.childImageSharp.fluid} alt="QR Code" />
        </div>
      </div>
    </Layout>
  )
}

export default LinksRoot
