import { graphql } from 'gatsby'
import { Box, Button, Heading, Image, Text } from 'grommet'
import { Next as NextIcon, Previous as PreviousIcon } from 'grommet-icons'
import * as _ from 'lodash/fp'
import * as React from 'react'

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
          <Box margin="small">
            <div>
              <header>
                {post.frontmatter.cover ? (
                  <Box overflow="hidden">
                    <Box basis="medium" fill={true}>
                      <Image
                        fit="cover"
                        title={post.frontmatter.title}
                        alt={post.frontmatter.title}
                        src={post.frontmatter.cover.childImageSharp.fluid.src}
                      />
                    </Box>
                  </Box>
                ) : (
                  ''
                )}

                <Box pad={{ horizontal: 'medium' }}>
                  <Heading margin={{ top: 'large', bottom: 'small' }} level="1">
                    {post.frontmatter.title}
                  </Heading>
                  <Text margin={{ bottom: 'small' }}>
                    {post.frontmatter.date}
                  </Text>
                </Box>
              </header>
            </div>
            <Box pad={{ horizontal: 'medium' }}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
          </Box>
        </article>
        <aside>
          <Box direction="row" justify="center" gap="large" margin="large">
            {previous && (
              <Button
                href={previous.fields.slug}
                icon={<PreviousIcon />}
                label="Previous"
              />
            )}

            {next && (
              <Button
                href={next.fields.slug}
                icon={<NextIcon />}
                label="Next"
                reverse={true}
              />
            )}
          </Box>
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
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
