<template>
  <div class="maintain">
    <div class="notify-head"></div>
    <van-field v-model="name" label="姓名" placeholder="请输入姓名" size="large" />
    <van-field v-model="room" label="房号" placeholder="请输入房号" size="large" />
    <van-field
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      size="large"
      type="number"
      maxlength="11"
    />
    <van-cell title="期望维修时间" is-link border @click="showPop" :value="timestr"></van-cell>
    <van-field type="textarea" placeholder="请输入问题详情，以便我们更好的处理" class="mes-box" v-model="mes"></van-field>
    <van-uploader v-model="fileList" upload-text="上传图片" preview-size="100px" class="upload"></van-uploader>
    <van-button type="info" class="submit-btn">提交</van-button>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel='noChoose'
        @confirm='chooseTime'
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      room: "",
      phone: "",
      mes: "",
      fileList: [],
      show: false,
      currentDate:'',
      minDate:new Date(),
      maxDate:new Date(),
      timestr:''
    };
  },
  methods: {
    showPop() {
      this.show = true;
      let date=new Date()
      console.log(date)
      this.minDate=date
      // let my=date.getFullYear()
      // let mm=date.getMonth()+1
      // let md=date.getDate()
      // console.log(my,mm,md)
     let date2=new Date(date)
     let date3=date2.setDate(date.getDate()+7)
     console.log(date3)
     this.maxDate=new Date(date3)
    },
    noChoose(){
      this.show=false
    },
    chooseTime(){
      console.log(this.currentDate)
      let date=new Date(this.currentDate)
      let year=date.getFullYear()
      let month=date.getMonth()+1
      let day=date.getDate()
      let hour=date.getHours()
      let min=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
      console.log(year,month,day,hour,min)
      this.timestr=year+'-'+month+'-'+day+' '+hour+':'+min
      console.log(this.timestr)
      this.show=false
    }
  }
};
</script>
<style lang="less" scoped>
.maintain {
  width: 100%;
  height: 100%;
  .notify-head {
    width: 100%;
    height: 88px;
    // background: #000;
    // display: none;
  }
  .mes-box {
    border: 1px solid #e1e1e1;
    width: 690px;
    height: 252px;
    margin: 0 auto;
    margin-top: 41px;
    border-radius: 10px;
  }
  .submit-btn {
    width: 690px;
    height: 80px;
    margin: 0 auto;
    margin-top: 80px;
    margin-left: 30px;
    border-radius: 40px;
  }
  .upload {
    margin-left: 30px;
    margin-top: 40px;
  }
}
</style>