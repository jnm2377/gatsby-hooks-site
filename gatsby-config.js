module.exports = {
  siteMetadata: {
    title: "⚓️Getting hooked on hooks",
    description: "A site for learning about React hooks",
    keywords: "react, hooks",
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "⚓️Getting hooked on hooks",
        short_name: "⚓️Getting hooked on hooks",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {},
    },
  ],
};
