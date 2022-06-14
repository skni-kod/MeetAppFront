<template>
  <v-app id="drawer">
    <v-navigation-drawer v-model="drawer" app color="primary" :width="325">
      <v-row class="accent pa-2 ma-0" align="center" justify="center">
        <v-col cols="12" class="text-center">
          <input
            type="text"
            placeholder="Wyszukaj wydarzenia"
            class="white pl-2 py-2"
            style="border-radius: 7px; width: 100%"
        /></v-col>
      </v-row>
      <h1 class="text-center pa-3 accent--text">Lista wydarzeń</h1>
      <v-row>
        <v-col cols="12">
          <v-expansion-panels multiple>
            <v-expansion-panel
              class="white"
              v-for="(item, id) in items"
              :key="id"
            >
              <v-expansion-panel-header>
                <h3>{{ item.title }}</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <b>Miasto: </b>{{ item.miasto }}
                <br />
                <b>Adres: </b> {{ item.adres }}
                <br />
                <b>Data: </b>{{ item.data }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MeetApp</v-toolbar-title>
    </v-app-bar>
    <!---------------------------------------------------------------->
    <v-main class="pa-0">
      <GmapMap
        :center="this.center"
        :zoom="9"
        :options="options"
        map-type-id="roadmap"
        style="width: 100vw; height: 100vh"
        ><GmapMarker
          :key="id"
          v-for="(maps, id) in markers"
          :position="maps.position"
          :clickable="true"
          :draggable="true"
          @click="center = this.$data.center"
        />
      </GmapMap>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class HomePage extends Vue {
  created() {
    const success = (position: any) => {
      this.$data.center.lat = position.coords.latitude
      this.$data.center.lng = position.coords.longitude

      // Do something with the position
    }

    const error = (err: any) => {
      console.log(error)
    }

    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error)
    this.getMarkers()
  }
  drawer = false
  data() {
    return {
      markers: [],
      center: { lat: 50.041187, lng: 21.999121 },
      options: {
        gestureHandling: 'greedy',
      },
      items: [
        {
          title: 'Wydarzenie 1',
          data: '25.04.2025',
          miasto: 'Rzeszow',
          adres: 'ul. Jana pawła II 3',
        },
        {
          title: 'Awooga 2',
          data: '25.04.2025',
          miasto: 'Kolbuszowa',
          adres: 'ul. Partyzantow 28B',
        },
        {
          title: 'Impreza 3',
          data: '25.04.2025',
          miasto: 'Kolbuszowa',
          adres: 'ul. Jana pawła II 5',
        },
      ],
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
    }
  }
  getMarkers() {
    for (let i = 0; i < this.$data.items.length; i++) {
      const adresBezSpacji = this.$data.items[i].adres.replace(/ /g, '%')

      console.log(adresBezSpacji)
      fetch(
        `${this.$data.url}${this.$data.items[i].miasto}+${adresBezSpacji}&key=AIzaSyDwWvNXdOWCV848wJv-kcCFokOWkJp44pQ`,
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Błąd sieci')
          }
        })
        .then((data) => {
          this.$data.markers.push({
            position: {
              lat: data.results[0].geometry.location.lat,
              lng: data.results[0].geometry.location.lng,
            },
          })
        })
        .catch((error) => {
          console.error('Nie działa')
        })
    }
  }
}
</script>
