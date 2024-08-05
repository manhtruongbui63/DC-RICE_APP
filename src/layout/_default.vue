<template>
  <v-app class="app-custom">
    <v-system-bar app color="success" height="32">
      <v-container class="d-flex">
        <v-spacer></v-spacer>
        <ul class="d-flex white--text">
          <li class="mx-2">
            <span>Hệ thống cửa hàng</span>
          </li>
        </ul>
      </v-container>
    </v-system-bar>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <MobileNav />
    <v-overlay :value="isLoading"
      ><v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import AppBar from './PublicHeader.vue'
import Footer from './PublicFooter.vue'
import MobileNav from '@/components/MobileNav'
export default {
  components: { AppBar, Footer, MobileNav },
  data: () => ({}),
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.v-main__wrap {
  background-color: #f5f5f5;
}
</style>
