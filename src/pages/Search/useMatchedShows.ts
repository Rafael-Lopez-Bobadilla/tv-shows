import showsStore from '@/stores/showsStore'
import type { TShows } from '@/services/schemas/showsSchemas'
import { ref, watchEffect } from 'vue'
import { getShowsByQuery } from '@/services/services'
const useMatchedShows = () => {
  const text = ref('')
  const matchedShows = ref<TShows | undefined>(undefined)
  if (!showsStore.shows) showsStore.fetchData()
  let timeout: NodeJS.Timeout | null = null
  watchEffect(() => {
    if (timeout) clearTimeout(timeout)
    if (text.value === '') matchedShows.value = showsStore.shows?.slice(0, 20)
    if (text.value !== '') {
      timeout = setTimeout(async () => {
        timeout = null
        const matched = await getShowsByQuery(text.value)
        const shows = matched.map((matched) => matched.show)
        if (matched) matchedShows.value = shows
      }, 300)
    }
  })
  return { text, matchedShows }
}

export default useMatchedShows
