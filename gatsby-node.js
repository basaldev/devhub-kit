const { createFilePath } = require('gatsby-source-filesystem');
const { templateSelector } = require('./gastby-template-selector');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const allMarkdownRemark = await graphql(
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
                posttype
              }
            }
          }
        }
      }
    `
  );

  function createPagesFun(graphql) {
    const posts = graphql.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
      createPage(templateSelector(post, posts, index));
    });
  }
  await createPagesFun(allMarkdownRemark);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
