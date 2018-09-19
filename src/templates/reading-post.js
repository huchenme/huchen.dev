import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import { Container, TweetSection, Divider } from '../components'
import { rhythm, presets, colors } from '../utils'

const Header = styled.div({
  textAlign: 'center',
  [presets.Desktop]: {
    marginBottom: rhythm(5 / 4)
  }
})

const Title = styled.h1({
  marginTop: 0,
  marginBottom: 0
})

const Subtitle = styled.div`
  font-style: italic;
  margin-top: ${rhythm(1 / 4)};

  & strong {
    color: ${colors.gatsby};
  }
`

const ImageBlockContainer = styled.div({
  marginBottom: rhythm(1.5)
})

const ImageContainer = styled.div({
  margin: '0 auto',
  maxWidth: '50%',
  borderRadius: 6,
  boxShadow: `${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(
    1
  )} 4px rgba(0,0,0,0.3)`,
  overflow: 'hidden',
  [presets.Desktop]: {
    maxWidth: rhythm(8)
  }
})

export default class ReadingPostTemplate extends React.Component {
  getAuthorNameSeparator = (index, authorsLength) => {
    if (index < authorsLength - 2) {
      return ', '
    } else if (index === authorsLength - 2) {
      return ' and '
    } else {
      return ''
    }
  }

  renderAuthorNames = authors => {
    return (
      <Subtitle>
        Written By{' '}
        {authors.map((author, index) => (
          <span key={author}>
            <strong key={author}>{author}</strong>
            {this.getAuthorNameSeparator(index, authors.length)}
          </span>
        ))}
      </Subtitle>
    )
  }

  // eslint-disable-next-line complexity
  render() {
    const { data } = this.props

    const post = data.markdownRemark
    const siteMetadata = data.site.siteMetadata
    const description = post.frontmatter.excerpt
      ? post.frontmatter.excerpt
      : post.excerpt
    return (
      <Container>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={description} />
          <meta name="article:author" content={siteMetadata.authorName} />
          <meta name="author" content={siteMetadata.authorName} />
          <meta
            name="article:published_time"
            content={post.frontmatter.rawDate}
          />
          <meta name="og:type" content="article" />
          <meta name="og:description" content={description} />
          <meta name="og:title" content={post.frontmatter.title} />
          {post.frontmatter.image && (
            <meta
              name="og:image"
              content={`${siteMetadata.siteUrl}${
                post.frontmatter.image.childImageSharp.resize.src
              }`}
            />
          )}
          <meta name="twitter:title" content={post.frontmatter.title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:creator"
            content={`@${siteMetadata.authorTwitter}`}
          />
          {post.frontmatter.image && (
            <meta
              name="twitter:image"
              content={`${siteMetadata.siteUrl}${
                post.frontmatter.image.childImageSharp.resize.src
              }`}
            />
          )}
        </Helmet>
        {post.frontmatter.image && (
          <ImageBlockContainer>
            <ImageContainer>
              <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
            </ImageContainer>
          </ImageBlockContainer>
        )}
        <Header>
          <Title>{post.frontmatter.title}</Title>
          {post.frontmatter.authors &&
            this.renderAuthorNames(post.frontmatter.authors)}
        </Header>
        <Divider />
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <TweetSection
          text={post.frontmatter.title}
          via={siteMetadata.authorTwitter}
          siteUrl={siteMetadata.siteUrl}
        />
      </Container>
    )
  }
}

export const query = graphql`
  query ReadingPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        rawDate: date
        excerpt
        authors
        image {
          childImageSharp {
            resize(width: 1500, height: 800) {
              src
            }
            sizes(maxWidth: 786) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        authorTwitter
        authorName
        siteUrl
      }
    }
  }
`
