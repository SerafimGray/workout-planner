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

  beforeEach(() => {
    wrapper = mount(DescriptionInput, {
      global: {
        plugins: [createTestingPinia({ initialState }), ElementPlus]
      }
    })

    store = useExerciseFormStore()
  })

  it('should render textarea', () => {
    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })

  describe('store', () => {
    let textarea: DOMWrapper<HTMLTextAreaElement>
    const fakeDescription = 'fakeDescription'

    beforeEach(() => {
      textarea = wrapper.find('textarea')
    })

    it('should display store value', async () => {
      await store.$patch({ form: { description: fakeDescription } })
      expect(textarea.element.value).toBe(fakeDescription)
    })

    it('should change store value on input', async () => {
      await textarea.setValue(fakeDescription)
      expect(store.form.description).toBe(fakeDescription)
    })

    it.todo('should change display value on store change')
  })

  describe('autosize', () => {
    it.todo('should be equal in height to minRows')
    it.todo('should change height on multiline input')
  })
})
