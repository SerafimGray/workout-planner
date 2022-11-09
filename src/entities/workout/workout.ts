import { SuperSet } from '@/entities/superSet/superSet'
import { IWorkout } from '@/entities/workout/workout.types'

export class Workout implements IWorkout {
  readonly superSets: Array<SuperSet> = []
}
