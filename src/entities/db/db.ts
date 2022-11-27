import Dexie, { DexieOptions, Table } from 'dexie'

import { IDB, IExerciseTable } from '@/entities/db/db.types'

export class DB extends Dexie implements IDB {
  exercises!: Table<IExerciseTable>

  constructor(options?: DexieOptions) {
    super('workoutPlannerDB', options)

    this.version(1).stores({
      exercises: '++id, name, description, link'
    })
  }
}

export const db = new DB()
