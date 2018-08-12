<template>
  <div class="block3">
    <div class="fixed-bg bg1"></div>
    <div class="container2">
      <div class="building-gallery-tab">
        <div class="gallery-tabs-head">
          <h4>"Projeler geliştiren, geliştirirken öğrenen ve öğrendiğini öğreten bir toplululuğuz."</h4>
        </div><!--gallery-tabs-head end-->
        <div class="gallery-tab-contents">
          <div class="row">
            <div class="col-lg-4 col-md-8">
              <div class="locations-images">
                <div class="location-img current" id="tab-1">
                  <img src="static/images/registhereum-logo2.jpg" alt="">

                </div><!--location-img end-->
                <div class="location-img " id="tab-2">
                  <img src="static/images/adhereum-logo.png" alt="">
                </div><!--location-img end-->
              </div><!--locations-images end-->
            </div>

            <div class="col-lg-4 col-md-8">
              <div class="locations-info">
                <div class="location-info current " id="tab-1" >
                  <p>Etkinliklere, kayıt/katılım oranını arttırmak için akıllı kontratlarla oluşturulmuş bir ödül-ceza sistemidir.
                  </p>
                </div>
                <div class="location-info " id="tab-2" >
                  <p>Adhereum sitenizdeki bannerları aracılar olmadan reklamcılara kiralamanız için size bir market sunar, ayrıca içeriğinizle uyumlu sponsor bulmanızı kolaylaştırır.</p>
                </div><!--location-img end-->

              </div><!--locations-images end-->
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="locations-list">
                <ul>
                  <li class="current" data-tab="tab-1">Registhereum</li>
                  <li   data-tab="tab-2">Adhereum</li>
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
