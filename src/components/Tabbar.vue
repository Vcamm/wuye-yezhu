<template>
  <div class="tabbar">
    <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item name='/home'>
          <span>首页</span>
           <img slot="icon" slot-scope="props" :src="props.active ? icon.shouyeActive: icon.shouyeNormal" class="tabbar-img"/>
      </van-tabbar-item>
       <van-tabbar-item name='/shop'>
          <span>商城</span>
           <img slot="icon" slot-scope="props" :src="props.active ? icon.shopActive: icon.shopNormal" class="tabbar-img"/>
      </van-tabbar-item>
       <van-tabbar-item name='/guard'>
          <span>门禁</span>
          <div class="tab-box" slot="icon"></div>
          <div slot="icon" class="guard-box">
              <img src="../assets/Tab-bar图标-业主/未点击状态/门禁.png" alt="">
          </div>
      </van-tabbar-item>
       <van-tabbar-item name='/info'>
          <span>消息</span>
           <img slot="icon" slot-scope="props" :src="props.active ? icon. infoActive: icon. infoNormal" class="tabbar-img"/>
      </van-tabbar-item>
       <van-tabbar-item name='/mine'>
          <span>我的</span>
           <img slot="icon" slot-scope="props" :src="props.active ? icon.mineActive: icon.mineNormal" class="tabbar-img"/>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data(){
        return{
            active:this.$route.fullPath,
            icon:{
                shouyeActive:require('../assets/Tab-bar图标-业主/点击状态/首页.png'),
                shouyeNormal:require('../assets/Tab-bar图标-业主/未点击状态/首页.png'),
                shopActive:require('../assets/Tab-bar图标-业主/点击状态/商城.png'),
                shopNormal:require('../assets/Tab-bar图标-业主/未点击状态/商城.png'),
                infoActive:require('../assets/Tab-bar图标-业主/点击状态/消息.png'),
                infoNormal:require('../assets/Tab-bar图标-业主/未点击状态/消息.png'),
                mineActive:require('../assets/Tab-bar图标-业主/点击状态/我的.png'),
                mineNormal:require('../assets/Tab-bar图标-业主/未点击状态/我的.png')
            }
        }
    }
};
</script>
<style lang="less" scoped>
.tabbar-img{
    width: 44px;
    height: 44px;
}
.guard-box{
    width: 80px;
    height: 80px;
    background: #00A0E9;
    border-radius: 50%;
    position: absolute;
    top:-40px;
    left: -18px;
    z-index:9999;
    text-align: center;
    img{
        width: 32px;
        height: 32px;
        margin-top:22px;
        margin-left: 23px;
    }
}
.tab-box{
    width: 44px;
    height: 44px;
}
</style>