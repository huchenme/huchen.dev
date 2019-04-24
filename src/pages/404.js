import React from 'react'
import styled from 'react-emotion'
import { Layout, Container } from '../components'
import fourOhFourImg from './404.svg'

const FourOhFour = () => (
  <Layout>
    <Container>
      <ImgContainer>
        <img src={fourOhFourImg} alt="404" />
      </ImgContainer>
    </Container>
  </Layout>
)

export default FourOhFour

const ImgContainer = styled.div`
  text-align: center;
  margin-top: 6em;

  @media (min-width: 1000px) {
    margin-top: 5em;
  }
`
