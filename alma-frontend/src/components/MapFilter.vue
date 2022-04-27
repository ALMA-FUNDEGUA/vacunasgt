<template>
  <section>
    <template>
      <div class="mapa">
        <l-map
          style="height: 500px; width: 600px; z-index: 0"
          :zoom="zoom"
          :center="[14.4818156, -90.5351601]"
        >
          <l-tile-layer :url="url"></l-tile-layer>

          <l-marker
            v-for="(item, i) in items"
            :key="`item-marker-${i}`"
            :lat-lng="mapsLatLon(item)"
          >
            <l-icon :icon-url="iconUrl" />

            <l-popup>
              <list-item-desktop :item="item" popup></list-item-desktop>

              <span class="white--text d-none">
                -------------------------------------------------------
              </span>
            </l-popup>
          </l-marker>

          <l-control-layers />
        </l-map>
      </div>
    </template>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import {
  LMap,
  LMarker,
  LTileLayer,
  LControlLayers,
  LIcon,
  LPopup,
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

import ListItemDesktop from "@/components/list/ListItem.Desktop.vue";

export default {
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LControlLayers,
    LIcon,
    LPopup,

    ListItemDesktop,
  },

  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 9,
    iconUrl: "http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
  }),

  computed: {
    ...mapGetters({
      _centers: "filtered",
    }),

    items() {
      return this._centers.filter((item) => !!item.maps);
    },
  },

  methods: {
    mapsLatLon(center) {
      const elements = center.maps.split("/");
      const location = elements[elements.length - 2].slice(1).split(",");
      return [location[0], location[1]];
    },
  },
};
</script>
