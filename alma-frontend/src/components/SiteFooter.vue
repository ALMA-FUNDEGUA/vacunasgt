<template>
  <div>
    <section v-if="information" class="information">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <section class="text-justify" style="text-align-last: center">
              <span>
                Esta información es el resultado de la
                <b>unidad, colaboración y empatía </b>
                de cientos de guatemaltecos que nos informan y actualizan todos
                los días.
              </span>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <footer
      :class="white ? 'footer-light' : 'footer-dark'"
      style="background: #f8f6ff"
    >
      <v-container>
        <v-row justify="center">
          <div class="d-flex flex-column align-center">
            <span
              class="footer-title text-center"
              style="
                color: #7f6cf6;
                font-weight: bold;
                font-size: 40px;
                letter-spacing: -2px;
                display: flex;
                text-align: center;
              "
            >
              alma
            </span>

            &nbsp;
            <span
              class="footer"
              style="
                position: relative;
                display: flex;
                text-align: center;
                color: #3e3e3e;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                style="margin-right: 12px"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              <a
                @click="$router.push('/filters')"
                style="text-decoration: none"
                class="footerLinks"
              >
                Busca tu vacuna
              </a></span
            >
            &nbsp;
            <span
              class="footer"
              style="
                position: relative;
                display: flex;
                color: #3e3e3e;
                text-align: center;
              "
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-book"
                viewBox="0 0 16 16"
                style="margin-right: 12px"
              >
                <path
                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                />
              </svg>
              <a
                @click="$router.push('/directories')"
                style="text-decoration: none"
                class="footerLinks"
              >
                Directorios
              </a></span
            >
            &nbsp;
            <span
              class="footer"
              style="
                position: relative;
                display: flex;
                color: #3e3e3e;
                text-align: center;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-question-circle"
                viewBox="0 0 16 16"
                style="margin-right: 12px"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                />
              </svg>
              <a
                href="https://docs.almabot.com/"
                target="blank"
                style="text-decoration: none"
                class="footerLinks"
              >
                FAQ
              </a>
            </span>
          </div>
        </v-row>
        <v-row justify="center">
          <v-btn
            rounded
            class="btn my-4"
            target="_blank"
            href="tel:1-801-00-54321"
            color="#ffe6b7"
            outline="none"
            style="color: #200765; background-color: #d0c2fd; width: 80%"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
              style="margin-right: 10px"
            >
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <span style="color: black; text-transform: none"
              >1-801-00-54321</span
            >
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn
            rounded
            class="btn my-2"
            href="https://api.whatsapp.com/send?phone=50224144321&text=Preg%C3%BAntale%20a%20ALMA"
            target="_blank"
            color="#ffe6b7"
            outline="none"
            style="color: #200765; background-color: #d0c2fd; width: 80%"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
              style="margin-right: 10px"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </svg>
            <span style="color: black; text-transform: none"
              >Comunícate por WhatsApp</span
            >
          </v-btn>
        </v-row>

        <v-row justify="center">
          <div class="d-flex flex-column align-center">
            <div class="d-flex flex-row align-center">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="btn-social"
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                    href="https://twitter.com/alma_responde"
                    style="margin-top: 35px"
                  >
                    <!-- <i
                      class='fab fa-twitter'
                      style="color: #3e3e3e; font-size: 25px"
                    ></i> -->
                    <v-icon color="#3e3e3e" size="35"> mdi-twitter </v-icon>
                  </v-btn>
                </template>

                <span>Twitter</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="btn-social"
                    color="#3e3e3e"
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                    href="https://www.instagram.com/alma_responde/"
                    style="margin-top: 35px"
                  >
                    <!-- <i
                      class="fab fa-instagram"
                      style="color: #3e3e3e; font-size: 25px"
                    ></i> -->
                    <v-icon color="#3e3e3e" size="35" dark="true">
                      mdi-instagram
                    </v-icon>
                  </v-btn>
                </template>

                <span>Instagram</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="btn-social"
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                    href="https://www.facebook.com/chatbotALMA"
                    style="margin-top: 35px"
                  >
                    <!-- <i
                      class="fab fa-facebook-f"
                      style="color: #3e3e3e; font-size: 25px"
                    ></i> -->
                    <v-icon color="#3e3e3e" size="35" dark="true">
                      mdi-facebook
                    </v-icon>
                  </v-btn>
                </template>

                <span>Facebook</span>
              </v-tooltip>
            </div>
          </div>
        </v-row>
        <span
          class="footer-subtitle text-center"
          style="
            color: #3e3e3e;
            font-size: 15px;
            position: relative;
            margin-top: 35px;
            text-align: center;
            display: block;
          "
        >
          ©2022 All Rights Reserved.
        </span>
      </v-container>
    </footer>

    <bottom-navigation-mobile></bottom-navigation-mobile>
  </div>
</template>

<script>
import BottomNavigationMobile from "../components/BottomNavigation.Mobile.vue";

export default {
  components: {
    BottomNavigationMobile,
  },

  props: {
    information: {
      type: Boolean,
      default: false,
    },

    white: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.information {
  background-color: #4f4a88;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 5vh 1.7vh;
}

.footerLinks:hover {
  color: #4f4a88;
}
.footer-title {
  font-size: 1.2rem;
}

.footer-light {
  color: #f8f6ff !important;
  padding: 5vh 0vw;
  bottom: 0;
}

.footer-dark {
  background-color: #f8f6ff !important;
  color: white !important;
  padding: 5vh 0vw;
  bottom: 0;
}

.btn-social {
  margin: 0 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.footer-light .btn-social {
  color: #4f4a88 !important;
}

.footer-dark .btn-social {
  color: white !important;
}

.footer-light .btn-update {
  border: 2px solid #4f4a88;
  background-color: #4f4a88 !important;
  color: white !important;
}

.footer-dark .btn-update {
  border: 1px solid white;
  background-color: #4f4a88 !important;
  color: white !important;
}
</style>
