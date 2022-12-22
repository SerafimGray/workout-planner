import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it, vi } from 'vitest'

import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

describe('ExerciseForm', () => {
  const initialState = {
    exerciseForm: {
      setValidate: vi.fn()
    },
    status: ''
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
  const fakeStatus = 'fakeStatus'

  it('should render form', () => {
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
  })

  it('should not render error message by default', () => {
    const errorMessage = wrapper.find('.el-form-item__error')
    expect(errorMessage.exists()).toBe(false)
  })

  it('should set store validate value', () => {
    expect(store.setValidate).toBeCalled()
  })

  it('should render status message', async () => {
    await store.$patch({ status: fakeStatus })
    expect(wrapper.find('.form-status').text()).toBe(fakeStatus)
  })
})
