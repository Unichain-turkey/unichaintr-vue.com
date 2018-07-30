<template>
  <div class="block3">
    <div class="fixed-bg bg1"></div>
    <div class="container2">
      <div class="building-gallery-tab">
        <div class="gallery-tabs-head">
          <h4>"Projeler geliştiren, geliştirirken öğrenen ve öğrendiğini öğreten bir toplululuğuz."</h4>
          <!-- <a href="#" title="">Tüm projeleri görüntüle <i class="fa fa-angle-right"></i>  </a> -->
        </div><!--gallery-tabs-head end-->
        <div class="gallery-tab-contents">
          <div class="row">
            <div class="col-lg-4 col-md-8">
              <div class="locations-images">
                <div class="location-img current" id="tab-1">
                  <img src="static/images/registhereum-logo2.jpg" alt="">
                  <p> logonun diğer versiyonuda var adı registhereum-logo.png </p>
                </div><!--location-img end-->
                <div class="location-img " id="tab-2">
                  <img src="static/images/adhereum-logo.png" alt="">

                </div><!--location-img end-->
                <div class="location-img" id="tab-3">
                  <img src="static/images/unichain.png" alt="">
                </div><!--location-img end-->
                <div class="location-img" id="tab-4">
                  <img src="static/images/unichain.png" alt="">
                </div><!--location-img end-->

              </div><!--locations-images end-->
            </div>

            <div class="col-lg-4 col-md-8">
              <div class="locations-info">
                <div class="location-info current" id="tab-1"  >
                  <p>1 Smart kontratlar ile sponsorluk işlemleri için geliştirilmiş web uygulaması.</p>
                </div><!--location-img end-->
              </div><!--locations-images end-->
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="locations-list">
                <ul>
                  <li class="current" data-tab="tab-1">Registhereum</li>
                  <li  data-tab="tab-2">Adhereum</li>
                  <li data-tab="tab-3">Proje - 3</li>
                  <li data-tab="tab-4">Proje - 4</li>
                </ul>
              </div><!--locations-list end-->
            </div>
          </div>
        </div><!--gallery-tab-content end-->
      </div><!--building-gallery-tab end-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>

</style>
