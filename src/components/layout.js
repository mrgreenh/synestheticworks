/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <span className="layout">
        <main className="blog-post-content">{children}</main>
    </span>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
