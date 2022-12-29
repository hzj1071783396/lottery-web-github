<template>
  <div>
    <div class="open-top">
      <div style="display: flex;align-items: center">
        <div class="open-top-icon">
          <img src="../assets/logo_dlt.png" style="width: 100%;height: 100%;">
        </div>
        <div class="open-top-title title-text">超级大乐透</div>
        <div class="open-top-time time-text">2022149期 12.28（昨天）</div>
      </div>
      <div class="open-top-pool">奖池16.19亿</div>
    </div>
    <Bank height="15"/>
    <div class="open-content">
      <div style="display: flex;align-items: center;">
        <div class="open-content-head ball">
          <div class="circle head">15</div>
          <div class="circle head">19</div>
          <div class="circle head">22</div>
          <div class="circle head">26</div>
          <div class="circle head">28</div>
        </div>
        <div class="split-line-y" />
        <div class="open-content-after ball">
          <div class="circle after">02</div>
          <div class="circle after">07</div>
        </div>
      </div>
      <div><van-icon name="arrow" style="color: #CECECE"/></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">

.open-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.open-top{
  display: flex;
  align-items: center;
  justify-content: space-between;

  //&>div{
  //  margin: 0 10px;
  //}
  .open-top-icon{
    width: 30px;
    height: 30px;
    margin-right: var(--margin-right);
  }
  .open-top-title{
    margin-right: var(--margin-right);
  }
  .open-top-title{
    font-size: 15px;
  }
  .open-top-time,.open-top-pool{
    font-size: 10px;
  }
  .open-top-pool{
    color: #CD9187;
  }
}
.time-text{
  color: #A9A9A9;
}
.title-text{
  color: #424041;
}
</style>
