<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  link: {
    type: String,
    default: ''
  }
})

const href = computed(() =>
  props.link.startsWith('http') ? props.link : `https://${props.link}`
)
</script>

<template>
  <a class="exercise-link" :href="href">
    {{ props.link }}
  </a>
</template>
