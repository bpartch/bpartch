module.exports = {
  siteMetadata: {
    title: 'Ben Partch',
    description:
      'Ben Partch is a front end developer in Dallas, TX',
    url: 'https://www.benpartch.org',
    author: 'Ben Partch',
    intro: 'Ben Partch is a front end developer in Dallas, TX',
    menuLinks: [
      {
        name: 'Ben Partch',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/benpartch',
      },
      {
        name: 'Github',
        url: 'https://github.com/bpartch',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
  ],
}
