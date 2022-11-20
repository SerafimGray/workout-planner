<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

const exerciseFormStore = useExerciseFormStore()
</script>

<template>
  <el-form-item>
    <el-button type="primary" @click="exerciseFormStore.add">
      Add Exercise
    </el-button>
  </el-form-item>
</template>
