<template>
  <main class="page">
    <h1>All Live Demos</h1>
    <p>Select a component demo page.</p>

    <section class="demo-grid">
      <article class="demo-tile">
        <h2>Button (Base Theme)</h2>
        <p>Variants, sizes, disabled, and block examples.</p>
        <router-link class="btn btn-primary btn-sm" to="/demos/button">Open Demo</router-link>
      </article>

      <article class="demo-tile">
        <h2>ButtonPlayApollo</h2>
        <p>Play CTA button with event emission and disabled state.</p>
        <router-link class="btn btn-primary btn-sm" to="/demos/button-play-apollo"
          >Open Demo</router-link
        >
      </article>

      <article class="demo-tile">
        <h2>ButtonPlayApollo Skill Test</h2>
        <p>Validation page built directly from the reusable skill instructions.</p>
        <router-link class="btn btn-primary btn-sm" to="/demos/button-play-apollo-skill-test"
          >Open Demo</router-link
        >
      </article>
    </section>
  </main>
</template>
