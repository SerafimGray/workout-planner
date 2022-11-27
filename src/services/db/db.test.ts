import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'

import { DB } from '@/entities/db/db'
import { IDB } from '@/entities/db/db.types'
import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'
import { IDBService } from '@/services/db/db.types'

describe('DBService', () => {
  let db: IDB
  let dbService: IDBService

  const exerciseName = 'exerciseName'
  const exercise = new Exercise(
    exerciseName,
    'exerciseDescription',
    'exerciseLink'
  )

  describe('addExercise', () => {
    beforeEach(() => {
      db = new DB()
      dbService = new DBService(db)
    })

    it('should add record to exercises table', async () => {
      await dbService.addExercise(exercise)
      const exercises = await db.exercises.toArray()

      expect(exercises[0].name).toBe(exerciseName)
    })

    it('should return exercise id', async () => {
      const id = await dbService.addExercise(exercise)
      expect(id).toBeTypeOf('number')
    })
  })
})
