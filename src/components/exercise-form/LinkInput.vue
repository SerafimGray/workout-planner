<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

const exerciseFormStore = useExerciseFormStore()

const { form, isPropValid } = exerciseFormStore
</script>

<template>
  <el-form-item label="Link:" prop="link">
    <el-input
      v-model="form.link"
      aria-describedby="exercise-link-alert"
      :aria-invalid="!isPropValid.link"
      clearable
      placeholder="Enter exercise link"
      type="url"
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-link-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
