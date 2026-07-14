<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">DIPA.LIAO</div>
      <nav class="footer-links">
        <a :href="`https://github.com/${github}`" target="_blank" rel="noopener">GitHub</a>
        <a :href="`mailto:${email}`">Email</a>
      </nav>
      <div class="footer-copy">&copy; {{ year }} Dipa Liao</div>
    </div>
  </footer>
</template>

<script setup>
const github = 'aisams'
const email = 'dipa.liao@1quant.com'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 32px;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-brand {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--text-dim);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-dim);
  width: 100%;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
