import { Exercise } from '@/entities/exercise/exercise'
import { ISuperSet } from '@/entities/superSet/superSet.types'

export class SuperSet implements ISuperSet {
  readonly exercises: Array<Exercise>
  readonly timeout: number

  constructor(exercises: Array<string>, timeout: number) {
    this.exercises = exercises.map(name => new Exercise(name))
    this.timeout = timeout
  }
}
