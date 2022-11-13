<script lang="ts" setup>
import { ref } from 'vue'

const description = ref('')
</script>

<template>
  <el-form-item label="Description:" prop="description">
    <el-input
      v-model="description"
      :autosize="{ minRows: 2 }"
      placeholder="Enter exercise description"
      type="textarea"
      @input="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>
