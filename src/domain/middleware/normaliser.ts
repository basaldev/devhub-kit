export function sortPostTypes(group: Array<{ edges: Array<any> }>) {
  const posts = {}
  group.map(postType => {
    debugger
    const name = postType.edges[0].node.frontmatter.posttype
    posts[name] = postType.edges
  })
  return posts
}
