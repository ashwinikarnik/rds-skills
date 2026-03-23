<template>
  <main class="market-page">
    <section class="directory-header">
      <p class="eyebrow">/demos</p>
      <h1>Live Demo Directory</h1>
      <p>
        Open each route to test component behavior directly and validate skill output against the
        documented workflow.
      </p>
    </section>

    <section class="directory-list">
      <article class="directory-item">
        <div>
          <p class="skill-kind">base component skill</p>
          <h2>button-skill</h2>
          <p>Variants, sizes, disabled, and block classes in base theme.</p>
          <pre class="install-inline"><code>yarn add @rds-vue-ui/rds-theme-base</code></pre>
        </div>
        <router-link class="hero-btn hero-btn-primary btn-compact" to="/demos/button"
          >Open Demo</router-link
        >
      </article>

      <article class="directory-item">
        <div>
          <p class="skill-kind">component + event skill</p>
          <h2>button-play-apollo-skill</h2>
          <p>Play button package integration with click event and disabled-state validation.</p>
          <pre class="install-inline"><code>yarn add @rds-vue-ui/button-play-apollo @rds-vue-ui/rds-theme-base</code></pre>
        </div>
        <div class="multi-links">
          <router-link
            class="hero-btn hero-btn-primary btn-compact"
            to="/demos/button-play-apollo-skill-test"
            >Skill Test</router-link
          >
          <router-link class="hero-btn hero-btn-ghost btn-compact" to="/demos/button-play-apollo"
            >Component Demo</router-link
          >
        </div>
      </article>

      <article class="directory-item">
        <div>
          <p class="skill-kind">form control skill</p>
          <h2>form-checkbox-skill</h2>
          <p>Checkbox usage with parent-child grouping and state verification.</p>
          <pre class="install-inline"><code>yarn add @rds-vue-ui/form-checkbox @rds-vue-ui/rds-theme-base</code></pre>
        </div>
        <router-link class="hero-btn hero-btn-primary btn-compact" to="/demos/form-checkbox"
          >Open Demo</router-link
        >
      </article>
    </section>
  </main>
</template>
