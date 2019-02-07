> ![Exo Devhub](docs/logo.svg)
>
> A Base setup of gatsby with grommet and typescript



## Tech Stack

⚡ [now.sh](https://zeit.co/now) Deployment

👩‍🎤 Emotion JSS for Styling

⚙️ Grommet for components

🗒️ Gastby for blog

---

Based of gatsby-starter-blog-grommet by [Ivan Ganev](mailto:iganevru@gmail.com)

### Setting up conintuous now deployment

The `now.json` is in the root of the project. This sets the name and the build settings. they are already setup for gastby

- Install now under your account or org
- Under Settings > **Installed Github Apps** configure now to look at your repo
- Make sure you have a `now-build`  script inside your package.json
- Once it is setup create a pull request from develop into master, you will get a *now.sh link.*

### Styling Grommet







### SEO



### Post types

to create new types of markdown files, you need to update some files.

**Step 1**
Create your folder under `content`.
Example

```
content/people
```

Include an example of the posttype for testing, using your posttype name in the frontmatter.
Example:

```markdown
---
name: cool guy larry
twitter: coolGuyLarryintonthethird
posttype: people
---
```
**Step 2**

Create a file using that same posttype name under templates. Make sure your the below are both unique.

- pageQuery
- default export

your post type is now working and you can filter it using something like this.

```js
allMarkdownRemark(filter:{frontmatter:{posttype:{eq:"people"}}})
```

**Step 3** *(optional)*

inside `./gatsby-template-selector`  you can change the `slug` and add or remove additional context to your post type. this is useful if you want something like previous or next buttons. this file can also be used to create category and tag styles from your post types.



