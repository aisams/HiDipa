<template>
  <div class="page container">
    <h1 class="page-title">About</h1>
    <div class="about-grid">
      <div class="about-bio">
        <h2 class="section-title">关于我</h2>
        <p>
          Hi，我是 Dipa，一名开发者。专注于用技术构建实用工具与产品，享受从零到一的过程。
        </p>
        <p>
          这里是我的个人博物馆，用来存放过往项目、技术笔记，以及一切值得留下的想法。比起完美，我更在意持续构建。
        </p>
      </div>
      <div class="about-contact">
        <h2 class="section-title">联系方式</h2>
        <ul class="contact-list">
          <li>
            <span class="contact-label">Email</span>
            <a href="mailto:dipa.liao@1quant.com">dipa.liao@1quant.com</a>
          </li>
          <li>
            <span class="contact-label">GitHub</span>
            <a href="https://github.com/aisams" target="_blank" rel="noopener">aisams</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: var(--stack-md);
}

.about-bio p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}

.contact-list li {
  display: flex;
  gap: 16px;
  align-items: center;
  padding-block: 12px;
  border-bottom: 1px solid var(--border);
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-dim);
  min-width: 80px;
}

.contact-list a {
  color: var(--text-muted);
}

.contact-list a:hover {
  color: var(--gold);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
