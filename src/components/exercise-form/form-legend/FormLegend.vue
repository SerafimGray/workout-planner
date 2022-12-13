<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

const { forEdit } = storeToRefs(exerciseFormStore)

const legend = computed(() => {
  const prefix = forEdit.value ? 'Edit' : 'Add new'
  return `${prefix} exercise`
})
</script>

<template>
  <legend>{{ legend }}</legend>
</template>
