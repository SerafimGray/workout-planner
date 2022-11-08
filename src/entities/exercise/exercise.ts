import { IExercise } from '@/entities/exercise/exercise.types'
import { Set } from '@/entities/set/set'

export class Exercise implements IExercise {
  readonly name: string
  readonly sets: Array<Set>

  constructor(name: string) {
    this.name = name
    this.sets = []
  }
}
