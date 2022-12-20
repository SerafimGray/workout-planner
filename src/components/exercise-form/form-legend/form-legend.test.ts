import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FormLegend from '@/components/exercise-form/form-legend/FormLegend.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

describe('FormLegend', () => {
  const initialState = {
    exerciseForm: {
      forEdit: false
    }
  }

  const wrapper = mount(FormLegend, {
    global: {
      plugins: [createTestingPinia({ initialState })]
    }
  })

  const store = useExerciseFormStore()

  it(`should display "Edit exercise" text 
    if form is opened for edit`, async () => {
    await store.$patch({ forEdit: true })

    const legendText = wrapper.find('legend').text()
    expect(legendText).toBe('Edit exercise')
  })

  it(`should display "Add new exercise" text 
    if form is opened for add`, async () => {
    await store.$patch({ forEdit: false })

    const legendText = wrapper.find('legend').text()
    expect(legendText).toBe('Add new exercise')
  })
})
