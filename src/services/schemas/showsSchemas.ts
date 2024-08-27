import { z } from 'zod'

export const scheduleSchema = z.object({
  time: z.string(),
  days: z.array(z.string())
})

export const ratingSchema = z.object({
  average: z.number().nullable()
})

export const countrySchema = z.object({
  name: z.string(),
  code: z.string(),
  timezone: z.string()
})

export const country2Schema = z.object({
  name: z.string(),
  code: z.string(),
  timezone: z.string()
})

export const externalsSchema = z.object({
  tvrage: z.number(),
  thetvdb: z.number().optional().nullable(),
  imdb: z.string().optional().nullable()
})

export const imageSchema = z.object({
  medium: z.string(),
  original: z.string()
})

export const selfSchema = z.object({
  href: z.string()
})

export const previousepisodeSchema = z.object({
  href: z.string(),
  name: z.string()
})

export const nextepisodeSchema = z.object({
  href: z.string(),
  name: z.string()
})

export const networkSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: countrySchema,
  officialSite: z.string().optional().nullable()
})

export const webChannelSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: country2Schema.optional().nullable(),
  officialSite: z.string().optional().nullable()
})

export const linksSchema = z.object({
  self: selfSchema,
  previousepisode: previousepisodeSchema.optional(),
  nextepisode: nextepisodeSchema.optional()
})

export const showSchema = z.object({
  id: z.number(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  language: z.string(),
  genres: z.array(z.string()),
  status: z.string(),
  runtime: z.number().optional().nullable(),
  averageRuntime: z.number().optional().nullable(),
  premiered: z.string().optional().nullable(),
  ended: z.string().optional().nullable(),
  officialSite: z.string().optional().nullable(),
  schedule: scheduleSchema,
  rating: ratingSchema,
  weight: z.number(),
  network: networkSchema.optional().nullable(),
  webChannel: webChannelSchema.optional().nullable(),
  dvdCountry: z.any(),
  externals: externalsSchema,
  image: imageSchema,
  summary: z.string(),
  updated: z.number(),
  _links: linksSchema
})

export const showsSchema = z.array(showSchema)
export type TShows = z.infer<typeof showsSchema>
export type TShow = z.infer<typeof showSchema>
