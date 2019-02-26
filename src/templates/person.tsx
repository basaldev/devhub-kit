import { graphql } from 'gatsby'
import { Box, Heading, Image, Text } from 'grommet'
import * as _ from 'lodash/fp'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

interface PostProps {
  data: {
    markdownRemark: {
      excerpt: string
      frontmatter: {
        fullName: string
        image: string
        date?: string
      }
      html: string
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  pageContext: {
    previous: any
    next: any
  }
}

const PeoplePost = ({ data }: PostProps) => {
  const post = data.markdownRemark
  return (
    <Layout seo={{ isPost: true, node: post }}>
      <div>
        <article>
          <Box margin="small">
            <img src={post.frontmatter.image} />
            <Heading>{post.frontmatter.fullName}</Heading>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Box>
        </article>
      </div>
    </Layout>
  )
}

export default PeoplePost

export const pageQuery = graphql`
  query PeoplePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        fullName
        image
      }
    }
  }
`
