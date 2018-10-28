// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/mock'
// 实际打包时应该不引入mock
/* eslint-disable */
Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})