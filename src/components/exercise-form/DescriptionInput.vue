<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const description = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <el-form-item label="Description:" prop="description">
    <el-input
      v-model="description"
      :autosize="{ minRows: 2 }"
      placeholder="Enter exercise description"
      type="textarea"
    />
  </el-form-item>
</template>
