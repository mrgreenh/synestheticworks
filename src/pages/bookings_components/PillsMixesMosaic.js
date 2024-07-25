import React from "react"
import Mosaic from "../../components/mosaic"
import { useStaticQuery, graphql } from "gatsby"

const PillsMixesMosaic = () => {
  const data = useStaticQuery(graphql`
    query {
      introspection: file(relativePath: { eq: "introspection_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exploration: file(relativePath: { eq: "exploration_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      just_weird: file(relativePath: { eq: "just_weird_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const mixes = [
    {
      title: "Introspection",
      imageData: data.introspection,
      href: "/synesthetic_mixes/introspection/",
      light: true,
      external: false,
    },
    {
      title: "Exploration",
      imageData: data.exploration,
      href: "/synesthetic_mixes/exploration/",
      light: true,
      external: false,
    },
    {
      title: "Just Weird",
      imageData: data.just_weird,
      href: "/synesthetic_mixes/just_weird/",
      light: true,
      external: false,
    },
  ]

  return (
    <div className="bookings-mosaic">
      <Mosaic items={mixes} />
    </div>
  )
}

export default PillsMixesMosaic
