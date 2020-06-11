import React, { useCallback } from "react"
import PropTypes from "prop-types"
import TilesFlowComponent from './TilesFlowComponent'
import Header from "./header"
import ReadingTracker from "./FlowReadingTracker"
import TilesFlowContext from "./utils/TilesFlowContext"

const readingTracker = new ReadingTracker();

const FlowingWrapper = ({ children }) => {
  return (
    <>
      <TilesFlowContext.Provider value={readingTracker}>
        <TilesFlowComponent readingTracker={readingTracker}/>
        <Header siteTitle="Synesthetic Works" />
        <span>{children}</span>
      </TilesFlowContext.Provider>
    </>
  )
}

FlowingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FlowingWrapper;