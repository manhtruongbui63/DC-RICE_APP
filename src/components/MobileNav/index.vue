<template>
  <v-app-bar
    class="hidden-md-and-up"
    :fixed="true"
    bottom
    height="64"
    color="white"
  >
    <v-container>
      <v-item-group mandatory>
        <v-toolbar flat>
          <v-row align="center" justify="space-around">
            <v-item v-slot="{ active, toggle }" class="item-cs">
              <router-link to="/" @click.native="toggle">
                <v-icon :color="active ? 'success' : 'gray'"
                  >fas fa-house</v-icon
                >
              </router-link>
            </v-item>
            <v-item v-slot="{ active, toggle }" class="item-cs">
              <v-icon :color="active ? 'success' : 'gray'" @click="toggle"
                >fab fa-microsoft</v-icon
              >
            </v-item>
            <v-item v-slot="{ active, toggle }" class="item-cs">
              <v-icon :color="active ? 'success' : 'gray'" @click="toggle"
                >fas fa-bell</v-icon
              >
            </v-item>
            <v-item v-slot="{ active, toggle }" class="item-cs">
              <v-badge color="error" content="3" class="" style="width: 100%">
                <v-icon :color="active ? 'success' : 'gray'" @click="toggle"
                  >fas fa-shopping-cart</v-icon
                >
              </v-badge>
            </v-item>
            <v-item v-slot="{ active, toggle }" class="item-cs">
              <router-link to="/login" @click.native="toggle">
                <v-icon :color="active ? 'success' : 'gray'"
                  >fas fa-user</v-icon
                >
              </router-link>
            </v-item>
          </v-row>
        </v-toolbar>
      </v-item-group>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    activeSheet() {
      return this.$store.state.isSheet
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: aqua;
}
.item-cs {
  max-width: 25px;
  width: 100%;
  height: 100%;
}
</style>
