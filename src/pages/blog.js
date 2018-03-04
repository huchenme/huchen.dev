import React from "react";
import Link from "gatsby-link";

import { rhythm } from "../../utils/typography";

const Posts = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges;

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4)
            }}
          >
            <Link style={{ boxShadow: "none" }} to={blog.node.fields.slug}>
              {blog.node.frontmatter.title}
            </Link>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
        </div>
      ))}
    </div>
  );
};

export default Posts;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;
