<template>
  <section>
    <v-card flat @click="onSelect(item.name)">
      <v-card-title class="pt-1 pb-0 px-0">
        <v-container fluid class="pb-0">
          <v-row dense>
            <v-col cols="11" class="font-weight-bold">
              Lugar: {{ item.name }}
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

            <v-col cols="11">
              <span class="caption">
                {{ getSchedule(item) }}
              </span>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
    }
  },

  methods: {
    onSelect(name) {
      this.$router.push({
        name: 'CenterDetailView',
        params: {
          name: name,
        }
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
