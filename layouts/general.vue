<template lang="html">
  <div>
    <Navigation />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import Navigation from '~/components/navigation/Navigation.vue'
import MainFooter from '~/components/footer/footer.vue'
export default {
  components: {
    Navigation,
    MainFooter
  }
}
</script>

<style lang="css" scoped>
</style>

<style>
</style>
