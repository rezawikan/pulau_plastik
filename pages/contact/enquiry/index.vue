<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/contact.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.contact') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item active :href="localePath('contact-enquiry')">{{ $t('pages.sub.enquiry_form') }}</b-nav-item>
              <b-nav-item :href="localePath('contact-support')">{{ $t('pages.sub.support_our_cause') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-v="center">
        <b-col cols="12">
          <b-form @submit.prevent="submit">
            <b-alert :show="message">{{ $t('content.organize.application_form.contact_message') }}</b-alert>
            <b-form-group :label="$t('content.contact.email')">
              <b-form-input type="email" v-model="form.email" required></b-form-input>
            </b-form-group>

            <b-form-group :label="$t('content.contact.full_name')">
              <b-form-input v-model="form.fullName" required></b-form-input>
            </b-form-group>

            <b-form-group :label="$t('content.contact.phone')">
              <b-form-input v-model="form.phone" required></b-form-input>
            </b-form-group>

            <b-form-group :label="$t('content.contact.message')">
              <b-form-textarea
                rows="5"
                max-rows="10"
                v-model="form.message"
              ></b-form-textarea>
            </b-form-group>
            <b-button class="btn-custom" type="submit"><b-spinner small v-if="loading"></b-spinner> Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'general',

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.enquiry_form')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` }
      ]
    }
  },

  data() {
    return {
      message: false,
      loading: false,
      form: {
        email: '',
        fullName: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    ...mapActions({
      DoContact : 'mailing/contact'
    }),
    submit() {
      this.loading = true
      this.DoContact(this.form).then(() => {
        this.message = true
        this.loading = false
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
