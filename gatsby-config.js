module.exports = {
  siteMetadata: {
    title: `Responsively App`,
    description: `A dev-tool that aids faster and precise responsive web development.`,
    siteUrl: `https://responsively.app/`,
    social: {
      image: "https://responsively.app/assets/img/responsively-image.png",
      twitter: `ResponsivelyApp`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-150751006-2`,
      },
    },
    {
      resolve: `gatsby-plugin-heap`,
      options: {
        appId: `3340058302`,
        enableOnDevMode: false,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Responsively Blog`,
        short_name: `Responsively`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/img/responsively-logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-advanced-sitemap`,
  ],
};
