<template>
  <section>
    <site-header></site-header>
    <twitter-feed></twitter-feed>
    <contact-me></contact-me>
    <frequent-questions></frequent-questions>
    <site-footer></site-footer>
  </section>
</template>

<script>
import ContactMe from '@/components/ContactMe.vue';
import TwitterFeed from '@/components/TwitterFeed.vue';
import SiteFooter from "@/components/SiteFooter.vue";
import FrequentQuestions from '@/components/FrequentQuestions.vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  components: {
    ContactMe,
    TwitterFeed,
    SiteFooter,
    FrequentQuestions,
    SiteHeader,
  }
}
</script>
