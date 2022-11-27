import { useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'
import { from } from 'rxjs'

import { db } from '@/entities/db/db'
import { IDB } from '@/entities/db/db.types'
import { Exercise } from '@/entities/exercise/exercise'
import { IExercise } from '@/entities/exercise/exercise.types'
import { IExercisesService } from '@/services/exercises/exercises.types'

export class ExercisesService implements IExercisesService {
  readonly db: IDB

  constructor(customDB?: IDB) {
    this.db = customDB || db
  }

  getAll() {
    return useObservable(from(liveQuery(() => this.getExercises())))
  }

  private async getExercises() {
    return (await this.db.exercises.toArray()).map(this.toExerciseEntity)
  }

  private toExerciseEntity(exercise: IExercise) {
    const { name, description, link } = exercise
    return new Exercise(name, description, link)
  }
}
