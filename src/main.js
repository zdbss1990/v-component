/*
 * @Author: zhangyao
 * @Date: 2021-05-10 15:54:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-14 17:10:16
 */
import Vue from 'vue'
import App from './App.vue'
import zButton from './components/button.vue';
import zDialog from './components/dialog.vue';
import zInput from './components/input.vue';
import zSwitch from './components/switch.vue';
import zRadio from './components/radio.vue';
import zRadioGroup from './components/radio-group.vue'
import '@/assets/fonts/iconfont.css';
Vue.config.productionTip = false
Vue.component(zButton.name,zButton)
Vue.component(zDialog.name,zDialog)
Vue.component(zInput.name,zInput)
Vue.component(zSwitch.name,zSwitch)
Vue.component(zRadio.name,zRadio)
Vue.component(zRadioGroup.name,zRadioGroup)
new Vue({
  render: h => h(App),
}).$mount('#app')
