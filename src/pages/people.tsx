import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import CardPost from '../components/CardPost'
import Layout from '../components/Layout'

interface PeopleIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
    allMarkdownRemark: {
      edges: Array<any>
    }
  }
}

const PeopleIndex = ({ data }: PeopleIndexProps) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout
      seo={{
        isPost: false,
      }}
    >
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <main>
        {posts.map(({ node }: any) => {
          return (
            <div key={node.fields.slug}>
              <CardPost
                link={node.fields.slug}
                title={node.frontmatter.fullName}
                date={node.frontmatter.date}
                cover={node.frontmatter.image}
                excerpt={''}
              />
            </div>
          )
        })}
      </main>
    </Layout>
  )
}

export default PeopleIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "person" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            fullName
            posttype
            image
          }
        }
      }
    }
  }
`
