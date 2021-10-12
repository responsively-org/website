import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GallaxyBG from "../components/GallaxyBG";
import { CarbonAds } from "../components/CarbonAds";
import Contributors from "../components/Contributors";

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
                      <h2>{title}</h2>
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
          <CarbonAds />
          <div class="divider flip-x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              height="96px"
              viewBox="0 0 100 100"
              version="1.1"
              preserveAspectRatio="none"
              class="injected-svg"
              data-src="/assets/img/dividers/divider-3.svg"
              data-inject-svg="true"
            >
              <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
            </svg>
          </div>
          <section class="has-divider bg-white">
            <Contributors />
            <div class="divider flip-x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="96px"
                viewBox="0 0 100 100"
                version="1.1"
                preserveAspectRatio="none"
                class="injected-svg"
                data-src="/assets/img/dividers/divider-3.svg"
                data-inject-svg="true"
              >
                <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
              </svg>
            </div>
          </section>
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
