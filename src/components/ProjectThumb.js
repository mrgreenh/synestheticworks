import React from 'react';
import PropTypes from "prop-types";
import {Link} from "gatsby";
import Img from "gatsby-image"
import PlayImage from './PlayImage'
import classNames from "classnames";

const ProjectThumb = (props) => <div className="project-thumb">
  <Link to={props.href}>
    <Img fluid={props.imageData.childImageSharp.fluid}/>
    <div className="thumb-overlay"/>
    <h3 className={classNames({"light": !!props.light})}>{props.title}</h3>
    <PlayImage/>
  </Link>
</div>;

ProjectThumb.propTypes = {
  imageData: PropTypes.object,
  title: PropTypes.string,
  href: PropTypes.string,
}

export default ProjectThumb;