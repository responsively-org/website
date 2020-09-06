import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GallaxyBG from "../../components/GallaxyBG";
import Bio from "../../components/Bio";

import "./style.scss";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="bg-primary-3">
        <GallaxyBG />
        <section className="BlogPost contentWithBG has-divider">
          <div className="BlogPost__content container text-light ">
            <article>
              <header>
                <h1>{post.frontmatter.title}</h1>
                <p>
                  By{" "}
                  <a
                    href={post.frontmatter.authorTwitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {post.frontmatter.author}
                  </a>
                  &nbsp;on {post.frontmatter.date}
                </p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <Bio
                name={post.frontmatter.author}
                pic={post.frontmatter.authorPic}
                twitter={post.frontmatter.authorTwitterUrl}
              />
            </article>

            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        authorPic
        authorTwitterUrl
      }
    }
  }
`;
