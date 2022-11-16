<script lang="ts" setup>
import type { FormValidateCallback, FormValidationResult } from 'element-plus'

import { useExerciseFormStore } from '@/stores/exerciseForm'

const exerciseFormStore = useExerciseFormStore()

const props = defineProps<{
  validate:
    | ((callback?: FormValidateCallback | undefined) => FormValidationResult)
    | undefined
}>()

function add() {
  if (props.validate) {
    props.validate(exerciseFormStore.validationCallback)
  }
}
</script>

<template>
  <el-form-item>
    <el-button type="primary" @click="add">Add Exercise</el-button>
  </el-form-item>
</template>
