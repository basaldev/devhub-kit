import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'

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
          <Grid container direction="column">
            <Grid item>
              <img src={post.frontmatter.image} />
            </Grid>
            <Grid item>
              <Typography variant="h2">{post.frontmatter.fullName}</Typography>
            </Grid>
            <Grid item>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Grid>
          </Grid>
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
