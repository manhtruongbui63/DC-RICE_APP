<template>
  <v-row class="row-cs">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in data" :key="index"
        ><ProductCard :product="item"
      /></swiper-slide>
    </swiper>
  </v-row>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['data'],
  components: { Swiper, SwiperSlide, ProductCard },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 8,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          600: {
            slidesPerView: 3
          },
          786: {
            slidesPerView: 4
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row-cs {
  margin-left: -8px;
  margin-right: -8px;
  padding-bottom: 4px;
}
</style>
