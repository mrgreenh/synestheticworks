import React from "react";
import PropTypes from "prop-types";
import SEO from "../components/seo"
import { Link } from "gatsby";

const BlogHeader = (props) => 
    <span className="blog-header">
      <SEO title={props.title} image={props.ogimage}/>
      <h2>
        <span className="back-button"><Link>&#x2039;</Link></span>
        {props.title}
      </h2>
      <h3>{props.date}</h3>
    </span>

BlogHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  ogimage: PropTypes.string
}

export default BlogHeader;