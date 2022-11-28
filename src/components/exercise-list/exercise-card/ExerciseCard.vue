<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { computed, reactive } from 'vue'

const props = defineProps({
  exercise: {
    type: Object,
    default: () => ({})
  }
})

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
          <el-button type="primary" :icon="Edit" circle />

          <el-button type="danger" :icon="Delete" circle />
        </div>
      </div>
    </template>

    <div class="exercise-description" v-if="props.exercise.description">
      {{ props.exercise.description }}
    </div>

    <div class="exercise-link" v-if="props.exercise.link">
      {{ props.exercise.link }}
    </div>
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
