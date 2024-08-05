<template>
  <v-app>
    <v-app-bar fixed app elevation="0">
      <v-app-bar-nav-icon @click.stop="mini = !mini" />
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Search"
            placeholder="What the fuck?"
            outlined
            dense
            hide-details
        /></v-col>
      </v-row>
      <v-spacer />
      <v-toolbar-items>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      app
      clipped
      fixed
      disanle-resize-watcher
      :mini-variant.sync="mini"
      permanent
    >
      <div class="d-flex justify-center align-center mx-2" style="height: 64px">
        <v-img max-width="150" class="" src="@/assets/logo.png"></v-img>
      </div>
      <v-divider />
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Admin</v-list-item-title>
      </v-list-item>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fas fa-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-group prepend-icon="fas fa-chart-simple">
          <template v-slot:activator>
            <v-list-item-title>Statistics</v-list-item-title>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon x-small> fas fa-circle-dot </v-icon>
              </v-list-item-icon>
              <v-list-item-title>SUB</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon x-small> fas fa-circle-dot </v-icon>
              </v-list-item-icon>
              <v-list-item-title>SUB</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-group prepend-icon="fas fa-boxes-stacked">
          <template v-slot:activator>
            <v-list-item-title>Products</v-list-item-title>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon x-small> fas fa-circle-dot </v-icon>
              </v-list-item-icon>
              <v-list-item-title>SUB</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon x-small> fas fa-circle-dot </v-icon>
              </v-list-item-icon>
              <v-list-item-title>SUB</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list-group prepend-icon="fas fa-cart-flatbed">
          <template v-slot:activator>
            <v-list-item-title>Orders</v-list-item-title>
          </template>

          <v-list-item ripple link>
            <v-list-item-title>SUB</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="fas fa-users">
          <template v-slot:activator>
            <v-list-item-title>Customers</v-list-item-title>
          </template>

          <v-list-item ripple link>
            <v-list-item-title>SUB</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="fas fa-hand-holding-dollar">
          <template v-slot:activator>
            <v-list-item-title>Transactions</v-list-item-title>
          </template>

          <v-list-item ripple link>
            <v-list-item-title>SUB</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="fas fa-ranking-star">
          <template v-slot:activator>
            <v-list-item-title>Revenue</v-list-item-title>
          </template>

          <v-list-item ripple link>
            <v-list-item-title>SUB</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="fas fa-star-half-stroke">
          <template v-slot:activator>
            <v-list-item-title>Reviews</v-list-item-title>
          </template>

          <v-list-item ripple link>
            <v-list-item-title>SUB</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <!-- </vue-perfect-scrollbar> -->

      <template v-slot:append>
        <v-divider></v-divider>
        <v-list-group prepend-icon="fas fa-gears">
          <template v-slot:activator>
            <v-list-item-title>Setting</v-list-item-title>
          </template>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item ripple link>
            <v-list-item-content>
              <v-list-item-title>Sub of 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid style="max-width: 1440px !important">
        <v-slide-y-transition mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </v-slide-y-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: false,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-application {
  background-color: #f4f5fa !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #f4f5fa !important;
}
.theme--light.v-navigation-drawer {
  background-color: #f4f5fa !important;
}
.v-navigation-drawer {
  top: 0 !important;
  max-height: 100% !important;
}
.sidebar-menu--scroll {
  height: 100%;
  overflow: auto;
}
.theme--light.v-navigation-drawer {
  // background-color: #28243d !important;
}
.v-main__wrap {
  // padding-top: 12px !important;
}
</style>
