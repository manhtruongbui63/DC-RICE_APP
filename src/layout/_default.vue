<template>
  <v-app>
    <v-system-bar app color="success" height="32">
      <v-container class="d-flex">
        <v-spacer></v-spacer>
        <ul class="d-flex">
          <li class="mx-2">
            <span>Hệ thống cửa hàng</span>
          </li>
        </ul>
      </v-container>
    </v-system-bar>
    <AppBar />
    <router-view />
    <Footer />
    <v-app-bar
      class="hidden-md-and-up"
      :fixed="true"
      bottom
      height="64"
      color="white"
    >
      <v-container>
        <v-toolbar flat>
          <v-row align="center" justify="space-around">
            <v-icon color="#41AB55">fas fa-house</v-icon>
            <v-icon>fab fa-microsoft</v-icon>
            <v-icon>fas fa-lock</v-icon>
            <v-icon>fas fa-bell</v-icon>
            <v-icon>fas fa-user</v-icon>
          </v-row>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
import AppBar from './PublicHeader.vue'
import Footer from './PublicFooter.vue'
export default {
  components: { AppBar, Footer },
  data: () => ({}),
  methods: {}
}
</script>
