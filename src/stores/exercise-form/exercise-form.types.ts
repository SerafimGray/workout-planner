import type {
  FormValidateCallback,
  FormValidationResult,
  FormItemProp
} from 'element-plus'
import { Ref } from 'vue'

import { IExercise } from '@/entities/exercise/exercise.types'

export type Validate =
  | ((callback?: FormValidateCallback | undefined) => FormValidationResult)
  | undefined
  | null

export interface IExerciseForm {
  exercise: IExercise

  forEdit: Ref<boolean>

  isDialogVisible: Ref<boolean>

  isPropValid: {
    name: boolean
    link: boolean
  }

  loading: Ref<boolean>

  status: Ref<string>

  onValidate(prop: FormItemProp, isValid: boolean): void

  put(): void

  setValidate(value: Validate): void
}
