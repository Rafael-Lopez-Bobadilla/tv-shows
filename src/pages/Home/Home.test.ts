import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Home from './Home.vue'
import showsStore from '@/stores/showsStore'

vi.mock('@/stores/showsStore', () => ({
  default: {
    shows: null,
    loading: false,
    fetchData: vi.fn()
  }
}))

vi.mock('./useOrderedShows', () => ({
  default: vi.fn().mockReturnValue({
    orderedShows: {}
  })
}))

describe('Home', () => {
  it('calls fetchData if showsStore.shows is null', () => {
    mount(Home)
    expect(showsStore.fetchData).toHaveBeenCalled()
  })

  it('displays "Loading..." when showsStore.loading is true', () => {
    showsStore.loading = true
    const wrapper = mount(Home)
    expect(wrapper.find('h2').text()).toBe('Loading...')
  })

  it('does not display "Loading..." when showsStore.loading is false', () => {
    showsStore.loading = false
    const wrapper = mount(Home)
    expect(wrapper.find('h2').exists()).toBe(false)
  })
})
