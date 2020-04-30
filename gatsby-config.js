require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `New project`,
    description: `undefined`,
    author: `Roland Branten`,
    //siteUrl: ``,
  },
  plugins: [
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        hooks: path.join(__dirname, "src/hooks"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `new`,
        short_name: `new`,
        start_url: `/`,
        background_color: `#fbf4ea`,
        theme_color: `#fbf4ea`,
        display: `standalone`,
        icon: `icon/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
