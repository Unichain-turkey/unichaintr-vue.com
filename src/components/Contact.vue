<template>

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
									</div><!--contact-form-sec end-->

								</div>
								<div class="col-lg-6">
									<div class="contact-more-info">
										<h5>Bize ulaşabileceğiniz adresler;</h5>


										<h2><a href=" mailto:unichainturkey@gmail.com">	<i class="fa fa-envelope"></i>  unichainturkey@gmail.com </a></h2>

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

</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
