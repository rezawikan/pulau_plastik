<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <nuxt-link class="page-link" aria-label="Previous" :to="{ query: { page : meta.current_page - 1 } }" v-if="meta.current_page != 1">
        <span aria-hidden="true">&laquo;</span>
      </nuxt-link>
    </li>

    <template v-if="section > 1">
      <li class="page-item" :class="{ 'active' : meta.current_page === 1 }">
        <nuxt-link class="page-link" :to="{ query: Object.assign({}, queries, { page :1 }) }">
          <span>1</span>
        </nuxt-link>
      </li>
      <li class="page-item">
        <nuxt-link class="page-link" :to="{ query: Object.assign({}, queries, { page : this.goBackASection() }) }">
          <span>...</span>
        </nuxt-link>
      </li>
    </template>

    <li class="page-item" v-for="page in pages" :key="page">
      <nuxt-link class="page-link" :class="{ 'active' : meta.current_page === page }" :to="{ query: Object.assign({}, queries,{ page :page }) }">
        <span>{{page}}</span>
      </nuxt-link>
    </li>

    <template v-if="section < sections">

      <li class="page-item">
        <nuxt-link class="page-link" :to="{ query: Object.assign({}, queries, { page : this.goForwardASection() }) }">
          <span>...</span>
        </nuxt-link>
      </li>
      <li class="page-item" :class="{ 'active' : meta.current_page === meta.last_page }">
        <nuxt-link class="page-link" :to="{ query: Object.assign({}, queries, { page : meta.last_page }) }">
          <span>{{ meta.last_page }}</span>
        </nuxt-link>
      </li>

    </template>

    <li class="page-item" :to="{ query: { page : meta.current_page + 1 } }" v-if="meta.current_page != meta.last_page">
      <nuxt-link class="page-link" :to="{ query: Object.assign({}, queries, { page : meta.last_page }) }">
        <span aria-hidden="true">&raquo;</span>
      </nuxt-link>
    </li>
  </ul>
</nav>
</template>

<script>
import _ from 'lodash'
export default {
  props: ['meta'],
  data() {
    return {
      sectionPerPage: 4,
      queries: this.$route.query
    }
  },
  computed: {
    section() {
      return Math.ceil(this.meta.current_page / this.sectionPerPage)
    },
    sections() {
      return Math.ceil(this.meta.last_page / this.sectionPerPage)
    },
    lastPage() {
      let lastPage = ((this.section - 1) * this.sectionPerPage) + this.sectionPerPage

      if (this.section === this.sections) {
        lastPage = this.meta.last_page
      }

      return lastPage
    },
    pages() {
      return _.range((this.section - 1) * this.sectionPerPage + 1, this.lastPage + 1)
    }
  },
  methods: {
    goBackASection() {
      return this.firstPageOfSection(this.section - 1)
    },
    goForwardASection() {
      return this.firstPageOfSection(this.section + 1)
    },
    firstPageOfSection(section) {
      return (section - 1) * this.sectionPerPage + 1
    }
  }
}
</script>

<style lang="css" scoped>
.pagination-ellipsis {
  color: $pagination-ellipsis-color;
  pointer-events:visible;
}
</style>
