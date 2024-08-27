import { getShowById } from '@/services/services'
import type { TShow } from '@/services/schemas/showsSchemas'
import showsStore from '@/stores/showsStore'
import { ref } from 'vue'
const useShow = (showId: string) => {
  const show = ref<TShow | undefined>(undefined)
  const loading = ref(false)
  const error = ref(false)
  show.value = showsStore.shows?.find((show) => show.id.toString() === showId)
  const fetchShow = async () => {
    try {
      loading.value = true
      error.value = false
      show.value = await getShowById(showId)
    } catch (err) {
      error.value = true
    } finally {
      loading.value = false
    }
  }
  if (!show.value) {
    fetchShow()
  }
  return { show, loading }
}

export default useShow
