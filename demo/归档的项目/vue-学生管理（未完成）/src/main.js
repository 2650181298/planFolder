import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'


Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(axios)//注册到全局组件
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
