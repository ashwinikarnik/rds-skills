<template>
  <div>
    <header class="app-header">
      <div class="app-header-inner">
        <router-link class="brand" to="/">RDS Skills</router-link>
        <nav class="nav-links" aria-label="Main navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/demos">Live Demos</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>
