const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: "/download.html",
    toPath: "/download",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/privacy-policy.html",
    toPath: "/privacy-policy",
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/terms-and-conditions.html",
    toPath: "/terms-and-conditions",
    isPermanent: true,
  });

  const blogPost = path.resolve(`./src/templates/BlogPost/index.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const slug = post.node.fields.slug;

    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug: slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    console.log("node", node);
    const value = `/blog${createFilePath({ node, getNode })}`;
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
