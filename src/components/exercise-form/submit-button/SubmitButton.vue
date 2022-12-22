<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()
const { put } = exerciseFormStore
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
      class="put-exercise-button"
      :loading="loading"
      type="primary"
      @click="put"
    >
      {{ buttonText }}
    </el-button>
  </el-form-item>
</template>

<style scoped>
.put-exercise-button[aria-disabled='true'] {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
