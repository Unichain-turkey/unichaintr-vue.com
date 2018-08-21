<template>
  <div class="block ">


    <carousel :perPage="perPage"
              paginationColor="#022d46"
              :loop="loop" >

    <slide v-for="(post, index) in posts " v-bind:key="post.title[0]">
      <div >
          <a  :href="post.link[0]" target="_blank">
          <div class="post">
            <div class="post-img">
              <img src="/static/images/mediumpost.svg" alt="">
            </div>
            <div class="post-details">
              <ul class="post-info">
                <li><span>{{getDate(post.pubDate[0])}}</span></li>
                <li><a>{{post.creator[0].toUpperCase()}}</a></li>
              </ul>
              <h3><a>{{post.title[0]}}</a></h3></div>

          </div><!--post end-->
          </a>
      </div>
          </slide>
        </carousel>

  </div>
</template>

<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Feeds",
  data: function () {
    return {
      posts: null,
      paginationSize:10,
      loop:true,
      navigationEnabled:false,
      perPage:3

    }
  },
  components: {
    Carousel,
    Slide
  },
  mounted(){
    let that=this
    const request = axios({
      method: 'get',
      url: 'http://46.101.182.159:3000/mediumDaily',
    })
    request.then(function (res, err) {
      console.log(res.data)
      that.posts=res.data

    })
  },
  methods:{
    getDate:function (date) {
      var mydate = new Date(date);
      return mydate.toDateString()
    },
    getImage:function (des) {
      let tagIndex = des.indexOf('<img'); // Find where the img tag starts
      let srcIndex = des.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
      let srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
      let srcEnd = des.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
      let src = des.substring(srcStart, srcEnd); // Extract just the URL
      console.log(src)
      return src

    },
    getStaticImage:function(ind){
      return "/static/images/medium/"+str(ind+1)+".jpg"
    }
  }
}
</script>

<style scoped>
</style>
