import { Set } from '@/entities/set/set'

export interface IExercise {
  readonly name: string
  readonly sets: Array<Set>
}
