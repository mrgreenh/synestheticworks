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
    {!!props.title && <h3 className={classNames({"light": !!props.light})}>{props.title}</h3>}
    <PlayImage/>
  </>;

  const dynamicClasses = (props.className || []).reduce((acc, v) => {acc[v] = true; return acc}, { "project-thumb": true })

  console.log(dynamicClasses)
  return <div className={classNames(dynamicClasses)}>
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
  className: PropTypes.array,
}

ProjectThumb.defaultProps = {
  light: true,
}

export default ProjectThumb;