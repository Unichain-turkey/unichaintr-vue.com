import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import web3 from 'web3'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang/lang'



Vue.config.productionTip = false
Vue.use(VueCarousel);

Vue.filter('toWei', function (value) {
  return web3.utils.toWei(value, 'finney')
})



export const app = (async () => {
  try {
    await store.dispatch('setContract');
    store.dispatch('ipfsSet');
    store.dispatch('createWeb3');

  } catch (e) {
    console.log('uff Acidi', e)
  } finally {
     return new Vue({
      el: '#app',
      store,
      i18n,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})()
export default app;

