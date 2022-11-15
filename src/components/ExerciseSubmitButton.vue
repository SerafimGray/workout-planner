<script lang="ts" setup>
import type { FormValidateCallback, FormValidationResult } from 'element-plus'

import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'

const props = defineProps<{
  form: { description: string; name: string; link: string }
  validate:
    | ((callback?: FormValidateCallback | undefined) => FormValidationResult)
    | undefined
}>()

const dbService = new DBService()

async function validationCallback(valid: boolean) {
  if (valid) {
    const exercise = new Exercise(
      props.form.name,
      props.form.description,
      props.form.link
    )
    const id = await dbService.addExercise(exercise)
    emit('add', { id })
  } else {
    return false
  }
}

function add() {
  try {
    if (props.validate) {
      props.validate(validationCallback)
    }
  } catch (error) {
    emit('add', { error })
  }
}

const emit = defineEmits(['add'])
</script>

<template>
  <el-form-item>
    <el-button type="primary" @click="add"> Add Exercise </el-button>
  </el-form-item>
</template>
