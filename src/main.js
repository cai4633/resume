import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper,{ loop: true, autoplay: true })/* { default options with global component } */
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
