import Dexie, { Table } from 'dexie'

import { IExercise } from '@/entities/exercise/exercise.types'

export interface IDB extends Dexie {
  exercises: Table<IExerciseTable>
}

export interface IExerciseTable extends IExercise {
  id?: number
}
