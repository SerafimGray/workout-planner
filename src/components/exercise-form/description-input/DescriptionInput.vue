<script lang="ts" setup>
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

const props = defineProps({
  label: {
    type: String,
    default: 'Description:'
  }
})
</script>

<template>
  <el-form-item :label="props.label" prop="description">
    <el-input
      v-model="exerciseFormStore.form.description"
      :autosize="{ minRows: 2 }"
      placeholder="Enter exercise description"
      type="textarea"
    />
  </el-form-item>
</template>
