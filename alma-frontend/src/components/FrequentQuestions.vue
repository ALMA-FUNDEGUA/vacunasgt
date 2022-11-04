<template>
  <v-container>
    <!-- <v-row justify="center"> -->
    <!-- <v-col cols="7"> -->
    <p
      class="text-center"
      style="
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        color: #3e3e3e;
        margin-top: 5%;
      "
    >
      ¡Lee lo que otras personas nos preguntan!
    </p>
    <!-- </v-col> -->
    <!-- </v-row> -->

    <v-row justify="center">
      <!-- <v-col cols="7"> -->
      <!-- <ul> -->
      <v-col>
        <v-expansion-panels v-model="panel" :active-class="activeClass">
          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
            <v-expansion-panel-header style="font-weight: bold">
              ¿Qué es COVID-19?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="paragraph text-justify">
              <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
              COVID-19 es el nombre de la enfermedad causada por el virus
              coronavirus conocido como SARS-CoV-2. SARS por sus siglas en
              inglés, se refiere al síndrome respiratorio agudo severo. En 2003
              se identificó por primera vez un brote de SARS-CoV-1, una
              enfermedad parecida a influenza pero con una gran capacidad
              infectar a las personas. Originalmente el virus infecta animales,
              como murciélagos. Debido a cambios en los genes del virus, han
              aparecido nuevas variantes que afectan humanos. El SARS-CoV-2 es
              un nuevo coronavirus, que causa la enfermedad conocida como
              COVID-19, descubierta el 31 de diciembre de 2019 en China.
              <p></p>
              <p>Referencias:</p>
              <p>
                Organización Mundial de la Salud. (2020). Información básica
                sobre la COVID-19. en:
                <a
                  href="https://www.who.int/es/news-room/questions-and-answers/item/coronavirus-disease-covid-19"
                  target="_blank"
                >
                  https://www.who.int/es/news-room/questions-and-answers/item/coronavirus-disease-covid-19</a
                >

                [Con acceso el 08 de marzo de 2022].
              </p>
              <p>
                Síndrome respiratorio agudo severo SARS. en:
                <a
                  href="https://www.who.int/health-topics/severe-acute-respiratory-syndrome#tab=tab_1"
                  target="_blank"
                >
                  https://www.who.int/health-topics/severe-acute-respiratory-syndrome#tab=tab_1</a
                >

                [Con acceso el 08 de marzo de 2022].
              </p>

              <!-- </a> -->
            </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
            <v-expansion-panel-header style="font-weight: bold">
              ¿COVID-19 largo?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="paragraph text-justify">
              <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
              <p>
                Aunque la mayoría de las personas con COVID-19 mejora después de
                unas semanas de haber estado enfermos, algunas personas
                experimentan una variedad de problemas de salud, que no
                desaparecen o nuevos por cuatro semanas o más después de haberse
                infectado por primera vez por el virus que causa el COVID-19.
                Pueden presentarse como diferentes tipos y combinaciones de
                problemas de salud por diferentes periodos. A estos síntomas se
                les llama afecciones posteriores al COVID-19. Incluso las
                personas que no tuvieron síntomas de COVID-19 en los días o
                semanas después de haberse infectado pueden experimentar
                afecciones posteriores al COVID-19.
              </p>

              <p>
                Las afecciones posteriores al COVID-19 también pueden conocerse
                como COVID-19 persistente, COVID-19 de larga duración, COVID-19
                postagudo, efectos a largo plazo del COVID-19 o COVID-19
                crónico.
              </p>

              <p>
                A diferencia de algunos de los síntomas después de tener
                COVID-19 que solo suelen ocurrir en personas que se enfermaron
                gravemente, estos síntomas pueden presentarse en cualquier
                persona que haya tenido COVID-19, incluso si la enfermedad fue
                leve, o si no tuvieron síntomas iniciales. Las personas
                comúnmente notifican combinaciones de los siguientes síntomas:
              </p>

              <ul>
                <li>Dificultad para respirar o falta de aire</li>
                <li>Cansancio o fatiga</li>
                <li>
                  Síntomas que empeoran luego de realizar actividades físicas o
                  mentales (también conocidos como malestar general posesfuerzo)
                </li>
                <li>
                  Dificultad para pensar o concentrarse (conocida como "neblina
                  mental")
                </li>
                <li>Tos</li>
                <li>Dolor en el pecho o en el estómago</li>
                <li>Dolor de cabeza</li>
                <li>
                  Corazón que late rápido o muy fuerte (conocido como
                  palpitaciones)
                </li>
                <li>Dolor muscular o en las articulaciones</li>
                <li>Sensación de hormigueo</li>
                <li>Diarrea</li>
                <li>Problemas para dormir</li>
                <li>Fiebre</li>
                <li>Mareos (vértigo) al ponerse de pie</li>
                <li>Sarpullido (ronchas o alergia)</li>
                <li>Cambios en el estado de ánimo</li>
                <li>Cambios del gusto o el olfato</li>
                <li>Cambios en los ciclos del periodo menstrual</li>
              </ul>
              <p></p>

              <p>
                La mejor forma de prevenir el COVID-19 largo, es evitar contraer
                COVID-19. Para quienes cumplen los requisitos, vacunarse contra
                el COVID-19 lo antes posible es la mejor manera de evitar
                contraer COVID-19 y también puede ayudar a proteger a quienes lo
                rodean.
              </p>
              <p>Referencias:</p>
              <p>
                Centros para el control y la prevención de enfermedades. (2022).
                COVID-19 largo . En:

                <a
                  href="https://espanol.cdc.gov/coronavirus/2019-ncov/long-term-effects/index.html"
                  target="_blank"
                >
                  https://espanol.cdc.gov/coronavirus/2019-ncov/long-term-effects/index.html.</a
                >

                [Con acceso el 12 de abril de 2022].
              </p>

              <!-- </a> -->
            </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
            <v-expansion-panel-header
              style="font-weight: bold; line-height: 1.5"
            >
              ¿Requisitos para segundo refuerzo?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="paragraph text-justify">
              <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
              <p>
                Las personas que tienen un esquema primario de Sputnik y que
                tengan un primer refuerzo de AstraZeneca, Moderna o Pfizer, ya
                pueden acudir al centro de vacunación de Cayala, dónde están
                administrando un segundo refuerzo a personas que van a viajar.
                Los requisitos son: cumplir 4 meses desde que se colocó el
                primer refuerzo y llevar una copia del boleto de viaje. Se
                estarán colocando las vacunas AstraZeneca, Moderna y Pfizer.
              </p>

              <p>
                A nivel nacional, en todos los establecimientos de salud y el
                IGSS, además de otros centros de vacunación están habilitados
                para vacunar a la población.
              </p>

              <p>Población que será vacunada con un segundo refuerzo:</p>

              <ul>
                <li>
                  Personas de 12 a 17 años con inmunosupresión y enfermedades
                  crónicas (cuarta dosis de Moderna o Pfizer, 4 meses después a
                  la dosis adicional).
                </li>
                <li>
                  Personas de 18 años o más con inmunosupresión y enfermedades
                  crónicas (Moderna, Pfizer o AstraZeneca, 4 meses posterior a
                  la dosis adicional).
                </li>
                <li>
                  Adultos de 50 años o más (Moderna, Pfizer o AstraZeneca, 4
                  meses después de la primera dosis de refuerzo)
                </li>
                <li>
                  Trabajadores de salud (Moderna, Pfizer o AstraZeneca, 4 meses
                  después de la primera dosis de refuerzo)
                </li>
              </ul>
              <p>
                *Aplica para extranjeros que hayan recibido una dosis de
                refuerzo en Guatemala y que estén registrados en el sistema.
              </p>
              <p>
                Factores de riesgo de Inmunosupresión y enfermedades crónicas.
              </p>
              <ul>
                <li>
                  Tratamiento activo de tumores sólidos y neoplasias
                  hematológicas.
                </li>
                <li>
                  Enfermedad renal crónica con terapia de reemplazo renal y
                  diálisis.
                </li>
                <li>
                  Recepción de trasplante de órgano sólido y tratamiento
                  inmunosupresor.
                </li>
                <li>Inmunodeficiencia primaria moderada o grave.</li>
                <li>Infección por VIH</li>
                <li>
                  Tratamiento activo con corticosteroides en dosis altas,
                  agentes alquilantes, antimetabolitos, fármacos
                  inmunosupresores relacionados con el trasplante, agentes
                  quimioterapéuticos contra el cáncer, inhibidores del factor de
                  necrosis tumoral y otros biológicos que son inmunosupresores o
                  inmunomoduladores.
                </li>
                <li>Hipertensión arterial que requiere medicamentos.</li>
                <li>Diabetes mellitus.</li>
                <li>Enfermedad pulmonar crónica.</li>
                <li>Enfermedad renal crónica.</li>
                <li>Enfermedad cardiovascular y cerebrovascular.</li>
                <li>Obesidad (índice de masa corporal mayor o igual de 30).</li>
              </ul>

              <p>
                En Guatemala todavía no se tiene la autorización para
                administrar una segunda dosis de refuerzo (cuarta dosis de
                vacuna) para la población en general.
              </p>
              <p>Referencias:</p>
              <p>
                MSPAS. (2022). Cuarta dosis. en:
                <a
                  href="https://mspas.gob.gt/descargas-mspas?task=download.send&id=2933&catid=606&m=0"
                  target="_blank"
                  >https://mspas.gob.gt/descargas-mspas?task=download.send&id=2933&catid=606&m=0</a
                >

                [Con acceso el 08 de abril de 2022].
              </p>
              <!-- </a> -->
            </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
            <v-expansion-panel-header style="font-weight: bold">
              ¿Vacuna contra Hepatitis B?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="paragraph text-justify">
              <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
              <p><b> 1) ¿Qué previene?</b></p>

              <p>
                La vacuna contra la Hepatitis B previene de la infección por el
                virus de la hepatitis B y evita el desarrollo de complicaciones,
                como enfermedades crónicas y cáncer de hígado.
              </p>

              <p>Fue la primera vacuna para prevenir el cáncer.</p>

              <p><b>2) ¿Cuándo debe administrarse?</b></p>
              <p><b> MSPAS:</b></p>

              <ul>
                <li>
                  La administración es a las 24 horas de vida, o lo antes
                  posible, antes de cumplir un mes de edad.
                </li>
              </ul>
              <p></p>
              <p><b> IGSS:</b></p>

              <ul>
                <li>Se administra una dosis a los recién nacidos.</li>
                <li>
                  Para el adulto mayor y población en riesgo (personal de salud,
                  enfermos crónicos e inmunocomprometidos) , se administran 3
                  dosis. La segunda 1 mes después de la primera. La tercera, 5
                  meses después de la segunda.
                </li>
              </ul>

              <p></p>
              <p><b>3) ¿Cuáles son los efectos secundarios?</b></p>
              <p>
                Los efectos secundarios más comunes de la vacuna contra la
                hepatitis B son leves e incluyen:
              </p>
              <ul>
                <li>Fiebre baja</li>
                <li>Dolor en el brazo por la inyección</li>
              </ul>

              <p></p>
              <p>Referencias:</p>

              <p>
                Organización Panamericana de la Salud. (2021). Hepatitis B. En:
                <a
                  href="https://www.paho.org/es/tag/vacunas-contra-hepatitis"
                  target="_blank"
                  >https://www.paho.org/es/tag/vacunas-contra-hepatitis</a
                >
                . [Con acceso el 25 de abril de 2022].
              </p>

              <p>
                Centros para el control y la prevención de enfermedades. (2021).
                Hepatitis B. En:
                <a
                  href="https://www.cdc.gov/vaccines/parents/diseases/hepb-sp.html"
                  target="_blank"
                >
                  https://www.cdc.gov/vaccines/parents/diseases/hepb-sp.html</a
                >
                . [Con acceso el 25 de abril de 2022].
              </p>

              <p>
                IGSS. (2020). Esquema de vacunación. en:
                <a
                  href="https://www.igssgt.org/wp-content/uploads/2020/09/esquema-de-vacunas-IGSS.pdf"
                  target="_blank"
                >
                  https://www.igssgt.org/wp-content/uploads/2020/09/esquema-de-vacunas-IGSS.pdf</a
                >

                [Con acceso el 28 de abril de 2022].
              </p>

              <p>
                SIGSA. (2018). Esquema de vacunación MSPAS. En:
                <a
                  href="https://sigsa.mspas.gob.gt/component/jdownloads/send/14-sigsa-web/93-sigsa-17-carne-otros-grupos?option=com_jdownloads"
                  target="_blank"
                >
                  https://sigsa.mspas.gob.gt/component/jdownloads/send/14-sigsa-web/93-sigsa-17-carne-otros-grupos?option=com_jdownloads</a
                >

                [Con acceso el 2 de mayo de 2022].
              </p>

              <p>
                MSPAS. (2021). Esquema de vacunación MSPAS. En:
                <a
                  href="https://prensa.gob.gt/comunicado/programa-vacunacion-integral-para-toda-la-familia"
                  target="_blank"
                >
                  https://prensa.gob.gt/comunicado/programa-vacunacion-integral-para-toda-la-familia</a
                >

                [Con acceso el 2 de mayo de 2022].
              </p>

              <!-- </a> -->
            </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
            <v-expansion-panel-header style="font-weight: bold">
              ¿A qué edad se pone la vacuna del VPH?
            </v-expansion-panel-header>
            <v-expansion-panel-content class="paragraph text-justify">
              <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
              <p>Sobre la vacuna contra el virus del papiloma humano (VPH)</p>

              <p><b>De los 10 a 14 años, solo a niñas (gratuita) MSPAS:</b></p>

              <ul>
                <li>
                  Se necesitan 2 dosis de la vacuna contra el VPH, con 6 meses
                  entre cada dosis.
                </li>
              </ul>
              <p></p>
              <p><b>Menores de 15 años, IGSS:</b></p>
              <ul>
                <li>Dos dosis. Segunda dosis 6 meses después de la primera.</li>
              </ul>
              <p></p>
              <p>
                <b>Si se empieza la vacunación después de los 15 años, IGSS:</b>
              </p>
              <ul>
                <li>
                  Se necesitan 3 dosis de la vacuna contra el VPH, la segunda
                  dosis 1 mes después de la primera. La tercera dosis, 5 meses
                  después de la segunda.
                </li>
              </ul>
              <p></p>

              <p>Referencias:</p>
              <p>
                IGSS. (2020). Vacuna VPH. en:
                <a
                  href="https://www.igssgt.org/wp-content/uploads/2020/09/esquema-de-vacunas-IGSS.pdf"
                  target="_blank"
                >
                  https://www.igssgt.org/wp-content/uploads/2020/09/esquema-de-vacunas-IGSS.pdf</a
                >

                [Con acceso el 28 de abril de 2022].
              </p>

              <p>
                SIGSA. (2018). Esquema de vacunación MSPAS. En:
                <a
                  href="https://sigsa.mspas.gob.gt/component/jdownloads/send/14-sigsa-web/93-sigsa-17-carne-otros-grupos?option=com_jdownloads"
                  target="_blank"
                >
                  https://sigsa.mspas.gob.gt/component/jdownloads/send/14-sigsa-web/93-sigsa-17-carne-otros-grupos?option=com_jdownloads</a
                >

                [Con acceso el 2 de mayo de 2022].
              </p>

              <p>
                MSPAS. (2021). Esquema de vacunación MSPAS. En:
                <a
                  href="https://prensa.gob.gt/comunicado/programa-vacunacion-integral-para-toda-la-familia"
                  target="_blank"
                >
                  https://prensa.gob.gt/comunicado/programa-vacunacion-integral-para-toda-la-familia</a
                >

                [Con acceso el 2 de mayo de 2022].
              </p>

              <!-- </a> -->
            </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <br />
      <!-- </ul> -->
      <!-- </v-col> -->
    </v-row>

    <v-row justify="center" class="py-4">
      <!-- <v-col cols="7" style="text-align:center"> -->
      <a
        href="https://docs.almabot.com/"
        target="blank"
        rel="noopener noreferrer"
      >
        <p
          style="
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #3e3e3e;
          "
        >
          Ver más preguntas frecuentes aquí
        </p>
      </a>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<style>
.active-panel-normal {
  color: #6651ee !important;
  background-color: #f8f6ff !important;
}

.paragraph {
  color: #434342 !important;
}
</style>

<script>
export default {
  computed: {
    activeClass() {
      return this.edited ? '' : 'active-panel-normal'
    },
  },
  data: () => ({
    links: [
      {
        question: '¿Qué es COVID-19?',
        answer:
          'COVID-19 es el nombre de la enfermedad causada por el virus coronavirus conocido como SARS-CoV-2. SARS por sus siglas en inglés, se refiere al síndrome respiratorio agudo severo. En 2003 se identificó por primera vez un brote de SARS-CoV-1, una enfermedad parecida a influenza pero con una gran capacidad infectar a las personas.  Originalmente el virus infecta animales, como murciélagos. Debido a cambios en los genes del virus, han aparecido nuevas variantes que afectan humanos. El SARS-CoV-2 es un nuevo coronavirus, que causa la enfermedad conocida como COVID-19, descubierta el 31 de diciembre de 2019 en China.',
        value: 'https://igm.gob.gt/control-migratorio/',
      },

      {
        question: 'Disposiciones Presidenciales: ',
        answer: 'Última actualización',
        value: 'https://sgp.gob.gt/decretos/',
      },

      {
        question: 'Noticias Gubernamentales: ',
        answer: 'Facebook oficial del Gobierno de Guatemala',
        value: 'https://www.facebook.com/guatemalagob/',
      },

      {
        question: 'Sintomas Comunes',
        answer: 'Facebook de MSPAS',
        value:
          'https://www.facebook.com/MinisteriodeSaludPublicayAsistenciaSocial/?ref=br_rs',
      },

      {
        question: 'Ministro de Agricultura, Ganadería y Alimentación: ',
        answer: 'Facebook de MAGA',
        value: 'https://www.facebook.com/maga.gt/',
      },

      {
        question: 'Ministro de Desarrollo Social: ',
        answer: 'Facebook de MIDES',
        value: 'https://www.facebook.com/MidesGuatemala/',
      },

      {
        question: 'Ministerio de Gobernación: ',
        answer: 'Facebook de MINGOB',
        value: 'https://www.facebook.com/mingobguate/',
      },

      {
        question: 'Ministerio de Economía: ',
        answer: 'Facebook de MINECO',
        value: 'https://www.facebook.com/GUATEMINECO/',
      },

      {
        question: 'Ministerio de Trabajo y Previsión Social: ',
        answer: 'Facebook de MINTRAB',
        value: 'https://www.facebook.com/Mintrabajoguatemala/',
      },
    ],
  }),
}
</script>
