const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const blogPosts = _.filter(result.data.allMarkdownRemark.edges, edge => {
        const slug = _.get(edge, `node.fields.slug`)
        if (!slug) {
          return false
        }

        if (_.includes(slug, `/blog/`)) {
          return true
        }

        return false
      })

      blogPosts.forEach(({ node }, index) => {
        const next = index === 0 ? null : blogPosts[index - 1].node
        const prev =
          index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
            prev,
            next
          }
        })
      })

      const tagLists = blogPosts
        .filter(post => _.get(post, `node.frontmatter.tags`))
        .map(post => _.get(post, `node.frontmatter.tags`))

      _.uniq(_.flatten(tagLists)).forEach(tag => {
        createPage({
          path: `/blog/tags/${_.kebabCase(tag)}/`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            tag
          }
        })
      })

      resolve()
    })
  })
}
