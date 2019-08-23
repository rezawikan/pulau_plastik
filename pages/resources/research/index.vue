<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/resources.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.resources') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <!-- <b-nav-item :href="localePath('resources-take-action')">{{ $t('pages.sub.take_action') }}</b-nav-item> -->
              <b-nav-item active :href="localePath('resources-research')">{{ $t('pages.sub.research') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-initiatives')">{{ $t('pages.sub.initiatives') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-vendors')">{{ $t('pages.sub.vendors') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>


    <ResearchThumbnail :data="researches" :meta="meta"/>
  </div>
</template>

<script>
import ResearchThumbnail from '@/components/part/research/ResearchThumbnail'
import queryString from 'query-string'
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.research')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  components: {
    ResearchThumbnail
  },

  watchQuery: ['page'],

  data() {
    return {
      researches: [],
      meta: []
    }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, {
      locale: app.i18n.locale
    })
    let { data, meta } = await $axios.$get(`/api/research?${queryString.stringify({ ...queries })}`)
    return {
      researches: data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
