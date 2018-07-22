<template>
  <div class="contact-info-sec">
    <div class="container">
      <div class="cntct-details">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-address">
              <h2><strong>Brooklyn, </strong>New York</h2>
              <p>269 King Str, 05th Floor, Utral Hosue Building, Melbourne, VIC 3000, Australia.</p>
              <span><b>Email:</b> infor@kons.com</span>
            </div><!--contact-address end-->
          </div>
          <div class="col-lg-6">
            <div class="contact-more-info">
              <h5>Call directly:</h5>
              <h2>(+035) 527-1710-70</h2>
              <div class="address">
                <h3>Brand Offices :</h3>
                <ul>
                  <li><a href="#" title="">Allentown PA</a></li>
                  <li><a href="#" title="">Allanta, GA</a></li>
                  <li><a href="#" title="">Chicago, IL</a></li>
                  <li><a href="#" title="">Dallas, TX</a></li>
                  <li><a href="#" title="">Edison, NJ</a></li>
                  <li><a href="#" title="">Houston, TX</a></li>
                </ul>
              </div><!--address end-->
              <div class="address">
                <h3>Work hours:</h3>
                <span>Mon - Sat: 8.00 - 17.00, Sunday closed</span>
              </div>
            </div><!--contact-more-info end-->
          </div>
        </div>
      </div><!--cntct-details end-->
      <div class="contact-form-sec">
        <h3>Have A Question? Contact Us</h3>
        <p class="success alert alert-success" id="success" style="display:none;"></p>
        <p class="error alert alert-danger" id="error" style="display:none;"></p>
        <form name="contact_form_3" id="contact_form_3" method="post">
          <input type="hidden" name="axn" value="contact_3">
          <div class="row">
            <div class="col-lg-4">
              <input type="text" name="username" id="username" placeholder="Name*">
            </div>
            <div class="col-lg-4">
              <input type="text" name="email" id="email" placeholder="Email*">
            </div>
            <div class="col-lg-4">
              <input type="text" name="subject" placeholder="Subject(Optional)">
            </div>
            <div class="col-lg-12">
              <textarea name="description" id="description" placeholder="Message"></textarea>
            </div>
            <div class="col-lg-12 text-center">
              <button type="button" id="submit_3">Send Message</button>
            </div>
          </div>
        </form>
      </div><!--contact-form-sec end-->
    </div>
  </div><!--contact-info-sec end-->
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
