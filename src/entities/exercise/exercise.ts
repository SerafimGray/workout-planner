import { IWorkoutExercise } from '@/entities/exercise/exercise.types'
import { Set } from '@/entities/set/set'

export class Exercise implements IWorkoutExercise {
  readonly description: string
  readonly link: string
  readonly name: string
  readonly sets: Array<Set>

  constructor(description = '', link = '', name: string) {
    this.description = description
    this.link = link
    this.name = name
    this.sets = []
  }
}
