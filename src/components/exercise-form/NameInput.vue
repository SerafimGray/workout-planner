<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

const exerciseFormStore = useExerciseFormStore()

const { form, isPropValid } = exerciseFormStore
</script>

<template>
  <el-form-item label="Name:" prop="name">
    <el-input
      v-model="form.name"
      aria-describedby="exercise-name-alert"
      :aria-invalid="!isPropValid.name"
      clearable
      placeholder="Enter exercise name"
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-name-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
