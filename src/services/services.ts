import axios from 'axios'
import { showsSchema, showSchema } from './schemas/showsSchemas'

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
