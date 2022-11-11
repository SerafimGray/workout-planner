import { PromiseExtended, IndexableType } from 'dexie'

import { Exercise } from '@/entities/exercise/exercise'

export interface IDBService {
  addExercise(exercise: Exercise): PromiseExtended<IndexableType>
}
