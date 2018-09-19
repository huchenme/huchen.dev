const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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

      const allMarkdownPages = result.data.allMarkdownRemark.edges

      // Blog Posts
      const blogPosts = _.filter(allMarkdownPages, edge => {
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

      // Tags
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

      // Reading
      const readingPosts = _.filter(allMarkdownPages, edge => {
        const slug = _.get(edge, `node.fields.slug`)
        if (!slug) {
          return false
        }

        if (_.includes(slug, `/reading/`)) {
          return true
        }

        return false
      })

      readingPosts.forEach(({ node }, index) => {
        const next = index === 0 ? null : readingPosts[index - 1].node
        const prev =
          index === readingPosts.length - 1
            ? null
            : readingPosts[index + 1].node
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/reading-post.js`),
          context: {
            slug: node.fields.slug,
            prev,
            next
          }
        })
      })

      resolve()
    })
  })
}
