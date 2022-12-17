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
  const exercise = new Exercise({
    name: exerciseName,
    description: 'exerciseDescription',
    link: 'exerciseLink'
  })

  let dbName = 0

  beforeEach(() => {
    db = new DB({ name: `${dbName}` })
    dbName++
    dbService = new DBService(db)
  })

  describe('deleteExercise', () => {
    it('should delete record from exercises table', async () => {
      const id = await dbService.putExercise(exercise)

      await dbService.deleteExercise(id)
      const exercises = await db.exercises.toArray()

      expect(exercises.length).toBe(0)
    })
  })

  describe('putExercise', () => {
    it('should add record to exercises table', async () => {
      await dbService.putExercise(exercise)
      const exercises = await db.exercises.toArray()

      expect(exercises[0].name).toBe(exerciseName)
    })

    it('should return exercise id', async () => {
      const id = await dbService.putExercise(exercise)
      expect(id).toBeTypeOf('number')
    })
  })
})
