<script lang="ts" setup>
import ExerciseCard from '@/components/exercise-list/exercise-card/ExerciseCard.vue'
import { useExerciseListStore } from '@/stores/exercise-list/exercise-list'

const exerciseListStore = useExerciseListStore()
const { exercises } = exerciseListStore
</script>

<template>
  <ExerciseCard
    v-for="(exercise, index) in exercises.list"
    :key="index"
    :exercise="exercise"
  />
</template>
