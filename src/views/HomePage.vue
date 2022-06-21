<template>
  <v-app id="drawer">
    <v-navigation-drawer
      v-model="this.$store.state.drawer"
      app
      color="primary"
      :width="325"
    >
      <v-row class="accent pa-2 ma-0" align="center" justify="center">
        <v-col cols="12" class="text-center"
          ><input
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
              @click="openMarker(id)"
            >
              <v-expansion-panel-header>
                <h3>{{ id + 1 }}. {{ item.title }}</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <b>Miasto: </b>{{ item.city }}
                <br />
                <b>Adres: </b> {{ item.address }}
                <br />
                <b>Data: </b>{{ item.date }}
                <br />
                <b>Opis: </b>{{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <!---------------------------------------------------------------->
    <v-main class="pa-0">
      <GmapMap
        :center="this.center"
        :zoom="9"
        :options="options"
        map-type-id="roadmap"
        ref="myMapRef"
        style="width: 100vw; height: 100vh"
        ><GmapMarker
          :key="id"
          v-for="(maps, id) in markers"
          :position="maps.position"
          :label="maps.label"
          :clickable="true"
          :draggable="true"
          @click="openMarker(maps.id)"
          ><gmap-info-window
            :closeclick="true"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === maps.id"
          >
            <div>{{ maps.description }}</div>
          </gmap-info-window></GmapMarker
        >
      </GmapMap>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from '@/axios'

@Component
export default class HomePage extends Vue {
  created() {
    const success = (position: any) => {
      this.$data.center.lat = position.coords.latitude
      this.$data.center.lng = position.coords.longitude
    }

    const error = (err: any) => {
      console.log(error)
    }

    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error)
    this.downloadData()
  }
  data() {
    return {
      openedMarkerID: null,
      markers: [],
      center: { lat: 50.041187, lng: 21.999121 },
      options: {
        gestureHandling: 'greedy',
      },
      items: [],
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
      field1: '',
    }
  }
  getMarkers() {
    for (let i = 0; i < this.$data.items.length; i++) {
      const adresBezSpacji = this.$data.items[i].address.replace(/ /g, '+')
      axios
        .get(
          `${this.$data.url}${this.$data.items[i].city}+${adresBezSpacji}&key=${process.env.VUE_APP_GOOGLE_API_KEY}`,
        )
        .then((response) => {
          if (response.status === 200) {
            {
              let index = i + 1
              const labelString = index.toString()
              this.$data.markers.push({
                id: i,
                position: {
                  lat: response.data.results[0].geometry.location.lat,
                  lng: response.data.results[0].geometry.location.lng,
                },
                label: labelString,
                description: this.$data.items[i].description,
              })
              console.log(this.$data.markers[i].label)
            }
          } else {
            throw new Error('Błąd sieci')
          }
        })
        .catch((error) => {
          console.error('Nie działa')
        })
    }
  }
  downloadData() {
    axios
      .get(`https://meet-app-projekt.herokuapp.com/user/api/Event/`)
      .then((res) => {
        if (res.status === 200) {
          this.$data.items = res.data
          this.getMarkers()
        }
      })
      .catch(() => {
        console.log('Błąd w pobieraniu danych')
      })
  }
  openMarker(id: any) {
    this.$data.openedMarkerID = id
  }
}
</script>
<style>
.v-btn--active::before {
  opacity: 0 !important;
}
</style>
