const path = require('path')

function postsIndexPrevious(posts, index) {
  const previous = index === posts.length - 1 ? null : posts[index + 1].node
  return previous
}
function postsIndexNext(posts, index) {
  const next = index === 0 ? null : posts[index - 1].node
  return next
}

exports.templateSelector = (post, posts, index) => {
  const template = path.resolve(
    `./src/templates/${post.node.frontmatter.posttype}.tsx`
  )

  switch (post.node.frontmatter.posttype) {
    case 'post':
      return {
        path: post.node.fields.slug,
        component: template,
        context: {
          slug: post.node.fields.slug,
          previous: postsIndexPrevious(posts, index),
          next: postsIndexNext(posts, index),
        },
      }
    default:
      return {
        path: post.node.fields.slug,
        component: template,
        context: {
          slug: post.node.fields.slug,
        },
      }
  }
}
