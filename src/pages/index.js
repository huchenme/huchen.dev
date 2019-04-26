import React from 'react'
import styled from 'react-emotion'
import { Link as GatsbyLink } from 'gatsby'

import { rhythm, colors } from '../utils'
import { Layout, Container } from '../components'

const Line = styled.section({
  marginBottom: rhythm(1),
  ':last-child': {
    marginBottom: 0
  },
  ul: {
    margin: '1rem 0 1rem 1.5rem'
  },
  li: {
    marginBottom: 'calc(2rem / 4)'
  }
})

const Title = styled.h1`
  margin-top: 0;
`

const Header = styled.h3({
  marginTop: rhythm(1.5),
  marginBottom: rhythm(0.5),
  color: colors.b[7]
})

const Divider = styled.hr({
  marginBottom: rhythm(1)
})

const Link = ({ title, desc, href, gatsbyLink = false }) => {
  const link = gatsbyLink ? (
    <GatsbyLink to={href}>{title}</GatsbyLink>
  ) : (
    <a href={href}>{title}</a>
  )

  return (
    <li>
      {desc ? (
        <>
          {link} - {desc}
        </>
      ) : (
        link
      )}
    </li>
  )
}

const HomePage = () => (
  <Layout>
    <Container>
      <Title>Hi, I’m Hu Chen</Title>
      <Line>
        I’m an inter-disciplinary frontend engineer, occasional designer and
        adventurer living in Singapore. I code in Javascript (React, React
        Native), Ruby and design in Sketch.
      </Line>
      <Header>Recent Projects</Header>
      <Line>
        <ul>
          <Link
            title="Hacker Tab"
            href="https://github.com/huchenme/hacker-tab-extension"
            desc="Chrome extension to replace new tab screen with GitHub trending projects"
          />
          <Link
            title="github-trending-api"
            href="https://github.com/huchenme/github-trending-api"
            desc="An unofficial API for GitHub trending projects"
          />
          <Link
            gatsbyLink
            title="Whatsapp Direct"
            href="/whatsapp"
            desc="Helps you send Whatsapp messages without creating a
            new contact (mobile)"
          />
        </ul>
      </Line>
      <Header>Other Links</Header>
      <Line>
        <ul>
          <Link
            gatsbyLink
            title="Gears"
            href="/blog/gears-as-an-engineer/"
            desc="Links to all the stuff I use as developer and designer"
          />
          <Link
            title="GitHub"
            href="https://github.com/huchenme/"
            desc="I have a bunch of projects on here :)"
          />
          <Link
            title="Writing"
            href="https://medium.com/@chen"
            desc="My writings on Medium.com"
          />
          <Link
            title="Unsplash"
            href="https://unsplash.com/@huchenme"
            desc="My photos on Unsplash (free license to use and download)"
          />
          <Link
            title="New Zealand"
            href="http://nz.huchen.dev/"
            desc="A hand made website with story of my 23 days in New Zealand"
          />
          <Link title="Twitter" href="https://twitter.com/huchenme" />
          <Link title="LinkedIn" href="https://www.linkedin.com/in/huchenme/" />
          <Link title="Instagram" href="https://www.instagram.com/huchenme" />
        </ul>
      </Line>
      <Divider />
      <Line>
        <a href="mailto:chen@huchen.me">Say hi</a> to chen@huchen.dev
      </Line>
    </Container>
  </Layout>
)

export default HomePage
