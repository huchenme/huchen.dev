import React from 'react'
import range from 'lodash/range'
import styled from 'react-emotion'
import { rhythm, options, colors } from '../utils'
import { Container } from '../components'

const Header = styled.h1({
  margin: 0,
  marginLeft: rhythm(1 / 4),
  marginBottom: rhythm(1)
})

const ColorBlock = styled.div(
  {
    height: 30,
    width: 30
  },
  props => ({ background: props.background })
)

const LetterBlock = styled.div({
  height: 30,
  width: 30,
  fontWeight: `bold`,
  fontFamily: options.headerFontFamily.join(`,`)
})

const Col = styled.div({
  float: `left`,
  marginRight: 3,
  textAlign: `center`
})

const Colors = () => (
  <Container>
    <Header>Colors</Header>
    <div>
      <Col>
        <LetterBlock />
        {range(0, 16).map(a => <LetterBlock key={a}>{a}</LetterBlock>)}
      </Col>
      <Col>
        <LetterBlock>a</LetterBlock>
        {colors.a.map(a => <ColorBlock key={a} background={a} />)}
      </Col>
      <Col>
        <LetterBlock>b</LetterBlock>
        {colors.b.map(a => <ColorBlock key={a} background={a} />)}
      </Col>
      <Col>
        <LetterBlock>c</LetterBlock>
        {colors.c.map(a => <ColorBlock key={a} background={a} />)}
      </Col>
    </div>
  </Container>
)

export default Colors
