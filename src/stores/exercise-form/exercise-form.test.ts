import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, vi, expect } from 'vitest'

import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

describe('exerciseForm store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('setValidate', () => {
    it('should set validate', () => {
      const exerciseFormStore = useExerciseFormStore()
      const validate = vi.fn()

      exerciseFormStore.setValidate(validate)
      exerciseFormStore.add()

      expect(validate).toBeCalled()
    })
  })
})
