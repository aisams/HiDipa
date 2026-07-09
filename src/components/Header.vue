<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/" class="brand" aria-label="Home">
        <span class="brand-mark" aria-hidden="true">&#9670;</span>
        <span class="brand-text">DIPA.LIAO</span>
      </router-link>
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-header);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--text);
}

.brand:hover {
  color: var(--gold);
}

.brand-mark {
  color: var(--gold);
  font-size: 0.7rem;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color 0.15s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--gold);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gold);
}

@media (max-width: 768px) {
  .nav {
    gap: 20px;
  }
}
</style>
