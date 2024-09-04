"use client"

import { useState } from "react"
import { Toaster } from "sonner"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { ThemeProvider } from "~/components/theme-provider"
import { Scraper } from "~components"
import { Button } from "~components/ui/button"

import "~styles/style.css"

export default function Popup() {
  const [url, setUrl] = useState<string>("")

  useIsomorphicLayoutEffect(() => {
    chrome.tabs
      .query({
        active: true,
        currentWindow: true
      })
      .then((tabs) => {
        if (tabs[0]?.url) {
          setUrl(tabs[0].url)
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="w-[450px] p-0 bg-background text-foreground rounded-xl h-[600px]">
        <Scraper initialUrl={url} />
      </div>
      <Toaster position={`top-center`} />
    </ThemeProvider>
  )
}
