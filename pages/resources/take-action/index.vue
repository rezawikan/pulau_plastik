<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/resources.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.resources') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('resources-take-action')">{{ $t('pages.sub.take_action') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-research')">{{ $t('pages.sub.research') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-initiatives')">{{ $t('pages.sub.initiatives') }}</b-nav-item>
              <b-nav-item :href="localePath('resources-vendors')">{{ $t('pages.sub.vendors') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-3">
      <b-row align-v="center">
        <b-col cols="12" class="mb-5">
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
        <b-col cols="12">
          <p>{{ $t('content.resources.take_action.description_text_2') }}</p>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-four" @click.prevent="modal()">
            <!-- <a href="https://docs.google.com/document/d/1qLWclqSDACpNMLwnMOBvBIOIrXnAp0UAcdhEf7i6eu8/edit?usp=sharing" target="_blank"> -->
              <img src="~/assets/img/additional/sekolah.jpg" alt="">
              <p class="absolute-center-text text-center futura-bold text-shadow">{{ $t('content.button.text.schools')}}</p>
            <!-- </a> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-four" @click.prevent="modal()">
            <!-- <a href="https://docs.google.com/document/d/1k4Td_Mwx_9bR9OUxPf0v8hhgihpHV6j3QYFovrq9DM8/edit?usp=sharing" target="_blank"> -->
              <img src="~/assets/img/additional/bisnis.jpg" alt="">
              <p class="absolute-center-text text-center futura-bold text-shadow">{{ $t('content.button.text.bussiness')}}</p>
            <!-- </a> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-four" @click.prevent="modal()">
            <!-- <a href="https://docs.google.com/document/d/1U7EfJniAeTAcBmWdYNU4QjD2NT2DVu--KKtzjpIAJtQ/edit?usp=sharing" target="_blank"> -->
              <img src="~/assets/img/additional/desa.jpg" alt="">
              <p class="absolute-center-text text-center futura-bold text-shadow">{{ $t('content.button.text.villages')}}</p>
            <!-- </a> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6">
          <div class="container-block-line-thumb blur-four" @click.prevent="modal()">
            <!-- <a href="https://docs.google.com/document/d/1p_S_2pZEC9RThTuWiBTlEXQk19MhG3mYS589FHuc9qQ/edit?usp=sharing" target="_blank"> -->
              <img src="~/assets/img/additional/rumah-tangga.jpg" alt="">
              <p class="absolute-center-text text-center futura-bold text-shadow">{{ $t('content.button.text.households')}}</p>
            <!-- </a> -->
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

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.take_action')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

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
