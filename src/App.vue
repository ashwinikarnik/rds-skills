<template>
  <div>
    <header class="app-header">
      <div class="app-header-inner">
        <router-link class="brand" to="/">RDS Skills</router-link>
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/demos">All Live Demos</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid var(--rds-light-4, #d0d0d0);
  background: #fff;
}

.app-header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: 700;
  text-decoration: none;
  color: var(--rds-dark-3, #191919);
}

.nav-links {
  display: flex;
  gap: 14px;
}

.nav-links a {
  text-decoration: none;
  color: var(--rds-primary, #04326b);
}

.nav-links a.router-link-active {
  text-decoration: underline;
}
</style>
