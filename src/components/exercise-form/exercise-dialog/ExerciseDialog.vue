<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

const { isDialogVisible } = storeToRefs(exerciseFormStore)
</script>

<template>
  <el-dialog v-model="isDialogVisible">
    <ExerciseForm />
  </el-dialog>
</template>
