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
    </div><!--wrapper end-->
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    appFooter: Footer,
    appHeader: Header,
  },
  mounted(){
    /*
    let contract=this.$store.getters.contractInstance()
    const result =contract.methods.isAdmin().call({from: this.$store.getters.currentAddress})
    result.then(function (value, error) {
      if (error == null) {
        console.log(value)
        localStorage.setItem("isAdmin", value);
      }
    });
    */
  }


}
</script>

<style>

</style>
