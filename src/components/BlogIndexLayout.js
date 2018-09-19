import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import { presets, colors } from '../utils'
import { Layout } from '.'

const StyledSite = styled.div({
  [presets.Tablet]: {
    background: colors.ui.whisper
  }
})

const BlogIndexLayout = ({ children }) => (
  <StyledSite>
    <Layout>{children}</Layout>
  </StyledSite>
)

BlogIndexLayout.propTypes = {
  children: PropTypes.node
}

export default BlogIndexLayout
