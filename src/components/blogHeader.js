import React from "react";
import PropTypes from "prop-types";

const BlogHeader = (props) => 
    <span className="blog-header">
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
    </span>

BlogHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string
}

export default BlogHeader;