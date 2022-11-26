import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it, vi } from 'vitest'

import SubmitButton from '@/components/exercise-form/submit-button/SubmitButton.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('SubmitButton', () => {
  const initialState = {
    exerciseForm: {
      loading: false,
      add: vi.fn()
    }
  }

  const wrapper = mount(SubmitButton, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus]
    }
  })

  const store = useExerciseFormStore()
  const button = wrapper.find('button')

  it('should render button', () => {
    expect(button.exists()).toBe(true)
  })

  it('should run store add function on click', () => {
    button.trigger('click')
    expect(store.add).toHaveBeenCalled()
  })

  it('should be enabled by default', () => {
    expect(button.attributes('aria-disabled')).toBe('false')
  })

  it('should be disabled if loading', async () => {
    await store.$patch({ loading: true })
    expect(button.attributes('aria-disabled')).toBe('true')
  })
})
