import React from 'react';
import PropTypes from "prop-types";
import {Link} from "gatsby";
import Img from "gatsby-image"
import PlayImage from './PlayImage'
import classNames from "classnames";

const ProjectThumb = (props) => {
  const children = <>
    <Img fluid={props.imageData.childImageSharp.fluid}/>
    <div className="thumb-overlay"/>
    <h3 className={classNames({"light": !!props.light})}>{props.title}</h3>
    <PlayImage/>
  </>;

  return <div className="project-thumb">
    {!props.external ? 
      <Link to={props.href}>
        {children}
      </Link> : 
      <a href={props.href} target="_blank">
        {children}
      </a>
    }

  </div>};

ProjectThumb.propTypes = {
  imageData: PropTypes.object,
  title: PropTypes.string,
  href: PropTypes.string,
  light: PropTypes.bool,
  external: PropTypes.bool,
}

export default ProjectThumb;