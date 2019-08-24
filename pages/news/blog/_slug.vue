<template>
<b-container class="gap-fixed about">
  <b-row align-h="center">
    <b-col class="m-5">
      <img :src="data.image" class="img-height-md mb-3" alt="">
      <p class="date">{{ data.created_at }} - {{ data.author.name }}</p>
      <p class="header-text bold">{{ filterTitle[0] }}</p>
      <div v-html="filterContent[0]"></div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'general',

  head () {
    return {
      title: this.filterTitle[0],
      meta: [
        { hid: 'description', name: 'description', content: this.filterFirstParagraft },
        {
          property: 'og:title',
          content:  this.filterTitle[0],
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content:  this.filterFirstParagraft,
          vmid: 'og:description'
        },
        {
          property: 'og:image',
          content:  this.data.image,
          vmid: 'og:image'
        }
      ]
    }
  },

  computed: {
    filterTitle() {
      return this.data.translations.filter(x => {
        return x.locale == this.$i18n.locale
      }).map(x => {
        return x.title
      })
    },
    filterContent() {
      return this.data.translations.filter(x => {
        return x.locale == this.$i18n.locale
      }).map(x => {
        return x.content
      })
    },
    filterFirstParagraft() {
      return this.filterContent[0].split('.')[0].replace(/<[^>]*>?/gm, '')
    }
  },

  data() {
    return {
      data: [],
      locale: this.$i18n.locale
    }
  },

  async asyncData({ app, $axios, store, params }) {
    let { data, data: { translate }} = await $axios.$get(`/api/blog/${params.slug}`)
    await store.dispatch('i18n/setRouteParams', translate)

    return {
      data
    }
  }
}
</script>
