<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view @zalogowano="setLogin" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'
@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
  mounted() {
    if (!this.$store.state.zalogowano) {
      this.$router.replace({ name: 'login' })
    }
  }
  setLogin(status: boolean) {
    this.$store.state.loggedIn = status
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

html,
body {
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: 'Poppins', sans-serif;
}
</style>
