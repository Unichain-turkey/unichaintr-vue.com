<template>
  <div id="app">
    <!--
   <h1>{{ msg }}</h1>
   <span>
   <h2>{{ $t("hello123") }}</h2>
   <h2>{{ $t("bye123")}}</h2>
   <p>{{ $tc('car') }}</p>
   <p>{{ $tc('car', 10, { count: 10}) }}</p>
   </span>
   <h3>without Vuex</h3>
   <button @click="switchLang('tr')">tr</button>
   <button @click="switchLang('en')">en</button>
   <br />
   <h3>with Vuex</h3>
   <button @click="setLang('tr')">tr</button>

   <button @click="setLang('en')">en</button>
   <br />
    -->

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
  data () {
    return {
      msg: 'Welcome to Vue+Vuex+Vuei18n'
    }
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
