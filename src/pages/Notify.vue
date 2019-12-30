<template>
  <div class="notify">
    <div class="notify-head"></div>
    <a-card hoverable class="notify-card" @click="toDetail">
      <div slot="cover" class="img-box"></div>
      <a-card-meta>
        <p slot="title" class="card-title">各位住户好,因天然气管道碰口施工,从11月08日12点起,凯莱丽景小区将停止供气</p>
        <span slot="description" class="card-des">11月07日 11:20</span>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toDetail(){
            console.log('aa')
            this.$router.push('/notifydetail')
        }
    }
};
</script>
<style lang="less" scoped>
.notify {
  width: 100%;
  height: 100%;
  // background: #f0f0f0
  .notify-head {
    width: 100%;
    height: 88px;
    background: #000;
  }
  .notify-card {
    width: 690px;
    height: 439px;
    margin: 0 auto;
    margin-top: 20px;
    .img-box {
      width: 690px;
      height: 230px;
      background: #00a0e9;
    }
    .card-title {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      height: 85px;
      white-space: pre-wrap;
    }
    .card-des {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
}
</style>