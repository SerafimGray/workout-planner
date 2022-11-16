<script setup lang="ts">
import type { FormInstance, FormItemProp, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

import DescriptionInput from '@/components/exercise-form/DescriptionInput.vue'
import LinkInput from '@/components/exercise-form/LinkInput.vue'
import NameInput from '@/components/exercise-form/NameInput.vue'
import SubmitButton from '@/components/exercise-form/SubmitButton.vue'
import { useExerciseFormStore } from '@/stores/exerciseForm'

const exerciseFormStore = useExerciseFormStore()

const { form } = exerciseFormStore
const formRef = ref<FormInstance>()

//rules
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

function validateLink(_: unknown, value: string, callback: any) {
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

//onValidate
function onValidate(prop: FormItemProp, isValid: boolean) {
  const { isPropValid } = exerciseFormStore
  isPropValid[prop as keyof typeof isPropValid] = isValid
}
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

    <NameInput />

    <DescriptionInput />

    <LinkInput />

    <SubmitButton :validate="formRef?.validate" />

    <p>{{ form.status }}</p>
  </el-form>
</template>
