import { describe, it, expect, vi } from 'vitest'
import useOrderedShows from './useOrderedShows'
import showsStore from '@/stores/showsStore'
import { type TShows, type TShow } from '@/services/schemas/showsSchemas'

vi.mock('@/stores/showsStore', () => ({
  default: {
    shows: null
  }
}))

const createShow = (id: number, genres: string[], rating: number | null): TShow => ({
  id,
  url: '',
  name: `Show ${id}`,
  type: 'Scripted',
  language: 'English',
  genres,
  status: 'Running',
  runtime: 60,
  averageRuntime: 60,
  premiered: '2023-01-01',
  ended: null,
  officialSite: 'http://some.com',
  schedule: { time: '20:00', days: ['Monday'] },
  rating: { average: rating },
  weight: 100,
  network: null,
  webChannel: null,
  dvdCountry: null,
  externals: { tvrage: 12345, thetvdb: 67890, imdb: 'tt1234567' },
  image: { medium: 'http://some.com/medium.jpg', original: 'http://some.com/original.jpg' },
  summary: 'This is an example show.',
  updated: 1690000000,
  _links: { self: { href: 'http://some.com' } }
})

describe('useOrderedShows', () => {
  it('groups shows by genre with getShowsByGenre', () => {
    const mockShows: TShows = [
      createShow(1, ['Drama'], 8.5),
      createShow(2, ['Comedy'], 7.0),
      createShow(3, ['Drama', 'Comedy'], 6.0)
    ]

    showsStore.shows = mockShows
    const { orderedShows } = useOrderedShows()
    const showsByGenre = orderedShows.value.map(([genre, shows]) => [genre, shows.map((s) => s.id)])

    expect(showsByGenre).toEqual([
      ['Drama', [1, 3]],
      ['Comedy', [2, 3]]
    ])
  })

  it('sorts shows by rating within each genre with sortByRating', () => {
    const mockShows: TShows = [
      createShow(1, ['Drama'], 8.5),
      createShow(2, ['Drama'], 7.0),
      createShow(3, ['Drama'], 9.0)
    ]

    showsStore.shows = mockShows
    const { orderedShows } = useOrderedShows()
    const sortedShows = orderedShows.value.find(([genre]) => genre === 'Drama')

    expect(sortedShows).toBeDefined()
    expect(sortedShows![1].map((show) => show.id)).toEqual([3, 1, 2]) //sort by rating
  })

  it('handles null or undefined ratings correctly in sortByRating', () => {
    const mockShows: TShows = [
      createShow(1, ['Drama'], 8.5),
      createShow(2, ['Drama'], null),
      createShow(3, ['Drama'], 7.0)
    ]

    showsStore.shows = mockShows
    const { orderedShows } = useOrderedShows()
    const sortedShows = orderedShows.value.find(([genre]) => genre === 'Drama')

    expect(sortedShows).toBeDefined()
    expect(sortedShows![1].map((show) => show.id)).toEqual([1, 3, 2]) // null rating should be last
  })

  it('returns an empty array when showsStore.shows is null or undefined', () => {
    showsStore.shows = null
    const { orderedShows } = useOrderedShows()
    expect(orderedShows.value).toEqual([])
  })
})
