<template>
  <div :style="{height: height+'px'}"></div>
</template>

<script setup lang="ts">
  defineProps({
    height: {
      type: Number,
      default: "10"
    }
  })
</script>

<style scoped>
</style>
