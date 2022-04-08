<template>
  <section>
    <v-app-bar flat color="#E4DFFF">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <div class="d-flex flex-column">
        <v-toolbar-title class="pl-0 font-weight-bold">
          Arena y Sol
        </v-toolbar-title>

        <span class="caption">
          Ultima actualizacion de datos: 2 de diciembre 2021
        </span>
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

          <v-list-item-subtitle class="font-weight-medium">
            Lun-Vie 09:00am - 06:30pm
          </v-list-item-subtitle>

          <v-list-item-subtitle class="font-weight-medium">
            Sab-Dom 10:00am - 01:00pm
          </v-list-item-subtitle>

          <v-list-item-subtitle class="font-weight-medium">
            Sab-Dom 01:00pm - 06:30pm
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

          <v-list-item-subtitle>
            <span class="font-weight-bold">
              Pfizer:
            </span>

            <span class="font-weight-medium">
              3ra dosis / a 2da dosis administrada
            </span>
          </v-list-item-subtitle>

          <v-list-item-subtitle>
            <span class="font-weight-bold">
              Pfizer:
            </span>

            <span class="font-weight-medium">
              3ra dosis / 12 a 17 años
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
            4ta avenida 5-17, Zona 5 Colonia Arena y Sol
          </v-list-item-subtitle>

          <div>
            <v-btn color="#65CBF9" rounded>
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

    <section>
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
  </section>
</template>
