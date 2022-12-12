<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()
const { isDialogVisible } = storeToRefs(exerciseFormStore)
</script>

<template>
  <el-button
    circle
    :icon="Edit"
    type="primary"
    @click="isDialogVisible = true"
  />
</template>
