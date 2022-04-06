<template>

    <v-card
        
        flat
        class="text-center">
    
    <!-- Top bar -->
    <v-toolbar
      flat
      color=#E4DFFF
    >
    <v-btn
          icon
          large
        >
          <v-icon>
            mdi-chevron-left
          </v-icon>
        </v-btn>
      
      <span style="font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;">Vacunas</span>
    <v-spacer/>
        <v-btn
          icon
        >
          <v-icon @click="resetCase">
            mdi-filter-variant
          </v-icon>
        </v-btn>

        <span style="font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;">
          Filtros
        </span>
    </v-toolbar>
    <!-- Top bar end -->


    <!-- Filter chips -->
    <v-container>  
      <template>
        <div class="text-center">

          <v-chip
            class="ma-2"
            color="primary"
            v-if="department != null"
          >
            {{department}}
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            v-if="municipality != null"
          >
            {{municipality}}
          </v-chip>

          <!-- Test chip -->
          <v-chip
            class="ma-2"
            color=#CDC4FF
            outlined
            @click="doNothing"
          >
          <span style = "font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            color: black;"
          >
            {{vaccine}}Pfizer
          </span>
          <v-divider inset color=#CDC4FF vertical class="mx-2"></v-divider>
          <v-icon color="black">
            mdi-chevron-down
          </v-icon>
          </v-chip>
          <!-- Test chip end -->

          <v-chip
            class="ma-2"
            color="primary"
            v-if="group != null"
          >
            {{group}}
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            v-if="dose != null"
          >
            {{dose}}
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            v-if="requirement != null"
          >
            {{requirement}}
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            v-if="influx != null"
          >
            {{influx}}
          </v-chip>

          <v-chip
            class="ma-2"
            color="primary"
            v-if="entrance != null"
          >
            {{entrance}}
          </v-chip>
  
        </div>
      </template>
    </v-container>
    <!-- End filter chips-->


    <!-- Map placeholder -->
    <v-img src="@/assets/images/home-image.png">
    </v-img>


    <!-- Title and cards for centers -->

    <!-- Title -->
    <v-card-title style="font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;"
            class="justify-center"
    >
      Resultados (X)
    </v-card-title>
    <v-divider></v-divider>
    <!-- <v-spacer/> -->
    
    <!-- Vaccine center card -->
            <v-card>
            <!-- <v-expansion-panel> -->
              <v-card-title style="font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;"
              class="subtitile-padding:2px"
              >
                Lugar
                <v-spacer/>
                <v-icon large color=#A698FF>
            mdi-chevron-right
          </v-icon>
              </v-card-title>             
              <v-card-subtitle class="pb-1" style="text-align:left"> 
                Ultima actualización:
              </v-card-subtitle>
              <v-card-text style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
text-align: left;
color: #000000">
                Horario
                <br>
                Direccion
              </v-card-text>
            </v-card>
            <!-- End vaccine center card -->

            <!-- Second card for testing -->
            <v-card>
              <v-card-title style="font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;">
                Lugar
              <v-spacer/>
                <v-icon large color=#A698FF>
            mdi-chevron-right
          </v-icon>
              </v-card-title>
              <v-card-subtitle class="pb-1" style="text-align:left"> 
                Ultima actualización:
              </v-card-subtitle>
              <v-card-text style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
text-align: left;
color: #000000">
                Horario
                <br>
                Direccion
              </v-card-text>
            </v-card>

          <!-- Bottom navigation bar -->

          <v-bottom-navigation horizontal grow height=70 background-color=#E4DFFF>

      <v-btn text>
        <v-col
    cols="12"
  >
    <v-row
      style="place-content: center;"
    >
      <v-icon large color=#A698FF
      >
        mdi-home
      </v-icon>
    </v-row>
    <v-row
      style="place-content: center"
    >
      <span
        style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 22px;
color: #A698FF;"
      >
        Inicio
      </span>
    </v-row>
  </v-col>
      </v-btn>

      <v-btn text>
        <v-col
    cols="12"
  >
    <v-row
      style="place-content: center;"
    >
      <v-icon large color=#A698FF
      >
        mdi-needle
      </v-icon>
    </v-row>
    <v-row
      style="place-content: center"
    >
      <span
        style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 22px;
color: #A698FF;"
      >
        Vacunas
      </span>
    </v-row>
  </v-col>
      </v-btn>

      <v-btn text>
        <v-col
    cols="12"
  >
    <v-row
      style="place-content: center;"
    >
      <v-icon large color=#A698FF
      >
        mdi-account-box
      </v-icon>
    </v-row>
    <v-row
      style="place-content: center"
    >
      <span
        style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 22px;
color: #A698FF;"
      >
        Directorio
      </span>
    </v-row>
  </v-col>
      </v-btn>

      <v-btn text>
        <v-col
    cols="12"
  >
    <v-row
      style="place-content: center;"
    >
      <v-icon large color=#A698FF
      >
        mdi-help-circle
      </v-icon>
    </v-row>
    <v-row
      style="place-content: center"
    >
      <span
        style="font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 22px;
color: #A698FF;"
      >
        Preguntas
      </span>
    </v-row>
  </v-col>
      </v-btn>

          </v-bottom-navigation>


    </v-card>

    
  <!-- </header> -->
</template>