/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./footer.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      youtube: file(relativePath: { eq: "youtube.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      twitch: file(relativePath: { eq: "twitch.png" }) {
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
      facebook: file(relativePath: { eq: "facebook.png" }) {
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
      open_links: file(relativePath: { eq: "links.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.instagram.com/synwrks/" title="Link to Instagram page" target="_blank"><Img fluid={data.instagram.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://www.twitch.tv/synwrks/" title="Link to Twitch page" target="_blank"><Img fluid={data.twitch.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://bit.ly/synwrks-youtube" title="Link to Youtube page" target="_blank"><Img fluid={data.youtube.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/1IkV119B5J0dgRzNiyu3FK?si=yazckQCFSemWAT1aoIpLrQ" title="Link to Spotify artist page" target="_blank"><Img fluid={data.spotify.childImageSharp.fluid}/></a>
        </li>
        {/* <li>
          <a href="https://soundcloud.com/synwrks" title="Link to Soundcloud page" target="_blank"><Img fluid={data.soundcloud.childImageSharp.fluid}/></a>
        </li> */}
        <li>
          <Link to="/links" alt="All social accounts."><Img fluid={data.open_links.childImageSharp.fluid}/></Link>
        </li>
        {/* <li>
          <a href="https://bit.ly/synwrks-facebook" title="Link to Facebook page" target="_blank"><Img fluid={data.facebook.childImageSharp.fluid}/></a>
        </li> */}
        {/* <li>
          <a href="https://bit.ly/synwrks-twitter" target="_blank" title="Link to Twitter page"><Img fluid={data.twitter.childImageSharp.fluid}/></a>
        </li> */}
      </ul>
      <p className="newsletter-link"><a href="http://eepurl.com/hQ3rAn" target="_blank">Newsletter</a></p>
    </footer>
  )
}

export default Footer
