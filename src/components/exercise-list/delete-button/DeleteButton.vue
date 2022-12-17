<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'

import { dbService } from '@/services/db/db'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

function deleteExercise() {
  dbService.deleteExercise(props.id)
}
</script>

<template>
  <el-button circle :icon="Delete" type="danger" @click="deleteExercise" />
</template>
