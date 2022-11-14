<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  isLinkValid: boolean
  modelValue: string
}>()

const link = ref('')
</script>

<template>
  <el-form-item label="Link:" prop="link">
    <el-input
      v-model="link"
      aria-describedby="exercise-link-alert"
      :aria-invalid="!props.isLinkValid"
      clearable
      placeholder="Enter exercise link"
      type="url"
      @input="$emit('update:modelValue', $event)"
    />

    <template #error="validateMessage">
      <div class="el-form-item__error" id="exercise-link-alert" role="alert">
        {{ validateMessage.error }}
      </div>
    </template>
  </el-form-item>
</template>
