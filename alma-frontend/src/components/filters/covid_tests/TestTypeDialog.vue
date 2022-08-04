<template>
  <section>
    <v-text-field
      :value="getTestType"
      dense
      solo
      rounded
      flat
      hide-details
      readonly
      placeholder="Tipo de prueba"
      class="mr-3"
      @click="dialog = true"
      :background-color="dialog ? '#E4DFFF' : 'none'"
    ></v-text-field>

    <v-dialog v-model="dialog" max-width="670px">
      <v-card :class="{ 'filter-dialog-padding': $vuetify.breakpoint.mdAndUp }">
        <v-card-title>
          Tipo de prueba
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <section class="my-4">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="py-0"
                v-for="(type, i) in testTypes"
                :key="i"
              >
                <v-checkbox
                  v-model="testType"
                  :label="type.text"
                  :value="type.value"
                  color="#6751EE"
                  hide-details
                  class="mt-1"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            text
            @click="testType = null"
            class="no-uppercase text-decoration-underline"
          >
            Borrar
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            rounded
            elevation="0"
            color="#FFE6B7"
            class="no-uppercase"
            @click="dialog = false"
          >
            Aplicar Filtros
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    dialog: false,
  }),

  computed: {
    ...mapGetters('covidTestStore', {
      testTypes: 'testTypes',
      getTestType: 'testType',
    }),

    testType: {
      get() {
        return this.getTestType
      },

      set(value) {
        this.setTestType(value)
      },
    },
  },

  methods: {
    ...mapMutations('covidTestStore', {
      setTestType: 'SET_TEST_TYPE',
    }),
  },
}
</script>
