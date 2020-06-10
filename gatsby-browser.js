/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require("react");
const FlowingWrapper = require('./src/components/flowingWrapper').default
const PageWrapper = require('./src/components/pageWrapper').default

// Wraps every page in a component
exports.wrapRootElement = ({element, props}) => <FlowingWrapper {...props}>{element}</FlowingWrapper>;

exports.wrapPageElement = ({element, props}) => <PageWrapper {...props}>{element}</PageWrapper>;
