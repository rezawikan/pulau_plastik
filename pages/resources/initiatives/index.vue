<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/resources.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.resources') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('resources-take-action')">{{ $t('pages.sub.take_action') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-research')">{{ $t('pages.sub.research') }}</b-nav-item>
              <b-nav-item active :href="localePath('resources-initiatives')">{{ $t('pages.sub.initiatives') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <InitiativeThumbnail type="Initiative" route="resources-initiatives-slug" :data="blogs" :meta="meta"/>
  </div>
</template>

<script>
import InitiativeThumbnail from '@/components/part/initiative/InitiativeThumbnail'
import queryString from 'query-string'
export default {
  layout: 'general',

  components: {
    InitiativeThumbnail
  },

  watchQuery: ['page'],

  data() {
    return {
      blogs: [],
      meta: []
    }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, {
      locale: app.i18n.locale
    })
    let { data, meta } = await $axios.$get(`/api/initiative?${queryString.stringify({ ...queries })}`)
    return {
      blogs: data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
