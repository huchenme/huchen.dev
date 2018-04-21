import React from 'react'
import Link from 'gatsby-link'
import { Container } from '../components'

const FourOhFour = () => (
  <Container>
    <h1>404, url does not exits any more</h1>
    <h4>
      <Link to="/">HOME</Link>
    </h4>
  </Container>
)

export default FourOhFour
