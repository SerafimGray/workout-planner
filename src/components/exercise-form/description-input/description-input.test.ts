import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import ElementPlus, { ElInput } from 'element-plus'
import { beforeEach, describe, expect, it } from 'vitest'

import DescriptionInput from '@/components/exercise-form/DescriptionInput.vue'
import { useExerciseFormStore } from '@/stores/exerciseForm'

describe('DescriptionInput', () => {
  let wrapper: VueWrapper
  let store: { form: { description: string } }

  beforeEach(() => {
    wrapper = mount(DescriptionInput, {
      global: {
        plugins: [createTestingPinia(), ElementPlus]
      }
    })

    store = useExerciseFormStore()
  })

  it('should render textarea', () => {
    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })

  describe('store', () => {
    it('should display store value', () => {
      const modelValue = wrapper.getComponent(ElInput).props('modelValue')
      store.form.description = 'fakeDescription'
      expect(modelValue).toBe('fakeDescription')
    })

    it.todo('should change store value on input')
    it.todo('should change display value on store change')
  })

  describe('autosize', () => {
    it.todo('should be equal in height to minRows')
    it.todo('should change height on multiline input')
  })
})
