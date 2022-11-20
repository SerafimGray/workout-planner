import type { FormValidateCallback, FormValidationResult } from 'element-plus'

export type Validate =
  | ((callback?: FormValidateCallback | undefined) => FormValidationResult)
  | undefined
  | null

export interface IExerciseForm {
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
}
