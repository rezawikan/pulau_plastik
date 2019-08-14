<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/resources.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.resources') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('resources-take-action')">{{ $t('pages.sub.take_action') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-research')">{{ $t('pages.sub.research') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-initiatives')">{{ $t('pages.sub.initiatives') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-v="center">
        <b-col cols="12">
          <p>{{ $t('content.resources.take_action.description_text_1') }}</p>
          <ol>
            <li>{{ $t('content.resources.take_action.list_1') }}</li>
            <li>{{ $t('content.resources.take_action.list_2') }}</li>
            <li>{{ $t('content.resources.take_action.list_3') }}</li>
            <li>{{ $t('content.resources.take_action.list_4') }}</li>
            <li>{{ $t('content.resources.take_action.list_5') }}</li>
            <li>{{ $t('content.resources.take_action.list_6') }}</li>
          </ol>
          <p>{{ $t('content.resources.take_action.question') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur" @click.prevent="modal()">
            <!-- <nuxt-link to="/about"> -->
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">Schools</p>
            <!-- </nuxt-link> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur" @click.prevent="modal()">
            <!-- <nuxt-link to="/about"> -->
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">Bussiness (Office/ Restarurants)</p>
            <!-- </nuxt-link> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur" @click.prevent="modal()">
            <!-- <nuxt-link to="/about"> -->
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">Villages</p>
            <!-- </nuxt-link> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur" @click.prevent="modal()">
            <!-- <nuxt-link to="/about"> -->
            <img src="~/assets/img/poster.png" alt="Host A Screening">
            <p class="absolute-center-text text-center">Households</p>
            <!-- </nuxt-link> -->
          </div>
        </b-col>

        <!-- Dialog -->
        <v-dialog/>

      </b-row>
    </b-container>
  </b-row>
  </div>
</template>

<script>
export default {
  layout: 'general',

  methods: {
    modal() {
      this.$modal.show('dialog', {
        title: `${ this.$t('alert.title')}`,
        text: `${ this.$t('alert.text')}`,
        buttons: [
          {
            title: `${ this.$t('alert.close')}`,
          }
       ]
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
