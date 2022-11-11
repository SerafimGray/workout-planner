import { db } from '@/entities/db/db'
import { Exercise } from '@/entities/exercise/exercise'
import { IDBService } from '@/services/db/db.types'

export class DBService implements IDBService {
  addExercise(exercise: Exercise) {
    return db.exercises.add({
      name: exercise.name,
      description: exercise.description,
      link: exercise.link
    })
  }
}
