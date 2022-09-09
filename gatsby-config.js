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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Another Techs",
        short_name: "anothertechs",
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
            options: {
              theme: "night-owl",
            },
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
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about`,
          `/linux`,
          `/reviews`,
          `/techs`,
          `/softwares`,
          `/programming`,
          `/crypto`,
        ],
      },
    },
      /*
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-WY6TT5EQVC", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    */
  ],
};
