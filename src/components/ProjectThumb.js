import React from 'react';
import PropTypes from "prop-types";
import {Link} from "gatsby";

const ProjectThumb = (props) => <div className="project-thumb">
  <Link to={props.href}>
    <img src={props.src} />
    <h3>props.title</h3>
  </Link>
</div>;

ProjectThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
}

export default ProjectThumb;