<template>
  <section>
    <site-header></site-header>
    <contact-me></contact-me>
    <social-media></social-media>
    <AboutCovid />
  </section>
</template>

<script>
import ContactMe from "@/components/ContactMe.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import AboutCovid from '@/components/AboutCovid.vue';

export default {
  components: {
    ContactMe,
    SiteHeader,
    SocialMedia,
    AboutCovid,
  },
};
</script>
