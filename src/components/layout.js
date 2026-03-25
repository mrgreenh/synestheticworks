import React from "react"

const Layout = ({ children }) => {
  return (
    <span className="layout">
        <main className="blog-post-content">{children}</main>
    </span>
  )
}

export default Layout
