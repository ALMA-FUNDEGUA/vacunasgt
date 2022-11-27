<template>
  <div class="site-footer white--text">
    <v-container>
      <div class="d-flex justify-space-between align-end">
        <span class="font-weight-bold site-footer__title">
          alma
        </span>

        <div>
          <span class="font-weight-bold">
            Suscríbete a nuestro boletín
          </span>

          <v-text-field
            class="site-footer__input"
            placeholder="Escribe tu email"
            append-icon="mdi-chevron-right"
            dense rounded solo
            hide-details
          />
        </div>
      </div>

      <hr class="mt-4">
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  .site-footer {
    padding-top: 125px;
    padding-bottom: 50px;

    background-image: url('@/assets/images/footer-bg.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    &__title {
      font-size: 34px;
      line-height: 1;
    }

    &__input {
      width: 350px;
    }
  }
</style>
