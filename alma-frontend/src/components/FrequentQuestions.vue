<template>
  <v-container>
    <!-- <v-row justify="center"> -->
      <!-- <v-col cols="7"> -->
        <p style="
        font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #3E3E3E;">¡Lee lo que otras personas nos preguntan!</p>
      <!-- </v-col> -->
    <!-- </v-row> -->

    <v-row justify="center">
      <!-- <v-col cols="7"> -->
        <!-- <ul> -->
          <v-expansion-panels v-model="panel" >
          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
              <v-expansion-panel-header>
                ¿Qué es COVID-19?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
                  COVID-19 es el nombre de la enfermedad causada por el virus coronavirus conocido como SARS-CoV-2. SARS por sus siglas en inglés, se refiere al síndrome respiratorio agudo severo. En 2003 se identificó por primera vez un brote de SARS-CoV-1, una enfermedad parecida a influenza pero con una gran capacidad infectar a las personas.  Originalmente el virus infecta animales, como murciélagos. Debido a cambios en los genes del virus, han aparecido nuevas variantes que afectan humanos. El SARS-CoV-2 es un nuevo coronavirus, que causa la enfermedad conocida como COVID-19, descubierta el 31 de diciembre de 2019 en China.
                <!-- </a> -->
              </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
              <v-expansion-panel-header>
                ¿Vacuna para niños de 6 a 11 años?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
                  <p>El ministerio de Salud habilit&oacute; el 11 de marzo el registro para inscribir a personas menores de entre 6 y 11 a&ntilde;os de edad en el programa de vacunaci&oacute;n contra COVID-19.&nbsp;</p>

<p>La vacuna que se estar&aacute; utilizando es Moderna, ahora conocida tambi&eacute;n como &nbsp;&quot;Spikevax&quot; &nbsp;(dosis de 0.25 ml).&nbsp; Fue &nbsp;aprobada para su uso en menores de edad de 6 a 11 a&ntilde;os por la Agencia Europea de Medicamentos (EMA).&nbsp;</p>

<p>Se administrar&aacute; la segunda dosis 8 semanas (56 d&iacute;as) despu&eacute;s de haber recibido la primera dosis.&nbsp;</p>

<p>La vacuna contiene la mol&eacute;cula llamada ARN mensajero que da instrucciones al cuerpo humano para poder defenderse del COVID-19.&nbsp;</p>

<p>La vacuna no contiene el virus y no puede causar COVID-19.&nbsp;</p>

<p>Extra: Se utilizar&aacute; una jeringa de 23G x1&#39;&#39; x1 ml milimetrada para dosis de 0.25ml</p>
                <!-- </a> -->
              </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
              <v-expansion-panel-header>
                ¿Registro de vacunas para niños de 6 a 11 años?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
                  <p>El ministerio de Salud habilit&oacute; el 11 de marzo el registro para inscribir a personas menores de entre 6 y 11 a&ntilde;os de edad en el programa de vacunaci&oacute;n contra COVID-19.</p>

<p>Puede registrarse a los menores directamente en el centro de vacunaci&oacute;n. Debe presentarse el c&oacute;digo &uacute;nico de Identificaci&oacute;n del menor&nbsp;CUI (que se&nbsp;encuentra en la partida de nacimiento, es el primer n&uacute;mero que aparece en la secci&oacute;n &quot;Datos del inscrito&quot;) y el DPI de uno de los padres de familia o encargado.</p>

<p>Tambi&eacute;n, puede ingresar al sitio &quot;registrovacunas.mspas.gob.gt&quot; , donde podr&aacute; visualizar varias pesta&ntilde;as que tienen los puntos de vacunaci&oacute;n habilitados y puestos de registro. M&aacute;s abajo, podr&aacute; encontrar la inscripci&oacute;n de la fase mayores de 18 y de menores de edad.&nbsp;</p>

<p>Se debe registrar el c&oacute;digo &uacute;nico de Identificaci&oacute;n del menor CUI y despu&eacute;s de la inscripci&oacute;n, el Ministerio de Salud le informar&aacute; cu&aacute;les ser&aacute;n los centros de vacunaci&oacute;n m&aacute;s cercanos habilitados para llevar a los menores y que tengan su primera dosis.</p>
                <!-- </a> -->
              </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
              <v-expansion-panel-header>
                ¿Cuales son los sintomas comunes?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
                  <p>Los s&iacute;ntomas m&aacute;s comunes son:</p>

<ul>
	<li>Fiebre&nbsp;</li>
	<li>Tos</li>
	<li>Cansancio</li>
</ul>

<p>Otros s&iacute;ntomas que son normales, pero menos frecuentes son:</p>

<ul>
	<li>P&eacute;rdida del gusto o el olfato</li>
	<li>Congesti&oacute;n nasal</li>
	<li>Enrojecimiento en los ojos ( al que se le refiere como conjuntivitis)</li>
	<li>Dolor de cabeza</li>
	<li>Dolor de garganta</li>
	<li>Dolor en las articulaciones, de los codos o las rodillas</li>
	<li>Dolor muscular&nbsp;</li>
	<li>Diferentes ronchas en la piel ( a las que se les refiere como erupciones cut&aacute;neas)</li>
	<li>N&aacute;usea o v&oacute;mito</li>
	<li>Diarrea</li>
	<li>Escalofr&iacute;os o v&eacute;rtigo&nbsp;</li>
</ul>

<p>Otros s&iacute;ntomas graves relacionados a COVID-19 incluyen:</p>

<ul>
	<li>Dificultad para respirar</li>
	<li>P&eacute;rdida de apetito&nbsp;</li>
	<li>Confusi&oacute;n&nbsp;</li>
	<li>&nbsp;Presi&oacute;n o dolor en el pecho que no desaparece</li>
	<li>No lograr despertarse o dificultad para permanecer despierto</li>
	<li>Color azul en los labios o el rostro</li>
	<li>Fiebre alta ( m&aacute;s de 38&nbsp;&deg; C)</li>
</ul>

<p>Y otros s&iacute;ntomas que son menos frecuentes, pero si est&aacute;n asociados a COVID-19, pueden ser: &nbsp;</p>

<ul>
	<li>Irritabilidad&nbsp;( Estado de &aacute;nimo que cosas comunes le enojan)</li>
	<li>P&eacute;rdida de la conciencia (a veces asociada a convulsiones)&nbsp;</li>
	<li>Ansiedad&nbsp;</li>
	<li>Depresi&oacute;n&nbsp;</li>
	<li>Cambios en el sue&ntilde;o&nbsp;</li>
	<li>Complicaciones neurol&oacute;gicas m&aacute;s graves y raras, como inflamaci&oacute;n del cerebro, &nbsp;delirios y lesiones neurales y &nbsp;accidentes cerebrovasculares.&nbsp;</li>
</ul>

<p>Se debe buscar atenci&oacute;n m&eacute;dica inmediata para todas las personas, de cualquier edad, &nbsp;que tengan fiebre o tos y adem&aacute;s respiren con dificultad, sientan dolor o presi&oacute;n en el pecho o tengan dificultades para hablar o moverse.&nbsp;</p><!-- </a> -->
              </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          <v-expansion-panel class="my-2">
            <!-- <v-expansion-panel> -->
              <v-expansion-panel-header>
                ¿Refuerzo para menores?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <!-- <a :href="dir.value" target="blank" rel="noopener noreferrer"> -->
                  <p>En los centros de vacunaci&oacute;n ya puede encontrar el refuerzo para ni&ntilde;os de 12 a 17 a&ntilde;os. &nbsp;</p>

<p>Est&aacute;n autorizados para recibir una dosis de refuerzo, despu&eacute;s de haber recibido dos dosis de las vacunas Pfizer o Moderna (esquema primario).&nbsp;</p>

<p>Pude vacunar a su hijo con un refuerzo, 4 meses despu&eacute;s de haber recibido la segunda dosis o una dosis adicional del esquema primario.&nbsp;</p>

<p>Las dosis que ser&aacute;n administradas son Pfizer (volumen 0.3 ml) y Moderna (0.25 ml). &nbsp;</p>

<p>Es importante que uno de sus padres lleve su DPI y el CUI del menor al centro de vacunaci&oacute;n.</p>

<p>&nbsp;</p>
                <!-- </a> -->
              </v-expansion-panel-content>
            <!-- </v-expansion-panel> -->
          </v-expansion-panel>

          </v-expansion-panels>
          <br>
        <!-- </ul> -->
      <!-- </v-col> -->
    </v-row>
    <v-row justify="center" class="py-4">
      <!-- <v-col cols="7" style="text-align:center"> -->
        <a href="https://docs.almabot.com/" target="blank" rel="noopener noreferrer">
        <p style="font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #3E3E3E;">
          Ver mas Preguntas frecuentes Aquí
        </p>
        </a>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>


<script>
export default {
data: () => ({
    links: [
      {
        question: "¿Qué es COVID-19?",
        answer: "COVID-19 es el nombre de la enfermedad causada por el virus coronavirus conocido como SARS-CoV-2. SARS por sus siglas en inglés, se refiere al síndrome respiratorio agudo severo. En 2003 se identificó por primera vez un brote de SARS-CoV-1, una enfermedad parecida a influenza pero con una gran capacidad infectar a las personas.  Originalmente el virus infecta animales, como murciélagos. Debido a cambios en los genes del virus, han aparecido nuevas variantes que afectan humanos. El SARS-CoV-2 es un nuevo coronavirus, que causa la enfermedad conocida como COVID-19, descubierta el 31 de diciembre de 2019 en China." ,
        value: "https://igm.gob.gt/control-migratorio/",
      },

      {
        question: "Disposiciones Presidenciales: ",
        answer: "Última actualización",
        value: "https://sgp.gob.gt/decretos/",
      },

      {
        question: "Noticias Gubernamentales: ",
        answer: "Facebook oficial del Gobierno de Guatemala",
        value: "https://www.facebook.com/guatemalagob/",
      },

      {
        question: "Sintomas Comunes",
        answer: "Facebook de MSPAS",
        value: "https://www.facebook.com/MinisteriodeSaludPublicayAsistenciaSocial/?ref=br_rs",
      },

      {
        question: "Ministro de Agricultura, Ganadería y Alimentación: ",
        answer: "Facebook de MAGA",
        value: "https://www.facebook.com/maga.gt/",
      },

      {
        question: "Ministro de Desarrollo Social: ",
        answer: "Facebook de MIDES",
        value: "https://www.facebook.com/MidesGuatemala/",
      },

      {
        question: "Ministerio de Gobernación: ",
        answer: "Facebook de MINGOB",
        value: "https://www.facebook.com/mingobguate/",
      },

      {
        question: "Ministerio de Economía: ",
        answer: "Facebook de MINECO",
        value: "https://www.facebook.com/GUATEMINECO/",
      },

      {
        question: "Ministerio de Trabajo y Previsión Social: ",
        answer: "Facebook de MINTRAB",
        value: "https://www.facebook.com/Mintrabajoguatemala/",
      },
      
    ],
  }),
};

</script>

