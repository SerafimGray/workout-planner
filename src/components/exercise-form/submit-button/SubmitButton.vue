<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

const exerciseFormStore = useExerciseFormStore()
const { add, loading } = exerciseFormStore
</script>

<template>
  <el-form-item>
    <el-button :aria-disabled="loading" type="primary" @click="add">
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
