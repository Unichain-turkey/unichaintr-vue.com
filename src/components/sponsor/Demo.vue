<template>
  <section>
    <div class="block">
        <div class="container pt-4   text-center ">
          <div class="row m-2 pb-2">
            <div class="col"><h3 class="text-white">Demo of Adherium on Sponsorships</h3></div>
          </div>
            <div class="row  ">
              <div class="col"><h5 class="text-white">Total sponsor : {{ $store.getters.sponsorCount }}</h5></div>
              <div class="col"><h5 class="text-white">Total pending : {{ $store.getters.pendingCount }} </h5></div>
              <div class="col"><h5 class="text-white">Limit :{{ $store.getters.limit }} </h5></div>
              <div class="col"><h5 class="text-white">Total amount : {{ $store.getters.balanceSponsor }} ether</h5></div>
            </div>
          <div class="row pt-2">
            <sponsors ></sponsors>
          </div>
          </div>

  </div>
    <div class="row p-3">
      <beingsponsor></beingsponsor>
    </div>
    <div class="row p-3">
      <router-link :to="{ path: 'admin' }">Admin</router-link>
    </div>
  </section>

</template>

<script>
import Sponsors from '@/components/sponsor/Sponsors'
import BeingSponsor from '@/components/sponsor/BeingSponsor.vue'
export default {
  name: "Demo",
  components: {
    sponsors: Sponsors,
    beingsponsor:BeingSponsor
  },
  mounted(){
    if (this.$store.getters.currentAddress!="Null"){
      const result =this.$store.getters.contractInstance().methods.isAdmin().call({from: this.$store.getters.currentAddress})
      result.then(function (value, error) {
        if (typeof(error )== 'undefined') {
          console.log("Admin mode : ",value)
          localStorage.setItem("isAdmin", value);
        }
      });
    }
    else{
      setTimeout(function () { this.init() }.bind(this) , 2100)
    }
  },
  methods: {
    init: function () {
      const result = this.$store.getters.contractInstance().methods.isAdmin().call({from: this.$store.getters.currentAddress})
      result.then(function (value, error) {
        if (typeof(error) == 'undefined') {
          console.log("Admin mode -> ", value)
          localStorage.setItem("isAdmin", value);
        }
      });

    }
  }
}
</script>

<style scoped>

</style>
