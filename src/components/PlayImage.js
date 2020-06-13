import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PlayImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "play_button.png" }) {
        childImageSharp {
          fluid(maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <span className="play-image"><Img fluid={data.placeholderImage.childImageSharp.fluid}/></span>
}

export default PlayImage
