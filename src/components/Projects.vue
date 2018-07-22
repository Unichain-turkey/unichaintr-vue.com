<template>
  <div class="block3">
    <div class="fixed-bg bg1"></div>
    <div class="container2">
      <div class="building-gallery-tab">
        <div class="gallery-tabs-head">
          <h4>O kadar çok uğraştık kafa patlattık şimdi sana </h4>
          <a href="#" title="">Tüm projeleri görüntüle  <i class="fa fa-angle-right"></i></a>
        </div><!--gallery-tabs-head end-->
        <div class="gallery-tab-contents">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="locations-images">
                <div class="location-img current" id="tab-1">
                  <img src="../../static/images/adhereum.png" alt="">
                </div><!--location-img end-->
                <div class="location-img" id="tab-2">
                  <img src="../../static/images/unichain.png" alt="">
                </div><!--location-img end-->
                <div class="location-img" id="tab-3">
                  <img src="../../static/images/unichain.png" alt="">
                </div><!--location-img end-->
                <div class="location-img" id="tab-4">
                  <img src="../../static/images/unichain.png" alt="">
                </div><!--location-img end-->

              </div><!--locations-images end-->
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="locations-list">
                <ul>
                  <li class="current" data-tab="tab-1">AdHereum</li>
                  <li data-tab="tab-2">Registereum</li>
                  <li data-tab="tab-3">Proje - 1</li>
                  <li data-tab="tab-4">Proje - 2</li>
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
