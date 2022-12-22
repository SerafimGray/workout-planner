import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { describe, expect, it } from 'vitest'

import ExerciseDialog from '@/components/exercise-form/exercise-dialog/ExerciseDialog.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

describe('ExerciseDialog', () => {
  const wrapper = mount(ExerciseDialog, {
    global: {
      plugins: [createTestingPinia(), ElementPlus],
      stubs: { ExerciseForm: true }
    }
  })

  const store = useExerciseFormStore()

  it('should render dialog if is visible', async () => {
    await store.$patch({ isDialogVisible: true })
    const dialog = wrapper.find('.el-dialog')

    expect(dialog.isVisible()).toBe(true)
  })

  it('should not render dialog if is not visible', async () => {
    await store.$patch({ isDialogVisible: false })
    const dialog = wrapper.find('.el-dialog')

    expect(dialog.isVisible()).toBe(false)
  })
})
