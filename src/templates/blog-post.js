import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Container } from "../components";
import presets from "../utils/presets";
import { rhythm } from "../utils/typography";

// eslint-disable-next-line complexity
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const siteMetadata = data.site.siteMetadata;
  const description = post.frontmatter.excerpt
    ? post.frontmatter.excerpt
    : post.excerpt;
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
            content={`${siteMetadata.url}${
              post.frontmatter.image.childImageSharp.resize.src
            }`}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={siteMetadata.authorTwitter} />
        {post.frontmatter.image && (
          <meta
            name="twitter:image"
            content={`${siteMetadata.url}${
              post.frontmatter.image.childImageSharp.resize.src
            }`}
          />
        )}
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${post.timeToRead} min read`} />
      </Helmet>
      <h1
        css={{
          marginTop: 0,
          [presets.Desktop]: {
            marginBottom: rhythm(5 / 4)
          }
        }}
      >
        {post.frontmatter.title}
      </h1>
      {post.frontmatter.image &&
        !(post.frontmatter.showImageInArticle === false) && (
          <div
            css={{
              marginBottom: rhythm(1)
            }}
          >
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
          </div>
        )}
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Container>
  );
};

export default BlogPostTemplate;

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
        url
      }
    }
  }
`;
