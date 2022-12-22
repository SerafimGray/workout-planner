import { FormItemProp } from 'element-plus'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'
import type {
  Validate,
  IExerciseForm
} from '@/stores/exercise-form/exercise-form.types'

export const useExerciseFormStore = defineStore(
  'exerciseForm',
  (): IExerciseForm => {
    const exercise = reactive(new Exercise({ name: '' }))
    const forEdit = ref(false)
    const isDialogVisible = ref(false)
    const loading = ref(false)
    const status = ref('')

    function clearExercise() {
      exercise.clear()
    }

    //onValidate
    const isPropValid = reactive({
      name: true,
      link: true
    })

    function onValidate(prop: FormItemProp, isValid: boolean) {
      isPropValid[prop as keyof typeof isPropValid] = isValid
    }

    //put
    let validate: Validate = null

    function setValidate(value: Validate) {
      validate = value
    }

    function put() {
      if (validate && !loading.value) {
        validate(validationCallback)
      }
    }

    function validationCallback(valid: boolean) {
      if (valid) {
        putExercise()
      }

      return !!valid
    }

    const dbService = new DBService()

    async function putExercise() {
      loading.value = true

      try {
        await dbService.putExercise(exercise)
        updateForm()
      } catch (error: unknown) {
        status.value = `Failed to add ${exercise.name}: ${error}`
      } finally {
        loading.value = false
      }
    }

    function updateForm() {
      let action = 'added'

      if (forEdit.value) {
        action = 'edited'
      } else {
        exercise.clear()
      }

      status.value = `Exercise ${exercise.name} successfully ${action}.`
    }

    return {
      exercise,
      forEdit,
      isDialogVisible,
      isPropValid,
      loading,
      status,
      clearExercise,
      onValidate,
      put,
      setValidate
    }
  }
)
