import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import logo from '../assets/logo/logo.svg'

const StyledLink = styled(Link)({
  width: 40,
  height: 40,
  display: 'inline-block'
})

const StyledImage = styled.img({
  width: 40,
  height: 40,
  margin: 0
})

const SiteLogo = ({ to }) => (
  <StyledLink to={to}>
    <StyledImage alt="Logo" src={logo} />
  </StyledLink>
)

SiteLogo.defaultProps = {
  to: '/'
}

export default SiteLogo
