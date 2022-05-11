<template>
  <section>
    <v-text-field
      :value="getVaccine"
      dense solo rounded flat
      hide-details readonly
      placeholder="Vacuna"
      class="mr-3"
      @click="dialog = true"
      :background-color="dialog ? '#E4DFFF' : 'none'"
    ></v-text-field>

    <v-dialog v-model="dialog" max-width="670px">
      <v-card :class="{'filter-dialog-padding': $vuetify.breakpoint.mdAndUp}">
        <v-card-title>
          Vacunas
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <section class="my-4">
          <v-radio-group v-model="vaccine">
            <v-container>
              <v-row>
                <v-col cols="12"
                    v-for="(vaccine, i) in vaccines" :key="i"
                    class="pb-0">
                  <v-radio
                    :label="vaccine.text"
                    :value="vaccine.value"
                    color="#6751EE"
                  ></v-radio>
                </v-col>
              </v-row>
            </v-container>
          </v-radio-group>
        </section>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="vaccine = null"
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
    ...mapGetters({
      'vaccines': 'vaccines',
      'getVaccine': 'vaccine',
    }),

    vaccine: {
      get() {
        return this.getVaccine
      },

      set(value) {
        this.setVaccine(value)
      },
    },
  },

  methods: {
    ...mapMutations({
      'setVaccine': 'SET_VACCINE',
    }),
  }
}
</script>
