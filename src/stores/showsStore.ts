import { reactive } from 'vue'
import { type TShows } from '@/services/schemas/showsSchemas'
import { getShows } from '@/services/services'

type TShowsStore = {
  shows: TShows | null
  loading: boolean
  error: boolean
  fetchData: () => Promise<void>
}
const showsStore = reactive<TShowsStore>({
  shows: null,
  loading: true,
  error: false,
  async fetchData() {
    try {
      this.loading = true
      this.error = false
      const data = await getShows()
      this.shows = data
    } catch (err) {
      this.error = true
    } finally {
      this.loading = false
    }
  }
})

export default showsStore
