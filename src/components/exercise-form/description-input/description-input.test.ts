import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import DescriptionInput from '@/components/exercise-form/description-input/DescriptionInput.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

describe('DescriptionInput', () => {
  const initialState = {
    exerciseForm: {
      exercise: {
        description: ''
      }
    }
  }

  const wrapper = mount(DescriptionInput, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus]
    }
  })

  const store = useExerciseFormStore()
  const textarea = wrapper.find('textarea')
  const fakeDescription = 'fakeDescription'
  const label = 'fakeLabel'

  it('should display label text', async () => {
    await wrapper.setProps({ label })
    expect(wrapper.html()).toContain(label)
  })

  it('should render textarea', () => {
    expect(textarea.exists()).toBe(true)
  })

  it('should display store value', async () => {
    await store.$patch({ exercise: { description: fakeDescription } })
    expect(textarea.element.value).toBe(fakeDescription)
  })

  it('should change store value on input', async () => {
    await textarea.setValue(fakeDescription)
    expect(store.exercise.description).toBe(fakeDescription)
  })
})
