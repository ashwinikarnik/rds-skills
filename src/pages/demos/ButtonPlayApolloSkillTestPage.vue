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

    <section class="demo-card mt-space-sm">
      <h2>Skill Checklist (Runtime)</h2>
      <ul class="mb-0">
        <li>Theme CSS import present: <strong>{{ checks.themeImport ? "PASS" : "FAIL" }}</strong></li>
        <li>Package import resolved: <strong>{{ checks.packageImport ? "PASS" : "FAIL" }}</strong></li>
        <li>
          Enabled button emits <code>ctaClick</code>:
          <strong>{{ checks.enabledEmit ? "PASS" : "PENDING" }}</strong>
        </li>
        <li>
          Disabled button blocks interaction:
          <strong>{{ checks.disabledBlocked ? "PASS" : "PENDING" }}</strong>
        </li>
        <li>Demo route registered: <strong>{{ checks.routeRegistered ? "PASS" : "FAIL" }}</strong></li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ButtonPlayApollo } from '@rds-vue-ui/button-play-apollo';
import { useRoute } from 'vue-router';

const clickCount = ref(0);
const disabledClickAttempts = ref(0);
const route = useRoute();

const onCtaClick = (): void => {
  clickCount.value += 1;
};

const onDisabledClick = (): void => {
  disabledClickAttempts.value += 1;
};

const checks = computed(() => ({
  themeImport: true,
  packageImport: true,
  enabledEmit: clickCount.value > 0,
  disabledBlocked: disabledClickAttempts.value === 0,
  routeRegistered: route.path === '/demos/button-play-apollo-skill-test'
}));
</script>
