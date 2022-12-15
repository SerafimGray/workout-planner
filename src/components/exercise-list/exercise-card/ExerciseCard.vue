<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
import { computed, reactive } from 'vue'

import EditButton from '@/components/exercise-list/edit-button/EditButton.vue'
import ExerciseDescription from '@/components/exercise-list/exercise-description/ExerciseDescription.vue'
import ExerciseLink from '@/components/exercise-list/exercise-link/ExerciseLink.vue'

const props = defineProps({
  exercise: {
    type: Object,
    default: () => ({})
  }
})

const description = computed(() => props.exercise.description)
const link = computed(() => props.exercise.link)

const isBody = computed(() => props.exercise.description || props.exercise.link)

const bodyStyle = reactive({
  display: isBody.value ? 'block' : 'none'
})
</script>

<template>
  <el-card :body-style="bodyStyle" class="exercise-card">
    <template #header>
      <div class="exercise-card-header">
        <h3>{{ props.exercise.name }}</h3>

        <div class="header-buttons">
          <EditButton :exercise="props.exercise" />

          <el-button type="danger" :icon="Delete" circle />
        </div>
      </div>
    </template>

    <ExerciseDescription :description="description" v-if="description" />

    <ExerciseLink :link="link" v-if="link" />
  </el-card>
</template>

<style scoped>
.exercise-card:not(:last-of-type) {
  margin-bottom: 16px;
}

:deep() .el-card__header {
  border-bottom-width: 0;
}

.exercise-card-header {
  align-items: center;
  column-gap: 8px;
  display: flex;
  justify-content: space-between;
}

h3 {
  margin: 0;
}

:deep() .el-card__body {
  border-top: 1px solid var(--el-card-border-color);
}
</style>
