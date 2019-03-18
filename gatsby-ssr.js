/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

//tells gatsby to wrap the root element with the one written in ./redux-wrapper
import reduxWrapper from './redux-wrapper';
export const wrapRootElement = reduxWrapper;
