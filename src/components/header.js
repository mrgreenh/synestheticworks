"use client"

import Link from "next/link"
import React, {useState, useEffect, useContext} from "react"
import Footer from "./Footer"
import ThemeToggle from "./ThemeToggle"
import TilesFlowContext from "./utils/TilesFlowContext"

const Header = ({ siteTitle }) => {
  const readingTracker = useContext(TilesFlowContext);
  const [page, setPage] = useState(null);

  useEffect(() => {
    readingTracker.registerPageChange(setPage)
  }, [])

  return <span className="website-header">
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            href="/"
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
    {/* The footer (with the toggle in its socials row) is hidden on /links —
        keep a standalone toggle there */}
    {page !== "/links/" ? <Footer /> : <ThemeToggle />}
  </span>
}

export default Header
