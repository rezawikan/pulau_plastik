<template lang="html">
  <b-container class="mt-3">
    <b-row v-if="data.length > 0">
      <b-col class="mb-1 p-2" cols="12" sm="6" md="4" lg="4" v-for="(blog, index) in data" :key="index">
        <div class="container-block-line-media">
          <a :href="blog.link" target="_blank" :title="blog.title">
            <div class="picture">
              <img :src="blog.image" class="" :alt="blog.title">
            </div>
          <div class="media-container">
            <p class="date">{{ $t('pages.sub.media_coverage') }} - {{ blog.created_at }}</p>
            <p class="title">{{ blog.title.substring(0,100)+".." }}</p>
          </div>
        </a>
        </div>
      </b-col>
      <b-col cols="12">
        <Pagination :meta="meta"/>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col class="my-3" cols="12" v-if="data.length == 0">
        <div class="container-block-line-media">
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
