<template>

  <div>
    <carousel>
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
<!--
  <div class="block no-padding">
    <div class="partners-section">

      <ul class="partner-carousel" v-for="sponsor in sponsors" >

        <li><a :href="sponsor['url']" class="link">
          <img :src="getImageUrl(sponsor['imageHash'])" alt="Lights" style="width:100%">
        </a></li>

      </ul>

    </div><!--partners-section end
  </div>
-->
</template>


<script>

import store from '@/store/'
import sponsorJson from '@/assets/contracts/Sponsor.json'
function getSposnsor (address) {
  let _web3 = store.getters.web3InstanceGetter()
  return new _web3.eth.Contract(sponsorJson.abi, address)
}
import { Carousel, Slide } from 'vue-carousel';

export default {

  name: "Sponsors",
  data () {
    return {
      sponsors: []
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
        var _sponsor = getSposnsor(address)
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
    })
  }
}
</script>

<style scoped>

</style>
