<template lang="html">
  <b-container class="p-3 mt-2">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col cols="4" v-for="(blog, index) in data" :key="index">
        <div class="container-block-line-thumb">
          <a :href="blog.link" target="_blank">
          <img :src="blog.image" class="" alt="Host A Screening">
          <div class="thumb-container">
            <p class="date">{{ $t('pages.sub.media_coverage') }} - {{ blog.created_at }}</p>
            <p class="title">{{ blog.title }}</p>
            <p class="footer">{{ blog.summary }}</p>
          </div>
        </a>
        </div>
      </b-col>
      <b-col cols="12">
        <Pagination :meta="meta"/>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col cols="12" v-if="data.length == 0">
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
