import { z } from "zod"

export const scraperQueueItemSchema = z.object({
  id: z.string().uuid(),
  url: z.string(),
  startedAt: z.date(),
  finishedAt: z.date(),
  status: z.enum(["pending", "scraping", "done", "error"])
})

export const scrapeSchema = z.object({
  flaggedDomain: z.boolean().refine((flaggedDomain) => flaggedDomain, {
    message: "Flagged domain must be provided"
  }),
  containsCensored: z.boolean().refine((containsCensored) => containsCensored, {
    message: "Contains censored must be provided"
  }),
  filteredTexts: z.array(z.string())
})

export type ScrapeSchema = z.infer<typeof scrapeSchema>
