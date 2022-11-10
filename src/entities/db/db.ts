import Dexie, { Table } from 'dexie'

import { IExerciseTable } from '@/entities/db/db.types'

class DB extends Dexie {
  exercises!: Table<IExerciseTable>

  constructor() {
    super('workoutPlannerDB')

    this.version(1).stores({
      exercises: '++id, name, description, link'
    })
  }
}

export const db = new DB()
