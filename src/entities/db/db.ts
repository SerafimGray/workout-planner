import Dexie, { DexieOptions, Table } from 'dexie'

import { IExerciseTable } from '@/entities/db/db.types'

export class DB extends Dexie {
  exercises!: Table<IExerciseTable>

  constructor(options?: DexieOptions) {
    super('workoutPlannerDB', options)

    this.version(1).stores({
      exercises: '++id, name, description, link'
    })
  }
}

export const db = new DB()
