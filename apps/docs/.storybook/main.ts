import { dirname, join, resolve } from "path";

import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: [
    "../stories/*.stories.tsx",
    "../stories/**/*.stories.tsx",
    "../../../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },

  core: {},

  async viteFinal(config) {
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
} satisfies StorybookConfig;

export default config;
