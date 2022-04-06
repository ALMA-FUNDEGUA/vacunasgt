<template>
  <section>
    <site-header></site-header>
    <twitter-feed></twitter-feed>
    <contact-me></contact-me>
    <frequent-questions></frequent-questions>
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
import SiteFooter from "../components/SiteFooter.vue";
import FrequentQuestions from '../components/FrequentQuestions.vue';
import SiteHeader from '../components/SiteHeader.vue';
import NewCenterList from '../components/NewCenterList.vue';

export default {
  components: {
    ContactMe,
    TwitterFeed,
    SiteFooter,
    FrequentQuestions,
    SiteHeader,
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
