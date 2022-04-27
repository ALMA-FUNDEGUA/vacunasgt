<template>
  <section>
    <l-map style="height: 750px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng">
          <l-icon :icon-url="iconUrl"></l-icon>
          <l-popup>
            <v-card flat>
              <v-card-title class="pa-0">
                Hello World!
              </v-card-title>

              <v-card-text></v-card-text>
            </v-card>

            <span class="white--text">
              -------------------------------------------
            </span>
          </l-popup>
        </l-marker>
    </l-map>
  </section>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet';
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },

  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 15,
    center: [51.505, -0.159],
    markerLatLng: [51.504, -0.159],
    iconUrl: "http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",

    menu: true,
  }),
}
</script>
