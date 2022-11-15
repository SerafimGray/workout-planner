<script lang="ts" setup>
const props = defineProps<{
  isNameValid: boolean
  modelValue: string
}>()
</script>

<template>
  <el-form-item label="Name:" prop="name">
    <el-input
      aria-describedby="exercise-name-alert"
      :aria-invalid="!props.isNameValid"
      clearable
      :model-value="props.modelValue"
      placeholder="Enter exercise name"
      @input="$emit('update:modelValue', $event)"
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-name-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
