<script setup lang="ts">
import type { FormItemProp, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

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
  ]
})

const isNameValid = ref(true)

function onValidate(prop: FormItemProp, isValid: boolean) {
  if (prop === 'name') {
    isNameValid.value = isValid
  }
}
</script>

<template>
  <el-form :model="form" :rules="rules" @validate="onValidate">
    <legend>Add new exercise</legend>

    <ExerciseNameInput
      @input="form.name = $event"
      :is-name-valid="isNameValid"
      :value="form.name"
    />

    <label>
      description:
      <input v-model="form.description" type="text" />
    </label>

    <br />

    <label>
      link:
      <input v-model="form.link" type="text" />
    </label>

    <button @click="add">Add Exercise</button>

    <p>{{ status }}</p>
  </el-form>
</template>
