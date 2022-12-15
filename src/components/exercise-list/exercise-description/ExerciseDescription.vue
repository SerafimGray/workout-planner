<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  description: {
    type: String,
    default: ''
  }
})

const descriptionHtml = computed(
  () => `<p>${props.description.replaceAll('\n', '</p><p>')}</p>`
)
</script>

<template>
  <div class="exercise-description" v-html="descriptionHtml" />
</template>
