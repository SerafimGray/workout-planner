<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  isNameValid: boolean
  value: string
}>()

const emit = defineEmits(['input'])

const exerciseName = computed({
  get() {
    return props.value
  },

  set(value) {
    emit('input', value)
  }
})
</script>

<template>
  <el-form-item label="Name:" prop="name">
    <el-input
      v-model="exerciseName"
      aria-describedby="exercise-name-alert"
      :aria-invalid="!props.isNameValid"
      clearable
      placeholder="Enter exercise name"
      required
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-name-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
