import Dexie, { PromiseExtended, IndexableType } from 'dexie'

import { Exercise } from '@/entities/exercise/exercise'

export interface IDBService {
  readonly db: Dexie

  deleteExercise(key: IndexableType): PromiseExtended<void>

  putExercise(exercise: Exercise, key?: number): PromiseExtended<IndexableType>
}
