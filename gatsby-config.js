module.exports = {
  siteMetadata: {
    title: "Another Techs",
    url: "https://anothertechs.com",
    titleTemplate: "%s · Wisdom for nerds",
    author: "Hatim",
    image:
      "https://anothertechs.com/static/about_phot-3af4d7af10290361c408910909a8fcc2.webp",
    description:
      "Articles/Blogs about many things, including, but not limited to linx,bash,commands,computer,ardino,chips,software,github, programming languages, Framework, Machine Learning, AI,cryptocurrency,bitcoin,altcoin, Javascript,C/C++,python,modules,react,gatsby,numpy,tensorflow,flask,angular,reviews,pytorch,libraries,crypto,android,ios, ,Tech Related Blogs,Research, Tips and Tricks and many more related topics",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
        icon: "src/images/icon.png",
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
        path: "src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "src/blogs/",
      },
      __key: "blogs",
    },
  ],
};
