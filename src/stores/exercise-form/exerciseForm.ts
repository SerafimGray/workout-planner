import type { IndexableType } from 'dexie'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'
import type {
  Validate,
  IExerciseForm
} from '@/stores/exercise-form/exerciseForm.types'

export const useExerciseFormStore = defineStore(
  'exerciseForm',
  (): IExerciseForm => {
    const form = reactive({
      description: '',
      link: '',
      name: '',
      status: ''
    })

    const isPropValid = reactive({
      name: true,
      link: true
    })

    let validate: Validate = null

    function setValidate(value: Validate) {
      validate = value
    }

    function add() {
      if (validate) {
        validate(validationCallback)
      }
    }

    function validationCallback(valid: boolean) {
      if (valid) {
        const { description, link, name } = form
        const exercise = new Exercise(name, description, link)
        addExercise(exercise)
        return true
      } else {
        return false
      }
    }

    async function addExercise(exercise: Exercise) {
      try {
        const id = await dbService.addExercise(exercise)
        updateForm(id)
      } catch (error: unknown) {
        form.status = `Failed to add ${form.name}: ${error}`
      }
    }

    const dbService = new DBService()

    function updateForm(id: IndexableType) {
      form.status = `Exercise ${form.name} successfully added. Got id ${id}`
      form.name = ''
      form.description = ''
      form.link = ''
    }

    return { form, isPropValid, setValidate, add }
  }
)
