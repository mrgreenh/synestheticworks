import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import ProjectThumb from './ProjectThumb';

import './mosaic.scss';

const Mosaic = (props) => <div className={classNames({
    "carousel": true,
    "small-thumbs": props.thumbnailSize == "small",
  })}>
  {props.items.map(item => <ProjectThumb {...item}/>)}
</div>;

Mosaic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    imageData: PropTypes.object,
    title: PropTypes.string,
    href: PropTypes.string,
    light: PropTypes.bool,
    external: PropTypes.bool,
  })),
  thumbnailSize: PropTypes.oneOf(['small', 'large'])
}

Mosaic.defaultProps = {
  items: [],
  thumbnailSize: 'large'
}

export default Mosaic;