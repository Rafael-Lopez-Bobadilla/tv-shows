import { getShowById } from '@/services/services'
import type { TShow } from '@/services/schemas/showsSchemas'
import showsStore from '@/stores/showsStore'
import { ref } from 'vue'
const useShow = (showId: string) => {
  const show = ref<TShow | undefined>(undefined)
  const loading = ref(false)
  const error = ref(false)
  show.value = showsStore.shows?.find((show) => show.id.toString() === showId)
  if (!show.value) {
    loading.value = true
    getShowById(showId)
      .then((data) => (show.value = data))
      .catch(() => (error.value = true))
  }
  return { show }
}

export default useShow
