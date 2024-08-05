<template>
  <div>
    <div class="d-flex"></div>
    <v-row>
      <v-col cols="12" md="7"
        ><v-card class="mx-auto">
          <v-card-title> Unlimited music now </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Product Name"
                    placeholder="Placeholder"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text> </v-card
      ></v-col>
      <v-col cols="12" md="5"
        ><v-card class="mx-auto">
          <v-card-title> Unlimited music now </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Product Name"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Product Name"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Tags"
                    :items="['Active', 'Pending', 'Inactive']"
                    hide-details="auto"
                    chips
                    multiple
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Status"
                    :items="['Active', 'Pending', 'Inactive']"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row> </v-form
          ></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7"
        ><v-card class="mx-auto">
          <v-card-title> Unlimited music now </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Product Name"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Product Name"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Tags"
                    :items="['Active', 'Pending', 'Inactive']"
                    hide-details="auto"
                    chips
                    multiple
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-select
                    label="Status"
                    :items="['Active', 'Pending', 'Inactive']"
                    hide-details="auto"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row> </v-form
          ></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="5"
        ><v-card class="mx-auto">
          <v-card-title> Attributes </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Attribute"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    label="Value"
                    placeholder="iPhone 14"
                    hide-details="auto"
                    dense
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn block>
                    <v-icon left> fas fa-plus </v-icon>
                    Menu
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Attribute</th>
                    <th class="text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: 'Hướng dẫn sử dụng',
          calories: 'Luộc, rang, ăn lẩu, ...'
        },
        {
          name: 'Bảo quản',
          calories: 'Bảo quản lạnh ở -18 độ'
        },
        {
          name: 'Khối lượng',
          calories: '1.1 - 1.3 kg/con'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
