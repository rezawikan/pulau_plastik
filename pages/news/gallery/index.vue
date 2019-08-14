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
              <b-nav-item :href="localePath('news-media-coverage')">{{ $t('pages.sub.media_coverage') }}</b-nav-item>
              <b-nav-item active :href="localePath('news-gallery')">{{ $t('pages.sub.gallery') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-v="center">
        <b-col cols="12">
          <div class="center-text">
            <no-ssr>
              <isotope ref="grid" :options="options" :list="list" v-images-loaded:on.progress="layout" v-if="list.length">
                <div v-for="(item, index) in list" :key="index" class="grid-item">
                  <img :src="item.image" alt="">
                </div>
              </isotope>
            </no-ssr>
          </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'general',

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
      list: [{
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, {
        title: 'test',
        image: 'https://via.placeholder.com/100'
      }, ],
      options: {
        itemSelector: '.list-gallery',
        layout: 'fitRows',
        masonry: {
          columnWidth: 50,
          // horizontalOrder: true
        }
      }
    }
  },

  methods: {
    layout() {
      this.$refs.grid.layout('masonry');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
