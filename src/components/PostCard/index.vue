<template>
  <v-card class="mx-auto card-style" height="150px" outlined>
    <v-img class="white--text align-end" :src="post?.src" height="150px">
      <v-card-title></v-card-title>
      <v-card-subtitle></v-card-subtitle
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
.card-style {
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.05);
  }
}
</style>
