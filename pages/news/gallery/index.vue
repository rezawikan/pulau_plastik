<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/news.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.news') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('news-blog')">{{ $t('pages.sub.blog') }}</b-nav-item>
              <b-nav-item :href="localePath('news-media-coverage')">{{ $t('pages.sub.media_coverage') }}</b-nav-item>
              <b-nav-item active :href="localePath('news-gallery')">{{ $t('pages.sub.gallery') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <GalleryThumbnail :data="images" :meta="meta" />
  </div>
</template>

<script>
import queryString from 'query-string'
import GalleryThumbnail from '@/components/part/gallery/GalleryThumbnail'
export default {
  layout: 'general',

  components: {
    GalleryThumbnail
  },

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.gallery')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  data() {
    return {
      images: []
    }
  },

  async asyncData({ $axios, query, app }) {
    let { data, meta } = await $axios.$get(`/api/gallery?${queryString.stringify(query)}`)
    return {
      images : data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
