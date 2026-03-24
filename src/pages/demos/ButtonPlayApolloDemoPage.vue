<template>
  <main class="page">
    <h1>ButtonPlayApollo Demo</h1>
    <p>
      Component usage aligned to <code>@rds-vue-ui/button-play-apollo</code> and
      <code>?path=/docs/components-button-buttonplayapollo--docs</code>. Install with <code>npx skills add ashwinikarnik/rds-skills --skill button-play-apollo-skill</code>.
    </p>

    <section class="demo-card">
      <h2>Enabled</h2>
      <div class="demo-row">
        <ButtonPlayApollo
          button-text="Watch Video"
          button-text-size="medium"
          button-text-variant="dark-3"
          background-variant="dark-1"
          @ctaClick="onCtaClick"
        />
      </div>

      <h2>Disabled</h2>
      <div class="demo-row">
        <ButtonPlayApollo
          button-text="Unavailable"
          button-text-size="medium"
          :disabled="true"
          @ctaClick="onDisabledClick"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ButtonPlayApollo } from '@rds-vue-ui/button-play-apollo';

const onCtaClick = (): void => {
  console.log('ButtonPlayApollo ctaClick fired');
};

const onDisabledClick = (): void => {
  console.log('Disabled button click should not fire');
};
</script>
