import { Set } from '@/entities/set/set'

export interface IExercise {
  description?: string
  id?: number
  link?: string
  name: string

  clear(): void
}

export interface IWorkoutExercise extends IExercise {
  readonly sets: Array<Set>
}
