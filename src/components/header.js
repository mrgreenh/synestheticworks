import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Footer from "./Footer"

const Header = ({ siteTitle }) => (
  <span className="website-header">
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
            id="top-of-page-anchor"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    <Footer />
  </span>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
