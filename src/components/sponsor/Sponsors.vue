<template>

  <div class="container p-3 text-center ">
  <h3 class="sm-title">SPONSORLARIMIZ</h3>
  <div class="container p-3 ">
    <carousel :perPage="perPage"
              paginationColor="#022d46"
              :paginationSize="paginationSize"
              :paginationPadding="paginationPadding"
              :loop="loop" :navigationEnabled="navigationEnabled" >


      <slide v-for="sponsor in sponsors" v-bind:key="sponsors['url']">
        <a :href="sponsor['url']"  target="_blank" class="link">
        <img class="imgContainer" :src="getImageUrl(sponsor['imageHash'])" alt="Lights" style="width:100%">
        </a>
      </slide>

    </carousel>
  </div>
  </div>
</template>


<script>

import sponsorJson from '@/assets/contracts/Sponsor.json'

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Sponsors",
  data () {
    return {
      sponsors: [],
      paginationSize:10,
      paginationPadding:10,
      loop:false,
      navigationEnabled:true,
      perPage:3

    }
  },
  methods: {
    getImageUrl: function (hash) {
      console.log(hash)
      return 'https://gateway.ipfs.io/ipfs/' + hash + '/'
    }
  },
  components: {
    Carousel,
    Slide
  },
  mounted: function () {
    var self = this
    let _contract = this.$store.getters.contractInstance()
    _contract.getPastEvents('beenSponsor', { fromBlock: 0, toBlock: 'latest' }, function(error, events) {
      events.forEach((element) => {
        var address=element.returnValues[0]
        var _sponsor = this.getSposnsor(address)
        _sponsor.methods.getSponsor().call().then(function (val) {
          console.log("Here",val)
          self.sponsors.push({
            "name":val[0],
            "url":val[1],
            "imageHash":val[2],
            "duration":val[3],
          })
        })

      });
    }.bind(this))
  },
  methods:{
    getSposnsor:function (address) {
      let _web3 = this.$store.getters.web3InstanceGetter()
      return new _web3.eth.Contract(sponsorJson.abi, address)
    },
    getImageUrl: function (hash) {
      console.log(hash)
      return 'https://gateway.ipfs.io/ipfs/' + hash + '/'
    }
  }
}
</script>

<style scoped>
.imgContainer {
  display: block;
  max-width:180px;
  max-height:180px;
  width: auto;
  height: auto;
 }

</style>
