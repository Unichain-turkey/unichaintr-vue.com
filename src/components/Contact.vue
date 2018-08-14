<template>

  <div class="contact-info-sec">
    <div>
      <div class="cntct-details">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-form-sec">
              <h3>Bize Ulaşın...</h3>
              <p class="success alert alert-success" id="success" style="display:none;"></p>
              <p class="error alert alert-danger" id="error" style="display:none;"></p>
              <form name="contact_form_3" id="contact_form_3" method="post">
                <input type="hidden" name="axn" value="contact_3">
                <div class="row">
                  <div class="col-lg-6">
                    <input type="text" name="username" id="username" placeholder="İsim - Soyisim*">
                  </div>
                  <div class="col-lg-6">
                    <input type="text" name="email" id="email" placeholder="E-mail*">
                  </div>
                  <div class="col-lg-12">
                    <input type="text" name="subject" placeholder="Konu(Opsiyonel)">
                  </div>
                  <div class="col-lg-12">
                    <textarea name="description" id="description" placeholder="İletiniz*"></textarea>
                  </div>
                  <div class="col-lg-12 text-center">
                    <button type="button" id="submit_3">GÖNDER</button>
                  </div>
                </div>
              </form>
            </div>
            <!--contact-form-sec end-->
          </div>
          <div class="col-lg-6 Absolute-Center" >
            <div class="contact-more-info">
              <h5>Bize ulaşabileceğiniz adresler;</h5>
              <h2>
                <a href=" mailto:unichainturkey@gmail.com" <i class="fa fa-envelope"></i>  unichainturkey@gmail.com
                </a>
              </h2>
            </div>
            <!--contact-more-info end-->
            <ul class="footer-social-links">
              <li><a href="https://twitter.com/UniChaintr" target="_blank"><i class="fa fa-twitter fa-3x"></i></a></li>
              <li><a href="https://medium.com/unichain-tr" target="_blank"><i class="fa fa-medium fa-3x"></i></a></li>
              <li><a href="https://www.patreon.com/unichaintr/" target="_blank"><i class="fa fa-patreon fa-3x"></i></a></li>
              <li><a href="https://github.com/unichain-turkey/" target="_blank"><i class="fa fa-github fa-3x"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCb58_yzifvSeFC4X4SbRxng" target="_blank"><i class="fa fa-youtube fa-3x"></i></a></li>
              <li><a href="https://www.instagram.com/unichaintr/" target="_blank"><i class="fa fa-instagram fa-3x"></i></a></li>
              <li><a href="https://www.linkedin.com/company/unichaintr/?trk=ppro_cprof" target="_blank"><i class="fa fa-linkedin fa-3x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
