/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
