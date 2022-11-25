import 'fake-indexeddb/auto'
//import { IDBFactory,  } from 'fake-indexeddb'
import { beforeEach, describe, expect, it } from 'vitest'

import { DB } from '@/entities/db/db'
import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'

describe('DBService', () => {
  let db: DB
  let dbService: DBService

  const exerciseName = 'exerciseName'
  const exercise = new Exercise(
    exerciseName,
    'exerciseDescription',
    'exerciseLink'
  )

  describe('addExercise', () => {
    beforeEach(() => {
      //const indexedDB = new IDBFactory()
      db = new DB(/*{ indexedDB, IDBKeyRange: IDBKeyRange }*/)
      dbService = new DBService(db)
    })

    it('should add record to exercises table', async () => {
      await dbService.addExercise(exercise)
      const exercises = await db.exercises.toArray()

      expect(exercises[0].name).toBe(exerciseName)
    })

    it('should return exercise id', async () => {
      const id = await dbService.addExercise(exercise)
      /*const exercises = await db.exercises.toArray()
      console.log(exercises)*/
      expect(id).toBeTypeOf('number')
    })
  })
})
