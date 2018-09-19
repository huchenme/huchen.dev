import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import { rhythm } from '../utils'
import { SiteLogo } from '.'

import '../prism-coy'

import '../assets/fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
import '../assets/fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'

const LogoWrapper = styled.div({
  paddingTop: rhythm(1.5),
  textAlign: 'center'
})

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet defaultTitle="Hu Chen">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif:400,400i"
        rel="stylesheet"
      />
    </Helmet>
    <LogoWrapper>
      <SiteLogo to="/" />
    </LogoWrapper>
    <div className="main-body">{children}</div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
