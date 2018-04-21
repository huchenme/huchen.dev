import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import { rhythm, scale, options, presets, colors } from '../utils'

const Article = styled.article({
  position: `relative`
})

const OverlayLink = styled(Link)({
  position: `absolute`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: `hidden`,
  textIndent: `-100%`,
  whiteSpace: `nowrap`,
  zIndex: 0,
  '&&': {
    border: 0,
    boxShadow: `none`,
    '&:hover': {
      background: `none`
    }
  }
})

const AdditionalInfo = styled.div({
  display: `flex`,
  alignItems: `center`,
  marginBottom: rhythm(1)
})

const PostedTime = styled.div({
  display: `inline-block`,
  fontFamily: options.headerFontFamily.join(`,`),
  color: colors.gray.calm,
  ...scale(-2 / 5),
  [presets.Mobile]: {
    ...scale(-1 / 5)
  },
  [presets.Desktop]: {
    ...scale(0)
  }
})

const P = styled.p({
  fontWeight: `normal`
})

const BlogPostPreviewItem = props => {
  const post = props.post

  return (
    <Article className={props.className}>
      <Link to={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
        <P>
          {post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt}
        </P>
      </Link>
      <AdditionalInfo>
        <PostedTime>
          <div>Posted on {post.frontmatter.date}</div>
        </PostedTime>
      </AdditionalInfo>
      <OverlayLink to={post.fields.slug}>Read more</OverlayLink>
    </Article>
  )
}

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM Do YYYY")
    }
  }
`
