<script setup lang="ts">
import { ref } from 'vue'

import { db } from '@/entities/db/db'

const status = ref('')
const name = ref('')
const description = ref('')
const link = ref('')

async function add() {
  try {
    const id = await db.exercises.add({
      name: name.value,
      description: description.value,
      link: link.value
    })

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
  <fieldset>
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
  </fieldset>
</template>
