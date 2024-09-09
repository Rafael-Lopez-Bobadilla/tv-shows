import showsStore from '@/stores/showsStore'
import type { TShows } from '@/services/schemas/showsSchemas'
import { ref, watchEffect } from 'vue'
import { getShowsByQuery } from '@/services/services'

function debounce(callback: (...args: any) => void, wait: number) {
  let timerId: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
const useMatchedShows = () => {
  const text = ref('')
  const matchedShows = ref<TShows | undefined>(undefined)
  if (!showsStore.shows) showsStore.fetchData()
  const myFunc = debounce(async () => {
    const matched = await getShowsByQuery(text.value)
    const shows = matched.map((matched) => matched.show)
    if (matched) matchedShows.value = shows
  }, 300)
  watchEffect(() => {
    if (text.value === '') matchedShows.value = showsStore.shows?.slice(0, 20)
    if (text.value !== '') {
      myFunc()
    }
  })
  return { text, matchedShows }
}

export default useMatchedShows
