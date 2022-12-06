<template>
  <section>
    <app-bar></app-bar>
    <SiteHeaderDesktop />

    <v-container class="mt-5">
      <v-row>
        <v-col>
          <social-media-desktop></social-media-desktop>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <AboutCovid />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="7">
          <frequent-questions></frequent-questions>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col>
          <language-section-vue></language-section-vue>
        </v-col>
      </v-row>
    </v-container>

    <site-footer-desktop></site-footer-desktop>
  </section>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import SiteHeaderDesktop from "@/components/SiteHeader.Desktop.vue";
import SocialMediaDesktop from "@/components/SocialMedia.Desktop.vue";
import FrequentQuestions from "@/components/FrequentQuestions.vue";
import SiteFooterDesktop from "@/components/SiteFooter.Desktop.vue";
import LanguageSectionVue from "../LanguageSection.vue";
import AboutCovid from '@/components/AboutCovid.vue';

export default {
  components: {
    AppBar,
    SiteHeaderDesktop,
    FrequentQuestions,
    SiteFooterDesktop,
    SocialMediaDesktop,
    LanguageSectionVue,
    AboutCovid,
  },
};
</script>
