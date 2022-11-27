import { db } from '@/entities/db/db'
import type { IDB } from '@/entities/db/db.types'
import { Exercise } from '@/entities/exercise/exercise'
import { IDBService } from '@/services/db/db.types'

export class DBService implements IDBService {
  readonly db: IDB

  constructor(customDB?: IDB) {
    this.db = customDB || db
  }

  addExercise(exercise: Exercise) {
    return this.db.exercises.add({
      name: exercise.name,
      description: exercise.description,
      link: exercise.link
    })
  }
}
