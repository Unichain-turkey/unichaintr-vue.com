<template>
  <div class="block no-padding pd-rs">
    <div class="posts-sec st3 bd-df">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6"  v-for="post in posts">
          <div class="post">
            <div class="post-img">
              <img src="http://via.placeholder.com/480x432" alt="">
            </div>
            <div class="post-details">
              <ul class="post-info">
                <li><span>Tarih</span></li>
                <li><a href="#" title="">Onur Amcanız</a></li>
              </ul>
              <h3><a href="#" title="">{{post.title[0]}}</a></h3>
            </div>
          </div><!--post end-->
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
}
</script>

<style scoped>

</style>
