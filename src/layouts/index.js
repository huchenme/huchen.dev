import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'

import { rhythm } from '../utils/typography'
import SiteLogo from '../components/SiteLogo'

const Template = ({ children, data, location }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  const siteTitle = data.site.siteMetadata.title

  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet title={siteTitle} />
      <div
        style={{
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <SiteLogo to="/" />
      </div>

      {children()}
    </Container>
  )
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
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
