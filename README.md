> ![Exo Devhub](docs/logo.svg)
>
> Create your blog or static website using GatsbyJS, Styled Components, and Grommet

## Tech Stack

🗒️ [GatsbyJS](https://www.gatsbyjs.org/) for generating your blog front-end (based on [React](https://reactjs.org/))

💅 [Styled Components](https://www.styled-components.com/) for styling your blog

⚙️ [Grommet](https://v2.grommet.io/) for creating useful React components (eg. buttons and menus)

⚡ [Now](https://zeit.co/now) for deploying your blog

⌨️ Written using [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript

Based on [gatsby-starter-blog-grommet](https://www.gatsbyjs.org/starters/Ganevru/gatsby-starter-blog-grommet/) by [Ivan Ganev](mailto:iganevru@gmail.com).

---

### Starting up

Within your CLI, clone the project and move into the project directory:

```
git clone https://github.com/exodevhub/Devhub-kit.git

cd Devhub-kit
```

Install the packages using `npm`:

```
npm install
```

Run the blog:

```
npm start
```

Go to `http://localhost:8000/` to view the blog.

---

### Setting up Continuous Deployment using Now

The `now.json` file is in the root of the project. This sets the name and the build settings. These are already set up for Gatsby.

- Install Now under your account or org
- Under Settings > **Installed Github Apps** configure Now to look at your repo
- Make sure you have a `now-build` script inside your `package.json` file
- Once set up, create a pull request from `develop` into `master`, you will get a _now.sh_ link.

### Styling Grommet

### SEO

### Post types

In order to create new types of markdown files, you need to update some files.

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

**Step 3** _(optional)_

inside `./gatsby-template-selector` you can change the `slug` and add or remove additional context to your post type. this is useful if you want something like previous or next buttons. this file can also be used to create category and tag styles from your post types.
