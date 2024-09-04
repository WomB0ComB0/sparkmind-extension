import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai"
import { marked } from "marked"
import type React from "react"
import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

import { genAI } from "~/lib"
import { studyGuidePrompt } from "~util"

const AiFrame: React.FC<{
  topic: string
  websiteData: string
  isLoading: boolean
}> = memo(({ topic, websiteData, isLoading: parentIsLoading }) => {
  const [htmlContent, setHtmlContent] = useState<string>("")
  const [isInserted, setIsInserted] = useState<boolean>(false)
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
          }
        ]
      }),
    [googleGenerativeAI]
  )

  const generateContent = useCallback(
    async (currentTopic: string, currentWebsiteData: string) => {
      if (!currentTopic || !currentWebsiteData || isInserted) {
        setHtmlContent("<p>Missing topic or website data.</p>")
        return null
      }

      try {
        const prompt = await studyGuidePrompt(currentTopic, currentWebsiteData)
        const result = await model.generateContent(prompt)
        const text = await result.response.text()
        const content = await marked(text)
        setHtmlContent(content)
        return text
      } catch (error) {
        console.error("Error generating content:", error)
        setHtmlContent(
          `<p>Error generating content: ${error instanceof Error ? error.message : "Unknown error"}</p>`
        )
        toast.error("Error generating content")
        return null
      }
    },
    [model, isInserted]
  )

  useEffect(() => {
    if (!topic || !websiteData || isInserted || isGenerating || parentIsLoading)
      return

    const checkExistingData = async () => {
      setIsGenerating(true)
      try {
        const generatedText = await generateContent(topic, websiteData)
        if (generatedText) {
          setIsInserted(true)
          const content = await marked(generatedText)
          setHtmlContent(content)
        }
      } catch (error) {
        console.error("Error checking existing data:", error)
        setHtmlContent(
          `<p>Error checking existing data: ${error instanceof Error ? error.message : "Unknown error"}</p>`
        )
        toast.error("Error checking existing data")
      } finally {
        setIsGenerating(false)
      }
    }

    checkExistingData()
  }, [
    topic,
    websiteData,
    generateContent,
    isInserted,
    isGenerating,
    parentIsLoading
  ])

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
