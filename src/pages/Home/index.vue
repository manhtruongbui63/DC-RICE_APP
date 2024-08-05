<template>
  <div class="wrap">
    <div class="heroBlock pt-3">
      <v-carousel cycle hide-delimiters hide-delimiter-background>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
      <div class="test-ab">
        <v-container class="hidden-sm-and-down">
          <v-row class="px-2">
            <v-col
              cols="3"
              class="pa-1"
              v-for="(p, index) in posts"
              :key="index"
            >
              <PostCard :post="p"
            /></v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End-post-top -->
    </div>
    <!-- End-banner -->
    <div class="pt-5">
      <v-container :class="{ holder: isModile }">
        <v-card class="mx-auto card-custom" outlined>
          <v-list-item class="white--text">
            <v-list-item-content class="">
              <v-list-item-title class="text-h6 mb-1">
                Duy nhất hôm nay
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text class="text-h6 white--text mb-1"
                >Kết thúc trong</v-list-item-action-text
              >
              <div class="text-overline">14:39:50</div>
            </v-list-item-action>
          </v-list-item>
          <v-card-text class="hidden-sm-and-down">
            <v-row class="pa-md-2">
              <v-col
                v-for="(p, index) in products"
                :key="index"
                cols="6"
                sm="4"
                md="3"
                lg="2"
                class="col-5th pa-1"
              >
                <ProductCard :product="p" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="hidden-md-and-up"
            ><ProductSwiper :data="products"
          /></v-card-text>
        </v-card>
      </v-container>
    </div>
    <!-- End-sale -->
    <v-item-group class="pt-5">
      <v-container
        ><v-row justify="start" class="px-2">
          <v-col
            cols="3"
            sm="2"
            v-for="(c, i) in categories"
            :key="i"
            class="pa-1"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="rounded-lg"
                :class="active ? 'borderme' : 'borderout'"
                :color="active ? '#D5F0DB' : 'white'"
                flat
                height="85"
                @click="toggle"
              >
                <v-list-item two-line class="px-1" style="height: 100%">
                  <v-list-item-content>
                    <div align="center" justify="center">
                      <v-img
                        :src="c.img"
                        max-height="40"
                        max-width="40"
                        contain
                      ></v-img>
                    </div>
                    <v-list-item-subtitle
                      class="text-center pt-1"
                      :class="active ? 'green--text' : 'black--text'"
                    >
                      {{ c.title }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <!-- End-category -->
    <div class="mt-5">
      <v-container>
        <v-row class="px-2 px-sm-2">
          <v-col
            v-for="(p, index) in products"
            :key="index"
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="col-5th pa-1 pa-sm-1"
          >
            <ProductCard :product="p" />
          </v-col>
        </v-row>
        <v-card class="mx-auto my-3" color="grey lighten-4" outlined>
          <v-card-text align="center" class="pa-0 pb-sm-5">
            <v-btn outlined color="indigo" style="text-transform: none">
              Xem thêm 360 sản phẩm
              <span class="hidden-md-and-down px-1" style="font-weight: bold">
                Sản Phẩm Khuyến Mại
              </span>
              <v-icon small right dark> fas fa-chevron-down </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <!-- End-product -->
    <div class="my-5">
      <v-container>
        <v-card class="mx-auto my-4" outlined
          ><v-card-title class="text-h6 py-1">Sản phẩm khuyến mại</v-card-title>
        </v-card>
        <v-row class="px-2 px-sm-2">
          <v-col
            v-for="(p, index) in products"
            :key="index"
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="col-5th pa-1 pa-sm-1"
          >
            <ProductCard :product="p" />
          </v-col>
        </v-row>
        <v-card class="mx-auto my-3" color="grey lighten-4" outlined>
          <v-card-text align="center" class="pa-0 pb-sm-5">
            <v-btn outlined color="indigo" style="text-transform: none">
              Xem thêm 360 sản phẩm
              <span class="hidden-md-and-down px-1" style="font-weight: bold">
                Sản Phẩm Khuyến Mại
              </span>
              <v-icon small right dark> fas fa-chevron-down </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <!-- End-product -->
    <div class="my-5">
      <v-container>
        <v-card class="mx-auto" outlined>
          <v-row class="px-3">
            <v-col cols="6" sm="3" class="pa-0">
              <v-card class="mx-auto" outlined>
                <v-img
                  src="https://cdn-crownx.winmart.vn/images/prod/162964655378716287682220181-1--og.png"
                  height="80px"
                  contain
                ></v-img>
                <v-card-subtitle class="text-center"
                  >Sản phẩm an toàn
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3" class="pa-0">
              <v-card class="mx-auto" outlined>
                <v-img
                  src="https://cdn-crownx.winmart.vn/images/prod/162964658411816287682628462-1--og.png"
                  height="80px"
                  contain
                ></v-img>
                <v-card-subtitle class="text-center"
                  >Chất lượng cam kết
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3" class="pa-0">
              <v-card class="mx-auto" outlined>
                <v-img
                  src="https://cdn-crownx.winmart.vn/images/prod/162964661464516287682943943-1--og.png"
                  height="80px"
                  contain
                ></v-img>
                <v-card-subtitle class="text-center"
                  >Dịch vụ vượt trội
                </v-card-subtitle>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3" class="pa-0">
              <v-card class="mx-auto" outlined>
                <v-img
                  src="https://cdn-crownx.winmart.vn/images/prod/162964665580516292779811154-1--og.png"
                  height="80px"
                  contain
                ></v-img>
                <v-card-subtitle class="text-center"
                  >Giao hàng nhanh
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row></v-card
        >
      </v-container>
    </div>
    <!-- End-note -->
    <Badge />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import PostCard from '@/components/PostCard'
import ProductSwiper from '@/components/Carousel/SwiperProductSale.vue'
import Badge from '@/components/Modal/Badge.vue'
export default {
  name: 'home',
  components: { ProductCard, PostCard, ProductSwiper, Badge },
  data: () => ({
    items: [
      {
        src: 'https://lh3.googleusercontent.com/QPLK6wYRdDrMQ_SqQr3WgmlRTgkqpwOH2ldIP78aCeSTMAFBO9sifWrY2Kyo00CiCzggvA8L_7Yj7mamZrqVCogQO2jhCc8Nhw=rw-w1920',
        title: 'We are creative'
      },
      {
        src: 'https://lh3.googleusercontent.com/KHQz30RvopyDUrRI95m_etcGBoknp9XMhoIxonPJvPkPuVattd0mxb8ugnXFhX4pBQJ6Tl0eeECAE5Iodey28UyNXNHOg6Lf=rw-w1920',
        title: 'We are hard worker'
      },
      {
        src: 'https://lh3.googleusercontent.com/FnKnm92DuuukTHRXw63Ycb9zciigDAlv69zINlV8YxykcwdeLlBuO2TOGrGnlaK1BpwemNrel4xchpNoax592mWs3DabAWc=rw-w1920',
        title: 'We are professional'
      }
    ],
    categories: [
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Meat & Fish Meat '
      },
      {
        img: 'https://lh3.googleusercontent.com/Tbx6y7pI3TBXLszBKa_UDfPXNWKufgrNzmalmQKEHHJ_88UWAyWQeXHPIu34GlAT1uzvNbaj26M9BPDmotQHMVZRMQ2rw1heiA=rw',
        title: 'Vegetables'
      },
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Medicine'
      },
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Medicine'
      },
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Medicine'
      },
      {
        img: 'https://lh3.googleusercontent.com/Vv4QFdO86gY1PuydiHxlYKbp1TylcipH5xKdPV5A3siNSH-s8-l6xFM4xZUkxqgr8n5i1UWY11WI-NhFjIZrvrcBfRfD3PI=rw',
        title: 'Medicine'
      }
    ],
    products: [
      {
        id: 1,
        name: 'product_1 product_1 product_1 product_1 product_1',
        price: 10,
        price_unit: '$',
        image:
          'https://hcm.fstorage.vn/images/2022/10170386_f1f8d4c9-3988-4f2a-b832-97aa0fbfe342-og.jpg',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 2,
        name: 'product_2',
        price: 10,
        price_unit: '$',
        image:
          'https://hcm.fstorage.vn/images/2022/bo-thau-ro-xoay-da-nang-inochi-yoko-28cm.jpg',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 3,
        name: 'product_3',
        price: 10,
        price_unit: '$',
        image:
          'https://hcm.fstorage.vn/images/2023/11/hat-nem-meizan-400gr-20231103040644.jpg',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 4,
        name: 'product_4',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 5,
        name: 'product_5',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 1,
        name: 'product_1',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 2,
        name: 'product_2',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 3,
        name: 'product_3',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 4,
        name: 'product_4',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      },
      {
        id: 5,
        name: 'product_5',
        price: 10,
        price_unit: '$',
        image: '',
        sold: 20,
        sold_unit: '%',
        rating: 4.3
      }
    ],
    posts: [
      {
        id: 1,
        title: '',
        sub_title: '',
        src: 'https://lh3.googleusercontent.com/X4csLRv_rr57DkfluBonx9ZkH9iPxI5oy4opjwsLfA008doGGCl2IxcdVCDrXJSXWThVUoEZAx0HMwe6SWE-Na5637TDAnFN=rw-w296',
        alt: ''
      },
      {
        id: 2,
        title: '',
        sub_title: '',
        src: 'https://lh3.googleusercontent.com/VlzZxoxsnPfbJmLhz9kAIpYICfGpYHk1oVH6XhuiRBg7omiJdSbj9zFXs_FuZpGEOrkbiv3YWHx3SU2auYsx9Re2wPVmgx5b=rw-w296',
        alt: ''
      },
      {
        id: 3,
        title: '',
        sub_title: '',
        src: 'https://lh3.googleusercontent.com/rMxqTbHpV_9S6oWdrSO3LYLG9R21IZs75D45y01XQTxrC7FEEgal0wdmiJ-AHzo3aNNrFqceBsj0JoUOxEonWiuhjD8K5fE=rw-w297',
        alt: ''
      },
      {
        id: 4,
        title: '',
        sub_title: '',
        src: 'https://lh3.googleusercontent.com/p7NHn7WNkTQ77tUUx-cneoP8YB0UwVu-C83CtWmty_xU1j-loIesM1VFzX8zk6jVVxDt9j-9EBZDAzhvFp9YiB0US-CIA-0=rw-w296',
        alt: ''
      }
    ],
    items_1: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  computed: {
    isModile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style lang="scss">
.v-card {
  border: none !important;
}
.heroBlock {
  position: relative;

  .v-window {
    @media only screen and (max-width: 820px) {
      height: 320px !important;
    }
    @media only screen and (max-width: 599px) {
      height: 180px !important;
    }
  }
  .v-image {
    height: inherit !important;
  }
  .v-image__image {
    &:before {
      content: '';
      // background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
  .test-ab {
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    z-index: 1;
  }
  @media only screen and (min-width: 821px) {
    margin-bottom: 75px;
  }
}
.padding-custom {
  padding: 0 !important;
}
.card-custom {
  background-image: linear-gradient(
    to right,
    rgb(255, 62, 52),
    rgb(255, 203, 66)
  );
}
.v-application .holder {
  padding: 0 !important;
}
</style>
