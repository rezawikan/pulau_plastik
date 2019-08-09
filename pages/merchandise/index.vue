<template lang="html">
  <div class="">
    <b-container fluid class="partscreen-img gap-fixed about">
      <b-row align-h="center" no-gutters>
        <b-col>
          <img src="~/assets/img/header/news.jpg" class="" alt="Host A Screening">
          <h3 class="absolute-center-btn text-center white-color">{{ $t('pages.sub.merchandise') }}</h3>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="p-3 mt-2">
      <b-row align-v="center">
        <b-col cols="12">
          <p class="header-text">{{ $t('content.merchandise.title_1')}}</p>
          <p>{{ $t('content.merchandise.description_text_1')}}</p>
          <p>{{ $t('content.merchandise.description_text_2')}}</p>
          <p>{{ $t('content.merchandise.description_text_3')}}</p>
        </b-col>
        <b-col cols="6" col-sm="12" >
          <div class="container-block-line-thumb">
            <img src="~/assets/img/poster.png" class="" alt="Host A Screening">
            <div class="thumb-container">
              <p class="title">Tas dari Koran</p>
              <p>Tas kertas buatan tangan yang terbuat dari 100% limbah koran. Meski terbuat dari kertas, tas ini aman untuk membawa barang hingga 2 kg. Bahkan tas yang menggunakan bisban bisa membawa barang hingga 5 kg.</p>
              <p>
                Ukuran: 16 x 27 x 26 cm<br>
                Harga: Rp5.000 / tas (min pesan 100 biji)<br>
                Bahan: 100% limbah koran bekas, tas<br>
                Penjual: Tut / Ubud / +62 857 9266 7005
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" col-sm="12" >
          <div class="container-block-line-thumb">
            <img src="~/assets/img/poster.png" class="" alt="Host A Screening">
            <div class="thumb-container">
              <p class="title">Wadah Bungkus Daun Kelapa</p>
              <p>Wadah yang ramah lingkungan ini terbuat dari daun kelapa yang dirangkai bersama. Wadah ini bisa bertahan hingga 3 hari.</p>
              <p>
                Dimensi: 22 x 5 cm<br>
                Harga: Rp5.000 / biji<br>
                Bahan: Daun Kelapa<br>
                Penjual: Rani / Ubud / +62 812 3951 174
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" col-sm="12" >
          <div class="container-block-line-thumb">
            <img src="~/assets/img/poster.png" class="" alt="Host A Screening">
            <div class="thumb-container">
              <p class="title">Alat Makan Bambu</p>
              <p>Peralatan makan yang terbuat dari bambu adalah pilihan yang berkelanjutan bagi lingkungan karena tanaman bambu dapat tumbuh dalam kondisi apapun dan tumbuh hingga ukuran penuh dalam waktu 3-4 bulan. Alat makan ini mudah dibawa dan praktis digunakan.</p>
              <p>
                Bahan: 100% bambu<br>
                Penjual: Yasminida / Bali / +62 812 3734 9205
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>

import queryString from 'query-string'
export default {
  layout: 'general',

}
</script>

<style lang="css" scoped>
</style>
