module.exports = {
  siteMetadata: {
    title: `Leon Perniciaro | Writer, Editor, and Translator`,
    titleTemplate: "%s",
    description: `This is the home page for Leon Perniciaro, editor of Haven Spec.`,
    image: "/logo.png",
    twitterUsername: "@leonperniciaro",
    siteUrl: "https://www.leonperniciaro.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/android-chrome-192x192.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
