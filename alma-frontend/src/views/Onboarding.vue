<template>
  <html>
    <!-- <head>
      <meta property="og:title" content="Centros de Vacunación en Guatemala test" />
      <meta property="og:url" content="https://vacunasgt.com/" />
      <meta property=”og:image” content="../assets/images/ALMA-09.svg">
      <meta property=”og:image” content="https://pbs.twimg.com/media/E7-pRCwWQAUd6IL?format=jpg&name=large">
      <meta property="og:type" content="website" />
    </head> -->
    <section>
      <section class="d-flex justify-center align-center ma-5">
        <new-center-list></new-center-list>
      </section>
      <section class="d-flex justify-center align-center ma-5">
        <site-header></site-header>
      </section>
      <section class="d-flex justify-center align-center ma-5">
        <frequent-questions></frequent-questions>
      </section>
      <wizard-banner></wizard-banner>
      <section class="d-flex justify-center align-center ma-5">
        <wizard-form></wizard-form>
      </section>
      <twitter-feed></twitter-feed>
      <site-footer information white></site-footer>
    </section>
  </html>
</template>


<script>
import WizardBanner from '../components/WizardBanner.vue';
import WizardForm from '../components/WizardForm.vue';
import SiteFooter from '../components/SiteFooter.vue';
import TwitterFeed from '../components/TwitterFeed.vue';
import FrequentQuestions from '../components/FrequentQuestions.vue';
import SiteHeader from '../components/SiteHeader.vue';
import NewCenterList from '../components/NewCenterList.vue';



export default {

  components: {
    WizardBanner,
    WizardForm,
    SiteFooter,
    TwitterFeed,
    FrequentQuestions,
    SiteHeader,
    NewCenterList,
  },
}
</script>