<template>
  <section>
    <v-container>
      <v-row>
        <v-col>
          <v-btn text class="no-uppercase"
              @click="setData">
            Generate Data
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="(i1, k1) in data" :key="k1" cols="12">
          <div v-for="(i2, k2) in i1" :key="`${k1}-${k2}`">
            <div v-for="(i3, k3) in i2" :key="`${k1}-${k2}-${k3}`"
                class="mb-5">
              <p class="mb-0 font-weight-bold">
                {{ k1 }}
              </p>

              <p class="mb-0 font-weight-bold">
                {{ formatDose(k2) }}
              </p>

              <p class="mb-2 font-weight-bold">
                {{ k3 }}
              </p>

              <div v-for="(i4, k4) in i3" :key="`${k1}-${k2}-${k3}-${k4}`">
                <span class="caption">
                  {{ i4 }}
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>  
</template>

<script>
import * as _ from 'lodash';

import { mapGetters } from 'vuex';

export default {
  data: () => ({
    data: {}
  }),

  beforeMount() {
    this.setData()
  },

  computed: {
    ...mapGetters(['centers'])
  },

  methods: {
    setData() {
      this.data = this.generate()
    },

    generate() {
      const OrderDoseCondition = {
        'PRIMERA': 0,
        'SEGUNDA': 1,
        'TERCERA': 3,
        'CUARTA': 4,
        'REFUERZO': 5,
        'CERRADO HOY': 4,
      }

      return _.chain(this.centers)
        .filter(item => !!item.schedule.week)
        .map(item => ({
          name: item.name,
          vaccines: item['vaccines'],
        }))
        .map(item => Object.keys(item.vaccines)
            .map(v => ({
              name: item.name,
              vaccine: v,
              doses: item.vaccines[v]
            }))
        ).flattenDepth(2)
        .map(item => Object.keys(item.doses)
            .sort((a, b) => OrderDoseCondition[a] - OrderDoseCondition[b])
            .map(d => ({
              name: item.name,
              vaccine: item.vaccine,
              dose: d,
              requirements: item.doses[d]
            }))
        ).flattenDepth(2)
        .map(item => item.requirements
            .map(req => ({
              name: item.name,
              vaccine: item.vaccine,
              dose: item.dose,
              group: req.group,
            }))
        ).flattenDepth(2)
        .groupBy('vaccine')
        .mapValues(items => _.chain(items)
            .groupBy('dose')
            .omit(['CERRADO HOY'])
            .mapValues(items => _.chain(items)
                .groupBy('group')
                .mapValues(items => items.map(i => i.name))
                .value()
            ).value()
        ).value()
    },

    formatDose(dose) {
      switch (dose) {
        case "PRIMERA": return "1era Dosis";
        case "SEGUNDA": return "2nda Dosis";
        case "TERCERA": return "3ra Dosis";
        case "CUARTA": return "4ta Dosis";
        default: return dose;
      }
    }
  }
}
</script>
