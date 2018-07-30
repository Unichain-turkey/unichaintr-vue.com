<template>
  <div>
    <header class="pb full stick">
      <div class="header-bar">
        <div class="logo">
          <a href="#" title=""><img src="../../static/images/logo.png" alt=""></a>
        </div><!--logo end-->
        <div class="mobile-menu-btn">
          <a href="#" title="" class="open-menu"><i class="fa fa-bars"></i></a>
        </div><!--mobile-menu-btn end-->
        <nav>
          <ul>
            <li><a class="active" href="#" title="">Ana Sayfa</a></li>
            <li><a href="#whoIam" title="">Hakkımızda</a></li>
            <li><a href="#projects" title="">Projeler</a></li>
            <li><a href="#latest" title="">Gelişmeler</a></li>
            <li><a href="#knock-knock" title="">İletişim</a></li>
          </ul>
        </nav><!--nav end-->
      </div><!--header-bar end-->
    </header>

    <div class="responsive-mobile-menu">
      <a href="#" title="" class="close-menu"><i class="ion-close"></i></a>
      <ul>
        <li><a class="active" href="#" title="">Ana Sayfa</a></li>
        <li><a href="#whoIam" title="">Hakkımızda</a></li>
        <li><a href="#projects" title="">Projeler</a></li>
        <li><a href="#latest" title="">Gelişmeler</a></li>
        <li><a href="#knock-knock" title="">İletişim</a></li>
      </ul>
    </div><!--responsive-mobile-menu end-->
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
