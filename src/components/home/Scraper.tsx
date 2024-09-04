import { Check, Copy, Globe, Loader2 } from "lucide-react"
import { memo, useCallback, useState } from "react"
import { toast } from "sonner"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { ScrollArea } from "~/components/ui/scroll-area"
import { PING } from "~/constants"
import type { ScrapeSchema } from "~/schema"
import { fetchDescriptionFromURL } from "~util"

import { AiFrame } from "./AiFrame"

interface ScraperProps {
  initialUrl?: string
}

export const Scraper = memo(({ initialUrl = "" }: ScraperProps) => {
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [websiteData, setWebsiteData] = useState("")
  const [topic, setTopic] = useState("No Topic")
  const [isCopied, setIsCopied] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl)
    }
  }, [initialUrl])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!isValidURL(url)) {
        toast.error("Please enter a valid URL")
        return
      }
      setIsLoading(true)
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => {
          controller.abort()
          throw new Error("Request timed out")
        }, 120000)

        try {
          const response = await fetch(`${PING}${encodeURIComponent(url)}`, {
            method: "GET",
            signal: controller.signal
          })

          if (!response.ok) {
            throw new Error(
              `HTTP error! status: ${response.status}, statusText: ${response.statusText}`
            )
          }

          const data = (await response.json()) as ScrapeSchema

          if (data && data.filteredTexts) {
            const websiteDataText = data.filteredTexts.join("\n")
            setWebsiteData(websiteDataText)
          } else {
            throw new Error(
              "Scraping was not successful or response is invalid"
            )
          }
        } finally {
          clearTimeout(timeoutId)
        }
      } catch (error) {
        console.error("Scraping error:", error)
        if (error instanceof Error && error.name === "AbortError") {
          toast.error("Request timed out. Please try again.")
        } else {
          toast.error(
            `Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`
          )
        }
      } finally {
        setIsLoading(false)
      }
    },
    [url]
  )

  const isValidURL = (string: string): boolean => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value.trim())
  }

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(websiteData)
      .then(() => {
        setIsCopied(true)
        toast.success("Copied to clipboard")
        setTimeout(() => setIsCopied(false), 2000)
      })
      .catch((error) => {
        toast.error(
          `Failed to copy: ${error instanceof Error ? error.message : "Unknown error"}`
        )
      })
  }, [websiteData])

  return (
    <Card className="w-full max-w-3xl mx-auto my-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Web Scraper</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Globe className="text-gray-400" />
            <Input
              type="url"
              placeholder="Enter URL to scrape"
              value={url}
              onChange={handleChange}
              className="flex-grow"
              disabled={isLoading}
              autoComplete={`on`}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={!url || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Scraping...
              </>
            ) : (
              "Scrape Website"
            )}
          </Button>
        </form>

        <div className="mt-8">
          <h3 className="mb-2 text-lg font-semibold">{topic}</h3>
          <Card>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              {websiteData ? (
                <AiFrame
                  topic={topic}
                  websiteData={websiteData}
                  isLoading={isLoading}
                />
              ) : (
                <p className="italic text-gray-500">No content available.</p>
              )}
            </ScrollArea>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {websiteData ? `${websiteData.length} characters` : "No content"}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          disabled={!websiteData}>
          {isCopied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy to Clipboard
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
})

Scraper.displayName = "Scraper"
