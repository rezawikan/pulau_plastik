<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/news.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.news') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('news-media-coverage')">{{ $t('pages.sub.media_coverage') }}</b-nav-item>
              <b-nav-item :href="localePath('news-gallery')">{{ $t('pages.sub.gallery') }}</b-nav-item>
              <b-nav-item active :href="localePath('news-blog')">{{ $t('pages.sub.blog') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <BlogThumbnail :type="`${$t('pages.sub.blog')}`" route="news-blog-slug" :data="blogs" :meta="meta"/>
  </div>
</template>

<script>
import BlogThumbnail from '@/components/part/blog/BlogThumbnail'
import queryString from 'query-string'
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.blog')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.blog')}`,
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

  components: {
    BlogThumbnail
  },

  watchQuery: ['page'],

  data() {
      return {
        blogs: [],
        meta: []
      }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, { locale: app.i18n.locale })
    let { data, meta } = await $axios.$get(`/api/blog?${queryString.stringify({ ...queries })}`)
    return {
      blogs : data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
