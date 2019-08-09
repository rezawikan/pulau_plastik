<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/news.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.news') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('news-blog')">{{ $t('pages.sub.blog') }}</b-nav-item>
              <b-nav-item active :href="localePath('news-media-coverage')">{{ $t('pages.sub.media_coverage') }}</b-nav-item>
              <!-- <b-nav-item :href="localePath('news-gallery')">{{ $t('pages.sub.gallery') }}</b-nav-item> -->
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <MediaCoverageThumbnail :data="coverages" :meta="meta"/>

  </div>
</template>

<script>
import queryString from 'query-string'
import MediaCoverageThumbnail from '@/components/part/media-coverage/MediaCoverageThumbnail'
export default {
  layout: 'general',
  components : {
    MediaCoverageThumbnail
  },

  watchQuery: ['page'],

  data() {
      return {
        coverages: [],
        meta: []
      }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, { locale: app.i18n.locale })
    let { data, meta } = await $axios.$get(`/api/media-coverage?${queryString.stringify({ ...queries })}`)
    return {
      coverages : data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
