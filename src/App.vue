<template>
  <div style="height: 100%;width: 100%;">
    <div>
      <van-nav-bar style="background-color: #3978FB;"  title="彩票服务" />
    </div>
    <div class="app-content">
      <Card>
        <OpenInfo/>
        <van-divider />
        <OpenInfo1/>
      </Card>
    </div>
<Tabbar/>
<!--    <img src="./assets/ba.jpg" style="width: 100%">-->
  </div>
</template>
<script setup lang="ts">

import Tabbar from "./components/Tabbar.vue";
import Card from "./components/Card.vue";
import OpenInfo from "./components/OpenInfo.vue";
import OpenInfo1 from "./components/OpenInfo1.vue";
</script>

<style scoped>
.app-content{
  padding: 10px;
}

</style>