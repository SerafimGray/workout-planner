import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { beforeEach, describe, expect, it } from 'vitest'

import DescriptionInput from '@/components/exercise-form/description-input/DescriptionInput.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('DescriptionInput', () => {
  let wrapper: VueWrapper
  let store: any
  const initialState = {
    exerciseForm: {
      form: {
        description: ''
      }
    }
  }
  let textarea: DOMWrapper<HTMLTextAreaElement>

  beforeEach(() => {
    wrapper = mount(DescriptionInput, {
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })

    store = useExerciseFormStore()

    textarea = wrapper.find('textarea')
  })

  it('should render textarea', () => {
    expect(textarea.exists()).toBe(true)
  })

  describe('store', () => {
    const fakeDescription = 'fakeDescription'

    it('should display store value', async () => {
      await store.$patch({ form: { description: fakeDescription } })
      expect(textarea.element.value).toBe(fakeDescription)
    })

    it('should change store value on input', async () => {
      await textarea.setValue(fakeDescription)
      expect(store.form.description).toBe(fakeDescription)
    })
  })
})
