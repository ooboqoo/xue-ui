import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Button from '../packages/Button.vue'

describe('Button', () => {
  const wrapper = mount(Button)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<button class="xue-button"></button>')
  })

  it('will catch the error using a promise', () => {
    return Vue.nextTick().catch(() => {
      expect(true).toBe(false)
    })
  })
})
