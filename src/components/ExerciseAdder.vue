<script setup lang="ts">
import { ref } from 'vue'

import { Exercise } from '@/entities/exercise/exercise'
import { DBService } from '@/services/db/db'

const status = ref('')
const name = ref('')
const description = ref('')
const link = ref('')

const dbService = new DBService()

async function add() {
  try {
    const exercise = new Exercise(name.value, description.value, link.value)
    const id = await dbService.addExercise(exercise)

    status.value = `Exercise ${name.value} successfully added. Got id ${id}`

    name.value = ''
    description.value = ''
    link.value = ''
  } catch (error) {
    status.value = `Failed to add ${name.value}: ${error}`
  }
}
</script>

<template>
  <el-form>
    <legend>Add new exercise</legend>

    <label>
      Name:
      <input v-model="name" type="text" />
    </label>

    <br />

    <label>
      description:
      <input v-model="description" type="text" />
    </label>

    <br />

    <label>
      link:
      <input v-model="link" type="text" />
    </label>

    <button @click="add">Add Exercise</button>

    <p>{{ status }}</p>
  </el-form>
</template>
