import type { IExercise } from '@/entities/exercise/exercise.types'

export interface IExercisesService {
  getAll(): Promise<IExercise[]>
}
