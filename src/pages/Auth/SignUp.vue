<template>
  <div class="wrap">
    <v-container>
      <v-card class="mx-auto pa-8 pa-sm-16 mt-2 mt-sm-5" flat>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="5">
            <form>
              <v-text-field
                label="First Name"
                v-model="first_name"
                class="input-group--focused"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Last Name"
                v-model="last_name"
                class="input-group--focused"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Phone Number"
                v-model="phone"
                class="input-group--focused"
                required
                outlined
                dense
              ></v-text-field>
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
              <v-text-field
                label="Confirm Password"
                v-model="password_cf"
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
                Sign Up</v-btn
              >
              <v-divider class="my-3"></v-divider>
              <v-btn block outlined color="success" :to="{ name: 'sign-in' }">
                Sign In
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
export default {
  name: 'sign-up',
  data() {
    return {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      password_cf: '',
      show: false
    }
  },
  methods: {
    ...mapActions('auth', ['handleRegister']),
    onSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
        password_cf: this.password_cf
      }
      this.handleRegister(payload)
    }
  }
}
</script>

<style lang="scss">
.v-input__icon--append .v-icon {
  font-size: 18px !important;
}
</style>
