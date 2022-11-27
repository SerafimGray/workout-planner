import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, vi, expect } from 'vitest'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'
import 'fake-indexeddb/auto'

describe('exerciseForm store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const validate = vi.fn(callback => callback(true))

  vi.mock('@/services/db/db', () => {
    class DBService {
      addExercise() {
        return new Promise(() => 1)
      }
    }

    return { DBService }
  })

  describe('setValidate', () => {
    it('should set validate', () => {
      const exerciseFormStore = useExerciseFormStore()

      exerciseFormStore.setValidate(validate)
      exerciseFormStore.add()

      expect(validate).toBeCalled()
    })
  })

  describe('add', () => {
    it('should add record to database', () => {
      const exerciseFormStore = useExerciseFormStore()
      exerciseFormStore.add()
      expect(validate).toBeCalled()
    })
  })

  describe('onValidate', () => {
    it('should set prop value', () => {
      const exerciseFormStore = useExerciseFormStore()
      const isValid = false
      const prop = 'name'

      exerciseFormStore.onValidate(prop, isValid)

      expect(exerciseFormStore.isPropValid[prop]).toBe(isValid)
    })
  })
})
