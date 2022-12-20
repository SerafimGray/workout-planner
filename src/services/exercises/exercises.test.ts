import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'

import { DB } from '@/entities/db/db'
import { IDB } from '@/entities/db/db.types'
import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'
import { IDBService } from '@/services/db/db.types'
import { ExercisesService } from '@/services/exercises/exercises'
import { IExercisesService } from '@/services/exercises/exercises.types'

describe('ExercisesService', () => {
  describe('getAll', () => {
    let db: IDB
    let dbName = 0
    let dbService: IDBService
    let exercisesService: IExercisesService

    const exercise = new Exercise({
      name: 'exerciseName',
      description: 'exerciseDescription',
      link: 'exerciseLink'
    })

    beforeEach(() => {
      db = new DB({ name: `${dbName}` })
      dbName++
      dbService = new DBService(db)
      exercisesService = new ExercisesService(db)
    })

    it.todo('should return all exercises', async () => {
      await dbService.putExercise(exercise)
      const exercises = await exercisesService.getAll()
      expect(exercises.value?.length).toBe(1)
    })
  })
})
