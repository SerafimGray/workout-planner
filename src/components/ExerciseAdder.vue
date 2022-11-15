<script setup lang="ts">
import type { FormInstance, FormItemProp, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import ExerciseDescriptionInput from '@/components/ExerciseDescriptionInput.vue'
import ExerciseLinkInput from '@/components/ExerciseLinkInput.vue'
import ExerciseNameInput from '@/components/ExerciseNameInput.vue'
import ExerciseSubmitButton from '@/components/ExerciseSubmitButton.vue'

const status = ref('')

const form = reactive({
  description: '',
  link: '',
  name: ''
})

function onAdd(event: { id?: number; error?: string }) {
  if (typeof event.id !== 'undefined') {
    form.name = ''
    form.description = ''
    form.link = ''

    status.value = `Exercise ${form.name} successfully added.
     Got id ${event.id}`
  }

  if (typeof event.error !== 'undefined') {
    status.value = `Failed to add ${form.name}: ${event.error}`
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

  if (!(value === '' || urlPattern.test(value))) {
    return callback(new Error('Please input correct url'))
  } else {
    return callback()
  }
}

const isPropValid = reactive({
  name: true,
  link: true
})

function onValidate(prop: FormItemProp, isValid: boolean) {
  isPropValid[prop as keyof typeof isPropValid] = isValid
}

const formRef = ref<FormInstance>()
</script>

<template>
  <el-form
    label-position="top"
    :model="form"
    ref="formRef"
    :rules="rules"
    @validate="onValidate"
  >
    <legend>Add new exercise</legend>

    <ExerciseNameInput v-model="form.name" :is-name-valid="isPropValid.name" />

    <ExerciseDescriptionInput v-model="form.description" />

    <ExerciseLinkInput v-model="form.link" :is-link-valid="isPropValid.link" />

    <ExerciseSubmitButton
      :form="form"
      :validate="formRef?.validate"
      @add="onAdd"
    />

    <p>{{ status }}</p>
  </el-form>
</template>
