import Dexie from 'dexie'

import { db } from '@/entities/db/db'
import { Exercise } from '@/entities/exercise/exercise'
import { IDBService } from '@/services/db/db.types'

export class DBService implements IDBService {
  readonly db: Dexie

  constructor(customDB?: Dexie) {
    this.db = customDB || db
  }

  addExercise(exercise: Exercise) {
    return db.exercises.add({
      name: exercise.name,
      description: exercise.description,
      link: exercise.link
    })
  }
}
