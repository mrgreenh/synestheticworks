import React from "react";
import PropTypes from "prop-types";

const BlogHeader = (props) => 
    <span className="blog-header">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
    </span>

BlogHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string
}

export default BlogHeader;