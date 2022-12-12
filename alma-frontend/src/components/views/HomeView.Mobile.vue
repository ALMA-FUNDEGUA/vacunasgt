<template>
  <section>
    <site-header></site-header>
    <contact-me></contact-me>
    <social-media></social-media>
    <AboutCovid />
    <FrequentQuestions/>
    <SiteFooter/>
  </section>
</template>

<script>
import ContactMe from "@/components/ContactMe.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import AboutCovid from '@/components/AboutCovid.vue';
import FrequentQuestions from "@/components/FrequentQuestions.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    ContactMe,
    SiteHeader,
    SocialMedia,
    AboutCovid,
    FrequentQuestions,
    SiteFooter,
  },
};
</script>
