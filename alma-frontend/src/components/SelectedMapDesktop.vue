<template>
  <section>
    <template>
      <section v-if="!hasMap">
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

  ngAfterViewChecked: () => {
    this.map.invalidateSize(true);
    this.map.center = this.center;
  },

  data: () => ({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 15,
    iconUrl: "http://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [100, 100],
  }),

  computed: {
    ...mapGetters(["selected"]),

    hasMap() {
      return this.selected.maps.length;
    },

    locations() {
      console.log(this.selected);
      console.log(this.mapsLatLon(this.selected));

      return this.mapsLatLon(this.selected);
    },

    department: {
      get() {
        return this.getDepartment;
      },
    },

    municipality: {
      get() {
        return this.getMunicipality;
      },
    },

    vaccine: {
      get() {
        return this.getVaccine;
      },
    },

    group: {
      get() {
        return this.getGroup;
      },
    },

    dose: {
      get() {
        return this.getDose;
      },
    },

    requirement: {
      get() {
        return this.getRequirement;
      },
    },

    influx: {
      get() {
        return this.getInflux;
      },
    },

    entrance: {
      get() {
        return this.getEntrance;
      },
    },

    centers() {
      return this._centers.filter((center) => {
        switch (this.schedule) {
          case "week":
            return !!center.schedule.week;

          case "weekend":
            return !!center.schedule.weekend;

          default:
            return true;
        }
      });
    },
  },

  methods: {
    ...mapMutations({
      setSelected: "SET_SELECTED",
    }),

    formatDose(dose) {
      switch (dose) {
        case dose.match(/AGOTADA/)?.input:
          return "Agotada";
        case "PRIMERA":
          return "1era";
        case "SEGUNDA":
          return "2nda";
        case "TERCERA":
          return "3era";
        case "CUARTA":
          return "4ta";
        default:
          return dose;
      }
      /* const mapper = ([key,]) => {
        switch (key) {
          case 'PRIMERA': return '1era'
          case 'SEGUNDA': return '2nda'
          default: return key
        }
      }

      const formatted = Object.entries(dose).map(mapper).toString()
      return formatted */
    },

    mapsLatLon(center) {
      const elements = center.maps.split("/");
      const location = elements[elements.length - 2].slice(1).split(",");
      return [location[0], location[1]];
    },

    onSelect(name) {
      this.setSelected(name);
      this.detail = true;
    },

    moveToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.center-list-view {
  color: white !important;
  background-color: #4f4a88 !important;
}

.center-list-content {
  color: #4f4a88 !important;
  background-color: rgb(245, 245, 245) !important;
}
</style>
