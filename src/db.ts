import Dexie, { Table } from 'dexie'

import { IExercise } from '@/entities/exercise/exercise.types'

interface IExerciseTable extends IExercise {
  id?: number
}

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
