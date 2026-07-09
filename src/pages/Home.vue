<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero container">
      <h1 class="hero-title">
        Hi, I'm <span class="gold">Dipa</span>
      </h1>
      <p class="hero-subtitle">
        构建数字作品，沉淀技术思考。这里是我的个人博物馆，存放过往的项目、随笔与一切值得留下的痕迹。
      </p>
      <div class="hero-actions">
        <router-link to="/projects" class="btn btn-primary">浏览项目</router-link>
        <router-link to="/about" class="btn">了解更多</router-link>
      </div>
    </section>

    <!-- Nav Cards -->
    <section class="nav-cards container">
      <router-link to="/projects" class="nav-card card">
        <span class="nav-card-icon">&#9670;</span>
        <h3>Projects</h3>
        <p>过往项目与作品集，涵盖工具开发、网站搭建与技术实验。</p>
      </router-link>
      <router-link to="/blog" class="nav-card card">
        <span class="nav-card-icon">&#9998;</span>
        <h3>Blog</h3>
        <p>技术笔记与随笔，记录学习过程中的思考与发现。</p>
      </router-link>
      <router-link to="/about" class="nav-card card">
        <span class="nav-card-icon">&#9671;</span>
        <h3>About</h3>
        <p>关于我的经历、技能，以及联系方式。</p>
      </router-link>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  padding-block: 60px 0;
}

/* Hero */
.hero {
  text-align: center;
  padding-block: 80px var(--stack-lg);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 36rem;
  margin-inline: auto;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
}

/* Nav Cards */
.nav-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-block: var(--stack-lg);
}

.nav-card {
  text-decoration: none;
  padding: 40px 32px;
}

.nav-card-icon {
  font-size: 1.5rem;
  color: var(--gold);
  display: block;
  margin-bottom: 20px;
}

.nav-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text);
}

.nav-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .hero {
    padding-block: 40px var(--stack-md);
  }

  .nav-cards {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
