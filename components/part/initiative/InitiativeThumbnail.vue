<template lang="html">
  <b-container class="p-3 mt-3">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col cols="4" v-for="(blog, index) in data" :key="index" >
        <div class="container-block-line-media mb-3">
          <a :href="blog.link" target="_blank">
            <div class="picture">
              <img :src="blog.image" :alt="blog.title">
            </div>
            <div class="media-container">
              <p class="title">{{ blog.title }}</p>
              <p class="text">{{ blog.summary }}</p>
            </div>
            </a>
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
