<template>
  <v-card class="mx-auto card-style" max-width="350" outlined>
    <v-skeleton-loader :loading="loading" type="image, article">
      <template>
        <v-skeleton-loader
          :loading="!product?.image"
          type="image"
          style="height: 185px"
        >
          <v-img
            :src="product?.image"
            :lazy-src="product?.image"
            class=""
            contain
            max-height="185"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-skeleton-loader>
        <router-link class="black--text" :to="{ name: '' }">
          <v-card-title class="py-0 mt-3">{{ product?.name }}</v-card-title>
        </router-link>
        <v-card-text class="py-1">
          <div class="text-subtitle-1">Đơn vị tính: chai</div>
          <v-card-subtitle class="pa-0 mb-3"
            >{{ product.price }} {{ product.price_unit }}</v-card-subtitle
          >
          <v-row align="center" class="ml-0">
            <v-rating
              :value="product?.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ms-1">{{ product?.rating }} (413)</div>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn small block color="success"
            >giỏ hàng<v-icon small right> fas fa-cart-plus </v-icon></v-btn
          >
        </v-card-actions>
      </template>
    </v-skeleton-loader>
  </v-card>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      loading: this.product ? false : true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-image {
  width: 100%;
  height: auto;
  max-height: 185px;
  border-radius: 4px;
}
.v-card__title {
  height: 2.4rem;
  font-size: 1rem;
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.card-style {
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.03);
  }
  @media only screen and (max-width: 820px) {
    &:hover {
      transform: scale(1);
    }
  }
}
</style>
