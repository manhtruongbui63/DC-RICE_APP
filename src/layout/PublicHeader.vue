<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-container>
      <v-toolbar flat class="">
        <v-toolbar-title>DC Rice</v-toolbar-title>
        <v-btn
          outlined
          color="indigo"
          large
          max-height="40"
          class="hidden-sm-and-down ml-4"
        >
          <v-icon left> fas fa-bars</v-icon>
          <p>Đăng nhập</p>
        </v-btn>
        <v-spacer />
        <v-text-field
          class="hidden-sm-and-down"
          placeholder="Tìm kiếm..."
          append-icon="fas fa-magnifying-glass"
          hide-details
          dense
          outlined
          clearable
          filled
        />
        <v-spacer />
        <v-badge color="#41AB55" overlap content="3" class="mx-2 mt-1">
          <v-avatar color="#ECF7EE" size="40">
            <v-icon small color="#41AB55">fas fa-shopping-cart</v-icon>
          </v-avatar>
        </v-badge>
        <!-- <v-avatar size="30" class="hidden ml-2">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar> -->
        <v-btn text large max-height="40" class="hidden-xs-only ml-2">
          <v-icon left> fas fa-user</v-icon>
          <p>Đăng nhập</p>
        </v-btn>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss">
.v-toolbar__content {
  padding: 0;
  @media only screen and (max-width: 599px) {
    padding: 0;
  }
}
.v-toolbar__items {
  align-items: center;
  height: auto;
}
</style>
