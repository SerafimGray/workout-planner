import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { ExercisesService } from '@/services/exercises/exercises'

export const useExerciseListStore = defineStore('exerciseList', () => {
  const exercisesService = new ExercisesService()

  const exercises = reactive({ list: exercisesService.getAll() })

  return { exercises }
})
