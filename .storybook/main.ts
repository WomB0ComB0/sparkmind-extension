import path from "path"
import type { StorybookConfig } from "@storybook/react-vite"
import dotenv from "dotenv"
import { mergeConfig } from "vite"

dotenv.config()

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        "process.env": {
          PLASMO_PUBLIC_GOOGLE_AI_API_KEY: JSON.stringify(
            process.env.PLASMO_PUBLIC_GOOGLE_AI_API_KEY
          )
        }
      },
      resolve: {
        alias: [
          { find: "~", replacement: path.resolve(__dirname, "../src") },
          {
            find: "~util",
            replacement: path.resolve(__dirname, "../src/util")
          },
          { find: "~lib", replacement: path.resolve(__dirname, "../src/lib") },
          {
            find: "~components",
            replacement: path.resolve(__dirname, "../src/components")
          },
          {
            find: "~constants",
            replacement: path.resolve(__dirname, "../src/constants")
          }
        ]
      }
    })
  }
}

export default config
