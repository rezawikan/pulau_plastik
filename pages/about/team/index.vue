<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/about.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.about') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('about-overview')">{{ $t('pages.sub.overview') }}</b-nav-item>
              <!-- <b-nav-item active :href="localePath('about-team')">{{ $t('pages.sub.team') }}</b-nav-item> -->
              <b-nav-item :href="localePath('about-partners')">{{ $t('pages.sub.partners') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-4">
      <b-row align-h="center">
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
        <b-col sm="3">
          <div class="container-block">
            <div class="image-circle">
              <img src="~/assets/img/host-a-screening.png" class="rounded-circle" alt="">
            </div>
            <p class="text-center team-name">Gede Robi (Navicula)</p>
            <p class="text-center position-team">Co-Creator</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
  </div>
</template>

<script>
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.team')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
