<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { reactive, ref, watch } from 'vue'

import DescriptionInput from '@/components/exercise-form/description-input/DescriptionInput.vue'
import FormLegend from '@/components/exercise-form/form-legend/FormLegend.vue'
import LinkInput from '@/components/exercise-form/link-input/LinkInput.vue'
import NameInput from '@/components/exercise-form/name-input/NameInput.vue'
import SubmitButton from '@/components/exercise-form/submit-button/SubmitButton.vue'
import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const exerciseFormStore = useExerciseFormStore()

const { exercise, onValidate } = exerciseFormStore
const { status } = storeToRefs(exerciseFormStore)

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

//validate
watch(
  () => formRef?.value?.validate,
  validate => {
    exerciseFormStore.setValidate(validate)
  }
)
</script>

<template>
  <el-form
    label-position="top"
    :model="exercise"
    ref="formRef"
    :rules="rules"
    @validate="onValidate"
  >
    <FormLegend />

    <NameInput />

    <DescriptionInput />

    <LinkInput />

    <SubmitButton />

    <p class="form-status">{{ status }}</p>
  </el-form>
</template>
