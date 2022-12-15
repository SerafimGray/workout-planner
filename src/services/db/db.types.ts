import Dexie, { PromiseExtended, IndexableType } from 'dexie'

import { Exercise } from '@/entities/exercise/exercise'

export interface IDBService {
  readonly db: Dexie

  putExercise(exercise: Exercise, key?: number): PromiseExtended<IndexableType>
}
