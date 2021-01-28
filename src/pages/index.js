import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectThumb from "../components/ProjectThumb"
import { useStaticQuery, graphql } from "gatsby"

import "./index.scss"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
  query {
    asteroidsFieldCropped: file(relativePath: { eq: "asteroid-field-cropped.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    synesthesiaCropped: file(relativePath: { eq: "synesthesia_cropped.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
        <div className="carousel">
          <ProjectThumb
            imageData={data.synesthesiaCropped} 
            href="/synesthesia1/"
            title="Synesthesia #1"/>
          <ProjectThumb
            imageData={data.asteroidsFieldCropped} 
            href="/abluedwarftale/" 
            light={true}
            title="A Blue Dwarf's Tale"/>
        </div>
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
