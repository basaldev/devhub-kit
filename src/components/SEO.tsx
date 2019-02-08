/* eslint-disable react/require-default-props */
import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  postNode: {
    frontmatter: {
      title: string
      date: string
      banner: string
      author: string;
    }
    excerpt: string
  }
  postPath: string
  postSEO: boolean
  config: {
    siteUrl: string;
    company:string;
    logo: string;
    meta: {
      title: string;
      description: string;
      banner: string;
      language: string;
    }
    intergrations: any;
    social: any;
  }
}

const SEO = ({ postNode, postPath, postSEO, config }: Props) => {
  let title
  let description
  let image
  let postURL
  if (postSEO) {
    const postMeta = postNode.frontmatter
    title = postMeta.title // eslint-disable-line prefer-destructuring
    description = postNode.excerpt
    image = postMeta.banner || config.meta.banner;
    postURL = config.siteUrl + postPath //should include /
  } else {
    title = config.meta.title
    description = config.meta.description
    image = config.meta.banner;
  }
  const blogURL = config.siteUrl;
  let schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': blogURL,
      url: blogURL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: config.meta.banner,
      },
    },
  ]
  if (postSEO) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': postURL,
        url: postURL,
        name: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description: description,
        datePublished: postNode.frontmatter.date,
        dateModified: postNode.frontmatter.date,
        author: {
          '@type': 'Person',
          name: postNode.frontmatter.author,
        },
        publisher: {
          '@type': 'Organization',
          name: config.company,
          logo: {
            '@type': 'ImageObject',
            url: config.siteUrl + config.logo,
          },
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': blogURL,
        },
      },
    ]
  }
  const FacebookId = (<meta
    property="fb:app_id"
    content={config.intergrations.facebookId}
  />)
  const TwitterCreator = config.social.twitter ? (<meta
    name="twitter:creator"
    content={config.social.twitter}
  />): null;
  const OgType = postSEO ?  (<meta property="og:type" content="article" />) : null;
  return (
    <Helmet>
      <html lang={config.meta.language} />
      <title>{config.meta.title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:locale" content={config.meta.language} />
      <meta
        property="og:site_name"
        content={config.meta.title}
      />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {OgType}
      {FacebookId}
      {TwitterCreator}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
