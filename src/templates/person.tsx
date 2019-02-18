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

const PeoplePost = ({ data }: PostProps) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = post.excerpt
  return (
    <Layout seo={{ isPost: true, node: post }}>
      <div>
        <article>
          <Box margin="small">
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={post.frontmatter.title + '|' + siteTitle}
            />
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
          <Box direction="row" justify="center" gap="large" margin="large" />
        </aside>
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
