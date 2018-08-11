
import AxiosDefaults from 'axios/lib/defaults'
import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import web3 from 'web3'
import App from './App'
import router from './router'
import store from './store'

AxiosDefaults.xsrfCookieName = "csrftoken"
AxiosDefaults.xsrfHeaderName = "X-CSRFToken"

Vue.config.productionTip = false

Vue.filter('toWei', function (value) {
  return web3.utils.toWei(value, 'finney')
})

Vue.use(VueCarousel);


;(async () => {
  try {
    await store.dispatch('setContract')
    await store.dispatch('createWeb3')
    await store.dispatch('ipfsSet')
  } catch (e) {
    console.log('uff', e)
  } finally {
    new Vue({
      el: '#app',
      store,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})()
