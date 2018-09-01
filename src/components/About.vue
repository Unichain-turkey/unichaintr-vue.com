<template>
  <div class="block3">
    <div class="container">
      <div class="our-info-details">
        <div class="row">
          <div class="col">
            <div class="who-we-are">
              <h3 class="sm-title">{{$t("whoarewe")}}</h3>
              <p>
                {{$t("whoarewecontent1")}}
              </p>
              <p>
                {{$t("whoarewecontent2")}}
              </p>
              <h3 class="sm-title">{{$t("whatDo")}}</h3>
              <div class="our-features">
                <div class="feature-icon">
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </div><!--feature-icon end-->
                <div class="feature-info">
                  <h3>{{$t("plan")}}</h3>
                  <p>
                    {{$t("plancontent")}}
                  </p>
                </div><!--feature-info end-->
              </div><!--our-features end-->
              <div class="our-features">
                <div class="feature-icon">
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                </div><!--feature-icon end-->
                <div class="feature-info">
                  <h3>{{$t("train")}}</h3>
                  <p>
                    {{$t("traincontent")}}
                  </p>
                </div><!--feature-info end-->
              </div><!--our-features end-->
              <div class="our-features">
                <div class="feature-icon">
                  <i class="fa fa-code" aria-hidden="true"></i>
                </div><!--feature-icon end-->
                <div class="feature-info">
                  <h3>{{$t("develop")}}</h3>
                  <p>
                    {{$t("developcontent")}}
                  </p>
                </div><!--feature-info end-->
              </div><!--our-features end-->
              <div class="our-features">
                <div class="feature-icon">

                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </div><!--feature-icon end-->
                <div class="feature-info">
                  <h3>{{$t("content")}}</h3>
                  <p>
                    {{$t("contentcontent")}}
                  </p>
                </div><!--feature-info end-->
              </div><!--our-features end-->
              <div class="our-features">
                <div class="feature-icon">
                  <i class="fa fa-rocket" aria-hidden="true"></i>
                </div><!--feature-icon end-->
                <div class="feature-info">
                  <h3>{{$t("support")}}</h3>
                  <p>
                    {{$t("supportcontent")}}
                  </p>
                </div><!--feature-info end-->
              </div><!--our-features end-->
            </div><!--who-we-are end-->
          </div>
        </div>
      </div><!--our-info3 end-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
