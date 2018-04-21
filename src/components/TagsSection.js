import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { kebabCase } from 'lodash'
import { rhythm, scale } from '../utils'

const StyledTagsSection = styled.em({
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1)
})

const TagsSection = ({ tags }) => {
  if (!tags) return null
  const tagLinks = tags.map((tag, i) => {
    const divider = i < tags.length - 1 && <span>{` | `}</span>
    return (
      <span key={tag}>
        <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
        {divider}
      </span>
    )
  })
  return <StyledTagsSection>Tagged with {tagLinks}</StyledTagsSection>
}

export default TagsSection
