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
// import '../src/assets/mui/js/mui(1)/mui.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
