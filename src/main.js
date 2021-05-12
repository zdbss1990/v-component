/*
 * @Author: zhangyao
 * @Date: 2021-05-10 15:54:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-12 16:47:27
 */
import Vue from 'vue'
import App from './App.vue'
import zButton from './components/button.vue';
import zDialog from './components/dialog.vue';
import zInput from './components/input.vue'
import '@/assets/fonts/iconfont.css';
Vue.config.productionTip = false
Vue.component(zButton.name,zButton)
Vue.component(zDialog.name,zDialog)
Vue.component(zInput.name,zInput)
new Vue({
  render: h => h(App),
}).$mount('#app')
