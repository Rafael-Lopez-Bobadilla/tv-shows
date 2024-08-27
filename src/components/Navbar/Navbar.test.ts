import { describe, test, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from './Navbar.vue'

describe('Navbar', () => {
  test('Home link is active in Home route', () => {
    const mockRoute = { fullPath: '/' }
    const wrapper = mount(Navbar, {
      global: {
        mocks: {
          $route: mockRoute
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const activeLink = wrapper.find('.link.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Home')
  })
  test('Search link is active in Search route', () => {
    const mockRoute = { fullPath: '/search' }
    const wrapper = mount(Navbar, {
      global: {
        mocks: {
          $route: mockRoute
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const activeLink = wrapper.find('.link.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Search')
  })
})
