<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

function openDialog() {
  exerciseFormStore.$patch(state => {
    state.forEdit = false
    state.isDialogVisible = true
    state.status = ''
  })
  exerciseFormStore.clearExercise()
}
</script>

<template>
  <el-button
    aria-label="Add an Exercise"
    circle
    class="add-exercise-button"
    :icon="Plus"
    type="primary"
    @click="openDialog"
  />
</template>

<style scoped>
.add-exercise-button {
  bottom: 20px;
  height: 56px;
  position: fixed;
  right: 20px;
  width: 56px;
}
</style>
