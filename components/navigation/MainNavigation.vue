<template lang="html">
  <div class="jumbotron full-height front-background" ref="header">
    <div class="container-fluid">
      <b-navbar class="transition-fs" toggleable="lg" :type="theme" fixed="top" ref="navbar">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand :href="localePath('index')">
            <img src="~/assets/img/pulau_plastik_logo_black.png" alt="Pulau Plastik">
          </b-navbar-brand>
        </b-navbar>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mc-auto">
            <b-nav-item class="ml-1 mr-3" :href="localePath('about-overview')">{{ $t('pages.about') }}</b-nav-item>
            <b-nav-item class="ml-1 mr-3" :href="localePath('screenings-upcoming')">{{ $t('pages.screenings') }}</b-nav-item>
            <b-nav-item class="ml-1 mr-3" :href="localePath('news-media-coverage')">{{ $t('pages.news') }}</b-nav-item>
            <b-nav-item class="ml-1 mr-3" :href="localePath('resources-research')">{{ $t('pages.resources') }}</b-nav-item>
            <b-nav-item class="ml-1 mr-3" :href="localePath('contact-enquiry')">{{ $t('pages.contact') }}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items // Switch Lang -->

            <!-- <b-navbar-nav class="ml-right">
              <b-nav-item
                v-for="locale in availableLocales"
                :key="locale.code"
                :href="switchLocalePath(locale.code)"
                 class="ml-1 mr-3">
                  {{ locale.name }}
              </b-nav-item>
            </b-navbar-nav > -->

        </b-collapse>
      </b-navbar>
      <div class="container">
        <div class="front-logo">
          <img src="~/assets/img/pulau_plastik_logo_white.png" alt="Logo Pulau Plastik">
        </div>
        <div class="front-arrow bounce" v-scroll-to="scrollto">
          <img src="~/assets/img/arrow-down.png" alt="Arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: 0,
      headerHeight: 0,
      scroll: 0,
      theme: 'light',
    }
  },



  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    scrollto() {
      return {
        el: '#problems',
        container: 'body',
        duration: 500,
        easing: 'ease',
        offset: -this.navbarHeight,
        x: false,
        y: true
      }
    }
  },

  mounted() {
    this.getNavbarHeight()
    this.getHeaderHeight()
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      if ((window.scrollY + 1) >= (this.headerHeight - this.navbarHeight)) {
          this.theme = 'dark'
      } else {
          this.theme = 'light'
      }
    },
    getNavbarHeight() {
      this.navbarHeight = this.$refs.navbar.clientHeight
    },
    getHeaderHeight() {
      this.headerHeight = this.$refs.header.clientHeight
    }
  }
}
</script>

<style lang="css" scoped>
</style>
