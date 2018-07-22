<template>
  <div>
    <section class="main-slider hp3">
      <div class="container">
        <div id="rev_slider_476_1_wrapper" class="rev_slider_wrapper fullscreen-container"
             data-alias="christmas-snow-scene" data-source="gallery" style="background-color:transparent;padding:0;">
          <!-- START REVOLUTION SLIDER 5.3.0.2 fullscreen mode -->
          <div id="rev_slider_476_1" class="rev_slider" style="display:none;" data-version="5.3.0.2">
            <ul>
              <!-- SLIDE  -->
              <li data-index="rs-1648" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                  data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1000"
                  data-thumb="images/slider_banner.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Slide"
                  data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6=""
                  data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                <!-- MAIN IMAGE -->
                <img src="../../static/images/bg-1.png"  alt=""  data-bgposition="center center" data-bgfit="cover"
                     data-bgrepeat="no-repeat" data-bgparallax="" class="rev-slidebg" data-no-retina>
                <!-- LAYERS -->

                <!-- LAYER NR. 1 -->
                <div class="tp-caption lyr1 tp-resizeme"
                     id="slide-1648-layer-5"
                     data-x="left" data-hoffset="0"
                     data-y="center" data-voffset="-135"
                     data-width="['auto']"
                     data-height="['auto']"
                     data-type="text"
                     data-responsive_offset="on"
                     data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":700,"ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                     data-paddingtop="[0,0,0,0]"
                     data-paddingright="[0,0,0,0]"
                     data-paddingbottom="[0,0,0,0]"
                     data-paddingleft="[0,0,0,0]"
                     data-start="200"
                     data-splitin="chars"
                     data-splitout="none"
                     data-elementdelay="0.04"
                     style="">UniChain Turkey
                </div>

                <!-- LAYER NR. 2 -->
                <div class="tp-caption lyr2 tp-resizeme"
                     id="slide-1648-layer-6"
                     data-x="left" data-hoffset="0"
                     data-y="center" data-voffset="0"
                     data-width="['auto']"
                     data-height="['auto']"
                     data-type="text"
                     data-responsive_offset="on"
                     data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                     data-paddingtop="[0,0,0,0]"
                     data-paddingright="[0,0,0,0]"
                     data-paddingbottom="[10,10,10,10]"
                     data-paddingleft="[0,0,0,0]"
                     data-start="2000"
                     data-splitin="chars"
                     data-splitout="none"
                     data-elementdelay="0.06"
                     style="">Sadece blockchain yok <br />komple dijital dünya var!
                </div>


                <!-- LAYER NR. 3 -->
                <a href="#" title="" class="tp-caption layera wt tp-resizeme"
                   id="slide-1-layer-7"
                   data-x="left" data-hoffset="0"
                   data-y="center" data-voffset="200"
                   data-width="['auto','auto','auto','auto']"
                   data-height="['auto','auto','auto','auto']"
                   data-transform_idle="o:1;"
                   data-frames='[{"from":"y:50px;opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{}]'
                   data-paddingtop="[20,20,20,20]"
                   data-paddingright="[20,20,20,20]"
                   data-paddingbottom="[18,18,18,18]"
                   data-paddingleft="[20,20,20,20]"
                   data-start="1500"
                   data-splitin="none"
                   data-splitout="none"
                   data-elementdelay="0.05"
                   style="">İletİşİme Geç
                </a>
              </li>
              <!-- SLIDE  -->
            </ul>
          </div>
        </div>
      </div>
    </section><!--main-slider end-->

    <section id="whoIam">
      <about></about>
    </section>

    <section id="projects">
      <projects></projects>
    </section>

    <section id="supports">
      <sponsors></sponsors>
    </section>

    <section id="latest">
      <feeds></feeds>
    </section>

    <section id="knock-knock">
      <contact></contact>
    </section>

  </div>
</template>

<script>
  import About from  '@/components/About'
  import Contact from '@/components/Contact'
  import Feeds from '@/components/Feeds'
  import Footer from '@/components/Footer'
  import Projects from '@/components/Projects'
  import Sponsors from '@/components/Sponsors'
  export default {
    name: "Index",
    components: {
      about: About,
      contact: Contact,
      feeds: Feeds,
      appFooter: Footer,
      projects: Projects,
      sponsors: Sponsors,
    }
  }
</script>

<style scoped>

</style>
