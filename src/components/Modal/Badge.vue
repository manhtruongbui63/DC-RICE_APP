<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-img
          height="auto"
          src="https://hcm.fstorage.vn/images/2024/06/1-20240628030241.png"
          lazy-src="https://hcm.fstorage.vn/images/2024/06/1-20240628030241.png"
        >
          <v-icon class="close-icon" small @click="dialog = false">
            far fa-circle-xmark
          </v-icon>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return { dialog: true }
  }
}
</script>

<style lang="scss" scoped>
.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: red;
}
</style>
