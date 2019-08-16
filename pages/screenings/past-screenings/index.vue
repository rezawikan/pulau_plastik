<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/screenings.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.screenings') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('screenings-upcoming')">{{ $t('pages.sub.upcoming') }}</b-nav-item>
              <!-- <b-nav-item active :href="localePath('screenings-past-screenings')">{{ $t('pages.sub.past_screening') }}</b-nav-item> -->
              <b-nav-item :href="localePath('screenings-organize')">{{ $t('pages.sub.organize') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>



    <b-container class="p-3">
      <b-row align-h="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('pages.sub.past_screening') }}</p>
          <!-- -0.460816, 116.313668 -->
          <GmapMap
              :center="{ lat:-1.038729, lng: 117.384004 }"
              :zoom="5"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
              map-type-id="roadmap"
              style="width: 100%; height: 30em"
              :options="{
                 zoomControl: true,
                 mapTypeControl: false,
                 scaleControl: false,
                 streetViewControl: false,
                 rotateControl: false,
                 fullscreenControl: true,
                 disableDefaultUi: false
               }"
            >
              <gmapInfoWindow
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
              >
              </gmapInfoWindow>

              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :icon="m.icon"
                :clickable="false"
                :draggable="true"
                @mouseover="toggleInfoWindow(m,index)"
              />
            </GmapMap>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'general',

  data() {
      return {
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: {
          content: '',
          //optional: offset infowindow so it visually sits nicely on top of our marker
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: [{
            position: {
              lat: -6.200000,
              lng: 106.816666
            },
            infoText: '<strong>Marker 1</strong><br><p> Pulau Plastic Screening at Udayana<br>20 May 2019</p>',
            icon: 'https://img.icons8.com/color/25/000000/water-bottle.png'
          },
          {
            position: {
              lat: -7.161367,
              lng: 113.482498
            },
            infoText: '<strong>Marker 1</strong><br><p> Pulau Plastic Screening at Udayana<br>20 May 2019</p>',
            icon: 'https://img.icons8.com/color/25/000000/water-bottle.png'
          },
          {
            position: {
              lat: 5.548290,
              lng: 95.323753
            },
            infoText: '<strong>Marker 1</strong><br><p> Pulau Plastic Screening at Udayana<br>20 May 2019</p>',
            icon: 'https://img.icons8.com/color/25/000000/water-bottle.png'
          },
          {
            position: {
              lat: -2.994494,
              lng: 120.195465
            },
            infoText: '<strong>Marker 1</strong><br><p> Pulau Plastic Screening at Udayana<br>20 May 2019</p>',
            icon: 'https://img.icons8.com/color/25/000000/water-bottle.png'
          }
        ],
    }
  },

  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
