<script lang="ts" setup>
const props = defineProps<{
  isLinkValid: boolean
  modelValue: string
}>()
</script>

<template>
  <el-form-item label="Link:" prop="link">
    <el-input
      aria-describedby="exercise-link-alert"
      :aria-invalid="!props.isLinkValid"
      clearable
      :model-value="props.modelValue"
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
