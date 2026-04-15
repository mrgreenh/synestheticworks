"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import PlayImage from './PlayImage'
import classNames from "classnames";

const ProjectThumb = (props) => {
  const imageSizes = props.sizes || "(max-width: 800px) 50vw, 50vw"

  const children = <>
    <Image
      src={props.imageSrc}
      alt={props.title || ""}
      width={props.imageWidth || 800}
      height={props.imageHeight || 450}
      sizes={imageSizes}
      quality={props.quality || 75}
      style={{ width: '100%', height: 'auto' }}
    />
    <div className="thumb-overlay"/>
    {!!props.title && <h3 className={classNames({"light": !!props.light})}>{props.title}</h3>}
    <PlayImage/>
  </>;

  const dynamicClasses = (props.className || []).reduce((acc, v) => {acc[v] = true; return acc}, { "project-thumb": true })

  return <div className={classNames(dynamicClasses)}>
    {!props.external ?
      <Link href={props.href}>
        {children}
      </Link> :
      <a href={props.href} target="_blank">
        {children}
      </a>
    }
  </div>
};

export default ProjectThumb;
