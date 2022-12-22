import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import OpenDialog from '@/components/exercise-form/open-dialog/OpenDialog.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

describe('OpenDialog', () => {
  const wrapper = mount(OpenDialog, {
    global: {
      plugins: [createTestingPinia(), ElementPlus]
    }
  })

  const store = useExerciseFormStore()
  const storeAfterClick = {
    forEdit: false,
    isDialogVisible: true,
    status: ''
  }

  it('should set store values on click', () => {
    wrapper.find('button').trigger('click')
    expect(store).toMatchObject(storeAfterClick)
  })

  it('should call clearExercise action on click', () => {
    wrapper.find('button').trigger('click')
    expect(store.clearExercise).toBeCalled()
  })
})
