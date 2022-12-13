<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'

import { useExerciseFormStore } from '@/stores/exercise-form/exercise-form'

const props = defineProps({
  exercise: {
    type: Object,
    default: () => ({})
  }
})

const exerciseFormStore = useExerciseFormStore()

function openDialog() {
  exerciseFormStore.$patch(state => {
    state.forEdit = true
    state.isDialogVisible = true

    const { description, link, name } = props.exercise
    state.form.description = description
    state.form.link = link
    state.form.name = name
    state.form.status = ''
  })
}
</script>

<template>
  <el-button circle :icon="Edit" type="primary" @click="openDialog" />
</template>
