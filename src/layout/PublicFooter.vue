<template>
  <v-footer>
    <v-container>
      <v-footer padless>
        <v-card flat class="text-center">
          <v-card-text>
            <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn> -->
          </v-card-text>
          <v-card-text class="pt-0"
            >Photography is not just about taking pictures, it's about capturing
            the essence of a moment and preserving it for a lifetime. Whether
            you're using a professional camera or just your smartphone, the
            power to tell a story and evoke emotions is in your
            hands.</v-card-text
          >
          <v-divider></v-divider>
          <v-card-text>
            {{ new Date().getFullYear() }} —
            <strong>Design By TruongDev</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.v-footer {
  @media only screen and (max-width: 599px) {
    padding: 0;
  }
}
</style>
