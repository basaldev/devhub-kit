import { graphql, navigate } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import React from 'react'

import Layout from '../components/Layout'

interface BlogPostProps {
  data: {
    markdownRemark: {
      excerpt: string
      frontmatter: {
        title: string
        cover?: {
          childImageSharp: { fluid: { src: string } }
        }
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

const blogPost = ({ data, pageContext: { previous, next } }: BlogPostProps) => {
  const post = data.markdownRemark
  return (
    <Layout seo={{ isPost: true, node: post }}>
      <div>
        <article>
          <Grid>
            <div>
              <header>
                <Grid>
                  <Typography variant="h3">{post.frontmatter.title}</Typography>
                  <Typography variant="body2">
                    {post.frontmatter.date}
                  </Typography>
                </Grid>
              </header>
            </div>
            <Grid>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Grid>
          </Grid>
        </article>
        <aside>
          <Grid container direction="row" justify="center">
            {previous && (
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (previous.fields.slug)
                      navigate(`${previous.fields.slug}`)
                  }}
                >
                  <ArrowBackIosIcon />
                  Older Posts
                </Button>
              </Grid>
            )}

            {next && (
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (next.fields.slug) navigate(`${next.fields.slug}`)
                  }}
                >
                  <ArrowForwardIosIcon />
                  Newer Posts
                </Button>
              </Grid>
            )}
          </Grid>
        </aside>
      </div>
    </Layout>
  )
}

export default blogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
