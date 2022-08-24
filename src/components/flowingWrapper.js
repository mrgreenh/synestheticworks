import React, { useCallback } from "react"
import PropTypes from "prop-types"
import TilesFlowComponent from './TilesFlowComponent'
import Header from "./header"
import ReadingTracker from "./FlowReadingTracker"
import TilesFlowContext from "./utils/TilesFlowContext"
import MailchimpForm from "./MailchimpForm"
import {Link} from 'gatsby'
import CookieConsent from 'react-cookie-consent';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

import "./generics.scss"

const readingTracker = new ReadingTracker();

const FlowingWrapper = ({ children }) => {
  return (
    <>
      <TilesFlowContext.Provider value={readingTracker}>
        <TilesFlowComponent readingTracker={readingTracker}/>
        <div id="site-content">
          <Header siteTitle="synwrks" />
          <div id="page-content">
            {children}
            <div className="mobile-footer">
              <Link to="/" className="back-to-top">Home</Link>| 
              <a href="#top-of-page-anchor" className="back-to-top">Back to top</a>
            </div>
            <MailchimpForm/>
            <div className="copyright-footer">
              Copyright © 2020, synwrks (Synesthetic Works)
            </div>
          </div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="No"
          style={{backgroundColor: "#333340", color: "white", fontSize: "0.8rem", paddingTop: 0}}
          contentStyle={{marginTop: 0, marginBottom: 0}}
          buttonStyle={{backgroundColor: "#696", color: "white", margin: 0}}
          enableDeclineButton
          declineButtonStyle={{backgroundColor: "#444450"}}
          flipButtons={true}
          onAccept={() => {   
            initializeAndTrack("/")
          }}
          cookieName="gatsby-gdpr-google-analytics">
            Hi! With your consent, this site will use Google Analytics (which uses cookies) to provide the site's author with anonymized statistics about the audience of the website. <a 
              style={{color: "white"}} 
              href="https://policies.google.com/technologies/partner-sites" 
              target="_blank">Google's Privacy and Terms</a>
        </CookieConsent>
      </TilesFlowContext.Provider>
    </>
  )
}

FlowingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FlowingWrapper;