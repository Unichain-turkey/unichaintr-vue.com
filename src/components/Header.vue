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
            <li>
            <div>
              <img @click="switchLang"  v-bind:src="img"/>
            </div>
            </li>



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
        <li>
          <div>
            <img @click="switchLang"  v-bind:src="img"/>

          </div>
        </li>

      </ul>
    </div><!--responsive-mobile-menu end-->
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      img:"http://cdn2.iconfinder.com/data/icons/flags/flags/32/Turkey.png",
    }
  },
  methods:{
    navigate:function () {
      //$(".responsive-mobile-menu").removeClass("active");
    },
    changelang: function(lang){
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
      console.log("asdasdasd")
      if (this.$i18n.locale == "en") {
        this.changelang("tr")
        this.img="https://cdn2.iconfinder.com/data/icons/flags/flags/32/united-kingdom-great-britain.png"

      }else{
        this.changelang("en");
        this.img="http://cdn2.iconfinder.com/data/icons/flags/flags/32/Turkey.png"
      }
    },


  },


}
</script>

<style scoped>
  .flags {
    width: 200px;
    height: 32px;
    /* sağa almak için "float: right;" kullanabilirsiniz*/
    float: left;
  }
  .flags ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .flags ul li {
    display: inline;
  }
</style>
