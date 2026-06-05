import React from "react"

const Layout = ({ children }) => {
  return (
    <span className="layout">
        <main className="page-content-main">{children}</main>
    </span>
  )
}

export default Layout
