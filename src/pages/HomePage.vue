<template>
  <main class="market-page">
    <section class="hero-shell">
      <div class="hero-copy">
        <p class="eyebrow">agent skills / live demos</p>
        <h1>RDS Skills Hub</h1>
        <p class="hero-text">
          Discover reusable RDS skills, install them in minutes, and open live demos to validate
          behavior before integrating in your app.
        </p>
        <div class="hero-actions">
          <router-link class="hero-btn hero-btn-primary" to="/demos">Browse Live Demos</router-link>
          <a class="hero-btn hero-btn-ghost" href="#skills-list">View Skill Cards</a>
        </div>
      </div>

      <aside class="code-panel" aria-label="Skill install quickstart">
        <div class="command-meta">
          <p class="code-title">quickstart.sh</p>
          <button
            class="copy-btn"
            type="button"
            :aria-label="copiedKey === 'all' ? 'Copied' : 'Copy npx command'"
            :title="copiedKey === 'all' ? 'Copied' : 'Copy npx command'"
            @click="copyCommand('all')"
          >
            <svg
              v-if="copiedKey !== 'all'"
              class="copy-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="10" height="10" rx="2" ry="2" />
              <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
            </svg>
            <svg v-else class="copy-icon copy-icon-success" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 7L9 18l-5-5" />
            </svg>
          </button>
        </div>
        <pre><code># 1) configure private registry
printf "@rds-vue-ui:registry=https://npm.edpl.us/\n" > .npmrc

# 2) install all project skills for Codex
npx skills add ashwinikarnik/rds-skills --skill '*'

# 3) run live demos
yarn dev</code></pre>
      </aside>
    </section>

    <section id="skills-list" class="skills-section">
      <header class="section-header">
        <h2>Available Skills</h2>
        <p>Each card includes install steps and direct links to the live demo routes.</p>
      </header>

      <div class="skills-grid">
        <article class="skill-card">
          <div class="skill-head">
            <p class="skill-kind">base component skill</p>
            <h3>button-skill</h3>
          </div>
          <p class="skill-desc">
            Base-theme button patterns covering variants, sizes, disabled, and block behavior.
          </p>
          <div class="command-meta">
            <p class="label">Install Skill (npx)</p>
            <button
              class="copy-btn"
              type="button"
              :aria-label="copiedKey === 'button' ? 'Copied' : 'Copy command'"
              :title="copiedKey === 'button' ? 'Copied' : 'Copy command'"
              @click="copyCommand('button')"
            >
              <svg
                v-if="copiedKey !== 'button'"
                class="copy-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="10" height="10" rx="2" ry="2" />
                <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
              </svg>
              <svg v-else class="copy-icon copy-icon-success" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 7L9 18l-5-5" />
              </svg>
            </button>
          </div>
          <pre class="install-block"><code>npx skills add ashwinikarnik/rds-skills --skill button-skill</code></pre>
          <div class="card-links">
            <router-link class="hero-btn hero-btn-primary btn-compact" to="/demos/button"
              >Open Live Demo</router-link
            >
          </div>
        </article>

        <article class="skill-card">
          <div class="skill-head">
            <p class="skill-kind">component + event skill</p>
            <h3>button-play-apollo-skill</h3>
          </div>
          <p class="skill-desc">
            Reusable play CTA button implementation with `ctaClick` wiring and disabled-state
            checks.
          </p>
          <div class="command-meta">
            <p class="label">Install Skill (npx)</p>
            <button
              class="copy-btn"
              type="button"
              :aria-label="copiedKey === 'buttonPlayApollo' ? 'Copied' : 'Copy command'"
              :title="copiedKey === 'buttonPlayApollo' ? 'Copied' : 'Copy command'"
              @click="copyCommand('buttonPlayApollo')"
            >
              <svg
                v-if="copiedKey !== 'buttonPlayApollo'"
                class="copy-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="10" height="10" rx="2" ry="2" />
                <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
              </svg>
              <svg v-else class="copy-icon copy-icon-success" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 7L9 18l-5-5" />
              </svg>
            </button>
          </div>
          <pre class="install-block"><code>npx skills add ashwinikarnik/rds-skills --skill button-play-apollo-skill</code></pre>
          <div class="card-links">
            <router-link class="hero-btn hero-btn-primary btn-compact" to="/demos/button-play-apollo"
              >Open Live Demo</router-link
            >
          </div>
        </article>

        <article class="skill-card">
          <div class="skill-head">
            <p class="skill-kind">form control skill</p>
            <h3>form-checkbox-skill</h3>
          </div>
          <p class="skill-desc">
            Checkbox setup with `v-model`, disabled handling, and indeterminate parent/child
            pattern.
          </p>
          <div class="command-meta">
            <p class="label">Install Skill (npx)</p>
            <button
              class="copy-btn"
              type="button"
              :aria-label="copiedKey === 'formCheckbox' ? 'Copied' : 'Copy command'"
              :title="copiedKey === 'formCheckbox' ? 'Copied' : 'Copy command'"
              @click="copyCommand('formCheckbox')"
            >
              <svg
                v-if="copiedKey !== 'formCheckbox'"
                class="copy-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="10" height="10" rx="2" ry="2" />
                <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
              </svg>
              <svg v-else class="copy-icon copy-icon-success" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 7L9 18l-5-5" />
              </svg>
            </button>
          </div>
          <pre class="install-block"><code>npx skills add ashwinikarnik/rds-skills --skill form-checkbox-skill</code></pre>
          <div class="card-links">
            <router-link class="hero-btn hero-btn-primary btn-compact" to="/demos/form-checkbox"
              >Open Live Demo</router-link
            >
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const copiedKey = ref('');
const commands = {
  all: "npx skills add ashwinikarnik/rds-skills --skill '*'",
  button: 'npx skills add ashwinikarnik/rds-skills --skill button-skill',
  buttonPlayApollo:
    'npx skills add ashwinikarnik/rds-skills --skill button-play-apollo-skill',
  formCheckbox: 'npx skills add ashwinikarnik/rds-skills --skill form-checkbox-skill'
};
type CommandKey = keyof typeof commands;

const copyCommand = async (key: CommandKey): Promise<void> => {
  if (!navigator?.clipboard || !commands[key]) {
    return;
  }

  await navigator.clipboard.writeText(commands[key]);
  copiedKey.value = key;
  window.setTimeout(() => {
    if (copiedKey.value === key) {
      copiedKey.value = '';
    }
  }, 1800);
};
</script>
