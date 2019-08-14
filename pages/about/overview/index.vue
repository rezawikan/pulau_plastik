<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/about.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.about') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('about-overview')">{{ $t('pages.sub.overview') }}</b-nav-item>
              <!-- <b-nav-item :href="localePath('about-team')">{{ $t('pages.sub.team') }}</b-nav-item> -->
              <b-nav-item :href="localePath('about-partners')">{{ $t('pages.sub.partners') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-h="center">
        <b-col cols="12">
          <div class="container-outside">
            <p>{{ $t('content.about.campaign.overview_1') }}</p>
            <p>{{ $t('content.about.campaign.overview_2') }}</p>
            <ul>
              <li>{{ $t('content.about.campaign.list_1') }}</li>
              <li>{{ $t('content.about.campaign.list_2') }}</li>
            </ul>
            <p>{{ $t('content.about.campaign.overview_3') }} <a href="#">{{ $t('content.about.campaign.overview_4') }}</a> {{ $t('content.about.campaign.overview_5') }}
              <!-- <b>{{ $t('content.about.campaign.overview_6') }}</b> {{ $t('content.about.campaign.overview_7') }} -->
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3">
      <b-row align-h="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('pages.sub.psas') }}</p>
          <p>{{ $t('content.about.psas.pre_text') }}</p>
        </b-col>
        <b-col cols="12" style="color:white;">
          <carousel-3d  width="800" height="350" :controls-visible="visible" controls-width="100" controls-height="100">
              <slide v-for="(slide, i) in slides" :index="i" :key="i">
                  <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <a href="#" target="_blank"><img :data-index="i" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" src="~/assets/img/kerja-bakti.jpg"></a>
                  </template>
              </slide>
          </carousel-3d>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3" v-if="episodes.length > 0">
      <b-row align-h="center" align-v="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('pages.sub.series') }}</p>
          <p>{{ $t('content.about.series.pre_text') }}</p>
        </b-col>
        <b-col cols="12" lg="6" class="mt-3" v-for="(episode, index) in episodes" :key="index">
          <div class="container-block-line">
            <p class="pre-text">Episode {{ episode.order }}</p>
            <p class="title-text">{{ episode.title }}</p>
            <p>{{ episode.summary }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3">
      <b-row align-h="center">
        <b-col cols="12">
          <p class="header-text">{{$t('pages.sub.film')}}</p>
          <p>{{ $t('content.about.film.pre_text') }}</p>
          <p class="text-center"><img src="~/assets/img/additional/the_film.jpg" style="width:50%;" alt=""></p>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import queryString from 'query-string'
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.overview')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  data() {
    return {
      episodes: [],
      visible: true,
      slides: [{
          image: 'https://via.placeholder.com/150'
        },
        {
          image: 'https://via.placeholder.com/150'
        },
        {
          image: 'https://via.placeholder.com/150'
        }
      ]
    }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, {
      locale: app.i18n.locale
    })
    let { data } = await $axios.$get(`/api/episode?${queryString.stringify({ ...queries })}`)
    return {
      episodes: data
    }
  }
}
</script>

<style lang="css" scoped>

</style>
