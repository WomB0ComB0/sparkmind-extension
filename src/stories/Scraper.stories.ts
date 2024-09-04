import type { Meta, StoryObj } from "@storybook/react"

import { Scraper } from "../components"

import "../styles/style.css"

interface ScraperProps {
  initialUrl: string
}

const meta = {
  title: "Components/Scraper",
  component: Scraper,
  argTypes: {
    initialUrl: { control: "text" }
  }
} satisfies Meta<typeof Scraper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialUrl: "https://trinayau.io/"
  }
}

export const EmptyInitialUrl: Story = {
  args: {
    initialUrl: ""
  }
}

export const LoadingState: Story = {
  args: {
    initialUrl: "https://example.com"
  },
  parameters: {
    mockData: {
      isLoading: true
    }
  }
}

export const ErrorState: Story = {
  args: {
    initialUrl: "https://pornhub.com"
  },
  parameters: {
    mockData: {
      error: new Error("Failed to scrape website")
    }
  }
}

export const SuccessfulScrape: Story = {
  args: {
    initialUrl: "https://arxiv.org/abs/2401.00038"
  },
  parameters: {
    mockData: {
      scrapedData: "This is the scraped content from the website.",
      topic: "Example Topic"
    }
  }
}

export const LongUrl: Story = {
  args: {
    initialUrl:
      "https://www.google.com/search?q=CaretSortIcon&rlz=1C1ONGR_enUS1109US1109&oq=CaretSortIcon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBCDMyNTdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
  }
}

export const NonHttpUrl: Story = {
  args: {
    initialUrl: "ftp://example.com"
  }
}
