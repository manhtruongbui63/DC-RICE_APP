<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  created() {
    const currentUser = () => {
      const token = localStorage.getItem('access-token')
      if (!token) return
      this.$store.dispatch('auth/getUser')
    }
    currentUser()
  },
  methods: {}
}
</script>
