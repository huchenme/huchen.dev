import React from 'react'
import styled from 'react-emotion'
import { presets, rhythm, options } from '../utils'

const StyledContainer = styled.div({
  maxWidth: rhythm(presets.maxWidth),
  margin: `0 auto`,
  padding: `${rhythm(1.5)} ${rhythm(options.blockMarginBottom)}`,
  paddingBottom: rhythm(3.5),
  position: `relative`,
  [presets.Tablet]: {
    paddingBottom: rhythm(1.5)
  }
})

const Container = ({ children, className, styles = {} }) => (
  <StyledContainer className={className} style={styles}>
    {children}
  </StyledContainer>
)

export default Container
