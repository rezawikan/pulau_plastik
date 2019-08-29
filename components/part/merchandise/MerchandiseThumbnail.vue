<template lang="html">
  <b-container class="mt-3">
    <b-row align-v="center" v-if="data.length > 0">
      <b-col class="mb-1 p-2" cols="12" sm="6" md="4" lg="3" v-for="(item, index) in data" :key="index">
        <div class="container-block-line-thumb">
          <img :src="item.image" class="" alt="">
          <div class="thumb-container">
            <p class="title">{{ item.name }}</p>
            <!-- <p class="text">{{ item.summary }}</p> -->
            <p class="text">{{ item.price | toRupiah }}</p>
            <SubmitRequest :index="index" :title="item.name"/>
          </div>
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
import SubmitRequest from '@/components/part/merchandise/modal/SubmitRequest'
export default {
  components: {
    Pagination,
    SubmitRequest
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
  },
  filters: {
    toRupiah: function (angka) {
      var rupiah = '';
      var angkarev = angka.toString().split('').reverse().join('');
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')+ ',-';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
