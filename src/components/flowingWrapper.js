import React, { useCallback } from "react"
import PropTypes from "prop-types"
import TilesFlowComponent from './TilesFlowComponent'
import Header from "./header"
import ReadingTracker from "./FlowReadingTracker"
import TilesFlowContext from "./utils/TilesFlowContext"
import {Link} from 'gatsby'

import "./generics.scss"

const readingTracker = new ReadingTracker();

const FlowingWrapper = ({ children }) => {
  return (
    <>
      <TilesFlowContext.Provider value={readingTracker}>
        <TilesFlowComponent readingTracker={readingTracker}/>
        <div id="site-content">
          <Header siteTitle="Synesthetic Works" />
          <div id="page-content">
            {children}
            <div className="mobile-footer">
              <Link to="/" className="back-to-top">Home</Link>| 
              <a href="#top-of-page-anchor" className="back-to-top">Back to top</a>
            </div>
          </div>
        </div>
      </TilesFlowContext.Provider>
    </>
  )
}

FlowingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FlowingWrapper;