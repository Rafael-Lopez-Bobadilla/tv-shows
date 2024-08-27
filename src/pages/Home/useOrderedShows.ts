import showsStore from '@/stores/showsStore'
import { computed } from 'vue'
import { type TShows } from '@/services/schemas/showsSchemas'

type TOrderedShows = Record<string, TShows>
const getShowsByGenre = (shows: TShows | null) => {
  if (!shows) return []
  const showsMap: TOrderedShows = {}
  shows.forEach((show) => {
    show.genres.forEach((genre) => {
      if (!showsMap[genre]) showsMap[genre] = []
      showsMap[genre].push(show)
    })
  })
  return showsMap
}

const sortByRating = (shows: TOrderedShows | {}) => {
  const genresArray = Object.entries(shows)
  genresArray.forEach((genres) => {
    genres[1].sort((a, b) => {
      const ratingA = a.rating.average ?? 0
      const ratingB = b.rating.average ?? 0
      return ratingB - ratingA
    })
  })
  return genresArray
}

const useOrderedShows = () => {
  const orderedShows = computed(() => {
    const showsByGenre = getShowsByGenre(showsStore.shows)
    return sortByRating(showsByGenre)
  })
  return { orderedShows }
}

export default useOrderedShows
