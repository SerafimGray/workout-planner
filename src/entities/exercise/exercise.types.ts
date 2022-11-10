import { Set } from '@/entities/set/set'

export interface IExercise {
  readonly description: string
  readonly link: string
  readonly name: string
}

export interface IWorkoutExercise extends IExercise {
  readonly sets: Array<Set>
}
