import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import { rhythm, presets, colors, removeTrailingSlash } from '../utils'
import { SiteLogo } from '../components'

import '../prism-coy'

import '../assets/fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'

const LogoWrapper = styled.div({
  paddingTop: rhythm(1.5),
  textAlign: 'center'
})

const StyledSite = styled.div({}, props => ({
  [presets.Tablet]: {
    background: props.isBlogIndex ? colors.ui.whisper : 'transparent'
  }
}))

const Template = ({ children, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <StyledSite
      isBlogIndex={removeTrailingSlash(location.pathname) === `/blog`}
    >
      <Helmet title={siteTitle} />
      <LogoWrapper>
        <SiteLogo to="/" />
      </LogoWrapper>
      <div className="main-body">{children()}</div>
    </StyledSite>
  )
}

Template.propTypes = {
  children: PropTypes.func
}

export default Template

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
