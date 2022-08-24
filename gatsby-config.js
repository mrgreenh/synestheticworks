module.exports = {
  siteMetadata: {
    title: `synwrks`,
    description: `Collection of inner visions conjured by music and sound; a bedroom production.`,
    author: `@synestheticworks`,
    siteURL: 'https://www.synestheticworks.com/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-175518114-1',
          cookieName: 'gatsby-gdpr-google-analytics', // default
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://synestheticworks.us20.list-manage.com/subscribe/post?u=44bb194d2a93b310c0f0d7fa1&amp;id=e7bc0bd8ce'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-175518114-1",
    //   },
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["/components"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
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
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
      },
    },
  ],
}
