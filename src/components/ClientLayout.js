"use client"

import React from "react"
import TilesFlowComponent from './TilesFlowComponent'
import Header from "./header"
import ReadingTracker from "./FlowReadingTracker"
import TilesFlowContext from "./utils/TilesFlowContext"
import MailchimpForm from "./MailchimpForm"
import Link from 'next/link'

const readingTracker = new ReadingTracker();

const ClientLayout = ({ children }) => {
  return (
    <TilesFlowContext.Provider value={readingTracker}>
      <TilesFlowComponent readingTracker={readingTracker}/>
      <div id="site-content">
        <Header siteTitle="synwrks" />
        <div id="page-content">
          {children}
          <div className="mobile-footer">
            <Link href="/" className="back-to-top">Home</Link>|
            <a href="#top-of-page-anchor" className="back-to-top">Back to top</a>
          </div>
          <MailchimpForm/>
          <div className="copyright-footer">
            Copyright © 2020, synwrks (Synesthetic Works)
          </div>
        </div>
      </div>
    </TilesFlowContext.Provider>
  )
}

export default ClientLayout
