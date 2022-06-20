<template>
  <!--Profil użytkownika-->
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card class="primary">
          <v-card-title>
            <span class="headline">Profil</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text v-for="(item, id) in items" :key="id"
            ><b>{{ item }}: </b>{{ info[id] }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Profile extends Vue {
  data() {
    return {
      items: [
        'Nazwa',
        'Email',
        'Telefon',
        'Adres',
        'Miejscowosc',
        'Data urodzenia',
        'Płeć',
        'Opis',
      ],
      info: [
        'uzytkownik',
        't.j.@gmail.com',
        '123456789',
        'ul. Krakowska 1',
        'Kraków',
        '01.01.2000',
        'kobieta',
        'lorem ipsum dolor sit amet',
      ],
    }
  }
}
</script>
