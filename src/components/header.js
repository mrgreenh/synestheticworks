import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect, useContext} from "react"
import Footer from "./Footer"
import TilesFlowContext from "./utils/TilesFlowContext";

const Header = ({ siteTitle }) => {
  const readingTracker = useContext(TilesFlowContext);
  const [page, setPage] = useState(null);
  console.log("And the page is... "+page)

  useEffect(() => {
    readingTracker.registerPageChange(setPage)
  }, [])

  return <span className="website-header">
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
    {page !== "/links/" && <Footer />}
  </span>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
