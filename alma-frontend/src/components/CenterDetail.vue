<template>
  <section>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon> mdi-clock-outline </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Horario de Atención
          </v-list-item-title>

          <v-list-item-subtitle
            v-if="selected.schedule.week"
            class="font-weight-medium"
          >
            {{ getSchedule }} {{ selected.schedule.week }}
          </v-list-item-subtitle>

          <v-list-item-subtitle
            v-if="selected.schedule.weekend"
            class="font-weight-medium"
          >
            Sab:
            {{
              selected.days.saturday
                ? selected.schedule.weekend
                : "No disponible"
            }}
          </v-list-item-subtitle>

          <v-list-item-subtitle
            v-if="selected.schedule.weekend"
            class="font-weight-medium"
          >
            Dom:
            {{
              selected.days.sunday ? selected.schedule.weekend : "No disponible"
            }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-avatar>
          <v-icon> mdi-checkbox-marked-circle-outline </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Vacunas Disponibles
          </v-list-item-title>

          <v-list-item-subtitle v-for="(item, i) in formatedVaccines" :key="i">
            <span class="font-weight-bold"> {{ item.vaccine }}: </span>

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
          <v-icon> mdi-map-marker-outline </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Dirección
          </v-list-item-title>

          <v-list-item-subtitle class="font-weight-medium">
            {{ selected.address }}
          </v-list-item-subtitle>

          <div>
            <v-btn color="#65CBF9" rounded class="mt-2 mb-2" @click="openMaps">
              Abrir en Waze
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn rounded @click="onShare" class="mb-2"> Compartir </v-btn>
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
            <v-icon> mdi-comment-text-multiple-outline </v-icon>
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
              <v-card-title class="caption" style="color: #989898">
                <span>Febrero 2, 2022</span>
                <v-spacer></v-spacer>
                <span>3:42pm</span>
              </v-card-title>

              <v-card-text class="pb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                debitis aspernatur quis magni placeat incidunt rem accusantium
                fuga accusamus voluptas? Ipsa reiciendis nam iure. Libero
                voluptatem mollitia placeat repellat rerum?
              </v-card-text>

              <v-card-actions>
                <v-btn text>
                  <span class="text-decoration-underline"> Ver Mas </span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <v-btn color="#FFE6B7" rounded> Escribir Comentario </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selected"]),

    getSchedule() {
      let start = "";
      let end = "";

      if (this.selected.days.monday) {
        start = "Lun";
      } else if (this.selected.days.tuesday) {
        start = "Mar";
      }

      if (this.selected.days.friday) {
        end = "Vie";
      } else if (this.selected.days.thursday) {
        end = "Jue";
      }

      return `${start} - ${end}:`;
    },

    formatedVaccines() {
      const vaccines = [];

      Object.entries(this.selected.vaccines).forEach(([vaccine, dose]) => {
        Object.entries(dose).forEach(([doseKey, doseData]) => {
          doseData.forEach((req) => {
            if (req.available) {
              vaccines.push({
                vaccine: vaccine,
                detail: `${this.formatDose(doseKey)} / ${req.group}`,
              });
            }
          });
        });
      });

      return vaccines;
    },
  },

  methods: {
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.selected.name}`);
    },

    formatDose(dose) {
      switch (dose) {
        case "PRIMERA":
          return "1era";
        case "SEGUNDA":
          return "2nda";
        case "TERCERA":
          return "3ra";
        case "CUARTA":
          return "4ta";
        default:
          return dose;
      }
    },

    async onShare() {
      if(navigator.canShare){
        await navigator.share({
          title: "VacunasGT Center",
          url: window.location.href,
        });
      }
      else{
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('URL copiado');
        } catch($e) {
          alert('No se pudo copiar el URL');
        }
      }
    },
  },
};
</script>
