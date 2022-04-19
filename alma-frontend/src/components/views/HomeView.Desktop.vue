<template>
  <section>
    <app-bar></app-bar>

    <v-container class="mt-5">
      <v-row class="mt-5">
        <v-col cols="9">
          <site-header-desktop></site-header-desktop>

          <v-container fluid>
            <v-row>
              <v-col cols="9">
                <social-media-desktop></social-media-desktop>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <v-col cols="3">
          <twitter-feed></twitter-feed>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <contact-me-desktop></contact-me-desktop>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="7">
          <frequent-questions></frequent-questions>
        </v-col>
      </v-row>
    </v-container>

    <site-footer-desktop></site-footer-desktop>
  </section>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import SiteHeaderDesktop from '@/components/SiteHeader.Desktop.vue';
import TwitterFeed from '@/components/TwitterFeed.vue';
import ContactMeDesktop from '@/components/ContactMe.Desktop.vue';
import SocialMediaDesktop from '@/components/SocialMedia.Desktop.vue';
import FrequentQuestions from '@/components/FrequentQuestions.vue';
import SiteFooterDesktop from '@/components/SiteFooter.Desktop.vue';

export default {
  components: {
    AppBar,
    SiteHeaderDesktop,
    TwitterFeed,
    ContactMeDesktop,
    SocialMediaDesktop,
    FrequentQuestions,
    SiteFooterDesktop,
  }
}
</script>
