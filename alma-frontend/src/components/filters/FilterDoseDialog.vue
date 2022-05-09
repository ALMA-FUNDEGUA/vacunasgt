<template>
  <section>
    <v-text-field
      :value="getDose"
      dense solo rounded flat
      hide-details readonly
      placeholder="Dosis"
      class="mr-3"
      @click="dialog = true"
    ></v-text-field>

    <v-dialog v-model="dialog" max-width="670px">
      <v-card class="filter-dialog-padding">
        <v-card-title>
          Dosis
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <section class="my-4">
          <v-radio-group v-model="dose">
            <v-container>
              <v-row>
                <v-col cols="12"
                    v-for="(dose, i) in doses" :key="i"
                    class="pb-0">
                  <v-radio
                    :label="dose.text"
                    :value="dose.value"
                    color="#6751EE"
                  ></v-radio>
                </v-col>
              </v-row>
            </v-container>
          </v-radio-group>
        </section>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="dose = null"
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
      'doses': 'doses',
      'getDose': 'dose',
    }),

    dose: {
      get() {
        return this.getDose
      },

      set(value) { 
        this.setDose(value)
      },
    },
  },

  methods: {
    ...mapMutations({
      'setDose': 'SET_DOSE',
    }),
  }
}
</script>
