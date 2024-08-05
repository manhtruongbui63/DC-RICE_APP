<template>
  <div class="wrap">
    <v-container>
      <v-card class="mx-auto pa-8 pa-sm-16 mt-2 mt-sm-5" flat>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="5">
            <form>
              <v-text-field
                label="E-mail"
                v-model="email"
                class="input-group--focused"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :append-icon="show ? ' far fa-eye-slash' : 'far fa-eye'"
                :type="show ? 'text' : 'password'"
                @click:append="
                  () => {
                    show = !show
                  }
                "
                dense
                outlined
                required
              ></v-text-field>

              <v-btn block depressed @click="onSubmit" color="success">
                Sign In
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn block outlined color="success" :to="{ name: 'sign-up' }">
                Sign Up
              </v-btn>
            </form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import init from '@/utils/init'
export default {
  name: 'sign-in',
  data() {
    return {
      email: '',
      password: '',
      show: false
    }
  },
  methods: {
    ...mapActions('auth', ['handleLogin']),
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.handleLogin(payload)
        .then((res) => {
          if (res && res.data.success === true) {
            init.toastr('success', 'Đăng nhập thành công')
            this.$router.push({
              name: 'home'
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.v-input__icon--append .v-icon {
  font-size: 18px !important;
}
</style>
