import React from "react";
import Helmet from "react-helmet";
import { get } from "lodash";

import { rhythm, options } from "../utils/typography";
import { Container, BlogPostPreviewItem } from "../components";
import presets from "../utils/presets";
import colors from "../utils/colors";
import logo from "../logo.svg";

const Posts = ({ data }) => {
  const blogs = get(data, "allMarkdownRemark.edges", []);

  return (
    <div
      css={{
        [presets.Tablet]: {
          background: colors.ui.whisper,
          paddingBottom: rhythm(options.blockMarginBottom * 4)
        }
      }}
    >
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Container
        css={{
          [presets.Tablet]: {
            background: `url(${logo})`,
            paddingBottom: `${rhythm(
              options.blockMarginBottom * 4
            )} !important`,
            backgroundSize: `30px 30px`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `bottom center`
          }
        }}
      >
        {blogs.map(({ node }) => (
          <BlogPostPreviewItem
            post={node}
            key={node.fields.slug}
            css={{
              marginBottom: rhythm(options.blockMarginBottom),
              [presets.Tablet]: {
                background: `#fff`,
                borderRadius: presets.radiusLg,
                boxShadow: `0 3px 10px rgba(25, 17, 34, 0.05)`,
                padding: rhythm(options.blockMarginBottom * 1),
                paddingLeft: rhythm(options.blockMarginBottom * 2),
                paddingRight: rhythm(options.blockMarginBottom * 2),
                marginLeft: rhythm(-options.blockMarginBottom * 2),
                marginRight: rhythm(-options.blockMarginBottom * 2),
                transition: `transform ${presets.animation.speedDefault} ${
                  presets.animation.curveDefault
                },  box-shadow ${presets.animation.speedDefault} ${
                  presets.animation.curveDefault
                }, padding ${presets.animation.speedDefault} ${
                  presets.animation.curveDefault
                }`,
                "&:hover": {
                  transform: `translateY(-4px)`,
                  boxShadow: `0 10px 42px rgba(25, 17, 34, 0.1)`
                },
                "&:active": {
                  boxShadow: `0 3px 10px rgba(25, 17, 34, 0.05)`,
                  transform: `translateY(0)`,
                  transition: `transform 50ms`
                }
              },
              [presets.Desktop]: {},
              [presets.Hd]: {}
            }}
          />
        ))}
      </Container>
    </div>
  );
};

export default Posts;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`;
