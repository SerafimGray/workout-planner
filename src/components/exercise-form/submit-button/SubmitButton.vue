<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()
const { add } = exerciseFormStore
const { forEdit, loading } = storeToRefs(exerciseFormStore)

const buttonText = computed(() => {
  const prefix = forEdit.value ? 'Edit' : 'Add'
  return `${prefix} exercise`
})
</script>

<template>
  <el-form-item>
    <el-button
      :aria-disabled="loading"
      :loading="loading"
      type="primary"
      @click="add"
    >
      {{ buttonText }}
    </el-button>
  </el-form-item>
</template>

<style scoped>
button[aria-disabled='true'] {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
