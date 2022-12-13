<script setup lang="ts">
import ExerciseDialog from '@/components/exercise-form/ExerciseDialog.vue'
import OpenDialog from '@/components/exercise-form/OpenDialog.vue'
import ExerciseList from '@/components/exercise-list/ExerciseList.vue'
</script>

<template>
  <OpenDialog />

  <ExerciseList />

  <ExerciseDialog />
</template>
