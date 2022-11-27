import { Ref } from 'vue'

import { IExerciseTable } from '@/entities/db/db.types'

export interface IExercisesService {
  getAll(): Readonly<Ref<IExerciseTable[] | undefined>>
}
