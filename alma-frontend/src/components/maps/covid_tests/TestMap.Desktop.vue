<template>
  <section>
    <template>
      <section v-if="!hasMap || hasMap == null">
        <img
          style="height: 500px; width: 600px; z-index: 100"
          :src="require('@/assets/images/mapNotFound.svg')"
        />
      </section>
      <section v-else>
        <l-map
          style="height: 500px; width: 600px; z-index: 0"
          v-model="zoom"
          :zoom="zoom"
          :center="locations"
          @move="log('move')"
        >
          >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="locations">
            <l-icon :icon-url="iconUrl"
          /></l-marker>

          <l-control-layers />
        </l-map>
      </section>
    </template>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import "leaflet/dist/leaflet.css";

import { LMap, LMarker, LTileLayer, LControlLayers, LIcon } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LControlLayers,
    LIcon,
  },

  data: () => ({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 15,
    iconUrl: "http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [100, 100],
  }),

  computed: {
    ...mapGetters('covidTestStore', ["selected"]),

    hasMap() {
      return this.selected.mapsLink && this.selected.mapsLink.length;
    },

    locations() {
      return this.mapsLatLon({
        maps: this.selected.mapsLink
      });
    },
  },

  methods: {
    ...mapMutations('covidTestStore', {
      setSelected: "SET_SELECTED",
    }),

    mapsLatLon(center) {
      const elements = center.maps.split("/");
      const location = elements[elements.length - 2].slice(1).split(",");
      return [location[0], location[1]];
    },
  },
};
</script>
