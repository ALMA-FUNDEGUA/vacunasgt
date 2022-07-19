<template>
  <section v-if="!loading">
    <!-- <template> -->
      <div class="mapa">
        <l-map :style="style" :zoom="zoom" :center="mapsLatLon(items[0])">
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
    <!-- </template> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  LMap,
  LMarker,
  LTileLayer,
  LControlLayers,
  LIcon,
  LPopup,
} from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import ListItemDesktop from '@/components/list/TestListItem.Desktop.vue'

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
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 10,
    iconUrl: 'http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png',
  }),

  beforeMount() {
    console.log(this.centers)
  },

  computed: {
    ...mapGetters('covidTestStore', ['loading', 'centers']),

    items() {
      console.log(this._centers.filter((item) => !!item.mapsLink))
      return this._centers.filter((item) => !!item.mapsLink)
    },

    style() {
      return {
        height: this.$vuetify.breakpoint.mdAndUp ? '555px' : '350px',
        width: '600px',
        'z-index': '0',
      }
    },
  },

  methods: {
    mapsLatLon(center) {
      const elements = center.maps.split('/')
      const location = elements[elements.length - 2].slice(1).split(',')
      return [location[0], location[1]]
    },
  },
}
</script>
