import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

const Posts = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = get(post, 'node.frontmatter.title') || post.node.path
          return (
            <div key={post.node.frontmatter.path}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: 'none' }}
                  to={post.node.frontmatter.path}
                >
                  {post.node.frontmatter.title}
                </Link>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          )
        }
      })}
    </div>
  )
}

Posts.propTypes = {
  route: React.PropTypes.object,
}

export default Posts

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
