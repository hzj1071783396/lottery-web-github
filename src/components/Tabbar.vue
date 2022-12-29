<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {ref} from "vue";

const active = ref(0)
</script>

<style scoped>
</style>
