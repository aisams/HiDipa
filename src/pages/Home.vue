<template>
  <div class="home" ref="homeContainer">
    <!-- Page Nav Dots -->
    <nav class="page-nav" aria-label="页面导航">
      <a class="page-dot active" href="#hero" @click.prevent="scrollTo('hero')"><span>首页</span></a>
      <a class="page-dot" href="#about" @click.prevent="scrollTo('about')"><span>关于</span></a>
      <a class="page-dot" href="#focus" @click.prevent="scrollTo('focus')"><span>方向</span></a>
      <a class="page-dot" href="#works" @click.prevent="scrollTo('works')"><span>作品</span></a>
      <a class="page-dot" href="#contact" @click.prevent="scrollTo('contact')"><span>联系</span></a>
    </nav>

    <!-- Hero -->
    <section id="hero" class="section-hero">
      <div class="hero-content">
        <h1 class="hero-badge">Dipa</h1>
        <p class="hero-title">用 AI 让想法变成产品</p>
        <div class="hero-tags">
          <span class="hero-tag">AI 开发</span>
          <span class="hero-tag">产品构建</span>
          <span class="hero-tag">技术写作</span>
        </div>
      </div>
      <div class="scroll-hint" @click="scrollTo('about')" aria-hidden="true">
        <span class="scroll-arrow"></span>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section-about">
      <h2 class="section-title reveal">关于我</h2>
      <div class="about-inner">
        <!-- Timeline -->
        <div class="timeline">
          <div class="timeline-node reveal">
            <span class="timeline-year">2016</span>
            <span class="timeline-dot"></span>
            <span class="timeline-label">开始编程</span>
          </div>
          <div class="timeline-line"><span class="timeline-meteor"></span></div>
          <div class="timeline-node reveal">
            <span class="timeline-year">2019</span>
            <span class="timeline-dot"></span>
            <span class="timeline-label">技术深耕</span>
          </div>
          <div class="timeline-line"><span class="timeline-meteor"></span></div>
          <div class="timeline-node reveal">
            <span class="timeline-year">2022</span>
            <span class="timeline-dot"></span>
            <span class="timeline-label">产品构建</span>
          </div>
          <div class="timeline-line"><span class="timeline-meteor"></span></div>
          <div class="timeline-node reveal">
            <span class="timeline-year">2024</span>
            <span class="timeline-dot"></span>
            <span class="timeline-label">开源贡献</span>
          </div>
          <div class="timeline-line"><span class="timeline-meteor"></span></div>
          <div class="timeline-node reveal">
            <span class="timeline-year">2026</span>
            <span class="timeline-dot"></span>
            <span class="timeline-label">All in AI</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="about-stats">
          <div class="stat-item reveal">
            <span class="stat-number">10<span class="stat-plus">+</span></span>
            <span class="stat-label">年技术积累</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">多领域</span>
            <span class="stat-label">全栈 & AI</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">持续</span>
            <span class="stat-label">构建 & 探索</span>
          </div>
        </div>

        <p class="about-quote reveal">Build in public, learn in public.</p>
      </div>
    </section>

    <!-- Focus / Constellation -->
    <section id="focus" class="section-constellation">
      <h2 class="section-title reveal">我在做什么</h2>
      <div class="constellation-wrapper">
        <div class="constellation">
          <svg class="constellation-lines" aria-hidden="true" viewBox="0 0 800 480">
            <line class="constellation-line" x1="400" y1="30" x2="672" y2="130" />
            <line class="constellation-line" x1="672" y1="130" x2="672" y2="350" />
            <line class="constellation-line" x1="672" y1="350" x2="400" y2="450" />
            <line class="constellation-line" x1="400" y1="450" x2="128" y2="350" />
            <line class="constellation-line" x1="128" y1="350" x2="128" y2="130" />
            <line class="constellation-line" x1="128" y1="130" x2="400" y2="30" />
          </svg>

          <div class="star-node star-0 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>技术开发</h3>
              <p>全栈开发，专注构建实用工具与产品，享受从零到一的创造过程</p>
            </div>
          </div>
          <div class="star-node star-2 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>开源项目</h3>
              <p>将探索过程中开发的小工具发布到开源社区，与更多人分享</p>
            </div>
          </div>
          <div class="star-node star-4 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>AI 探索</h3>
              <p>深度使用 AI 编程工具，探索 AI 在产品开发中的更多可能性</p>
            </div>
          </div>
          <div class="star-node star-6 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>写作分享</h3>
              <p>记录技术思考与实践经验，沉淀成可复用的知识</p>
            </div>
          </div>
          <div class="star-node star-5 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>产品构建</h3>
              <p>不止写代码，更关注产品思维和用户体验，做有温度的产品</p>
            </div>
          </div>
          <div class="star-node star-3 reveal">
            <span class="star-core"></span>
            <div class="star-info">
              <h3>持续学习</h3>
              <p>技术日新月异<br>保持好奇心，不断折腾</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Works -->
    <section id="works" class="section-works">
      <h2 class="section-title reveal">作品与工具</h2>
      <div class="works-inner">
        <div class="works-grid">
          <div class="work-card work-card-1 reveal" @click="go('/projects')">
            <h3>Personal Museum</h3>
            <p>你正在浏览的个人站点<br>Vue 3 + Vite 构建<br>深色科技风主题</p>
            <span class="work-card-cta">查看详情 →</span>
          </div>
          <div class="work-card work-card-2 reveal">
            <h3>Synthetic Identity</h3>
            <p>AI 时代个人 IP 品牌页<br>暗色玻璃态设计<br>纯静态 HTML/CSS 实现</p>
            <span class="work-card-cta">查看项目 →</span>
          </div>
          <div class="work-card work-card-3 reveal">
            <h3>技术博客</h3>
            <p>技术笔记与随笔<br>记录学习过程中的<br>思考与发现</p>
            <span class="work-card-cta" @click.stop="go('/blog')">阅读文章 →</span>
          </div>
          <div class="work-card work-card-4 reveal">
            <h3>更多项目</h3>
            <p>持续构建中<br>更多实用工具与产品<br>敬请期待</p>
            <span class="work-card-cta">即将上线 →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section-contact">
      <h2 class="section-title reveal">在这里找到我</h2>
      <div class="contact-links reveal">
        <a class="contact-item" href="https://github.com/aisams" target="_blank" rel="noopener noreferrer">
          <div class="contact-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <span>GitHub</span>
        </a>
        <a class="contact-item" href="mailto:dipa.liao@1quant.com">
          <div class="contact-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <span>Email</span>
        </a>
        <div class="contact-item contact-wechat-trigger">
          <div class="contact-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05a6.42 6.42 0 01-.246-1.76c0-3.56 3.143-6.448 7.02-6.448.345 0 .684.029 1.017.07-.387-3.478-3.972-6.494-8.602-6.494zM5.785 7.124a1.04 1.04 0 110-2.082 1.04 1.04 0 010 2.082zm5.813 0a1.04 1.04 0 110-2.082 1.04 1.04 0 010 2.082zM23.96 14.607c0-3.24-3.16-5.87-7.055-5.87-3.957 0-7.056 2.63-7.056 5.87s3.1 5.87 7.056 5.87c.868 0 1.703-.13 2.48-.37a.68.68 0 01.56.08l1.487.87a.258.258 0 00.13.04c.127 0 .23-.103.23-.23 0-.057-.024-.112-.038-.167l-.305-1.152a.462.462 0 01.166-.52c1.527-1.1 2.345-2.69 2.345-4.42zm-9.585-1.186a.828.828 0 110-1.656.828.828 0 010 1.656zm5.06 0a.828.828 0 110-1.656.828.828 0 010 1.656z"/>
            </svg>
          </div>
          <span>微信公众号</span>
        </div>
      </div>
      <p class="contact-copy reveal">&copy; 2026 Dipa Liao. Powered by Vue & Vite.</p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useReveal } from '../composables/useReveal'

const router = useRouter()
const homeContainer = ref(null)
const { refresh } = useReveal()

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function go(path) {
  router.push(path)
}

// Observe sections for active nav dot
let sectionObserver = null

onMounted(() => {
  refresh()

  const sections = document.querySelectorAll('.section-hero, .section-about, .section-constellation, .section-works, .section-contact')
  const dots = document.querySelectorAll('.page-dot')

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          dots.forEach(d => d.classList.remove('active'))
          const dot = document.querySelector(`.page-dot[href="#${entry.target.id}"]`)
          if (dot) dot.classList.add('active')
        }
      }
    },
    { threshold: 0.5 }
  )

  sections.forEach(s => sectionObserver.observe(s))
})
</script>

<style scoped>
/* ========================================
   Home Container — self-contained scroll-snap
   ======================================== */

.home {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

/* ========================================
   Page Nav Dots
   ======================================== */

.page-nav {
  position: fixed;
  left: 28px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page-dot {
  position: relative;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--white-rgb), 0.15);
  transition: background 0.3s, box-shadow 0.3s;
}

.page-dot.active {
  background: rgba(var(--accent-rgb), 0.8);
  box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
}

.page-dot span {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-cn);
  font-size: 12px;
  color: rgba(var(--white-rgb), 0.5);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.page-dot:hover span {
  opacity: 1;
}

.page-dot.active span {
  color: var(--color-accent);
}

/* ========================================
   Hero Section
   ======================================== */

.section-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8%;
  padding-bottom: 10vh;
  z-index: 2;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 700px;
}

@keyframes heroFadeUp {
  0%   { opacity: 0; transform: translateY(25px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  font-family: var(--font-display);
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #38f9d7, #60a5fa, #38f9d7);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: logoShimmer 3s linear infinite, heroFadeUp 0.8s ease-out both;
  animation-delay: 0s, 0.2s;
}

@keyframes logoShimmer {
  0%   { background-position: 0% center; }
  100% { background-position: 300% center; }
}

.hero-title {
  font-family: var(--font-cn);
  font-size: clamp(18px, 3.2vw, 32px);
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.4;
  color: rgba(var(--white-rgb), 0.95);
  margin-bottom: 24px;
  opacity: 0;
  animation: heroFadeUp 0.8s ease-out 0.6s both;
}

.hero-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  opacity: 0;
  animation: heroFadeUp 0.8s ease-out 1s both;
}

.hero-tag {
  display: inline-block;
  padding: clamp(5px, 0.8vw, 8px) clamp(12px, 2vw, 20px);
  font-family: var(--font-cn);
  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--text-muted);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  border-radius: 100px;
  background: rgba(var(--accent-rgb), 0.04);
  backdrop-filter: blur(8px);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 28%;
  left: 8%;
  padding: 12px;
  cursor: pointer;
  opacity: 0;
  animation: heroFadeUp 0.8s ease-out 1.4s both;
}

.scroll-arrow {
  display: block;
  width: 24px;
  height: 24px;
  border-right: 2px solid #38f9d7;
  border-bottom: 2px solid #60a5fa;
  transform: rotate(45deg);
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.6; }
  50%      { transform: rotate(45deg) translateY(10px); opacity: 1; }
}

/* ========================================
   Section Common Layout
   ======================================== */

.section-about,
.section-constellation,
.section-works,
.section-contact {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  padding: 18vh 24px 60px;
}

/* Section divider glow */
.section-about::before,
.section-constellation::before,
.section-works::before,
.section-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(var(--accent-rgb), 0.12) 20%,
    rgba(var(--blue-rgb), 0.2) 50%,
    rgba(var(--accent-rgb), 0.12) 80%,
    transparent
  );
  pointer-events: none;
  z-index: 1;
}

/* ========================================
   About / Timeline Section
   ======================================== */

.about-inner {
  max-width: 900px;
  width: 100%;
  margin: 40px auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

/* Timeline */
.timeline {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
}

.timeline-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.timeline-node.reveal {
  opacity: 0;
  transform: scale(0.3);
  transition: opacity 0.5s ease-out, transform 0.5s var(--ease-spring);
}

.timeline-node.reveal.visible {
  opacity: 1;
  transform: scale(1);
}

.timeline-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--accent-rgb), 0.8);
  box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.4), 0 0 16px rgba(var(--accent-rgb), 0.15);
  margin: 0 auto;
}

.timeline-year {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: rgba(var(--accent-rgb), 0.6);
  letter-spacing: 2px;
}

.timeline-label {
  font-family: var(--font-cn);
  font-size: clamp(14px, 1.6vw, 16px);
  font-weight: 600;
  color: rgba(var(--white-rgb), 0.85);
  letter-spacing: 1px;
  white-space: nowrap;
}

/* Meteor connecting line */
.timeline-line {
  position: relative;
  flex: 1;
  height: 2px;
  margin: 0 -4px 36px;
}

.timeline-line::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.35), rgba(56, 249, 215, 0.15));
}

/* Stats */
.about-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 100%;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(90deg, #38f9d7, #60a5fa, #38f9d7);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: logoShimmer 3s linear infinite;
}

.stat-plus {
  font-size: 0.5em;
}

.stat-label {
  font-family: var(--font-cn);
  font-size: clamp(14px, 1.6vw, 16px);
  color: rgba(var(--white-rgb), 0.85);
  letter-spacing: 1px;
}

/* Quote */
.about-quote {
  font-family: var(--font-display);
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 400;
  line-height: 1.8;
  text-align: center;
  max-width: 600px;
  letter-spacing: 2px;
  color: rgba(var(--accent-rgb), 0.5);
  margin-top: 20px;
}

/* ========================================
   Constellation / Focus Section
   ======================================== */

.constellation-wrapper {
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
}

.constellation {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 5 / 3;
}

/* SVG connection lines */
.constellation-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.constellation-line {
  stroke: rgba(var(--accent-rgb), 0.25);
  stroke-width: 1;
  filter: drop-shadow(0 0 2px rgba(var(--accent-rgb), 0.2));
}

/* Star nodes */
.star-node {
  position: absolute;
  cursor: default;
  z-index: 2;
  text-align: left;
  transform: translate(-3px, -3px);
}

.star-0 { left: 50%; top: 6%; }
.star-2 { left: 84%; top: 27%; }
.star-4 { left: 84%; top: 73%; }
.star-6 { left: 50%; top: 94%; }
.star-5 { left: 16%; top: 73%; }
.star-3 { left: 16%; top: 27%; }

/* Star core */
.star-core {
  position: relative;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 0 12px;
  background: #fff;
  box-shadow: 0 0 2px #fff, 0 0 6px rgba(255, 255, 255, 0.4);
  animation: starTwinkle 3s ease-in-out infinite;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
}

.star-0 .star-core { animation-delay: 0s; }
.star-2 .star-core { animation-delay: -1.5s; }
.star-3 .star-core { animation-delay: -2.2s; }
.star-4 .star-core { animation-delay: -0.4s; }
.star-5 .star-core { animation-delay: -1.1s; }
.star-6 .star-core { animation-delay: -1.8s; }

@keyframes starTwinkle {
  0%, 100% { opacity: 0.5; }
  20% { opacity: 0.9; }
  40% { opacity: 0.4; }
  60% { opacity: 1; }
  80% { opacity: 0.6; }
}

/* Star info */
.star-info {
  width: 210px;
}

.star-info h3 {
  font-family: var(--font-cn);
  font-size: 18px;
  font-weight: 600;
  color: rgba(var(--white-rgb), 0.85);
  letter-spacing: 1px;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.star-info p {
  font-family: var(--font-cn);
  font-size: 14px;
  line-height: 1.6;
  color: rgba(var(--white-rgb), 0.55);
  transition: color 0.3s;
}

.star-node:hover .star-info h3 {
  color: rgba(var(--white-rgb), 1);
}

.star-node:hover .star-info p {
  color: var(--text-muted);
}

.star-node:hover .star-core {
  box-shadow: 0 0 6px #fff, 0 0 14px rgba(255, 255, 255, 0.5), 0 0 28px rgba(255, 255, 255, 0.15);
  transform: scale(1.3);
}

/* Star info positioning */
.star-0 .star-info,
.star-6 .star-info {
  text-align: center;
  transform: translateX(-50%);
  margin-left: 1.5px;
}

.star-3 .star-info,
.star-5 .star-info {
  text-align: right;
  transform: translateX(-100%);
  margin-left: -12px;
}

/* ========================================
   Works Section
   ======================================== */

.section-works .section-title {
  margin-bottom: 80px;
}

.works-inner {
  width: 100%;
  max-width: 1400px;
  overflow-x: auto;
  padding-bottom: 20px;
}

.works-grid {
  display: flex;
  justify-content: center;
  width: 100%;
  perspective: 1200px;
  transform-style: preserve-3d;
  padding: 20px 0;
}

.work-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  flex-shrink: 0;
  padding: 28px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.45s var(--ease-smooth), opacity 0.45s var(--ease-smooth), scale 0.45s var(--ease-smooth), filter 0.45s var(--ease-smooth), border-color 0.45s var(--ease-smooth), box-shadow 0.45s var(--ease-smooth);
}

.work-card + .work-card {
  margin-left: 14px;
}

/* Card color themes */
.work-card-1 { --glow-rgb: 250, 204, 60;  --card-bg: 62, 50, 10; --card-bg-a: 0.3; }
.work-card-2 { --glow-rgb: 96, 165, 250;  --card-bg: 16, 42, 76; --card-bg-a: 0.3; }
.work-card-3 { --glow-rgb: 167, 139, 250; --card-bg: 45, 20, 72; --card-bg-a: 0.25; }
.work-card-4 { --glow-rgb: 56, 249, 215;  --card-bg: 12, 54, 40; --card-bg-a: 0.25; }

.work-card-1 {
  background: linear-gradient(90deg, transparent, rgba(250, 204, 60, 0.2) 50%, transparent) top / 100% 2px no-repeat,
              rgba(62, 50, 10, 0.3);
  border-color: rgba(250, 204, 60, 0.25);
}
.work-card-2 {
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2) 50%, transparent) top / 100% 2px no-repeat,
              rgba(16, 42, 76, 0.3);
  border-color: rgba(96, 165, 250, 0.25);
}
.work-card-3 {
  background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.2) 50%, transparent) top / 100% 2px no-repeat,
              rgba(45, 20, 72, 0.25);
  border-color: rgba(167, 139, 250, 0.25);
}
.work-card-4 {
  background: linear-gradient(90deg, transparent, rgba(56, 249, 215, 0.2) 50%, transparent) top / 100% 2px no-repeat,
              rgba(12, 54, 40, 0.25);
  border-color: rgba(56, 249, 215, 0.25);
}

/* Card sweep on hover */
.work-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(var(--glow-rgb), 0.1) 45%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(var(--glow-rgb), 0.1) 55%,
    transparent 60%
  );
  background-size: 250% 100%;
  background-position: 200% 0;
  border-radius: 16px;
  pointer-events: none;
  z-index: 1;
}

.work-card:hover::before {
  animation: cardSweep 0.6s ease-out forwards;
}

@keyframes cardSweep {
  from { background-position: 200% 0; }
  to { background-position: -50% 0; }
}

.work-card-1:hover { border-color: rgba(250, 204, 60, 0.5); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(250, 204, 60, 0.1); }
.work-card-2:hover { border-color: rgba(96, 165, 250, 0.5); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(96, 165, 250, 0.1); }
.work-card-3:hover { border-color: rgba(167, 139, 250, 0.5); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(167, 139, 250, 0.1); }
.work-card-4:hover { border-color: rgba(56, 249, 215, 0.5); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(56, 249, 215, 0.1); }

.work-card h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: rgba(var(--white-rgb), 0.85);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.45s var(--ease-smooth);
}

.work-card h3::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgb(var(--glow-rgb));
  flex-shrink: 0;
}

.work-card:hover h3 {
  color: #fff;
}

.work-card p {
  font-family: var(--font-cn);
  font-size: 14px;
  line-height: 1.7;
  color: rgba(var(--white-rgb), 0.55);
  transition: color 0.45s var(--ease-smooth);
  flex: 1;
}

.work-card:hover p {
  color: var(--text-muted);
}

.work-card-cta {
  display: block;
  margin-top: 14px;
  font-family: var(--font-cn);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(var(--glow-rgb), 0.8);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.35s ease, transform 0.35s ease, color 0.3s ease;
}

.work-card:hover .work-card-cta {
  opacity: 1;
  transform: translateY(0);
}

/* Idle floating */
.work-card-1 { animation: cardFloat 5s ease-in-out infinite; }
.work-card-2 { animation: cardFloat 4.5s ease-in-out infinite 0.8s; }
.work-card-3 { animation: cardFloat 5.5s ease-in-out infinite 1.6s; }
.work-card-4 { animation: cardFloat 4s ease-in-out infinite 0.4s; }

@keyframes cardFloat {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -14px; }
}

/* ========================================
   Contact Section
   ======================================== */

.section-contact {
  padding-top: 25vh;
  gap: 48px;
}

.contact-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
}

.contact-item:hover {
  color: var(--color-accent);
  transform: translateY(-4px);
}

.contact-icon {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(var(--accent-rgb), 0.12);
  background: rgba(var(--accent-rgb), 0.03);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.contact-item:hover .contact-icon {
  border-color: rgba(var(--accent-rgb), 0.35);
  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.15);
  background: rgba(var(--accent-rgb), 0.06);
}

.contact-icon svg {
  opacity: 0.75;
  transition: opacity 0.3s ease;
}

.contact-item:hover .contact-icon svg {
  opacity: 1;
}

.contact-item span {
  font-family: var(--font-cn);
  font-size: 14px;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* Hover ripple */
.contact-icon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid transparent;
  pointer-events: none;
}

.contact-item:hover .contact-icon::after {
  animation: iconRipple 1.5s ease-out infinite;
}

@keyframes iconRipple {
  0% { inset: 0; border-color: rgba(var(--accent-rgb), 0.3); opacity: 1; }
  100% { inset: -14px; border-color: rgba(var(--accent-rgb), 0); opacity: 0; }
}

/* Copyright */
.contact-copy {
  margin-top: auto;
  padding-bottom: 40px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  background: linear-gradient(90deg, rgba(var(--white-rgb), 0.2), rgba(var(--accent-rgb), 0.4), rgba(var(--white-rgb), 0.2));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: copyShimmer 4s linear infinite;
}

@keyframes copyShimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* ========================================
   Responsive
   ======================================== */

@media (max-width: 1023px) {
  .about-stats {
    gap: 48px;
  }
}

@media (max-width: 767px) {
  .home {
    scroll-snap-type: none;
  }

  .section-hero,
  .section-about,
  .section-constellation,
  .section-works,
  .section-contact {
    scroll-snap-align: none;
    scroll-snap-stop: normal;
    min-height: auto;
    padding-top: 12vh;
  }

  .about-stats {
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }

  .about-inner {
    gap: 48px;
  }

  .timeline {
    flex-direction: column;
    align-items: center;
  }

  .timeline-line {
    width: 2px;
    height: 40px;
    flex: none;
    margin: 0;
  }

  .timeline-line::before {
    background: linear-gradient(180deg, rgba(var(--accent-rgb), 0.35), rgba(56, 249, 215, 0.15));
  }

  .constellation {
    aspect-ratio: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 0;
    width: 100%;
  }

  .constellation-lines { display: none; }

  .star-node {
    position: static;
    transform: none;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    text-align: left;
    padding: 16px 18px;
    border-radius: 12px;
    background: rgba(var(--accent-rgb), 0.02);
    border: 1px solid rgba(var(--accent-rgb), 0.06);
  }

  .star-core {
    flex-shrink: 0;
    margin: 6px 0 0;
  }

  .star-info {
    width: auto !important;
    flex: 1;
    text-align: left !important;
    transform: none !important;
    margin-left: 0 !important;
  }

  .star-info h3 { font-size: 15px; }
  .star-info p { font-size: 14px; }

  .works-grid {
    flex-direction: column;
    gap: 16px;
    perspective: none;
    transform-style: flat;
  }

  .work-card {
    width: 100% !important;
    margin-left: 0 !important;
    padding: 24px 20px !important;
    animation: none !important;
  }

  .work-card::before { display: none; }
  .work-card-cta { display: none; }

  .section-contact {
    padding: 12vh 24px 80px;
  }

  .contact-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 16px;
    justify-items: center;
    width: 100%;
    max-width: 280px;
  }

  .contact-icon {
    width: 48px;
    height: 48px;
  }

  .contact-icon svg {
    width: 22px;
    height: 22px;
  }

  .contact-item span {
    font-size: 13px;
  }

  .contact-copy {
    font-size: 12px;
  }

  .page-nav {
    display: none;
  }

  .scroll-hint {
    display: none;
  }
}
</style>
