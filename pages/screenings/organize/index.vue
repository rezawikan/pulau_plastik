<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/screenings.jpg" class="" alt="">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.screenings') }}</h3>
          <div class="absolute-bottom navigation-btn">
            <b-nav tabs align="center">
              <b-nav-item :href="localePath('screenings-upcoming')">{{ $t('pages.sub.upcoming') }}</b-nav-item>
              <!-- <b-nav-item :href="localePath('screenings-past-screenings')">{{ $t('pages.sub.past_screening') }}</b-nav-item> -->
              <b-nav-item active :href="localePath('screenings-organize')">{{ $t('pages.sub.organize') }}</b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-3">
      <b-row align-h="center">
        <b-col cols="12">
          <p>{{ $t('content.organize.description_text_1') }}</p>
          <p>{{ $t('content.organize.description_text_2') }}</p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3">
      <b-row align-h="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('content.organize.problem.title') }}</p>
        </b-col>
        <b-col cols="12">
          <p>{{ $t('content.organize.problem.problem_text_1') }} <a href="/files/screening.pdf" target="_blank">{{ $t('content.organize.problem.problem_text_2') }}</a> {{ $t('content.organize.problem.problem_text_3') }}</p>
          <p>{{ $t('content.organize.problem.problem_text_4') }}</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-3" id="fill-form">
      <b-row align-h="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('content.organize.application_form.title') }}</p>
          <p>{{ $t('content.organize.application_form.description_text_1') }}</p>
        </b-col>
        <b-col cols="12">
          <b-card>
            <b-card-body>
              <ValidationObserver ref="form" v-slot="{ validate }" tag="form" @submit.prevent="HostAScreening">
                <b-container>
                  <b-row>
                      <b-col cols="12">
                        <b-alert :show="message">{{ $t('content.organize.application_form.message') }}</b-alert>
                        <b-alert :show="error" dismissible>{{ $t('content.organize.application_form.contact_message_error') }}</b-alert>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_1')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_1')" >
                            <b-form-input v-model="form.fullName"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_2')" rules="required|email" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_2')" >
                            <b-form-input v-model="form.email" ></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_3')" rules="required|numeric" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_3')" >
                            <b-form-input v-model="form.phone" ></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_4')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_4')" >
                            <b-form-input v-model="form.community" ></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">
                      </b-col>
                      <b-col cols="12">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_5')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_5')">
                            <b-form-select :options="[{
                              text: $t('content.organize.application_form.dropdown_1'),
                              value: $t('content.organize.application_form.dropdown_1')
                              },{
                              text: $t('content.organize.application_form.dropdown_2'),
                              value: $t('content.organize.application_form.dropdown_2')
                              },{
                              text: $t('content.organize.application_form.dropdown_3'),
                              value: $t('content.organize.application_form.dropdown_3')
                              },{
                              text: $t('content.organize.application_form.dropdown_4'),
                              value: $t('content.organize.application_form.dropdown_4')
                              },{
                              text: $t('content.organize.application_form.dropdown_5'),
                              value: $t('content.organize.application_form.dropdown_5')
                              },{
                              text: $t('content.organize.application_form.dropdown_6'),
                              value: $t('content.organize.application_form.dropdown_6')
                              }]" v-model="form.about"></b-form-select>
                              <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_6')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_6')" >
                            <b-form-input v-model="form.date" type="date"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_7')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_7')" >
                            <b-form-input v-model="form.time" type="time"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_8')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_8')" >
                            <b-form-input v-model="form.location"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_9')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_9')">
                            <b-form-select :options="[{
                              text: '<20',
                              value: '<20'
                              },{
                              text: '21-50',
                              value: '21-50'
                              },{
                              text: '50-100',
                              value: '50-100'
                              },{
                              text: '100-250',
                              value: '100-250'
                              },{
                              text: '250+',
                              value: '250+'
                              }]" v-model="form.numbersOfAudience"></b-form-select>
                              <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">


                        <ValidationProvider :name="$t('content.organize.application_form.text_label_10')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_10')" >
                            <b-form-input v-model="form.audienceProfile"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_11')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_11')">
                            <b-form-select :options="[{
                              text: '<21',
                              value: '<21'
                              },{
                              text: '22-35',
                              value: '22-35'
                              },{
                              text: '35+',
                              value: '35+'
                              }]" v-model="form.ageOfAudience"></b-form-select>
                              <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_12')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_12')" >
                            <b-form-input v-model="form.eventDecription"></b-form-input>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12" sm="6">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_13')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_13')">
                            <b-form-select :options="[{
                                text: $t('content.organize.application_form.dropdown_7'),
                                value: $t('content.organize.application_form.dropdown_7')
                              },
                              {
                                text: $t('content.organize.application_form.dropdown_8'),
                                value: $t('content.organize.application_form.dropdown_8')
                              },
                              {
                                  text: $t('content.organize.application_form.dropdown_9'),
                                  value: $t('content.organize.application_form.dropdown_9')
                              },
                              {
                                text: $t('content.organize.application_form.dropdown_10'),
                                value: $t('content.organize.application_form.dropdown_10')
                              }]" v-model="form.episode"></b-form-select>
                              <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_14')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_14')" >
                            <b-form-textarea v-model="form.shortDescription_1"></b-form-textarea>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>

                      </b-col>
                      <b-col cols="12">
                        <ValidationProvider :name="$t('content.organize.application_form.text_label_15')" rules="required" v-slot="{ errors }">
                          <b-form-group :label="$t('content.organize.application_form.text_label_15')" >
                            <b-form-textarea v-model="form.shortDescription_2"></b-form-textarea>
                            <span class="alert-style">{{ errors[0] }}</span>
                          </b-form-group>
                        </ValidationProvider>
                      </b-col>
                      <b-col cols="12" sm="6">
                        <b-button class="btn-custom" type="submit"><b-spinner small v-if="loading"></b-spinner> {{ $t('form.send') }}</b-button>
                      </b-col>
                  </b-row>
                </b-container>
              </ValidationObserver>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import queryString from 'query-string'
import { mapActions } from 'vuex'
export default {
  layout: 'general',

  components: {
      ValidationObserver,
      ValidationProvider
  },

  head () {
    return {
      title: `Pulau Plastik - ${ this.$t('pages.sub.organize')}`,
      meta: [
        { hid: 'description', name: 'description', content: `${ this.$t('content.organize.description_text_2')}` },
        {
          property: 'og:title',
          content:  `Pulau Plastik - ${ this.$t('pages.sub.organize')}`,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content:  `${ this.$t('content.organize.description_text_2')}`,
          vmid: 'og:description'
        },
        {
          property: 'og:image',
          content:  require('~/assets/img/header/screenings.jpg'),
          vmid: 'og:image'
        }
      ]
    }
  },

  data() {
    return {
      error: false,
      navbarHeight: 0,
      loading: false,
      message: false,
      form: {
        fullName: '',
        email: '',
        phone: '',
        community: '',
        about: '',
        date: '',
        time: '',
        location: '',
        numbersOfAudience: '',
        audienceProfile: '',
        ageOfAudience: '',
        eventDecription: '',
        episode: '',
        shortDescription_1: '',
        shortDescription_2: ''
      }
    }
  },

  mounted() {
    this.getNavbarHeight()
  },

  methods: {
    ...mapActions({
      DoHostAScreening: 'mailing/screening'
    }),
    getNavbarHeight() {
      this.navbarHeight = this.$parent.$parent.$children[0].$refs.navbar.clientHeight
    },
    async HostAScreening() {
      this.loading = true
      //switch the locale.
      this.$i18n.locale = this.$i18n.locale === 'id' ? 'id' : 'en';

      // re-validate to re-generate messages.
      const isValid = await this.$refs.form.validate();
      if (!isValid) {
          this.loading = false
          return
      }

      this.DoHostAScreening(this.form).then(() => {
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
        this.error   = true
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
