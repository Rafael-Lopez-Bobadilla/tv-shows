import axios from 'axios'
import { showsSchema, showSchema, showsWithScore } from './schemas/showsSchemas'

const client = axios.create({
  baseURL: 'https://api.tvmaze.com'
})

export const getShows = async () => {
  const res = await client.get('shows?page=1')
  return showsSchema.parse(res.data)
}

export const getShowById = async (id: string) => {
  const res = await client.get(`/shows/${id}`)
  return showSchema.parse(res.data)
}

export const getShowsByQuery = async (query: string) => {
  const res = await client.get(`/search/shows?q=${query}`)
  return showsWithScore.parse(res.data)
}
