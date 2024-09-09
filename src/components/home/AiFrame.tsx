import type { GenerateContentResult } from "@google/generative-ai"
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai"
import { marked } from "marked"
import type React from "react"
import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { genAI } from "~/lib"

const AiFrame: React.FC<{
  topic: string
  websiteData: string
  isLoading: boolean
}> = memo(({ topic, websiteData, isLoading: parentIsLoading }) => {
  const [htmlContent, setHtmlContent] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const googleGenerativeAI = useMemo(() => genAI, [])

  const model = useMemo(
    () =>
      googleGenerativeAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
          }
        ]
      }),
    [googleGenerativeAI]
  )

  const generateContent = useCallback(
    async (currentTopic: string, currentWebsiteData: string) => {
      const maxAttempts = 3
      let attempts = 0

      while (attempts < maxAttempts) {
        try {
          const sanitizedData = currentWebsiteData.replace(/[^\w\s.,?!]/gi, "")

          const prompt = `Generate a concise study guide for the topic: ${currentTopic}\n\nBased on this information:\n${sanitizedData}`
          const result = await model.generateContent(prompt)

          if (result.response.promptFeedback?.blockReason) {
            toast.info(
              `Attempt ${attempts + 1}: Content blocked: ${result.response.promptFeedback.blockReason}`
            )
            attempts++
            if (attempts >= maxAttempts) {
              return "The AI was unable to generate content due to safety restrictions after multiple attempts. Please try rephrasing your input."
            }
            continue
          }

          const text = result.response.text()
          return text
        } catch (error) {
          attempts++
          if (attempts >= maxAttempts) {
            throw new Error(
              `Error generating content after ${maxAttempts} attempts: ${error instanceof Error ? error.message : "Unknown error"}`
            )
          }
        }
      }
      return null
    },
    [model]
  )

  useEffect(() => {
    if (!topic || !websiteData || parentIsLoading) return

    const generateAndSetContent = async () => {
      setIsGenerating(true)
      try {
        const generatedText = await generateContent(topic, websiteData)
        if (generatedText) {
          const content = await marked(generatedText)
          setHtmlContent(content)
        } else {
          setHtmlContent("<p>Failed to generate content. Please try again.</p>")
        }
      } catch (error) {
        console.error("Error generating content:", error)
        setHtmlContent(
          `<p>Error generating content: ${error instanceof Error ? error.message : "Unknown error"}</p>`
        )
        toast.error("Error generating content")
      } finally {
        setIsGenerating(false)
      }
    }

    generateAndSetContent()
  }, [topic, websiteData, generateContent, parentIsLoading])

  return (
    <>
      {parentIsLoading || isGenerating ? (
        <p>Generating content...</p>
      ) : htmlContent ? (
        <pre
          className="font-mono text-sm whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <p>No content available.</p>
      )}
    </>
  )
})

AiFrame.displayName = "AiFrame"

export { AiFrame }
