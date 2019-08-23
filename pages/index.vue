<template>
<div>
  <b-container fluid id="problems" class="bg-navy description p-3">
    <b-row align-h="center">
      <b-col col lg="7" md="9" sm="11">
        <p>{{ $t('content.home.description_text_1')}}</p>
        <p>{{ $t('content.home.description_text_2')}}</p>
        <p><nuxt-link :to="localePath('about-overview')" class="btn btn-custom-second">{{ $t('content.button.text.learn_more')}}</nuxt-link></p>
      </b-col>
    </b-row>
  </b-container>
<!--
  <section class="trailer">
    <iframe src="https://www.youtube.com/embed/4xUAUWcPq74?vq=hd1080" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section> -->

  <!-- Description One -->
  <b-container fluid class="bg-navy description p-3">
    <b-row align-h="center">
      <b-col col lg="7" md="9" sm="11">
        <p>{{ $t('content.home.description_text_3')}}</p>
      </b-col>
    </b-row>
  </b-container>

  <!-- supported by -->
  <b-container class="supported p-5" v-if="supporters.length > 0">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" class="pb-3">
        <h6 class="text-center">{{ $t('content.general.supported_by')}}</h6>
      </b-col>
      <b-col cols="7" sm="3" md="3" lg="2" v-for="(supporter,index) in supporters" :key="index">
        <div class="partner">
          <a :href="supporter.link" target="_blank">
            <img :src="supporter.image">
          </a>
        </div>
      </b-col>

    </b-row>
  </b-container>

  <b-container class="p-3" v-if="testimonies.length > 0">
    <b-row align-v="center">
      <b-col cols="12" class="pb-3">
        <h6 class="text-center">{{ $t('content.general.testimonies')}}</h6>
      </b-col>
      <carousel-3d :disable3d="disable3d" :space="space" :autoplay="autoplay" :autoplayHoverPause="autoplayHoverPause" animationSpeed="1000" :autoplayTimeout="autoplayTimeout">
          <slide v-for="(testimony, index) in testimonies" :index="index" :key="index">
              <div class="thumb-container">
                <p class="text">{{ testimony.summary }}</p>
                <p class="footer">{{ testimony.position }}, {{ testimony.name }}</p>
              </div>
          </slide>
      </carousel-3d>
    </b-row>
  </b-container>

  <b-container class="p-3" v-if="instagram.length > 0">
    <b-row align-v="center" align-h="center">
      <b-col cols="12" class="pb-3">
        <h6 class="text-center">{{ $t('content.general.instagram')}}</h6>
      </b-col>
      <b-col cols="6" sm="6" md="4" lg="4" v-for="(data, index) in instagram" :key="index">
        <div class="container-block-line-thumb">
          <a :href="data.link" target="_blank">
            <img :src="data.images.standard_resolution.url" :alt="data.caption.text">
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <b-container class="p-3 mt-5">
    <b-row align-v="center">
      <b-col cols="12">
        <h6 class="text-center">{{ $t('pages.sub.support_our_cause') }}</h6>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="6">
        <div class="container-block-line-thumb blur-footer">
          <a href="https://goo.gl/Bisni1">
            <img src="~/assets/img/additional/donation.jpg" alt="">
            <p class="absolute-center-text text-center spacer bold text-shadow futura-bold">{{ $t('content.button.text.donate')}}</p>
          </a>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="6">
        <div class="container-block-line-thumb blur-footer">
          <nuxt-link :to="localePath('merchandise')">
            <img src="~/assets/img/additional/merchandise.jpg" alt="">
            <p class="absolute-center-text text-center spacer bold text-shadow futura-bold">{{ $t('content.button.text.buy')}}</p>
          </nuxt-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'default',
  components: {
    Logo
  },

  head () {
    return {
      title: 'Pulau Plastik',
      meta: [
        { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  data() {
      return {
          disable3d: true,
          space: 380,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 5000,
          instagram: [],
      }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    markerInfoStyle() {
      return this.$el.offsetHeight;
    },
    ...mapGetters({
      testimonies: 'additional/testimonies',
      supporters: 'additional/supporters'
    })
  },

  methods: {
    ...mapActions({
      getTestimonies: 'additional/getTestimonies',
      getSupporters: 'additional/getSupporters',
    })
  },

  created() {
    let queries = { locale: this.$i18n.locale }
    this.getTestimonies(queries)
    this.getSupporters(queries)
  },
  // 
  // async asyncData({ app }) {
  //   let instagram = await app.$axios.$get(`${process.env.INSTAGRAM_API}v1/users/self/media/recent/?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&count=6`)
  //
  //   return {
  //     instagram: instagram.data
  //   }
  // }
}
</script>

<style lang="css" scoped>

</style>
