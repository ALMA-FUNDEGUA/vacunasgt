<template>
  <section>
    <section v-if="!popup">
      <v-card flat @click="onSelect(item.center)">
        <v-card-title class="pt-1 pb-0 px-0">
          <v-container fluid class="pb-0">
            <v-row dense>
              <v-col
                cols="11"
                class="font-weight-bold"
                style="word-break: break-word"
              >
                {{ item.center }}
              </v-col>

              <v-col cols="1">
                <v-icon>mdi-chevron-right</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>

        <v-card-text class="pb-0">
          <v-container fluid>
            <v-row dense>
              <v-col cols="1">
                <v-icon size=25 top>
                  mdi-clock-outline
                </v-icon>
              </v-col>

              <v-col cols="11" class="d-flex flex-column justify-end black--text text-left">
                <div>
                  <span v-if="item.tests.length > 0 && item.tests[0].simpleSchedule">
                    {{ item.tests[0].simpleSchedule }}
                    <br>
                  </span>

                  <span v-else>
                    Horario por confirmar
                    <br>
                  </span>
                </div>
              </v-col>

              <v-col cols="1">
                <v-icon size=25 top>
                  mdi-google-circles
                </v-icon>
              </v-col>

              <v-col cols="11" class="d-flex flex-column justify-end black--text text-left">
                <div v-if="item.tests.length > 0">
                  {{ item.tests.map(i => i.testType).join(', ') }}
                </div>
              </v-col>

              <v-col cols="1">
                <v-icon size=25 top>
                  mdi-cash
                </v-icon>
              </v-col>

              <v-col cols="11" class="d-flex flex-column justify-end black--text text-left">
                <span v-if="item.tests.length > 0 && item.tests[0].serviceType">
                  {{ item.tests[0].serviceType }}
                </span>

                <span v-else>
                  Tipo de servicio por confirmar
                </span>
              </v-col>

              <v-col cols="1">
                <v-icon size=25 top>
                  mdi-phone-outline
                </v-icon>
              </v-col>

              <v-col cols="11" class="d-flex flex-column justify-end black--text text-left">
                {{ item.phoneNumber !== 'N/A' ? item.phoneNumber : "Número por confirmar" }}
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </section>

    <section v-else>
      <v-card flat>
        <v-card-title
          class="pa-0 caption font-weight-bold"
          style="word-break: break-word"
        >
          Lugar: {{ item.center }}
        </v-card-title>

        <v-card-text class="pa-0">
          <v-container fluid class="px-0">
            <v-row dense>
              <v-col cols="12" v-if="item.tests.length > 0 && item.tests[0].specificSchedule">
                <v-icon small top> mdi-clock-outline </v-icon>

                <span class="caption">
                  {{ item.tests[0].specificSchedule }}
                </span>
              </v-col>

              <v-col cols="12">
                <v-icon small top> mdi-map-marker-outline </v-icon>

                <span class="caption">
                  {{ item.address }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="pa-0 justify-center">
          <v-btn
            text
            small
            class="text-decoration-underline font-weight-light no-uppercase"
            @click="onSelect(item.center)"
          >
            Ver mas información
          </v-btn>
        </v-card-actions>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
    },

    popup: {
      default: false,
      type: Boolean,
    },
  },

  methods: {
    onSelect(name) {
      this.$router.push({
        name: 'TestsCenterDetailView',
        params: {
          name: name,
        },
      })
    },

    getWeekSchedule(item) {
      let start = ''
      let end = ''

      if (item.days.monday) {
        start = 'Lun'
      } else if (item.days.tuesday) {
        start = 'Mar'
      }

      if (item.days.friday) {
        end = 'Vie'
      } else if (item.days.thursday) {
        end = 'Jue'
      }

      return `${start}-${end}.`
    },

    getSchedule(item) {
      let week = ''
      let weekend = ''

      if (item.schedule.week)
        week = `${this.getWeekSchedule(item)} ${item.schedule.week}`

      if (item.schedule.weekend) {
        if (item.days.saturday)
          weekend = `${weekend} | Sab. ${item.schedule.weekend}`

        if (item.days.sunday)
          weekend = `${weekend} | Dom. ${item.schedule.weekend}`
      }

      return `${week}${weekend}`
    },
  },
}
</script>
