import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogHeader from "../components/blogHeader"
import BlogContents from '../components/blogContents'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <BlogHeader {...frontmatter}/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <hr/>
      <BlogContents
        exclude={frontmatter.title} 
        includeDescriptions={false}
        includeOthersButton={true} 
        count={2}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        ogimage
      }
    }
  }
`