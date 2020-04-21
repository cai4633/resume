<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="banner" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "/statics/tech1.jpg",
        "/statics/tech2.jpg",
        "/statics/tech3.jpg",
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        speed: 800,
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        }
      }
    };
  },
  mounted() {
    this.mySwiper.slideTo(1, 1000, false);
  }
};
</script>

<style lang='stylus' scoped >
  .swiper-container 
    width: 800px;
    height: 600px;
    img
        width 100%

  .swiper-button-prev,.swiper-button-next
      width calc(1.2*var(--swiper-navigation-size) / 44 * 44)
      height calc(var(--swiper-navigation-size)*1.2)
      border-radius 50%
      background-color rgba(100, 100, 100, 0.1)
      transform translateY(100%)
      outline none

</style>