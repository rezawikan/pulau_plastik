<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/news.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.news') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('news-media-coverage')">{{ $t('pages.sub.media_coverage') }}</b-nav-item>
              <b-nav-item :href="localePath('news-gallery')">{{ $t('pages.sub.gallery') }}</b-nav-item>
              <b-nav-item :href="localePath('news-blog')">{{ $t('pages.sub.blog') }}</b-nav-item>
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

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.media_coverage')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.media_coverage')}`,
          vmid: 'og:title'
        },
        // {
        //   property: 'og:description',
        //   content:  `${ this.$t('content.resources.take_action.description_text_1')}`,
        //   vmid: 'og:description'
        // },
        {
          property: 'og:image',
          content:  require('~/assets/img/header/news.jpg'),
          vmid: 'og:image'
        }
      ]
    }
  },

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
