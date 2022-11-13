<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  isNameValid: boolean
  modelValue: string
}>()

const input = ref('')
</script>

<template>
  <el-form-item label="Name:" prop="name">
    <el-input
      v-model="input"
      aria-describedby="exercise-name-alert"
      :aria-invalid="!props.isNameValid"
      clearable
      placeholder="Enter exercise name"
      required
      @input="$emit('update:modelValue', $event)"
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-name-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
