"use client"

import React from 'react';
import classNames from "classnames";
import ProjectThumb from './ProjectThumb';

const Mosaic = ({ items = [], thumbnailSize = 'large', showTitles = true }) => <div className={classNames({
    "carousel": true,
    "small-thumbs": thumbnailSize == "small",
  })}>
  {items.map((item, i) => <ProjectThumb key={i} {...item} title={showTitles ? item.title : null}/>)}
</div>;

export default Mosaic;
