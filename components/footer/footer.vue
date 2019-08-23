<template lang="html">
  <footer>
    <b-container fluid class="bg-blue p-3">
      <b-row align-h="center" align-v="center">

        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
          <div class="social-media-front">
            <h6 class="text-uppercase">{{ $t('content.button.text.follow_us') }}</h6>
            <ul>
              <li>
                <a href="https://www.facebook.com/pulauplastik/" target="_blank">
                  <fa :icon="['fab', 'facebook-f']" :style="{ color: 'white', fontSize: '2em' }" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pulauplastik/" target="_blank">
                  <fa :icon="['fab', 'instagram']" :style="{ color: 'white', fontSize: '2em' }" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCZ8v9tyreRJPOBjYrgLDHaw" target="_blank">
                  <fa :icon="['fab', 'youtube']" :style="{ color: 'white', fontSize: '2em' }" />
                </a>
              </li>
            </ul>
            <p>{{ $t('content.footer.info')}}<br>pulauplastik@kopernik.info</p>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="4" xl="4">
          <div class="logo">
            <img class="img-lg" src="~/assets/img/pulau_plastik_logo_white.png" alt="">
          </div>
          <!-- <p class="text-center">Pulau Plastik merupakan kolaborasi aksi antara Kopernik dan Akarumput.</p> -->
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="4" xl="4">
          <h6 class="text-center" style="padding-top:20px;">Menu</h6>
          <div class="footer-nav text-center">
            <ul>
              <li><a :href="localePath('about-overview')">{{ $t('pages.about')}}</a></li>
              <li><a :href="localePath('screenings-upcoming')">{{ $t('pages.screenings')}}</a></li>
              <li><a :href="localePath('news-blog')">{{ $t('pages.news')}}</a></li>
              <li><a :href="localePath('resources-research')">{{ $t('pages.resources')}}</a></li>
              <li><a :href="localePath('contact-enquiry')">{{ $t('pages.contact')}}</a></li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
</style>
