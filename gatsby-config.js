const path = require("path")
module.exports = {
  siteMetadata: {
    title: `BicoccaHUB`,
    description: `La più grande collezione di appunti del corso di informatica degli studenti della Bicocca`,
    author: `@kowalski7cc, @amarusofia, @dlcgold, @daverhapsody`,
    siteUrl: "https://bicoccahub.netlify.app",
    version: "2.3.2",
    repoUrl: "https://github.com/BicoccaHUB/bicoccahub",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, "src", "data"),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bicoccahub.netlify.app`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BicoccaHUB`,
        short_name: `BicoccaHUB`,
        start_url: `/`,
        lang: "it",
        description:
          "La più grande collezione di appunti del corso di informatica degli studenti della Bicocca",
        background_color: `#008450`,
        theme_color: `#fff`,
        display: `standalone`,
        // display: `browser`,
        icon: `src/favicon.svg`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "green",
        showSpinner: false,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-catch-links",
    `gatsby-plugin-offline`,
  ],
}
