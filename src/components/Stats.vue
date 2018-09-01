<template>
  <div class="block no-padding">
    <div class="partners-section">
      <div class="container ">
        <div class="row">
          <div class="col-lg" style="text-align:center">
            <div class="col_one_fourth nobottommargin center bounceIn animated" data-animate="bounceIn" data-delay="200">
              <i class="fa fa-university fa-3x" style="color:white; padding-bottom:10px"></i>
              <div style="color:white" class="counter counter-lined">
                <span data-from="0" data-to="13" data-refresh-interval="50" data-speed="2000">13</span>+
              </div>
              <h5 style="color:white; padding-bottom:10px">{{$t("university")}}</h5>
            </div>
          </div>
          <div class="col-lg" style="text-align:center">
            <div class="col_one_fourth nobottommargin center bounceIn animated" data-animate="bounceIn" data-delay="200">
              <i class="fa fa-users fa-3x" style="color:white; padding-bottom:10px"></i>
              <div style="color:white" class="counter counter-lined">
                <span data-from="0" data-to="50" data-refresh-interval="100" data-speed="2500">50</span>+
              </div>
              <h5 style="color:white; padding-bottom:10px">{{$t("member")}}</h5>
            </div>
          </div>
          <div class="col-lg" style="text-align:center">
            <div class="col_one_fourth nobottommargin center bounceIn animated" data-animate="bounceIn" data-delay="300">
              <i class="fa fa-cogs fa-3x" style="color:white; padding-bottom:10px"></i>
              <div style="color:white" class="counter counter-lined">
                <span data-from="0" data-to="2" data-refresh-interval="25" data-speed="3500">2</span>
              </div>
              <h5 style="color:white; padding-bottom:10px">{{$t("projects")}}</h5>
            </div>
          </div>
          <div class="col-lg" style="text-align:center">
            <div class="col_one_fourth nobottommargin center col_last bounceIn animated" data-animate="bounceIn" data-delay="300">
              <i class="fa fa-pencil fa-3x" style="color:white; padding-bottom:10px"></i>
              <div style="color:white" class="counter counter-lined">
                <span data-from="0" data-to="3" data-refresh-interval="30" data-speed="2700">4</span>
              </div>
              <h5 style="color:white; padding-bottom:10px">{{$t("education")}}</h5>
            </div>
          </div>
          <div class="col-lg" style="text-align:center">
            <div class="col_one_fourth nobottommargin center col_last bounceIn animated" data-animate="bounceIn" data-delay="300">
              <i class="fa fa-coffee fa-3x" style="color:white; padding-bottom:10px"></i>
              <div style="color:white" class="counter counter-lined">
                <span data-from="0" data-to="2" data-refresh-interval="30" data-speed="2700">4</span>
              </div>
              <h5 style="color:white; padding-bottom:10px">{{$t("event")}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--partners-section end-->
  </div>
</template>



<script>
    export default {
        name: "Stats"
    }
</script>

<style scoped>

</style>
