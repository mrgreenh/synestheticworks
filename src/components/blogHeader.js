"use client"

import React from "react";
import Link from "next/link";

const BlogHeader = (props) =>
    <span className="blog-header">
      <h2>
        <span className="back-button"><Link href="/">&#x2039;</Link></span>
        {props.title}
      </h2>
      {props.date && <h3>{props.date}</h3>}
    </span>

export default BlogHeader;
