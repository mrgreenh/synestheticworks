/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./footer.scss"

const Footer = () => {
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
    }
  `)

  return (
    <footer>
      <ul>
        <li>
          <a href="https://soundcloud.com/synwrks" title="Link to Soundcloud page" target="_blank"><Img fluid={data.soundcloud.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://bit.ly/synwrks-youtube" title="Link to Youtube page" target="_blank"><Img fluid={data.youtube.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/synwrks/" title="Link to Instagram page" target="_blank"><Img fluid={data.instagram.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://bit.ly/synwrks-facebook" title="Link to Facebook page" target="_blank"><Img fluid={data.facebook.childImageSharp.fluid}/></a>
        </li>
        <li>
          <a href="https://bit.ly/synwrks-twitter" target="_blank" title="Link to Twitter page"><Img fluid={data.twitter.childImageSharp.fluid}/></a>
        </li>
      </ul>
      <p className="newsletter-link"><a href="http://eepurl.com/hQ3rAn" target="_blank">Newsletter</a></p>
    </footer>
  )
}

export default Footer
