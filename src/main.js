import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import web3 from 'web3'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)



Vue.config.productionTip = false

Vue.filter('toWei', function (value) {
  return web3.utils.toWei(value, 'finney')
})

Vue.use(VueCarousel);

;(async () => {
  try {
    await store.dispatch('setContract');
    store.dispatch('ipfsSet');
    store.dispatch('createWeb3');

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
