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

    <b-container class="p-3 mt-3" id="fill-form">
      <b-row align-v="center">
        <b-col cols="12">

            <ValidationObserver ref="form" v-slot="{ validate }" tag="form" @submit.prevent="submit">
              <b-alert :show="message" dismissible>{{ $t('content.organize.application_form.contact_message') }}</b-alert>
              <b-alert :show="error" dismissible>{{ $t('content.organize.application_form.contact_message_error') }}</b-alert>
              <ValidationProvider :name="$t('content.contact.email')" rules="required|email" v-slot="{ errors }">
                <b-form-group :label="$t('content.contact.email')">
                  <b-form-input type="email" v-model="form.email"></b-form-input>
                  <span class="alert-style">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider :name="$t('content.contact.full_name')" rules="required" v-slot="{ errors }">
                <b-form-group :label="$t('content.contact.full_name')">
                  <b-form-input v-model="form.fullName"></b-form-input>
                  <span class="alert-style">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider :name="$t('content.contact.phone')" rules="required|numeric" v-slot="{ errors }">
                <b-form-group :label="$t('content.contact.phone')">
                  <b-form-input v-model="form.phone"></b-form-input>
                  <span class="alert-style">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider :name="$t('content.contact.message')" rules="required" v-slot="{ errors }">
                <b-form-group :label="$t('content.contact.message')">
                  <b-form-textarea
                    rows="5"
                    max-rows="10"
                    v-model="form.message"
                  ></b-form-textarea>
                  <span class="alert-style">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <b-button class="btn-custom" type="submit"><b-spinner small v-if="loading"></b-spinner> {{ $t('form.send') }}</b-button>
            </ValidationObserver>

        </b-col>
      </b-row>
    </b-container>
  </b-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'
export default {
  layout: 'general',

  components: {
    ValidationProvider,
    ValidationObserver
  },

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.enquiry_form')}`,
      meta: [
        // { hid: 'description', name: 'description', content: `${ this.$t('content.home.description_text_1')}` },
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.enquiry_form')}`,
          vmid: 'og:title'
        },
        // {
        //   property: 'og:description',
        //   content:  `${ this.$t('pages.sub.partners')}`,
        //   vmid: 'og:description'
        // },
        {
          property: 'og:image',
          content:  require('~/assets/img/header/contact.jpg'),
          vmid: 'og:image'
        }
      ]
    }
  },

  data() {
    return {
      navbarHeight: 0,
      error: false,
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

  mounted() {
    this.getNavbarHeight()
  },

  methods: {
    ...mapActions({
      DoContact : 'mailing/contact'
    }),
    getNavbarHeight() {
      this.navbarHeight = this.$parent.$parent.$children[0].$refs.navbar.clientHeight
    },
    async submit() {
      this.loading = true
      //switch the locale.
      this.$i18n.locale = this.$i18n.locale === 'id' ? 'id' : 'en';

      // re-validate to re-generate messages.
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
          this.loading = false
          return
      }

      this.DoContact(this.form).then(() => {
        this.message = true
        this.loading = false
        this.scrollAfter()

        // reset form
        this.resetForm()

        requestAnimationFrame(() => {
          this.$refs.form.reset();
        })
      }).catch(() => {
        this.loading = false
        this.error = true
        this.scrollAfter()
      })
    },
    resetForm() {
      var self = this; //you need this because *this* will refer to Object.keys below`

      //Iterate through each object field, key is name of the object field`
      Object.keys(this.form).forEach(function(key,index) {
        self.form[key] = '';
      });
    },
    scrollAfter() {
      this.$scrollTo('#fill-form', 500, {
        container: 'body',
        duration: 500,
        easing: 'ease',
        offset: -this.navbarHeight,
        x: false,
        y: true
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
