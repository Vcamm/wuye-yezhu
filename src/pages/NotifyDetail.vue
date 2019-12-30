<template>
  <div class="notifydetail">
    <div class="notify-head"></div>
    <div class="img-box"></div>
    <p
      class="content"
    >各位住户好,因天然气管道碰口施工,从11月08号12点起,凯莱丽景小区将停止供气。请邻居们做好停气准备哦,详情请咨询天然气公司,电话为028-12345678。</p>
    <span class="time">11月07日 11:20</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.notifydetail {
  width: 100%;
  height: 100%;
  .notify-head {
    width: 100%;
    height: 88px;
    background: #000;
  }
  .img-box {
    width: 689px;
    height: 229px;
    background: #00a0e9;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .content {
    box-sizing: border-box;
    width: 687px;
    min-height: 126px;
    // background: red;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    white-space: pre-wrap;
    line-height: 48px;
    padding: 0 10px;
  }
  .time {
    width: 687px;
    height: 22px;
    margin: 0 auto;
    margin-top: 20px;
    display: block;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 22px;
  }
}
</style>