<template>
  <v-card class="mx-auto card-style" outlined>
    <v-img class="white--text align-end" :src="post?.src" max-height="150px" />
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
