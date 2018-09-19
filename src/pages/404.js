import React from 'react'
import { Link } from 'gatsby'
import { Layout, Container } from '../components'

const FourOhFour = () => (
  <Layout>
    <Container>
      <h1>404, url does not exits any more</h1>
      <h4>
        <Link to="/">HOME</Link>
      </h4>
    </Container>
  </Layout>
)

export default FourOhFour
