import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus, { ElForm } from 'element-plus'
import { describe, expect, it, vi } from 'vitest'

import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('ExerciseForm', () => {
  const initialState = {
    exerciseForm: {
      setValidate: vi.fn(),
      isPropValid: {
        name: true
      }
    }
  }

  const wrapper = mount(ExerciseForm, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus],
      stubs: {
        DescriptionInput: true,
        LinkInput: true,
        NameInput: true,
        SubmitButton: true
      }
    }
  })

  const store = useExerciseFormStore()
  const form = wrapper.find('form')
  const errorMessage = wrapper.find('.el-form-item__error')

  it('should render form', () => {
    expect(form.exists()).toBe(true)
  })

  it('should not render error message by default', () => {
    expect(errorMessage.exists()).toBe(false)
  })

  it('should set store validate value', () => {
    expect(store.setValidate).toBeCalled()
  })

  it('should set prop value on validate', async () => {
    const formComponent = wrapper.findComponent(ElForm)
    await formComponent.trigger('validate', {
      prop: 'name',
      isValid: false
    })
    expect(store.isPropValid.name).toBe(false)
  })
})
