// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AxiosDefaults from 'axios/lib/defaults'
import store from './store'

AxiosDefaults.xsrfCookieName = "csrftoken"
AxiosDefaults.xsrfHeaderName = "X-CSRFToken"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
