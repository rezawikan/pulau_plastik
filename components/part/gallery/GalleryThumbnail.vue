<template lang="html">
  <b-container class="mt-3">
    <b-row v-if="data.length > 0">
      <b-col class="mb-1 p-2" cols="12" sm="6" md="4" lg="4" v-for="(item, index) in data" :key="index" >
        <div class="container-block-line-thumb">
          <a :href="item.image" target="_blank"><img :src="item.image" alt=""></a>
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
