import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GallaxyBG from "../../components/GallaxyBG";
import Bio from "../../components/Bio";

import "./style.scss";
import SocialSharer from "../../components/SocialSharer";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={location}
      />
      <div className="bg-primary-3">
        <GallaxyBG />
        <section className="BlogPost contentWithBG has-divider">
          <div className="BlogPost__breadcrumb container text-light">
            <Link to="/blog">Blog</Link> → {post.frontmatter.title}
          </div>
          <div className="BlogPost__content container text-light ">
            <article>
              <header>
                <h1>{post.frontmatter.title}</h1>
                <div className="BlogPost__authorInfo">
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
                  <SocialSharer
                    title={post.frontmatter.title}
                    url={`https://responsively.app${location?.pathname}`}
                  />
                </div>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <div className="BlogPost__authorInfo">
                <Bio
                  name={post.frontmatter.author}
                  pic={post.frontmatter.authorPic}
                  twitter={post.frontmatter.authorTwitterUrl}
                />
                <SocialSharer
                  showCaption={true}
                  title={post.frontmatter.title}
                  url={`https://responsively.app${location?.pathname}`}
                />
              </div>
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
        siteUrl
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
