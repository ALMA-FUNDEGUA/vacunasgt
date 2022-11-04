<template>
  <section>
    <v-text-field
      :value="getServiceType"
      dense solo rounded flat
      hide-details readonly
      placeholder="Precio de Prueba"
      class="mr-3 selected"
      @click="dialog = true"
      :background-color="dialog ? '#E4DFFF' : 'none'"
    ></v-text-field>

    <v-dialog v-model="dialog" max-width="670px">
      <v-card :class="{'filter-dialog-padding': $vuetify.breakpoint.mdAndUp}">
        <v-card-title>
          Precio de Prueba

          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <section class="my-4">
          <v-radio-group v-model="serviceType">
            <v-container>
              <v-row>
                <v-col cols="12"
                    v-for="(type, i) in serviceTypes" :key="i"
                    class="pb-0">
                  <v-radio
                    :label="type.text"
                    :value="type.value"
                    color="#6751EE"
                  ></v-radio>
                </v-col>
              </v-row>
            </v-container>
          </v-radio-group>
        </section>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="serviceType = null"
              class="no-uppercase text-decoration-underline">
            Borrar
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn rounded elevation="0"
              color="#FFE6B7"
              class="no-uppercase"
              @click="dialog = false">
            Aplicar Filtros
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    dialog: false,
  }),

  computed: {
    ...mapGetters('covidTestStore', {
      'serviceTypes': 'serviceTypes',
      'getServiceType': 'serviceType',
    }),

    serviceType: {
      get() {
        return this.getServiceType
      },

      set(value) { 
        this.setServiceType(value)
      },
    },
  },

  methods: {
    ...mapMutations('covidTestStore', {
      'setServiceType': 'SET_SERVICE_TYPE',
    }),
  }
}
</script>
