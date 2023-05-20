const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../apps/frontend/**/*.stories.{js,jsx,ts,tsx,mdx}",
    "../apps/london-js/**/*.stories.{js,jsx,ts,tsx,mdx}",
    "../packages/**/*.stories.{js,jsx,ts,tsx,mdx}",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: "postcss-loader",
          options: { implementation: require.resolve("postcss") },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    // Return the altered config
    return config;
  },
};
