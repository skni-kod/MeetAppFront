<template>
  <v-main class="fill-height">
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
                  ></v-text-field>
                  <v-text-field
                    label="Hasło"
                    type="password"
                    required
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-spacer></v-spacer>
              <v-btn color="secondary" class="mb-4 mt-8" width="100%"
                >Login</v-btn
              >
              <v-btn color="accent" width="100%">Zarejestruj się</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class LoginPage extends Vue {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.h1 {
  font-weight: bold;
  font-size: 50px;
}
.v-main {
  background-image: url(https://i.fbcd.co/products/resized/resized-750-500/e29d5583f90410ee3072688e086ce32540170d92137ebe3e335ef9857572b31c.jpg);
  background-size: auto;
  background-position: left top;
  background-repeat: repeat;
}
</style>
