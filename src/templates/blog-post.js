import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Container, TweetSection, TagsSection } from '../components'
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
      {post.frontmatter.image &&
        !(post.frontmatter.showImageInArticle === false) && (
          <ImageContainer>
            <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
            {post.frontmatter.imageAuthor &&
              post.frontmatter.imageAuthorLink && (
                <em>
                  Image by{` `}
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
      <TagsSection tags={post.frontmatter.tags} />
      <TweetSection
        text={post.frontmatter.title}
        via={siteMetadata.authorTwitter}
        siteUrl={siteMetadata.siteUrl}
      />
    </Container>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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
        showImageInArticle
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
