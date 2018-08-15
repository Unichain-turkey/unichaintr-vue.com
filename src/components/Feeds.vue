<template>
  <div class="block no-padding pd-rs">
    <div class="posts-sec st3 bd-df">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 align-middle "  v-for="post in posts">
          <a  :href="post.link[0]" target="_blank">
          <div class="post">
            <div class="post-img">
              <img  src="https://cdn-images-1.medium.com/max/720/1*RkrXVq-its7PCq3xYoHvEg.jpeg" alt="">
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


      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Feeds",
  data: function () {
    return {
      posts: null,
    }
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

    }
  }
}
</script>

<style scoped>
</style>
