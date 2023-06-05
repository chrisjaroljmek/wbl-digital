// .storybook/main.js|ts

import { mergeConfig } from "vite";
export default {
  stories: ["../src/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
