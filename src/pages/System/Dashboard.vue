<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="d-flex align-center gap-4 pa-3">
            <v-card-title>Cafe Badilico</v-card-title>
            <v-spacer />
            <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
          </div>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="10" class="mx-auto">
                <v-form>
                  <div class="text-overline mb-4">Product</div>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Product Name"
                        placeholder="Product Name"
                        dense
                        outlined
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        label="Description"
                        rows="2"
                        row-height="5"
                        filled
                        outlined
                        hide-details
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-dialog v-model="dialog" persistent max-width="1024px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            label="Category"
                            outlined
                            dense
                            v-bind="attrs"
                            v-on="on"
                            value=""
                            hide-details
                          ></v-text-field>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Edit Category</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="4">
                                  <v-select
                                    v-model="select"
                                    :items="[
                                      { id: 1, name: 'Laptop', parentId: null },
                                      { id: 2, name: 'Gaming', parentId: 1 },
                                      { id: 3, name: 'Office', parentId: 1 },
                                      {
                                        id: 4,
                                        name: 'SmartPhone',
                                        parentId: null
                                      },
                                      { id: 5, name: 'Apple', parentId: 4 },
                                      { id: 6, name: 'Samsung', parentId: 4 },
                                      { id: 7, name: 'Xiaomi', parentId: 4 }
                                    ]"
                                    label="Menu"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    dense
                                    hide-details
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="4">
                                  <v-autocomplete
                                    :items="[
                                      'Skiing',
                                      'Ice hockey',
                                      'Soccer',
                                      'Basketball',
                                      'Hockey',
                                      'Reading',
                                      'Writing',
                                      'Coding',
                                      'Basejump'
                                    ]"
                                    label="Menu Sub 1"
                                    multiple
                                  ></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="4">
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Menu Sub 2"
                                    required
                                  ></v-select>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Confirm
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        label="Images"
                        prepend-icon="mdi-camera"
                        accept="image/png, image/jpeg, image/jpg"
                        multiple
                        counter
                        show-size
                        outlined
                        dense
                      >
                        <template v-slot:selection="{ text }">
                          <v-chip small label color="primary">
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-file-input
                        label="Product Image"
                        prepend-icon="mdi-camera"
                        accept="image/png, image/jpeg, image/jpg"
                        :rules="[
                          (value) =>
                            !value ||
                            value.size < 2000000 ||
                            'Avatar size should be less than 2 MB!'
                        ]"
                        outlined
                        dense
                        hide-details
                      >
                        <template v-slot:selection="{ text }">
                          <v-chip small label color="primary">
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        label="Status"
                        :items="['Active', 'Pendding', 'Inactive']"
                        dense
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row> </v-form
                ><!-- End Details -->
                <v-divider class="my-6" />
                <v-form>
                  <div class="text-overline mb-4">Specification</div>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-text-field
                            label="Attribute"
                            placeholder="Attribute"
                            outlined
                            hide-details
                            dense
                          ></v-text-field
                        ></v-col>
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Value"
                            placeholder="Value"
                            outlined
                            hide-details
                            dense
                          ></v-text-field
                        ></v-col>
                        <v-col cols="12" sm="12">
                          <v-btn class="" color="primary">
                            Create
                          </v-btn></v-col
                        >
                      </v-row>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-card outlined>
                        <v-simple-table class="striped-table">
                          <template v-slot:default>
                            <tbody>
                              <tr v-for="item in attributes" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                                <td>
                                  <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    x-small
                                    color="error"
                                  >
                                    <v-icon dark>fas fa-minus </v-icon>
                                  </v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                        <!-- <v-card-subtitle class="text-center">No data</v-card-subtitle> -->
                      </v-card>
                    </v-col>
                  </v-row> </v-form
                ><!-- End Attributes -->
                <v-divider class="my-6" />
                <v-form>
                  <div class="text-overline mb-4">Variants</div>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Tilte"
                        placeholder="Title"
                        dense
                        outlined
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Base Price"
                        placeholder="$1200"
                        dense
                        outlined
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Price"
                        placeholder="$1200"
                        dense
                        outlined
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-select
                        label="Position"
                        :items="['1', '2', '3']"
                        dense
                        outlined
                      ></v-select
                    ></v-col>
                    <v-col cols="12" sm="4"
                      ><v-text-field
                        label="Weight"
                        placeholder="10"
                        dense
                        outlined
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-select
                        label="Unit"
                        :items="['Kg', 'Gram', 'Gói', 'Túi', 'Chai']"
                        dense
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row> </v-form
                ><!-- End Variants -->
                <v-divider class="my-6" />
                <v-form>
                  <div class="text-overline mb-4">Info</div>
                  <v-row>
                    <v-col cols="12">
                      <editor-cs v-model="content" />
                    </v-col>
                  </v-row> </v-form
                ><!-- End Markdown -->
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Editor from '@/components/Editor'
export default {
  name: 'Dashboard',
  components: { 'editor-cs': Editor },
  data() {
    return {
      content: '',
      dialog: false,
      select: { name: '', id: '' },
      categories: [
        { id: 1, name: 'Laptop', parentId: null },
        { id: 2, name: 'Gaming', parentId: 1 },
        { id: 3, name: 'Office', parentId: 1 },
        {
          id: 4,
          name: 'SmartPhone',
          parentId: null
        },
        { id: 5, name: 'Apple', parentId: 4 },
        { id: 6, name: 'Samsung', parentId: 4 },
        { id: 7, name: 'Xiaomi', parentId: 4 }
      ],
      attributes: [
        {
          name: 'Brand',
          calories: 'Apple Smart Phone'
        },
        {
          name: 'Weight',
          calories: 237
        },
        {
          name: 'NSX',
          calories: '12/12/2024'
        },
        {
          name: 'HSD',
          calories: '30/1/2025'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.striped-table tbody tr:nth-child(odd) {
  background-color: #f5f5f5;
}
.striped-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}
.tox {
  .tox-tinymce {
    border-radius: 4px !important;
  }
}
</style>
