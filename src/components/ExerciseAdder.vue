<script setup lang="ts">
import type { FormItemProp, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import ExerciseDescriptionInput from '@/components/ExerciseDescriptionInput.vue'
import ExerciseLinkInput from '@/components/ExerciseLinkInput.vue'
import ExerciseNameInput from '@/components/ExerciseNameInput.vue'
import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'

const status = ref('')

const form = reactive({
  description: '',
  link: '',
  name: ''
})

const dbService = new DBService()

async function add() {
  try {
    const exercise = new Exercise(form.name, form.description, form.link)
    const id = await dbService.addExercise(exercise)

    status.value = `Exercise ${form.name} successfully added. Got id ${id}`

    form.name = ''
    form.description = ''
    form.link = ''
  } catch (error) {
    status.value = `Failed to add ${form.name}: ${error}`
  }
}

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: 'Please input exercise name',
      trigger: 'blur'
    }
  ],
  link: [{ validator: validateLink, trigger: 'blur' }]
})

function validateLink(rule: any, value: string, callback: any) {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // validate fragment locator

  if (!urlPattern.test(value)) {
    return callback(new Error('Please input correct url'))
  } else {
    return callback()
  }
}

const isPropValid = {
  name: true,
  link: true
}

function onValidate(prop: FormItemProp, isValid: boolean) {
  isPropValid[prop as keyof typeof isPropValid] = isValid
}
</script>

<template>
  <el-form
    label-position="top"
    :model="form"
    :rules="rules"
    @validate="onValidate"
  >
    <legend>Add new exercise</legend>

    <ExerciseNameInput v-model="form.name" :is-name-valid="isPropValid.name" />

    <ExerciseDescriptionInput v-model="form.description" />

    <ExerciseLinkInput v-model="form.link" :is-link-valid="isPropValid.link" />

    <button @click="add">Add Exercise</button>

    <p>{{ status }}</p>
  </el-form>
</template>
