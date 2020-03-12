<template>
  <div id="app">
    <Home></Home>
    <!-- <div id="nav"> -->
    <!-- <router-view /> -->
    <!-- <router-link to="/">Home</router-link>  -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  components: {
    Home
  }
};
</script>
<style lang="stylus">
*
  padding 0
  margin 0
  text-decoration none
  list-style none

.clearfix::after
  content ''
  display block
  clear both

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
