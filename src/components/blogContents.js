"use client"

import React from 'react';
import Link from "next/link"

const BlogContents = (props) => {
  const posts = props.posts || []
  const filteredArticles = posts.filter(post => post.title !== props.exclude)

  return <>
      <div className="posts-list">
        {filteredArticles.map((post, i) => {
          if (props.count && i >= props.count) return null;
          return (
            <ul key={post.slug}>
              <li>
                <Link href={`/blog/${post.slug}/`}>
                  <h2>{post.title}</h2>
                  <h4>{post.date}</h4>
                  {props.includeDescriptions && <p className={props.descOnMobile ? "desc-on-mobile" : undefined}>{post.summary}</p>}
                </Link>
              </li>
            </ul>
          )
        })}
        {!!props.count
          && filteredArticles.length > props.count
          && <Link className='more-ramblings' href="/blog/" alt="Go to complete list of articles.">...and other ramblings</Link>}
      </div>
  </>
}

BlogContents.defaultProps = {
  count: 0,
  includeDescriptions: true,
}

export default BlogContents;
