module.exports = {
  siteMetadata: {
    title: 'Sean Miller Portfolio',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/public/static`,
        name: 'images'
      }
    },
],
  pathPrefix: '/public',
}
