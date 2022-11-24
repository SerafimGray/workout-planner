<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exerciseForm'

const props = defineProps({
  name: {
    type: String,
    default: 'Name:'
  }
})

const exerciseFormStore = useExerciseFormStore()
const { form, isPropValid } = exerciseFormStore
</script>

<template>
  <el-form-item :label="props.name" prop="name">
    <el-input
      v-model="form.name"
      aria-describedby="exercise-name-alert"
      :aria-invalid="!isPropValid.name"
      class="exercise-name-input"
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
