import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { SwitchTransition, CSSTransition } from "react-transition-group";
import TilesFlowContext from "./utils/TilesFlowContext";


import "./transition.css"

const PageWrapper = (props) => {
  const readingTracker = useContext(TilesFlowContext);
  useEffect(() => {
    readingTracker && readingTracker.onPageChange(props.path);
  }, [props.path])
  
  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition key={props.path} in={true} timeout={500} classNames="page-transition">
          <span>{props.children}</span>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper;