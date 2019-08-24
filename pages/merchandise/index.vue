<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/merchandise.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.sub.merchandise') }}</h3>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-3">
      <b-row align-v="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('content.merchandise.title')}}</p>
          <p>{{ $t('content.merchandise.description_text_1')}}</p>
        </b-col>
      </b-row>
    </b-container>

    <MerchandiseThumbnail :data="merchandise" :meta="meta"/>

  </div>
</template>

<script>
import MerchandiseThumbnail from '@/components/part/merchandise/MerchandiseThumbnail'
import queryString from 'query-string'
export default {
  layout: 'general',

  components: {
    MerchandiseThumbnail
  },

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.merchandise')}`,
      meta: [
        { hid: 'description', name: 'description', content: `${ this.$t('content.merchandise.description_text_1')}` },
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.merchandise')}`,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content:  `${ this.$t('content.merchandise.description_text_1')}`,
          vmid: 'og:description'
        },
        {
          property: 'og:image',
          content:  require('~/assets/img/header/merchandise.jpg'),
          vmid: 'og:image'
        }
      ]
    }
  },

  data() {
    return {
      merchandise: [],
      meta: []
    }
  },

  async asyncData({ $axios, query, app }) {
    let queries = Object.assign({}, query, { locale: app.i18n.locale })
    let { data, meta } = await $axios.$get(`/api/merchandise?${queryString.stringify({ ...queries })}`)
    return {
      merchandise : data,
      meta: meta
    }
  }

}
</script>

<style lang="css" scoped>
</style>
