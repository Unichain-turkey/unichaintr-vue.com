<template>
  <div>
    <header class="pb full stick">
      <div class="header-bar">
        <div class="logo">
          <a href="/" title=""><img src="../../static/images/logo.png" alt=""></a>
        </div><!--logo end-->
        <div class="mobile-menu-btn">
          <a href="#" title="" class="open-menu"><i class="fa fa-bars"></i></a>
        </div><!--mobile-menu-btn end-->
        <nav>
          <ul>
            <li><a class="active" href="#" title="">{{ $t("mainpage") }}</a></li>
            <li><a href="#whoIam" title="">{{ $t("about") }}</a></li>
            <li><a href="#projects" title="">{{ $t("projects") }}</a></li>
            <li><a href="#blog" title="">{{ $t("blog") }}</a></li>
            <li><a href="#knock-knock" title="">{{ $t("contact") }}</a></li>
            <li><i class="fa fa-language fa-lg" @click="switchLang" aria-hidden="true" style="color:white"></i></li>


          </ul>
        </nav><!--nav end-->
      </div><!--header-bar end-->
    </header>

    <div class="responsive-mobile-menu">
      <a href="#" title="" class="close-menu"><i class="ion-close"></i></a>
      <ul @click="navigate">
        <li><a class="active" href="#" title="">{{ $t("mainpage") }}</a></li>
        <li><a href="#whoIam" title="">{{ $t("about") }}</a></li>
        <li><a href="#projects" title="">{{ $t("projects") }}</a></li>
        <li><a href="#blog" title="">{{ $t("blog") }}</a></li>
        <li><a href="#knock-knock" title="">{{ $t("contact") }}</a></li>
        <li><i class="fa fa-language fa-lg" @click="switchLang" aria-hidden="true" style="color:white">TR</i></li>

      </ul>
    </div><!--responsive-mobile-menu end-->
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    navigate:function () {
      //$(".responsive-mobile-menu").removeClass("active");
    },
    changelang: function(lang){
      console.log("Change Language to "+lang)
      if (lang in this.$i18n.messages) {
        this.$i18n.locale = lang
      } else {
        this.loadLocaleMessage(lang, (err, message) => {
          if (err) {
            console.error(err)
            return
          }
          i18n.setLocaleMessage(lang, message)
          this.$i18n.locale = lang
        })
      }
    },
    switchLang: function(){
      (this.$i18n.locale == "en") ? this.changelang("tr") : this.changelang("en");
    },


  },


}
</script>

<style scoped>

</style>
