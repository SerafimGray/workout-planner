import { IExercise, IWorkoutExercise } from '@/entities/exercise/exercise.types'
import { Set } from '@/entities/set/set'

export class Exercise implements IExercise {
  description?: string
  id?: number
  link?: string
  name: string

  constructor(exercise: IExercise) {
    this.description = exercise.description
    this.id = exercise.id
    this.link = exercise.link
    this.name = exercise.name
  }

  clear() {
    this.description = ''
    this.id = undefined
    this.link = ''
    this.name = ''
  }
}

export class WorkoutExercise extends Exercise implements IWorkoutExercise {
  readonly sets: Array<Set>

  constructor(exercise: IExercise) {
    super(exercise)
    this.sets = []
  }
}
