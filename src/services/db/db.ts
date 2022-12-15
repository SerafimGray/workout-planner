import { db } from '@/entities/db/db'
import type { IDB } from '@/entities/db/db.types'
import { IExercise } from '@/entities/exercise/exercise.types'
import { IDBService } from '@/services/db/db.types'

export class DBService implements IDBService {
  readonly db: IDB

  constructor(customDB?: IDB) {
    this.db = customDB || db
  }

  putExercise(exercise: IExercise) {
    const { description, id, link, name } = exercise
    return this.db.exercises.put({ description, id, link, name })
  }
}
