// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//引入mui
import '../src/assets/mui/css/mui.css'
import '../src/assets/mui/css/icons-extra.css'

//引入vue-preview插件
import VuePrevie from 'vue-preview'
Vue.use(VuePrevie);

//引入vuex
import store from './store';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
