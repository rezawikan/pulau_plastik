<template lang="html">
  <b-container class="p-3 mt-3">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col cols="12" v-for="(research, index) in data" :key="index">
        <div class="container-block-line relative">
          <p class="list-title-text">{{ research.title }} - <span>{{ $t(`database.research.lang.${research.lang}`) }}</span></p>
          <p class="date">{{ $t(`database.research.types.${research.type}`) }} </p>
          <b-button class="download-btn-left" :href="research.link" target="_blank">Download</b-button>
        </div>
        <div class="">

        </div>
      </b-col>
      <b-col cols="12">
        <Pagination :meta="meta"/>
      </b-col>
    </b-row>
    <b-row align-v="center" v-if="data.length == 0">
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
    data : {
      required: true,
      value: Array/Object
    },
    meta: {
      required: true,
      value: Array/Object
    }
  }
}
</script>

<style lang="css" scoped>
</style>
