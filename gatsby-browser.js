/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import 'prismjs/themes/prism-tomorrow.css'
import AppProvider from './src/context/app'

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
