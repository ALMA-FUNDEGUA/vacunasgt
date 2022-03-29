<template>
  <section>
    <contact-me></contact-me>
    <twitter-feed></twitter-feed>
    <site-footer></site-footer>
  </section>

  <!-- <section>
    <wizard-banner></wizard-banner>

    <section class="d-flex justify-center align-center ma-5">
      <wizard-form></wizard-form>
    </section>
    <twitter-feed></twitter-feed>
    <site-footer information white></site-footer>
  </section> -->
</template>

<script>
import ContactMe from '../components/ContactMe.vue';
import TwitterFeed from '../components/TwitterFeed.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  components: {
    ContactMe,
    TwitterFeed,
    SiteFooter,
  }
}

// import WizardBanner from "../components/WizardBanner.vue";
// import WizardForm from "../components/WizardForm.vue";
// import SiteFooter from "../components/SiteFooter.vue";
// import TwitterFeed from "../components/TwitterFeed.vue";

// export default {
//   components: {
//     WizardBanner,
//     WizardForm,
//     SiteFooter,
//     TwitterFeed,
//   },
// };
</script>
