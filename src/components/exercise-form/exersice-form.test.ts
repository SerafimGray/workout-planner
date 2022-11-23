import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'

describe('ExerciseForm', () => {
  const initialState = {}

  const wrapper = mount(ExerciseForm, {
    global: {
      plugins: [createTestingPinia({ initialState }), ElementPlus]
    }
  })

  const form = wrapper.find('form')

  it('should render form', () => {
    expect(form.exists())
  })
})
