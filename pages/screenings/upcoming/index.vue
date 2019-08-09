<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/screenings.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.screenings') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('screenings-upcoming')">{{ $t('pages.sub.upcoming') }}</b-nav-item>
              <!-- <b-nav-item :href="localePath('screenings-past-screenings')">{{ $t('pages.sub.past_screening') }}</b-nav-item> -->
              <b-nav-item :href="localePath('screenings-organize')">{{ $t('pages.sub.organize') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-h="center">
        <b-col cols="12">
          <p>{{ $t('content.screenings.upcomming')}}</p>
        </b-col>
        <b-col cols="12" v-for="(comming, index) in upcomming" :key="index">
          <div class="container-block-line">
            <p class="list-title-text">{{ comming.title }}</p>
            <p class="address">{{ comming.location }}</p>
            <p class="date">{{ comming.date }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import queryString from 'query-string'
export default {
  layout: 'general',

  data() {
      return {
        upcomming: [],
        meta: []
      }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, {
      locale: app.i18n.locale
    })
    let { data, meta } = await $axios.$get(`/api/upcomming?${queryString.stringify({ ...queries })}`)
    return {
      upcomming: data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
