module.exports = {
  siteMetadata: {
    title: "Another Techs",
    siteUrl: "https://anothertechs.com",
    titleTemplate: "%s | Another Techs",
    author: "Hatim",
    keywords: [
      "Blogs",
      "articles",
      "Crypto",
      "cryptocurrency",
      "nerds",
      "nerd",
      "programming",
      "code",
      "machine learning",
      "AI",
      "artificial intelligence",
      "stackoverflow",
      "bufferoverflow",
      "articles",
      "android",
      "ios",
      "C",
      "C++",
      "python",
      "flask",
      "react",
      "gatsby",
      "angular",
      "js",
      "javascript",
      "geek",
      "rust",
      "Java",
      "C#",
      "C sharp",
      "technology",
      "analysis",
      "technical analysis",
      "snippet",
      "tricks",
      "tips",
      "apple",
      "linux",
      "bash",
      "distros",
      "ubuntu",
      "fedor",
      "arch",
      "money",
      "invest",
      "investment",
      "rich",
      "tutorials",
      "weather",
      "speed",
      "satta",
      "meaning",
      "github",
      "Neural Network",
      "covid",
      "corona virus",
      "reviews",
      "news",
      "articles",
      "stock",
      "what",
      "where",
      "tutorials",
      "tutorial",
      "how",
      "when",
      "time",
    ],
    image: `${__dirname}/src/images/icon.png`,
    description:
      "Blogs about many things, including, but not limited to  programming languages, Framework, Machine Learning, AI,cryptocurrency,Tech Related Blogs,Research, Tips and Tricks and many more related topics",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://anothertechs.com`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://anothertechs.com`,
        sitemap: `https://anothertechs.com/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        output: "/sitemap.xml",
        entryLimit: 100,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-WY6TT5EQVC"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: (fluidResult) =>
                `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blogs",
        path: `${__dirname}/src/blogs/`,
      },
      __key: "blogs",
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-2965086569594457`,
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `production`,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: `development`,

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: false,

        // boolean (defaults to false) on whether to load segment
        // after a user action (scroll or route change) + delay
        // this will bring down your TTI but you might miss 1 second of data.
        // see here for more info on TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        delayLoad: false,

        // time to wait after scroll action in ms. Defaults to 1000ms
        delayLoadTime: 1000,
      },
    },
  ],
};
