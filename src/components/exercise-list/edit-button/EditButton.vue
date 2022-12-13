<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

function openDialog() {
  exerciseFormStore.forEdit = true
  exerciseFormStore.isDialogVisible = true
}
</script>

<template>
  <el-button circle :icon="Edit" type="primary" @click="openDialog" />
</template>
