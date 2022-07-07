import React from 'react';
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogContents = (props) => {
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

  const filteredArticles = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title !== props.exclude)

  return <>
      <div className="posts-list">
        {filteredArticles.map(edge => 
          <ul key={edge.node.frontmatter.slug}>
            <li>
              <Link to={edge.node.frontmatter.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
                {props.includeDescriptions && <p className={props.descOnMobile && "desc-on-mobile"}>{edge.node.frontmatter.summary}</p>}
              </Link>
            </li>
          </ul>).filter((v, i) => {
            if (!props.count || i < props.count) return true;
            else return false;
          })
        }
        {!!props.count
          && filteredArticles.length > props.count 
          && <Link className='more-ramblings' to="/blog" alt="Go to complete list of articles.">...and other ramblings</Link>}
      </div>
  </> 
}

BlogContents.propTypes = {
  count: PropTypes.number,
  includeDescriptions: PropTypes.bool,
  includeOthersButton: PropTypes.bool,
  descOnMobile: PropTypes.bool,
  exclude: PropTypes.string,
}

BlogContents.defaultProps = {
  count: 0,
  includeDescriptions: true,
}

export default BlogContents;