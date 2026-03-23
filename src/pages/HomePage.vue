<template>
  <main class="market-page">
    <section class="hero-shell">
      <div class="hero-copy">
        <p class="eyebrow">agent skills / live demos</p>
        <h1>RDS Skills Marketplace</h1>
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
        <p class="code-title">quickstart.sh</p>
        <pre><code># 1) configure private registry
printf "@rds-vue-ui:registry=https://npm.edpl.us/\n" > .npmrc

# 2) install dependencies
yarn add @rds-vue-ui/rds-theme-base

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
          <p class="label">Install</p>
          <pre class="install-block"><code>yarn add @rds-vue-ui/rds-theme-base</code></pre>
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
          <p class="label">Install</p>
          <pre class="install-block"><code>yarn add @rds-vue-ui/button-play-apollo @rds-vue-ui/rds-theme-base</code></pre>
          <div class="card-links">
            <router-link
              class="hero-btn hero-btn-primary btn-compact"
              to="/demos/button-play-apollo-skill-test"
              >Open Skill Test Demo</router-link
            >
            <router-link
              class="hero-btn hero-btn-ghost btn-compact"
              to="/demos/button-play-apollo"
              >Open Component Demo</router-link
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
          <p class="label">Install</p>
          <pre class="install-block"><code>yarn add @rds-vue-ui/form-checkbox @rds-vue-ui/rds-theme-base</code></pre>
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
