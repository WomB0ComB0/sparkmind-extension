"use client"

import { CaretSortIcon } from "@radix-ui/react-icons"
import { Check, CheckIcon, Copy, Globe, Search, Send } from "lucide-react"
import { memo, useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Button } from "~/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "~/components/ui/command"
import { Input } from "~/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "~/components/ui/popover"
import { ScrollArea } from "~/components/ui/scroll-area"
import { cn } from "~/lib/utils"
import LogoComponent from "~components/svg/LogoComponent"
import { PING } from "~constants"
import type { ScrapeSchema } from "~schema"
import { fetchDescriptionFromURL } from "~util"

import { AiFrame } from "./AiFrame"

interface ScraperProps {
  initialUrl?: string
}

const presets = [
  { value: "summarize", label: "Summarize this topic" },
  { value: "explain", label: "Explain this concept in simple terms" },
  { value: "questions", label: "Generate practice questions" },
  { value: "study-guide", label: "Create a study guide" },
  { value: "examples", label: "Provide real-world examples" },
  { value: "compare", label: "Compare and contrast with related topics" },
  { value: "reading", label: "Suggest further reading materials" },
  { value: "mind-map", label: "Create a mind map of key concepts" }
]

export const Scraper = memo(({ initialUrl = "" }: ScraperProps) => {
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [websiteData, setWebsiteData] = useState("")
  const [topic, setTopic] = useState("No Topic")
  const [command, setCommand] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const [userPrompt, setUserPrompt] = useState("")

  useIsomorphicLayoutEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl)
      fetchDescription(initialUrl)
    }
  }, [initialUrl])

  useEffect(() => {
    const storedCommand = localStorage.getItem("command")
    if (storedCommand) setCommand(storedCommand)
  }, [])

  useEffect(() => {
    localStorage.setItem("command", command)
  }, [command])

  const fetchDescription = useCallback(async (urlToFetch: string) => {
    try {
      const description = await fetchDescriptionFromURL(urlToFetch)
      setTopic(description)
    } catch (error) {
      console.error("Failed to fetch description:", error)
      setTopic("No description available")
    }
  }, [])

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

            const fullPrompt = `${topic}: ${userPrompt}`
            setWebsiteData(
              `AI response to: ${fullPrompt}\n\nScraped content:\n${websiteDataText}`
            )
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
    [url, topic, userPrompt]
  )

  const handleCommandChange = (value: string) => {
    setCommand(value)
    setOpen(false)
    setUserPrompt(value)
  }

  const handleUserPromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPrompt(e.target.value)
  }

  const isValidURL = (string: string): boolean => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
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
    <div className="flex flex-col h-[600px] bg-[#ffffff] text-[#0257AC]">
      <div className="flex-none p-4 border-b border-[#0257AC] flex items-center justify-between">
        <LogoComponent width={40} height={40} />
        <h1 className="text-2xl font-bold">SparkMind</h1>
        <div className="w-10"></div>
      </div>
      <div className="flex-none p-2 border-b border-[#0257AC]">
        <div className="flex items-center space-x-2 text-sm text-[#0257AC]">
          <Globe className="w-4 h-4" />
          <span className="truncate">{url}</span>
        </div>
      </div>
      <div className="flex-none p-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="text"
            placeholder="Enter your prompt or customize the preset..."
            value={userPrompt}
            onChange={handleUserPromptChange}
            className="w-full text-[#0257AC] placeholder-[#0257AC] bg-transparent border-[#0257AC] focus-visible:ring-[#0257AC] focus-visible:ring-offset-0"
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full text-white border-[#0257AC]">
                {command
                  ? presets.find((preset) => preset.label === command)?.label
                  : "Select preset..."}
                <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-[#ffffff] border-[#0257AC]">
              <Command className="border-[#0257AC]">
                <CommandInput
                  placeholder="Search preset..."
                  className="text-white h-9"
                />
                <CommandList>
                  <CommandEmpty className="text-[#0257AC]">
                    No preset found.
                  </CommandEmpty>
                  <CommandGroup>
                    {presets.map((preset) => (
                      <CommandItem
                        key={preset.value}
                        value={preset.label}
                        onSelect={handleCommandChange}
                        className="text-white">
                        {preset.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            command === preset.label
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Button
            type="submit"
            className="w-full text-[#ffffff] bg-[#0257AC] hover:bg-[#0257AC] hover:opacity-90"
            disabled={!userPrompt || isLoading}>
            {isLoading ? (
              <div className="flex items-center">
                <span className="mr-2 animate-spin">⏳</span>
                Processing...
              </div>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send to AI
              </>
            )}
          </Button>
        </form>
      </div>
      <ScrollArea className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-[#0257AC] text-lg">Generating insights...</p>
          </div>
        ) : websiteData ? (
          <div className="p-4">
            <AiFrame
              topic={topic}
              websiteData={websiteData}
              isLoading={isLoading}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="mt-4 text-white border-[#0257AC] hover:bg-white hover:text-[#0257AC]">
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
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-sm text-[#0257AC]">
              Select a preset or enter a custom prompt to get started with
              SparkMind.
            </p>
          </div>
        )}
      </ScrollArea>
    </div>
  )
})

Scraper.displayName = "Scraper"
