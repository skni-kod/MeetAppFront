<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class App extends Vue {}
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
