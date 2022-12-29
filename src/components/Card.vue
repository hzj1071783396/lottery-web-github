<template>
  <div class="card-root">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

import OpenInfo from "./OpenInfo.vue";
</script>

<style scoped>
.card-root{
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
