<template>
  <main class="page">
    <h1>Button Demo (Base Theme)</h1>
    <p>
      Skill-driven page aligned to
      <code>?path=/docs/components-button-buttons--docs</code> and
      <code>projects/button-skill/SKILL.md</code>.
    </p>

    <section class="demo-card mb-space-sm">
      <h2>Skill Requirements Applied</h2>
      <ul class="mb-0">
        <li>
          Uses base theme from registry package:
          <code>@rds-vue-ui/rds-theme-base</code>
        </li>
        <li>
          Relies on app entry import:
          <code>import '@rds-vue-ui/rds-theme-base/dist/css/rds-theme-base.css'</code>
        </li>
        <li>Implements Storybook-documented class patterns (`btn`, size, variant, disabled, block)</li>
        <li>Does not introduce a local replacement button component</li>
      </ul>
    </section>

    <section class="demo-card">
      <h2>Solid variants</h2>
      <div class="demo-row">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-light-2">Light</button>
        <button class="btn btn-dark-3">Dark</button>
      </div>

      <h2>Outline variants</h2>
      <div class="demo-row">
        <button class="btn btn-outline-primary">Primary</button>
        <button class="btn btn-outline-secondary">Secondary</button>
        <button class="btn btn-outline-light-2">Light</button>
        <button class="btn btn-outline-dark-3">Dark</button>
      </div>

      <h2>Sizes</h2>
      <div class="demo-row">
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary btn-lg">Large</button>
      </div>

      <h2>Disabled + block</h2>
      <div class="demo-row">
        <button class="btn btn-secondary" disabled>Disabled</button>
      </div>
      <button class="btn btn-block btn-dark-3 block-btn">Block button</button>
    </section>
  </main>
</template>
