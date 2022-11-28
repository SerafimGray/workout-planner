import { db } from '@/entities/db/db'
import type { IDB } from '@/entities/db/db.types'
import { IExercise } from '@/entities/exercise/exercise.types'
import { IDBService } from '@/services/db/db.types'

export class DBService implements IDBService {
  readonly db: IDB

  constructor(customDB?: IDB) {
    this.db = customDB || db
  }

  addExercise(exercise: IExercise) {
    return this.db.exercises.add(exercise)
  }
}
