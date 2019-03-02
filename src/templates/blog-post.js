import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Layout, Container, TweetSection } from '../components'
import { rhythm, presets } from '../utils'

const H1 = styled.h1({
  marginTop: 0,
  [presets.Desktop]: {
    marginBottom: rhythm(5 / 4)
  }
})

const ImageContainer = styled.div({
  marginBottom: rhythm(1)
})

// eslint-disable-next-line complexity
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteMetadata = data.site.siteMetadata
  const description = post.frontmatter.excerpt
    ? post.frontmatter.excerpt
    : post.excerpt
  return (
    <Layout>
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
          <meta name="twitter:card" content="summary_large_image" />
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
        <H1>{post.frontmatter.title}</H1>
        {post.frontmatter.image && (
          <ImageContainer>
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
            {post.frontmatter.imageAuthor && post.frontmatter.imageAuthorLink && (
              <em>
                Image by
                {` `}
                <OutboundLink href={post.frontmatter.imageAuthorLink}>
                  {post.frontmatter.imageAuthor}
                </OutboundLink>
              </em>
            )}
          </ImageContainer>
        )}
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <TweetSection
          text={post.frontmatter.title}
          via={siteMetadata.authorTwitter}
          siteUrl={siteMetadata.siteUrl}
          buttonText="Comment"
        />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        rawDate: date
        excerpt
        tags
        imageAuthor
        imageAuthorLink
        image {
          childImageSharp {
            resize(width: 1500, height: 800) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
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
