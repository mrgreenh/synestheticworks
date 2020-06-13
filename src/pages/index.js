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
    asteroidsField: file(relativePath: { eq: "asteroid-field-shading-final.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    synesthesia: file(relativePath: { eq: "synesthesia.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
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
        <div className="carousel">
          <ProjectThumb
            imageData={data.asteroidsField} 
            href="/blogarticle2/" 
            title="A Blue Dwarf's Tale"/>
          <ProjectThumb
            imageData={data.synesthesia} 
            href="/page-2/" 
            title="Synesthesia #1"/>
        </div>
        <div className="posts-list">
          {data.allMarkdownRemark.edges.map(edge => 
          <ul key={edge.node.frontmatter.slug}>
            <li>
              <Link to={edge.node.frontmatter.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </Link>
            </li>
          </ul>)}
        </div>
    </Layout>
  )
}

export default IndexPage
