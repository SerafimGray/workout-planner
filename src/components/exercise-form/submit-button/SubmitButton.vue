<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()
const { add } = exerciseFormStore
const { loading } = storeToRefs(exerciseFormStore)
</script>

<template>
  <el-form-item>
    <el-button
      :aria-disabled="loading"
      :loading="loading"
      type="primary"
      @click="add"
    >
      Add Exercise
    </el-button>
  </el-form-item>
</template>

<style scoped>
button[aria-disabled='true'] {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
