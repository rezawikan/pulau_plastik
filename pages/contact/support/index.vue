<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/contact.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.contact') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('contact-enquiry')">{{ $t('pages.sub.enquiry_form') }}</b-nav-item>
              <b-nav-item active :href="localePath('contact-support')">{{ $t('pages.sub.support_our_cause') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-v="center">
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur">
            <a href="https://goo.gl/Bisni1" target="_blank">
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">{{ $t('content.button.text.donate')}}</p>
          </a>
          </div>
          <p>{{ $t('content.support_our_cause.donate') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur">
            <nuxt-link :to="localePath('merchandise')">
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">{{ $t('content.button.text.buy')}}</p>
            </nuxt-link>
          </div>
          <p>{{ $t('content.support_our_cause.merchandise') }}</p>
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
      title: `Pulau Plastik - ${ this.$t('pages.sub.support_our_cause')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },
}
</script>

<style lang="css" scoped>
</style>
