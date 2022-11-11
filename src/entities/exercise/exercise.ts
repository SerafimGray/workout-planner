import { IExercise, IWorkoutExercise } from '@/entities/exercise/exercise.types'
import { Set } from '@/entities/set/set'

export class Exercise implements IExercise {
  readonly description: string
  readonly link: string
  readonly name: string

  constructor(name: string, description = '', link = '') {
    this.description = description
    this.link = link
    this.name = name
  }
}

export class WorkoutExercise extends Exercise implements IWorkoutExercise {
  readonly sets: Array<Set>

  constructor(exercise: Exercise) {
    super(exercise.name, exercise.description, exercise.link)
    this.sets = []
  }
}
