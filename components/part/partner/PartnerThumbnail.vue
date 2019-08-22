<template lang="html">
  <b-container class="p-3 mt-5 mb-5">
    <b-row align-h="center" align-v="center" v-if="data.length > 0">
      <b-col cols="7" sm="6" md="3" lg="3" v-for="(partner, index) in data" :key="index">
        <div class="container-block">
          <a :href="partner.link" target="_blank">
            <div class="logo-partner">
              <img :src="partner.image" alt="">
            </div>
          </a>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" v-if="data.length == 0">
      <b-col cols="12" >
        <p>{{ $t('content.general.empty') }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Pagination from '@/components/part/pagination/Pagination'
export default {
  components: {
    Pagination
  },

  props: {
    data: {
      required: true,
      value: Object/Array
    },
    meta: {
      required: true,
      value: Object/Array
    }
  }
}
</script>

<style lang="css" scoped>
</style>
