import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import styled, { css } from 'react-emotion'

import { rhythm, options, presets, colors } from '../../utils'
import { Container, ReadingPostPreviewItem } from '../../components'
import logo from '../../assets/logo/logo.svg'

const readingPostPreviewItemStyles = css({
  marginBottom: rhythm(options.blockMarginBottom),
  [presets.Tablet]: {
    background: `#fff`,
    borderRadius: presets.radiusLg,
    boxShadow: `0 3px 10px rgba(25, 17, 34, 0.05)`,
    padding: rhythm(options.blockMarginBottom * 1),
    paddingLeft: rhythm(options.blockMarginBottom * 2),
    paddingRight: rhythm(options.blockMarginBottom * 2),
    marginLeft: rhythm(-options.blockMarginBottom * 2),
    marginRight: rhythm(-options.blockMarginBottom * 2),
    transition: `transform ${presets.animation.speedDefault} ${
      presets.animation.curveDefault
    },  box-shadow ${presets.animation.speedDefault} ${
      presets.animation.curveDefault
    }, padding ${presets.animation.speedDefault} ${
      presets.animation.curveDefault
    }`,
    '&:hover': {
      transform: `translateY(-4px)`,
      boxShadow: `0 10px 42px rgba(25, 17, 34, 0.1)`
    },
    '&:active': {
      boxShadow: `0 3px 10px rgba(25, 17, 34, 0.05)`,
      transform: `translateY(0)`,
      transition: `transform 50ms`
    }
  },
  [presets.Desktop]: {},
  [presets.Hd]: {}
})

const containerStyles = css({
  [presets.Tablet]: {
    background: `url(${logo})`,
    paddingBottom: `${rhythm(options.blockMarginBottom * 4)} !important`,
    backgroundSize: `30px 30px`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `bottom center`
  }
})

const StyledPage = styled.div({
  [presets.Tablet]: {
    background: colors.ui.whisper,
    paddingBottom: rhythm(options.blockMarginBottom * 4)
  }
})

const Posts = ({ data }) => {
  const readings = get(data, 'allMarkdownRemark.edges', [])
  const title = data.site.siteMetadata.title

  return (
    <StyledPage>
      <Helmet>
        <title>Reading | {title}</title>
      </Helmet>
      <Container className={containerStyles}>
        {readings.map(({ node }) => (
          <ReadingPostPreviewItem
            post={node}
            key={node.fields.slug}
            className={readingPostPreviewItemStyles}
          />
        ))}
      </Container>
    </StyledPage>
  )
}

export default Posts

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/reading/" } }
    ) {
      edges {
        node {
          ...ReadingPostPreview_item
        }
      }
    }
  }
`
