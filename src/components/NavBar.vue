<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="zmien()"></v-app-bar-nav-icon>

    <v-toolbar-title
      ><v-btn text to="/"><b>MeetApp</b></v-btn></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/profile">Profil<v-icon>mdi-account</v-icon></v-btn>
      <v-btn @click="auth ? logout() : login()">
        {{ auth ? 'Wyloguj' : 'Zaloguj' }}
        <v-icon>{{ text.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  login() {
    if (this.$route.name !== 'login') {
      this.$router.push({ name: 'login' })
    }
  }
  logout() {
    this.$store.commit('logout')
    this.$router.push({ name: 'login' })
  }
  zmien() {
    this.$store.commit('toggleDrawer')
  }
  get auth() {
    return this.$store.state.loggedIn
  }
  get text() {
    if (this.auth) {
      return { icon: 'mdi-logout', info: 'Wyloguj' }
    } else {
      return { icon: 'mdi-login', info: 'Zaloguj' }
    }
  }
}
</script>
<style>
.v-btn--active::before {
  opacity: 0 !important;
}
</style>
