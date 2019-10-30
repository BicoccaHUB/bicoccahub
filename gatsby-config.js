const path = require("path")
module.exports = {
  siteMetadata: {
    title: `BicoccaHUB`,
    description: `La più grande collezione di appunti del corso di informatica degli studenti della Bicocca`,
    author: `@kowalski7cc, @amarusofia, @dlcgold, @daverhapsody`,
    siteUrl: "https://bicoccahub.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bicoccahub.netlify.com`,
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
        lang: 'it',
        description: 'La più grande collezione di appunti del corso di informatica degli studenti della Bicocca',
        background_color: `#ffffff`,
        theme_color: `#008450`,
        display: `browser`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
