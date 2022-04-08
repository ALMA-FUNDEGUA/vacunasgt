<template>
  <section>
    <v-card style="height: 100vh;">
      <v-app-bar flat color="#E4DFFF">
        <v-btn icon @click="$emit('close')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <div class="d-flex flex-column">
          <v-toolbar-title class="pl-0 font-weight-bold">
            {{ selected.name }}
          </v-toolbar-title>

          <!-- Add Update Feature -->
          <!-- <span class="caption">
            Ultima actualizacion de datos: 2 de diciembre 2021
          </span> -->
        </div>
      </v-app-bar>

      <v-list three-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              mdi-clock-outline
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Horario de Atencion
            </v-list-item-title>

            <v-list-item-subtitle
                v-if="selected.schedule.week"
                class="font-weight-medium">
              {{ getSchedule }} {{ selected.schedule.week }}
            </v-list-item-subtitle>

            <v-list-item-subtitle
                v-if="selected.schedule.weekend"
                class="font-weight-medium">
              Sab {{ selected.days.saturday ? selected.schedule.weekend : 'No disponible' }}
            </v-list-item-subtitle>

            <v-list-item-subtitle
                v-if="selected.schedule.weekend"
                class="font-weight-medium">
              Dom {{ selected.days.sunday ? selected.schedule.weekend : 'No disponible' }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              mdi-checkbox-marked-circle-outline
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Vacunas Disponibles
            </v-list-item-title>

            <v-list-item-subtitle
                v-for="(item, i) in formatedVaccines"
                :key="i">
              <span class="font-weight-bold">
                {{ item.vaccine }}:
              </span>

              <span class="font-weight-medium">
                {{ item.detail }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              mdi-map-marker-outline
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Direccion
            </v-list-item-title>

            <v-list-item-subtitle class="font-weight-medium">
              {{ selected.address }}
            </v-list-item-subtitle>

            <div>
              <v-btn color="#65CBF9" rounded
                  @click="openMaps">
                Abrir en Waze
              </v-btn>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>

      <section class="d-none">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>
                mdi-comment-text-multiple-outline
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                Comentarios
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text class="text-decoration-underline">
                Ver Todos (83)
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card color="#F3F3F3">
                <v-card-title class="caption" style="color: #989898;">
                  <span>Febrero 2, 2022</span>
                  <v-spacer></v-spacer>
                  <span>3:42pm</span>
                </v-card-title>

                <v-card-text class="pb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis aspernatur quis magni placeat incidunt rem accusantium fuga accusamus voluptas? Ipsa reiciendis nam iure. Libero voluptatem mollitia placeat repellat rerum?
                </v-card-text>

                <v-card-actions>
                  <v-btn text>
                    <span class="text-decoration-underline">
                      Ver Mas
                    </span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <v-btn color="#FFE6B7" rounded>
                Escribir Comentario
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-card>

    <v-card class="d-none">
      <v-container>
        <v-row>
          <v-btn icon @click="$emit('close')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-row>

        <v-row>
          <iframe
            width="100%"
            height="300"
            style="border:0"
            loading="lazy"
            :src="mapsSource">
          </iframe>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col>
            <v-card>
              <v-container fluid>
                <div class="d-flex flex-column">
                  <span class="primary--text text-subtitle-2">
                    {{ selected.name }}
                  </span>

                  <span class="secondary--text caption">
                    {{ selected.address }}
                  </span>
                </div>

                <div class="black--text">
                  <p class="mb-0 caption"
                      v-if="selected.schedule.week">
                    {{ getSchedule }} > {{ selected.schedule.week }}
                  </p>

                  <p class="mb-0 caption" v-if="selected.schedule.weekend">
                    Sábado > {{ selected.days.saturday ? selected.schedule.weekend : 'No disponible' }}
                    <br>
                    Domingo > {{ selected.days.sunday ? selected.schedule.weekend : 'No disponible' }}
                  </p>
                </div>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="py-0">
            <p class="primary--text mb-0">
              Vacunas Disponibles y Requisitos
            </p>

            <div v-for="(dosis, vaccine) in selected.vaccines"
                :key="`vaccine-${vaccine}`">
              <div v-for="(dosisData, doseName) in dosis"
                  :key="`vaccine-${vaccine}-dosis${doseName}`">
                <p class="mb-0 secondary--text subtitle-2">
                  {{ formatDose(doseName) }} {{ vaccine }}
                </p>

                <ul class="mb-2 pl-0 caption"
                    style="list-style-type: none;">
                  <li v-for="(r, i) in dosisData"
                      :key="`vaccine-${vaccine}-dosis${doseName}-requirement-${i}`">
                      <!-- Get group and requirements -->
                    <div v-if="r.available">
                      <v-icon x-small>
                        mdi-check
                      </v-icon>

                      {{ r.group }} con {{ r.requirement }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>

          <v-col cols="12" class="pb-0">
            <p class="primary--text mb-0">
              Más Información
            </p>

            <p class="caption"> <!-- Used new method to detect URLs -->
              <span v-html="replaceURLs( selected.observations )"></span>
            </p>
          </v-col>
        </v-row>
      </v-container>

      <div style="height: 8vh;"></div>

      <v-btn x-large color="primary"
          fixed bottom
          @click="openMaps"
          :style="{left: '50%', transform:'translateX(-50%)'}">
        ¡Abrir Mapa!
      </v-btn>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY
  }),

  computed: {
    ...mapGetters(['selected']),

    mapsLatLon() {
      const elements = this.selected.maps.split('/')
      const location = elements[elements.length - 2].slice(1).split(',')
      return `${location[0]},${location[1]}`
    },

    mapsSource() {
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}`
      // const mapCenter = `&center=${this.mapsLatLon}`
      const mapQuery = `&q=${this.selected.name}`
      return `${mapUrl}${mapQuery}`
    },

    getSchedule() {
      let start = ''
      let end = ''

      if (this.selected.days.monday) {
        start = 'Lun'
      } else if (this.selected.days.tuesday) {
        start = 'Mar'
      }

      if (this.selected.days.friday) {
        end = 'Vie'
      } else if (this.selected.days.thursday) {
        end = 'Jue'
      }

      return `${start} - ${end}`
    },

    formatedVaccines() {
      const vaccines = []

      Object.entries(this.selected.vaccines)
        .forEach(([vaccine, dose]) => {
          Object.entries(dose)
            .forEach(([doseKey, doseData]) => {
              doseData.forEach(req => {
                if (req.available) {
                  vaccines.push({
                    vaccine: vaccine,
                    detail: `${this.formatDose(doseKey)} / ${req.group}`
                  })
                }
              })
            })
        })

      return vaccines
    }
  },

  methods: {
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.selected.name}`);
    },

    formatDose(dose) {
      switch (dose) {
        case 'PRIMERA': return '1era'
        case 'SEGUNDA': return '2nda'
        default: return dose
      }
    },      // added method to replace URLs with clickable links
    replaceURLs(message) {
      if(!message) return;
    
      var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
      return message.replace(urlRegex, function (url) {
        var hyperlink = url;
        if (!hyperlink.match('^https?://')) {
          hyperlink = 'http://' + hyperlink;
        }
        return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
      });
    }
  }
}
</script>
