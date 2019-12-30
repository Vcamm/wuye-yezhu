<template>
  <div class="maintain-detail">
    <div class="notify-head"></div>
    <div class="progress">
      <van-steps :active="active" active-color="#38f">
        <van-step>订单提交</van-step>
        <van-step>服务管家接单</van-step>
        <van-step>处理中</van-step>
        <van-step>处理完成</van-step>
         <van-step>评价</van-step>
      </van-steps>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            active:1
        }
    }
};
</script>
<style lang="less" scoped>
.maintain-detail {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  .notify-head {
    width: 100%;
    height: 88px;
    background: #000;
  }
  .progress {
    width: 750px;
    height: 140px;
    background: #fff;
  }
}
</style>