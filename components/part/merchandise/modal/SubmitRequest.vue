<template lang="html">
  <div class="">
    <p class="text-right"><a href="" class="btn-custom" @click.prevent="showModal">{{ $t('content.button.text.buy_product')}}</a></p>
    <b-modal :ref="index" :title="`${ $t('form.buying_form')}`" hide-footer>
      <b-form-group :label="`${ $t('form.full_name') }`">
        <b-form-input v-model="form.fullName" required></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.address') }`" >
        <b-form-input v-model="form.address" required></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.phone') }`">
        <b-form-input type="number" v-model="form.telp" required></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.email') }`">
        <b-form-input type="email" v-model="form.email" required></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.product') }`">
        <b-form-input v-model="form.product_title" required disabled></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.numbers') }`">
        <b-form-input type="number" v-model="form.numbers" required></b-form-input>
      </b-form-group>
      <b-form-group :label="`${ $t('form.additional') }`"  >
        <b-form-textarea v-model="form.additional"></b-form-textarea>
      </b-form-group>
      <b-alert :show="message.length > 0" dismissible>{{ message }}</b-alert>
      <b-button @click.prevent="buy" class="btn-custom bg-navy" href="#" variant="primary"><b-spinner small v-if="loading"></b-spinner> {{ $t('form.send')}}</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
      index: {
        required: true
      },
      title: {
        required: true
      }
    },
    data() {
      return {
        loading: false,
        message: '',
        form: {
          fullName: '',
          address: '',
          telp: '',
          email: '',
          product_title: this.title,
          numbers: '',
          additional: '',
          thanks: `${ this.$t('form.notification_title')}`,
          notification: `${ this.$t('form.notification_text')}`
        }

      }
    },
    methods: {
      ...mapActions({
        buying: 'mailing/buying'
      }),
      buy() {
        this.loading = true
        this.buying(this.form).then(() => {
          this.loading = false
          this.message = `${ this.$t('form.alert_buy')}`
          setTimeout(() => {
            this.hideModal()
            this.form.fullName = ''
            this.form.address = ''
            this.form.telp = ''
            this.form.email = ''
            this.form.numbers = ''
            this.form.additional = ''
          },3000)
        })
      },
      showModal() {
        this.$refs[this.index].show()
      },
      hideModal() {
        this.$refs[this.index].hide()
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
