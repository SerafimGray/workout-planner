<script lang="ts" setup>
const props = defineProps({
  exercise: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>{{ props.exercise }}</template>
