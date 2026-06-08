"use client"

import React from "react"
import Link from "next/link"
import Image from "next-image-export-optimizer"
import PlayImage from "./PlayImage"
import classNames from "classnames"

const ProjectThumb = props => {
  // The "See All" tile is a thumbnail-shaped call-to-action that closes the
  // mosaic and links through to the full gallery.
  if (props.seeAll) {
    return (
      <div className="project-thumb see-all-thumb">
        <Link href={props.href}>
          <span className="see-all-inner">
            <span className="see-all-count">{props.count}</span>
            <span className="see-all-label">See all</span>
            <span className="see-all-arrow" aria-hidden="true">
              &#x2192;
            </span>
          </span>
        </Link>
      </div>
    )
  }

  const children = (
    <>
      <Image
        src={props.imageSrc}
        alt={props.title || ""}
        width={800}
        height={450}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="thumb-overlay" />
      {!!props.title && (
        <h3 className={classNames({ light: !!props.light })}>{props.title}</h3>
      )}
      <PlayImage />
    </>
  )

  const dynamicClasses = (props.className || []).reduce(
    (acc, v) => {
      acc[v] = true
      return acc
    },
    { "project-thumb": true }
  )

  return (
    <div className={classNames(dynamicClasses)}>
      {!props.external ? (
        <Link href={props.href}>{children}</Link>
      ) : (
        <a href={props.href} target="_blank">
          {children}
        </a>
      )}
    </div>
  )
}

export default ProjectThumb
