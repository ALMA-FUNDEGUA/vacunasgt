<template>
  <section>
    <v-list two-line>
      <item-schedule :item="item"></item-schedule>
      <v-divider></v-divider>

      <item-vaccines :item="item"></item-vaccines>
      <v-divider></v-divider>

      <item-address :item="item"></item-address>
      <v-divider></v-divider>

      <item-observations :item="item"></item-observations>
      <v-divider></v-divider>
    </v-list>

    <!-- <section class="d-none">
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
    </section> -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import ItemSchedule from './detail/ItemSchedule.vue';
import ItemVaccines from './detail/ItemVaccines.vue';
import ItemAddress from './detail/ItemAddress.vue';
import ItemObservations from './detail/ItemObservations.vue';

export default {
  components: {
    ItemSchedule,
    ItemVaccines,
    ItemAddress,
    ItemObservations,
  },

  computed: {
    ...mapGetters({
      item: 'selected',
    }),
  },
};
</script>
