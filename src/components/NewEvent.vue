<template>
  <v-card>
    <v-form>
      <v-container>
        <v-text-field
          v-model="eventTitle"
          label="Nazwa wydarzenia"
          required
        ></v-text-field>
        <v-text-field
          v-model="eventCity"
          label="Miasto"
          required
        ></v-text-field>
        <v-text-field
          v-model="eventAddress"
          label="Adres np. Partyzantów 4B"
          required
        ></v-text-field>
        <v-date-picker
          v-model="eventDate"
          class="mt-4"
          color="secondary"
        ></v-date-picker>
        <v-text-field
          v-model="eventDescription"
          label="Opis"
          required
        ></v-text-field>
      </v-container>
      <v-col class="text-right">
        <v-btn class="secondary ma-4" @click="pushEvent">Dodaj</v-btn>
      </v-col>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class NewEvent extends Vue {
  data() {
    return {
      eventTitle: '',
      eventCity: '',
      eventAddress: '',
      eventDate: null,
      eventDescription: '',
      event: [],
    }
  }
  pushEvent() {
    axios
      .post(`https://meet-app-projekt.herokuapp.com/user/api/Event/`, {
        title: this.$data.eventTitle,
        city: this.$data.eventCity,
        address: this.$data.eventAddress,
        date: this.$data.eventDate,
        description: this.$data.eventDescription,
      })
      .then((response) => {
        console.log(response)
        console.log(this.$data.event)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
