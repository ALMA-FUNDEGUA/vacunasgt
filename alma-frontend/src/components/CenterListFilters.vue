<template>
  <section>
    <!-- <div v-if="$vuetify.breakpoint.mobile"> -->
    <div>
      <v-dialog
        v-model="filters"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <!--     <template #activator="{on, attrs}">
          <v-btn v-bind="attrs" v-on="on"
              fixed bottom right
              color="primary"
              dark rounded
              class="mb-4">
            <v-icon>mdi-tune-vertical</v-icon>
            <div class="mr-2"></div>
            Filtros
          </v-btn>
        </template>  -->

        <v-card>
          <v-toolbar color="primary" dark flat fixed class="rounded-0">
            <v-btn icon dark @click="filters = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <v-toolbar-title> Filtros </v-toolbar-title>
          </v-toolbar>

          <v-container>
            <v-select
              label="Departamento"
              v-model="department"
              :items="departments"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Municipio"
              v-model="municipality"
              :items="municipalities"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Vacuna"
              v-model="vaccine"
              :items="vaccines"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Grupo De Población"
              v-model="group"
              :items="groups"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <section class="mb-3">
              <span class="subtitle">Filtros Avanzados</span>
              <hr />
            </section>

            <v-select
              label="Dosis"
              v-model="dose"
              :items="doses"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Requisito"
              v-model="requirement"
              :items="requirements"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Afluencia"
              v-model="influx"
              :items="influxes"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>

            <v-select
              label="Ingreso"
              v-model="entrance"
              :items="entrances"
              clearable
              solo
              hide-details
              class="mb-3"
            ></v-select>
          </v-container>

          <v-row class="mt-3" justify="center">
            <v-btn rounded color="primary" @click="filters = false">
              Aplicar
            </v-btn>
          </v-row>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    filters: false,
  }),

  computed: {
    ...mapGetters({
      departments: "departments",
      municipalities: "municipalities",
      vaccines: "vaccines",
      groups: "groups",
      doses: "doses",
      requirements: "requirements",
      influxes: "influxes",
      entrances: "entrances",

      getDepartment: "department",
      getMunicipality: "municipality",
      getVaccine: "vaccine",
      getGroup: "group",
      getDose: "dose",
      getRequirement: "requirement",
      getInflux: "influx",
      getEntrance: "entrance",
    }),

    department: {
      get() {
        return this.getDepartment;
      },
      set(value) {
        this.setDepartment(value);
        this.setMunicipality(null);
        this.setVaccine(null);
        this.setDose(null);
        this.setGroup(null);
        this.setRequirement(null);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    municipality: {
      get() {
        return this.getMunicipality;
      },
      set(value) {
        this.setMunicipality(value);
        this.setVaccine(null);
        this.setDose(null);
        this.setGroup(null);
        this.setRequirement(null);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    vaccine: {
      get() {
        return this.getVaccine;
      },
      set(value) {
        this.setVaccine(value);
        this.setDose(null);
        this.setGroup(null);
        this.setRequirement(null);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    group: {
      get() {
        return this.getGroup;
      },
      set(value) {
        this.setGroup(value);
        this.setDose(null);
        this.setRequirement(null);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    dose: {
      get() {
        return this.getDose;
      },
      set(value) {
        this.setDose(value);
        this.setRequirement(null);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    requirement: {
      get() {
        return this.getRequirement;
      },
      set(value) {
        this.setRequirement(value);
        this.setInflux(null);
        this.setEntrance(null);
      },
    },

    influx: {
      get() {
        return this.getInflux;
      },
      set(value) {
        this.setInflux(value);
        this.setEntrance(null);
      },
    },

    entrance: {
      get() {
        return this.getEntrance;
      },
      set(value) {
        this.setEntrance(value);
      },
    },
  },

  methods: {
    ...mapMutations({
      setDepartment: "SET_DEPARTMENT",
      setMunicipality: "SET_MUNICIPALITY",
      setVaccine: "SET_VACCINE",
      setGroup: "SET_GROUP",
      setDose: "SET_DOSE",
      setRequirement: "SET_REQUIREMENT",
      setInflux: "SET_INFLUX",
      setEntrance: "SET_ENTRANCE",
    }),
  },
};
</script>
