<script lang="ts" setup>
import ExerciseForm from '@/components/exercise-form/ExerciseForm.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

const { isDialogVisible } = exerciseFormStore
</script>

<template>
  <el-dialog v-model="isDialogVisible">
    <ExerciseForm />
  </el-dialog>
</template>
