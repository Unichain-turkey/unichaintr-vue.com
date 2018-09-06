<template>
  <div id="app">

   <div class="page-loading">
     <div class="thecube">
       <div class="cube c1"></div>
       <div class="cube c2"></div>
       <div class="cube c4"></div>
       <div class="cube c3"></div>
     </div>
   </div><!--page-loading end-->
   <div class="wrapper">
     <app-header></app-header>
     <router-view/>
     <app-footer></app-footer>
   </div>
 </div>

</template>

<script>
import i18n from './lang/lang'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    appFooter: Footer,
    appHeader: Header,
  },
  methods:{
    switchLang: function(lang){
      if (lang in this.$i18n.messages) {
        this.$i18n.locale = lang
      } else {
        this.loadLocaleMessage(lang, (err, message) => {
          if (err) {
            console.error(err)
            return
          }
          i18n.setLocaleMessage(lang, message)
          this.$i18n.locale = lang
        })
      }
    },
  }

}
</script>

<style>

</style>
