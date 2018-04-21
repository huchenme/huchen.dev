import React from 'react'
import styled from 'react-emotion'

import { presets, colors, rhythm } from '../utils'
import twitterIcon from '../assets/icons/icon-twitter.svg'

const StyledSection = styled.div({
  borderTop: `2px solid ${colors.lilac}`,
  paddingTop: rhythm(1),
  marginTop: rhythm(3),

  [presets.Mobile]: {
    marginBottom: rhythm(3)
  }
})

const TweetButton = styled.a`
  .main-body a& {
    background-image: linear-gradient(-134deg, #65d1f9, #2457f5);
    border-radius: 30px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
    color: #fff;
    display: block;
    font-size: 24px;
    line-height: 28px;
    margin: 20px auto 0;
    text-decoration: none;
    padding: 15px 20px 15px 50px;
    position: relative;
    text-align: center;
    transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
    width: 185px;
    border: 0;
    font-weight: bold;

    &:hover {
      background-image: linear-gradient(-134deg, #65d1f9, #2457f5);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }

    ${presets.MobileOnly} {
      transform: scale(0.8);

      &:hover {
        transform: scale(0.8) translateY(-2px);
      }
    }
  }
`

const TweetIcon = styled.span`
  background-image: url(${twitterIcon});
  height: 20px;
  left: 30px;
  position: absolute;
  top: 21px;
  width: 24px;
`

const TweetSection = ({ text = 'I just read this blog', via, siteUrl }) => (
  <StyledSection>
    <p>
      If you found this article was helpful, consider sharing it on Twitter.
    </p>
    <TweetButton
      href={`https://twitter.com/intent/tweet?url=${
        typeof window === 'undefined' ? siteUrl : window.location.href
      }&text=${text}&via=${via}`}
    >
      <TweetIcon />
      <span>Tweet</span>
    </TweetButton>
  </StyledSection>
)

export default TweetSection
