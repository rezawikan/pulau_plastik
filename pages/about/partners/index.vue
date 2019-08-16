<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/about.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.about') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('about-overview')">{{ $t('pages.sub.overview') }}</b-nav-item>
              <!-- <b-nav-item :href="localePath('about-team')">{{ $t('pages.sub.team') }}</b-nav-item> -->
              <b-nav-item active :href="localePath('about-partners')">{{ $t('pages.sub.partners') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <PartnerThumbnail :data="partners"  :meta="meta"/>
  </b-row>
  </div>
</template>

<script>
import queryString from 'query-string'
import PartnerThumbnail from '@/components/part/partner/PartnerThumbnail'
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.partners')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  components: {
      PartnerThumbnail
  },

  data() {
      return {
        partners: [],
        meta: []
      }
  },

  async asyncData({ $axios, query, app }) {
    let { data, meta } = await $axios.$get(`/api/partner?${queryString.stringify({ ...query })}`)
    return {
      partners: data,
      meta: meta
    }
  }
}
</script>

<style lang="css" scoped>
</style>
