import { Set } from '@/entities/set/set'

export interface IExercise {
  readonly description: string
  readonly link: string
  readonly name: string
  readonly sets: Array<Set>
}
