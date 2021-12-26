import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import "./index.scss"
import ShortsMosaic from "../components/mosaics/ShortsMosaic"
import MixesMosaic from "../components/mosaics/MixesMosaic"
import NFTsMosaic from "../components/mosaics/NFTsMosaic"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            summary
          }
        }
      }
    }
  }
  `)
  
  return (
    <Layout>
        <SEO title={"Home"} image={"/home.png"}/>
        <h2>Shorts & VR</h2>
        <ShortsMosaic/>
        <h2>Visual Mixes</h2>
        <MixesMosaic/>
        <h2>NFTs</h2>
        <NFTsMosaic/>
        <div className="posts-list">
          {data.allMarkdownRemark.edges.map(edge => 
          <ul key={edge.node.frontmatter.slug}>
            <li>
              <Link to={edge.node.frontmatter.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
                <p>{edge.node.frontmatter.summary}</p>
              </Link>
            </li>
          </ul>)}
        </div>
    </Layout>
  )
}

export default IndexPage
