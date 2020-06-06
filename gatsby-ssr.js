/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const FlowingWrapper = require('./src/components/flowingWrapper').default

// Wraps every page in a component
exports.wrapRootElement = ({ element, props }) => <FlowingWrapper>{element}</FlowingWrapper>;
