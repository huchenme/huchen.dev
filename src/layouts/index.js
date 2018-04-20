import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import '../prism-coy'

import { rhythm } from '../utils/typography'
import { SiteLogo } from '../components'

// Import Futura PT typeface
import '../assets/fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'

// Other fonts
import 'typeface-spectral'
import 'typeface-space-mono'

const LogoWrapper = styled.div({
  marginTop: rhythm(1.5),
  textAlign: 'center',
  height: 40
})

const Template = ({ children, data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <Helmet title={siteTitle} />
      <LogoWrapper>
        <SiteLogo to="/" />
      </LogoWrapper>
      <div className="main-body">{children()}</div>
    </div>
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
