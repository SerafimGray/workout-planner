import type {
  FormValidateCallback,
  FormValidationResult,
  FormItemProp
} from 'element-plus'
import { Ref } from 'vue'

export type Validate =
  | ((callback?: FormValidateCallback | undefined) => FormValidationResult)
  | undefined
  | null

export interface IExerciseForm {
  isDialogVisible: Ref<boolean>

  loading: Ref<boolean>

  form: {
    description: string
    link: string
    name: string
    status: string
  }

  isPropValid: {
    name: boolean
    link: boolean
  }

  setValidate(value: Validate): void

  add(): void

  onValidate(prop: FormItemProp, isValid: boolean): void
}
