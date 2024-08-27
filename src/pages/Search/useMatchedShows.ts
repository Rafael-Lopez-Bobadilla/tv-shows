import showsStore from '@/stores/showsStore'
import type { TShows } from '@/services/schemas/showsSchemas'
import { ref, watchEffect, type Ref } from 'vue'
const useMatchedShows = (text: Ref<string>) => {
  const matchedShows = ref<TShows | null>(null)
  if (!showsStore.shows) showsStore.fetchData()
  let timeout: NodeJS.Timeout | null = null
  watchEffect(() => {
    if (timeout) clearTimeout(timeout)
    if (text.value === '') matchedShows.value = showsStore.shows
    if (text.value !== '') {
      timeout = setTimeout(() => {
        timeout = null
        const pattern = new RegExp(text.value, 'i')
        const matched = showsStore.shows?.filter((show) => pattern.test(show.name))
        if (matched) matchedShows.value = matched
      }, 300)
    }
  })
  return { matchedShows }
}

export default useMatchedShows
