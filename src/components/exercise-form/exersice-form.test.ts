import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it, vi } from 'vitest'

import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'

describe('ExerciseForm', () => {
  const initialState = {
    exerciseForm: {
      onValidate: vi.fn()
    }
  }

  const wrapper = mount(ExerciseForm, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus],
      stubs: { DescriptionInput: true, SubmitButton: true }
    }
  })

  const form = wrapper.find('form')
  const errorMessage = wrapper.find('.el-form-item__error')

  it('should render form', () => {
    expect(form.exists()).toBe(true)
  })

  it('should not render error message by default', () => {
    expect(errorMessage.exists()).toBe(false)
  })
})
