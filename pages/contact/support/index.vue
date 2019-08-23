<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/contact.jpg" class="" alt="">
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

    <b-container class="p-3 mt-5">
      <b-row align-v="center">
        <b-col cols="12">
          <h6 class="text-center">{{ $t('pages.sub.support_our_cause') }}</h6>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-footer text-shadow">
            <a href="https://goo.gl/Bisni1">
              <img src="~/assets/img/additional/donation.jpg" alt="">
              <p class="absolute-center-text text-center spacer bold text-shadow futura-bold">{{ $t('content.button.text.donate')}}</p>
            </a>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-footer text-shadow">
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
