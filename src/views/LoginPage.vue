<template>
  <div class="fill-height ma-0 tlo">
    <v-row class="fill-height pa-0 ma-0">
      <v-col cols="5" class="pa-0 ma-0">
        <v-card class="primary" height="100%">
          <v-row class="justify-center align-center fill-height pa-0 ma-0"
            ><v-col cols="8">
              <v-card-title class="pb-8">
                <h1>Zaloguj się</h1>
              </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    label="Login"
                    type="text"
                    required
                    prepend-inner-icon="mdi-account"
                    v-model="username"
                    id="autocomplete"
                  ></v-text-field>
                  <v-text-field
                    label="Hasło"
                    type="password"
                    required
                    prepend-inner-icon="mdi-lock"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-spacer></v-spacer>
              <v-btn
                color="secondary"
                class="mb-4 mt-8"
                width="100%"
                @click="login()"
                >Login</v-btn
              >
              <v-btn color="accent" width="100%">Zarejestruj się</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class LoginPage extends Vue {
  data() {
    return {
      username: '',
      password: '',
    }
  }
  login() {
    if (this.$store.state.loggedIn === false) {
      if (
        this.$data.login == this.$store.state.user.login &&
        this.$data.password == this.$store.state.user.password
      ) {
        this.$emit('zalogowano', true)
        this.$router.replace({ name: 'home' })
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.h1 {
  font-weight: bold;
  font-size: 50px;
}
.tlo {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
}
</style>
