<template>
  <v-container>
    <v-row class="pt-3">
      <v-col cols="12" md="3" class="hidden-sm-and-down"
        ><v-card class="mx-auto">
          <v-row class="ma-0 mx-1">
            <v-col cols="12" sm="6"
              ><v-text-field
                placeholder="Min"
                outlined
                dense
                hide-details="auto"
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="6"
              ><v-text-field
                placeholder="Max"
                outlined
                dense
                hide-details="auto"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-slider step="10" hide-details class="mx-4"></v-slider>
          <v-divider class="mx-4"></v-divider>
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card></v-col
      >
      <v-col cols="12" md="9">
        <!-- <v-sheet elevation="10" class="py-4 px-1">
          <v-chip-group mandatory class="pl-3" active-class="primary--text">
            <v-chip v-for="tag in tags" :key="tag" label>
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-sheet> -->
        <!-- <v-divider class="mx-4"></v-divider> -->
        <v-breadcrumbs class="px-3"
          :items="[
            {
              text: 'Dashboard',
              disabled: false,
              href: 'breadcrumbs_dashboard'
            },
            {
              text: 'Link 1',
              disabled: false,
              href: 'breadcrumbs_link_1'
            },
            {
              text: 'Link 2',
              disabled: true,
              href: 'breadcrumbs_link_2'
            }
          ]"
        ></v-breadcrumbs>
        <v-row class="pa-2">
          <v-col
            v-for="(p, index) in products"
            :key="index"
            cols="6"
            sm="4"
            lg="3"
            class="pa-1 pa-sm-1"
          >
            <ProductCard :product="p"
          /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  name: 'product',
  components: { ProductCard },
  data() {
    return {
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Attractions'
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ],
          title: 'Dining'
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education'
        }
      ],
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing'
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
