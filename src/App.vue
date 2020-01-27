<template>
  <div id="app">
      <router-view />
      <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },

  components: {
    FootGuide
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
