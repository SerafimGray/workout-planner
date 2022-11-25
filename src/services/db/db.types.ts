import Dexie, { PromiseExtended, IndexableType } from 'dexie'

import { Exercise } from '@/entities/exercise/exercise'

export interface IDBService {
  readonly db: Dexie

  addExercise(exercise: Exercise): PromiseExtended<IndexableType>
}
