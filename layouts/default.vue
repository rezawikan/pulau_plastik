<template lang="html">
  <div>
    <MainNavigation />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainNavigation from '~/components/navigation/MainNavigation.vue'
import MainFooter from '~/components/footer/footer.vue'
export default {
  components: {
    MainNavigation,
    MainFooter
  }
}
</script>

<style lang="css" scoped>
</style>

<style>
</style>
