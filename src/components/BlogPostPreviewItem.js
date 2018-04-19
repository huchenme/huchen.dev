import React from "react";
import Link from "gatsby-link";
import { css, cx } from "react-emotion";

import { rhythm, scale, options } from "../utils/typography";
import presets from "../utils/presets";
import colors from "../utils/colors";

const BlogPostPreviewItem = props => {
  const post = props.post;

  return (
    <article
      className={cx(
        css({
          position: `relative`
        }),
        props.className
      )}
    >
      <Link to={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
        <p className={css({ fontWeight: `normal` })}>
          {post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt}
        </p>
      </Link>
      <div
        className={css({
          display: `flex`,
          alignItems: `center`,
          marginBottom: rhythm(1)
        })}
      >
        <div
          className={css({
            display: `inline-block`,
            fontFamily: options.headerFontFamily.join(`,`),
            color: colors.gray.calm,
            ...scale(-2 / 5),
            [presets.Mobile]: {
              ...scale(-1 / 5)
            },
            [presets.Desktop]: {
              ...scale(0)
            }
          })}
        >
          <div>Posted on {post.frontmatter.date}</div>
        </div>
      </div>
      <Link
        to={post.fields.slug}
        className={css({
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: `hidden`,
          textIndent: `-100%`,
          whiteSpace: `nowrap`,
          zIndex: 0,
          "&&": {
            border: 0,
            boxShadow: `none`,
            "&:hover": {
              background: `none`
            }
          }
        })}
      >
        Read more
      </Link>
    </article>
  );
};

export default BlogPostPreviewItem;

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM Do YYYY")
    }
  }
`;
