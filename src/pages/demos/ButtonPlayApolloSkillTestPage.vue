<template>
  <main class="page">
    <h1>ButtonPlayApollo Skill Test</h1>
    <p>
      This page validates the reusable skill flow: package install, base theme import, component
      render, click event wiring, and disabled behavior.
    </p>

    <section class="demo-card">
      <h2>Interactive Test</h2>
      <div class="demo-row">
        <ButtonPlayApollo
          button-text="Play Intro Video"
          button-text-size="medium"
          button-text-variant="dark-3"
          background-variant="dark-1"
          @ctaClick="onCtaClick"
        />

        <ButtonPlayApollo
          button-text="Disabled State"
          :disabled="true"
          @ctaClick="onDisabledClick"
        />
      </div>

      <p class="mb-0">
        <strong>ctaClick count:</strong> {{ clickCount }}
      </p>
      <p class="mb-0">
        <strong>Disabled click attempts:</strong> {{ disabledClickAttempts }}
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { ButtonPlayApollo } from '@rds-vue-ui/button-play-apollo';

const clickCount = ref(0);
const disabledClickAttempts = ref(0);

const onCtaClick = () => {
  clickCount.value += 1;
};

const onDisabledClick = () => {
  disabledClickAttempts.value += 1;
};
</script>
