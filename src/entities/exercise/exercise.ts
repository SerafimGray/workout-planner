import { IExercise, IWorkoutExercise } from '@/entities/exercise/exercise.types'
import { Set } from '@/entities/set/set'

export class Exercise implements IExercise {
  readonly description: string
  readonly link: string
  readonly name: string

  constructor(exercise: { name: string; description?: string; link?: string }) {
    this.description = exercise.description || ''
    this.link = exercise.link || ''
    this.name = exercise.name
  }
}

export class WorkoutExercise extends Exercise implements IWorkoutExercise {
  readonly sets: Array<Set>

  constructor(exercise: Exercise) {
    super(exercise)
    this.sets = []
  }
}
