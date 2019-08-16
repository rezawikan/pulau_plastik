<template lang="html">
  <b-container class="p-3 mt-2">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col cols="6" col-sm="12" v-for="(item, index) in data" :key="index">
        <div class="container-block-line-thumb">
          <img :src="item.image" class="" alt="">
          <div class="thumb-container">
            <p class="title">{{ item.title }}</p>
            <p>{{ item.summary }}</p>
            <div class="" v-html="item.content">
            </div>
          </div>
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
