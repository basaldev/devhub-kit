import { graphql } from 'gatsby';
import * as _ from 'lodash/fp';
import * as React from 'react';
import Helmet from 'react-helmet';
import CardPost from '../components/CardPost';
import Layout from '../components/Layout';
import { CheckBox, RadioButton } from 'grommet';
import { Inbox} from 'grommet-icons';

interface BlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    allMarkdownRemark: {
      edges: Array<any>;
    };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout seo={{
      isPost: false
    }} > {/* default SEO */}
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <main>
        <CheckBox  checked={true} readOnly />
        <RadioButton name="testing" checked={true} readOnly/>
        <CheckBox  checked={true} toggle readOnly />
        <Inbox size="small" />
        {posts.map(({ node }: any) => {
          const title = _.getOr(
            node.frontmatter.title,
            'frontmatter.title',
            node
          );
          return (
            <div key={node.fields.slug}>
              {node.frontmatter.cover === null ? (
                <CardPost
                  link={node.fields.slug}
                  title={title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt}
                />
              ) : (
                  <CardPost
                    link={node.fields.slug}
                    title={title}
                    date={node.frontmatter.date}
                    excerpt={node.excerpt}
                  />
                )}
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter:{frontmatter:{posttype:{eq:"post"}}},
      sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            posttype
          }
        }
    }
  }
  }
`;
