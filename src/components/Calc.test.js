import { shallowMount } from '@vue/test-utils'
import Calc from './Calc'
describe('Calc.vue', () => {
  let wrapper, randomCounter
  beforeEach(() => {
    wrapper = shallowMount(Calc)
    randomCounter = Math.floor(Math.random() * 10)
    wrapper.vm.counter = randomCounter
  })
  test('It renders counter value', () => {
    expect(wrapper.html()).toContain(randomCounter)
  })
  test('increment works', () => {
    const button = wrapper.find('#increment')
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(randomCounter + 1)
  })
})