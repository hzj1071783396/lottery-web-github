<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">้ฆ้กต</van-tabbar-item>
    <van-tabbar-item icon="friends-o">ๆ็</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {ref} from "vue";

const active = ref(0)
</script>

<style scoped>
</style>
