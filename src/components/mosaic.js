"use client"

import React from 'react';
import classNames from "classnames";
import ProjectThumb from './ProjectThumb';

const getDefaultSizes = ({ thumbnailSize, itemsCount, itemClasses = [] }) => {
  if (thumbnailSize === "small") {
    return itemClasses.includes("website-logo")
      ? "(max-width: 800px) 33vw, 130px"
      : "(max-width: 800px) 33vw, 33vw"
  }

  const desktopWidthVw = Math.max(20, Math.floor(100 / Math.max(itemsCount, 1)))
  return `(max-width: 800px) 50vw, ${desktopWidthVw}vw`
}

const Mosaic = ({ items = [], thumbnailSize = 'large', showTitles = true }) => <div className={classNames({
  "carousel": true,
  "small-thumbs": thumbnailSize == "small",
})}>
  {items.map((item, i) => <ProjectThumb
    key={i}
    {...item}
    sizes={item.sizes || getDefaultSizes({
      thumbnailSize,
      itemsCount: items.length,
      itemClasses: item.className || [],
    })}
    title={showTitles ? item.title : null}
  />)}
</div>;

export default Mosaic;
