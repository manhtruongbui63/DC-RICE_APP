<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-container>
      <v-toolbar flat>
        <v-toolbar-title class="mr-sm-3" style="max-width: 165px">
          <router-link :to="{ name: 'home' }">
            <v-img
              class="logo-custom"
              src="@/assets/logo.png"
              alt="Logo"
              height="auto "
            ></v-img>
          </router-link>
        </v-toolbar-title>
        <div class="text-center">
          <v-menu
            bottom
            offset-y
            :nudge-width="250"
            :close-on-content-click="false"
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                outlined
                color="indigo"
                large
                max-height="40"
                class="hidden-sm-and-down ml-4"
              >
                <v-icon left> fas fa-bars</v-icon>
                <span class="text-capitalize">Danh mục sản phẩm</span>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle
                      >Founder of Vuetify</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-switch color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>Enable messages</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action>
                    <v-switch color="purple"></v-switch>
                  </v-list-item-action>
                  <v-list-item-title>Enable hints</v-list-item-title>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false"> Cancel </v-btn>
                <v-btn color="primary" text @click="menu = false"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
        <v-spacer />
        <v-text-field
          class="custom-form-search"
          placeholder="Tìm kiếm..."
          append-icon="fas fa-magnifying-glass"
          hide-details
          dense
          outlined
          filled
        />
        <v-spacer class="hidden-sm-and-down" />
        <div>
          <v-menu
            bottom
            offset-y
            open-on-hover
            :nudge-width="200"
            :close-on-content-click="false"
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-badge
                color="#41AB55"
                overlap
                content="3"
                class="hidden-sm-and-down mx-2 mt-1"
              >
                <v-avatar color="#ECF7EE" size="30" v-bind="attrs" v-on="on">
                  <v-icon small color="#41AB55">fas fa-shopping-cart</v-icon>
                </v-avatar>
              </v-badge>
            </template>

            <v-card>
              <v-list class="custom-scroll-menu">
                <v-list-item>
                  <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                      <v-list-item-avatar tile size="65" class="rounded-sm">
                        <v-img
                          max-height="250"
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class=""> Dầu ăn </v-list-item-title>
                        <v-list-item-subtitle class="my-1"
                          >Số lượng <span>1</span></v-list-item-subtitle
                        >
                        <v-list-item-title class="">
                          Giá bán<span class="pl-1">250.000 đ</span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list-item>
                <v-list-item>
                  <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                      <v-list-item-avatar tile size="65" class="rounded-sm">
                        <v-img
                          max-height="250"
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class=""> Dầu ăn </v-list-item-title>
                        <v-list-item-subtitle class="my-1"
                          >Số lượng <span>1</span></v-list-item-subtitle
                        >
                        <v-list-item-title class="">
                          Giá bán<span>250.000 đ</span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list-item>
                <v-list-item>
                  <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                      <v-list-item-avatar tile size="65" class="rounded-sm">
                        <v-img
                          max-height="250"
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class=""> Dầu ăn </v-list-item-title>
                        <v-list-item-subtitle class="my-1"
                          >Số lượng <span>1</span></v-list-item-subtitle
                        >
                        <v-list-item-title class="">
                          Giá bán<span class="pl-1">250.000 đ</span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list-item>
                <v-list-item>
                  <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                      <v-list-item-avatar tile size="65" class="rounded-sm">
                        <v-img
                          max-height="250"
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class=""> Dầu ăn </v-list-item-title>
                        <v-list-item-subtitle class="my-1"
                          >Số lượng <span>1</span></v-list-item-subtitle
                        >
                        <v-list-item-title class="">
                          Giá bán<span>250.000 đ</span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list-item>
              </v-list>
              <v-divider class="mx-4"></v-divider>
              <v-card-text class="d-flex justify-space-between pa-0">
                <v-card-subtitle class="font-weight-bold"
                  >Tổng tiền<span class="px-1">(3)</span>sản
                  phẩm</v-card-subtitle
                >
                <v-card-subtitle
                  ><span class="font-weight-bold" style="color: #ff5252"
                    >750.000 đ</span
                  ></v-card-subtitle
                >
              </v-card-text>
              <v-card-actions>
                <v-btn block depressed color="success"> Xem Giỏ Hàng </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
        <v-avatar v-if="user" size="30" class="hidden ml-3" color="green">
          <v-img v-if="user?.avatar" :src="user?.avatar" alt="avatar"></v-img>
          <span v-else class="white--text text-uppercase">{{
            user.fullname
          }}</span>
        </v-avatar>
        <v-btn
          v-else
          text
          large
          max-height="40"
          class="hidden-xs-only ml-3"
          :to="{ name: 'sign-in' }"
        >
          <v-icon left> fas fa-user</v-icon>
          <span class="text-capitalize">Đăng nhập</span>
        </v-btn>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  methods: {}
}
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
.logo-custom {
  width: 100%;
  height: auto;
  @media only screen and (max-width: 599px) {
    max-width: 120px;
  }
}
.custom-form-search .v-input__append-inner .v-input__icon--append .v-icon {
  font-size: 18px;
}
.custom-scroll-menu {
  max-height: 300px;
  overflow-y: auto;
}
</style>
