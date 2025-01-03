<!-- Original file: https://www.iconfinder.com/icons/4394350/logo_logos_markdown_icon -->
<h1 align="center">
  <a href="https://mdshare.vercel.app">
    <img alt="Markdown" src="./public/favicon.svg" width="140" /><br/>
  </a>
  .mdShare
</h1>

<h3 align="center">
  Best way to share your markdown files.
</h3>

<p align="center">
  <a href="https://github.com/donBarbos/mdshare/tags"><img alt="GitHub tag (latest SemVer)" src="https://img.shields.io/github/v/tag/donBarbos/mdshare"></a>
  <a href="https://codecov.io/gh/donBarbos/mdshare" ><img alt="Coverage Status" src="https://codecov.io/gh/donBarbos/mdshare/branch/main/graph/badge.svg?token=0O5750DY6J"/></a>
  <a href="https://github.com/donBarbos/mdshare/actions/workflows/ci.yml"><img alt="CI Status" src="https://github.com/donBarbos/mdshare/actions/workflows/ci.yml/badge.svg"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
  <a href="https://github.com/donBarbos/mdshare/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg" alt="License"></a>
</p>

## 📄 Share and Collaborate Effortlessly with .mdShare

Tired of struggling to share and collaborate on Markdown files? Finding it cumbersome to manage multiple versions of the same document while working with others? Look no further! Introducing **.mdShare**, the ultimate self-hosted solution for hassle-free Markdown file sharing and collaboration.

## 💡 The Challenge: Sharing Markdown Files Made Difficult

The **.mdShare** Solution: Simplify Markdown File Sharing. Effortless Sharing: Upload your Markdown files with a few clicks, preserving all the formatting, making it convenient for you.

## 🚀 Getting Started

### How to deploy locally:

- make sure `mongodb` is running

- set up variables in `.env` file, check table [Settings](#%EF%B8%8F-settings)

- Install dependens:

  ```bash
  yarn install
  ```

- Build your application:

  ```bash
  yarn build
  ```

- Start the Node.js server:

  ```bash
  yarn start
  ```

- And you can check the site on [`localhost:3000`](http://localhost:3000)

### Use the app (deploy to vercel and mongo atlas):

You can choose to use the hosted version (also don't forget to set up environment variables)

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FdonBarbos%2Fmdshare) - Use it to host your frontend and backend.
- [![Deploy Mongo Cloud](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas/database) - Use it for free for mongodb instance.
- [💎 GISCUS](https://giscus.app/) - To support comments, you need to specify your open repo with discussions and log in.

## ⚙️ Settings

|       variable       | description                                                                                                                            |
| :------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
|      `APP_URL`       | URL of your application such as your domain `https://example.com` or `http://localhost:3000` (needed for SEO and generate links)       |
|     `MONGO_HOST`     | host is the server where your mongodb server is running                                                                                |
|     `MONGO_PORT`     | port that mongodb server is listening on                                                                                               |
|     `MONGO_USER`     | user is an account that is used to authenticate and access the database                                                                |
|    `MONGO_PASSWD`    | password is used to authenticate the user who is accessing the database                                                                |
|   `MONGO_DATABASE`   | name of the mongodb database that your application will connect to                                                                     |
|     `MONGO_URI`      | you can specify the connection string for a mongodb database instead of the previous variables (has higher priority, empty by default) |
|    `GISCUS_USER`     | GitHub username of the Giscus user managing the comments                                                                               |
|    `GISCUS_REPO`     | GitHub repository where Giscus will store comments                                                                                     |
|   `GISCUS_REPO_ID`   | Unique ID of the repository specified for Giscus to operate                                                                            |
| `GISCUS_CATEGORY_ID` | Unique ID of the discussion category in the repository                                                                                 |

## 🔧 Tech Stack

- `TypeScript` — syntactic superset of JavaScript which adds static typing.
- `React` — library for building user interfaces based on components.
- `Next.js` — framework that allows you to create React applications that you can render on the server.
- `Testing Library` — very light-weight solution for testing without all the implementation details.
- `MongoDB` — NoSQL database that stores data in JSON-like documents.
- `PostCSS` — tool for transforming CSS with JavaScript-based plugins.
- `markdown-it` — markdown parser to generate HTML.
- `giscus` — comments system powered by GitHub Discussions.

## 🤝 Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## 📝 License

Distributed under the AGPL-3.0 license. See [`LICENSE`](./LICENSE) for more information.

## 📢 Contact

[donbarbos](https://github.com/donBarbos): donbarbos@proton.me
