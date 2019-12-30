// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/rem'
import VueWechatTitle from 'vue-wechat-title'
import Vant from 'vant';
import Antd from 'ant-design-vue';
import 'vant/lib/index.css';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(Vant);
Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
