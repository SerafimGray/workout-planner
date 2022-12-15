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

    const { description, id, link, name } = props.exercise
    state.exercise.description = description
    state.exercise.id = id
    state.exercise.link = link
    state.exercise.name = name
    state.status = ''
  })
}
</script>

<template>
  <el-button circle :icon="Edit" type="primary" @click="openDialog" />
</template>
