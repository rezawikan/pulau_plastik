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
              <b-nav-item :href="localePath('resources-research')">{{ $t('pages.sub.research') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-initiatives')">{{ $t('pages.sub.initiatives') }}</b-nav-item>
              <b-nav-item active :href="localePath('resources-vendors')">{{ $t('pages.sub.vendors') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-3">
      <b-row align-v="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('content.vendors.title_1')}}</p>
          <p>{{ $t('content.vendors.description_text_1')}}</p>
          <p>{{ $t('content.vendors.description_text_2')}}</p>
          <p>{{ $t('content.vendors.description_text_3')}}<br>{{ $t('content.vendors.description_text_4')}}</p>
        </b-col>
      </b-row>
    </b-container>

    <VendorThumbnail :data="merchandise" :meta="meta"/>

  </div>
</template>

<script>
import VendorThumbnail from '@/components/part/vendor/VendorThumbnail'
import queryString from 'query-string'
export default {
  layout: 'general',

  components: {
    VendorThumbnail
  },

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.vendors')}`,
      meta: [
        { hid: 'description', name: 'description', content: `${ this.$t('content.vendors.description_text_1')}` },
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.vendors')}`,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content:  `${ this.$t('content.vendors.description_text_1')}`,
          vmid: 'og:description'
        },
        {
          property: 'og:image',
          content:  require('~/assets/img/header/resources.jpg'),
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
    let { data, meta } = await $axios.$get(`/api/vendor?${queryString.stringify({ ...queries })}`)
    return {
      merchandise : data,
      meta: meta
    }
  }

}
</script>

<style lang="css" scoped>
</style>
