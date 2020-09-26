import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GallaxyBG from "../components/GallaxyBG";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title="Blog">
      <SEO title="Blog" location={location} />
      <div className="bg-primary-3">
        <GallaxyBG />
        <section className="contentWithBG has-divider">
          <div className="container text-light ">
            <h1>Blog</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <article key={node.fields.slug}>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    <header>
                      <h3>{title}</h3>
                      <small>
                        By {node.frontmatter.author} on {node.frontmatter.date}
                      </small>
                    </header>
                    <div style={{ padding: "1rem 0" }}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </div>
                    <p style={{ textDecoration: "underline" }}>Read More →</p>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            authorPic
          }
        }
      }
    }
  }
`;
