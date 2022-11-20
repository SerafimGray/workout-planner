<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exerciseForm'

const exerciseFormStore = useExerciseFormStore()
</script>

<template>
  <el-form-item label="Description:" prop="description">
    <el-input
      v-model="exerciseFormStore.form.description"
      :autosize="{ minRows: 2 }"
      placeholder="Enter exercise description"
      type="textarea"
    />
  </el-form-item>
</template>
