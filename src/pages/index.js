import React from 'react'
import Link from 'gatsby-link'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const Line = styled.section`
  margin-bottom: ${rhythm(1)};

  &:last-child {
    margin-bottom: 0;
  }
`

const Divider = styled.hr`
  marginBottom: ${rhythm(1)}
`

const HomePage = () => (
  <div>
    <Line>
      I'm Hu Chen, an inter-disciplinary frontend engineer, designer and
      adventurer living in Singapore and sometimes travelling.
    </Line>
    <Line>
      I code in Javascript (React, Redux, React Native), Ruby and design in
      Sketch.
    </Line>
    <Line>
      I made <a href="/nz/">a website</a> with stories in my 23 days New Zealand
      trip and a web product lanquan to help everyone easily create story like
      mine. Other than that I made a React Native app Pack to help people pack
      things for trips and a site called dodohub to help people building habits.
    </Line>
    <Line>
      <a href="mailto:chen@huchen.me">Say hi</a>, or find my photos on{' '}
      <a href="https://www.instagram.com/huchenme">Instagram</a>, my code on{' '}
      <a href="https://github.com/huchenme/">GitHub</a> and my profile on{' '}
      <a href="https://www.linkedin.com/in/huchenme/">LinkedIn</a>.
    </Line>
    <Divider />
    <Line>
      This site was built in Gatsby and hosted on{' '}
      <a href="https://github.com/huchenme/huchenme.github.io">GitHub</a>. And
      obviously, it is still under{' '}
      <a href="https://github.com/huchenme/huchenme.github.io/issues/1">
        construction
      </a>.
    </Line>
  </div>
)

export default HomePage
