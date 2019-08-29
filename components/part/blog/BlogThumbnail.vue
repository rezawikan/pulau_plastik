<template lang="html">
  <b-container class="mt-3">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col class="mb-1 p-2" cols="12" sm="6" md="4" lg="4" v-for="(blog, index) in data" :key="index" >
        <div class="container-block-line-thumb">
          <nuxt-link :to="localePath({ name: route, params: { slug: blog.slug }})">
          <img :src="blog.image" class="" alt="Host A Screening">
          <div class="thumb-container">
            <p class="date">{{ type }} - {{ blog.created_at }}</p>
            <p class="title">{{ blog.title }}</p>
            <p class="footer">{{ blog.author }}</p>
          </div>
          </nuxt-link>
        </div>
      </b-col>
      <b-col cols="12">
        <Pagination :meta="meta"/>
      </b-col>
    </b-row>
    <b-row align-v="center" v-if="data.length == 0">
      <b-col cols="12" >
        <div class="container-block-line-thumb">
          <p>{{ $t('content.general.empty') }}</p>
        </div>
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
    type: {
      required: true,
      type: String
    },
    route: {
      required: true,
      type: String
    },
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
