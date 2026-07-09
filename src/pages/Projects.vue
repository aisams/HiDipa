<template>
  <div class="page container">
    <h1 class="page-title">Projects</h1>
    <p class="page-subtitle">过往项目与作品集。</p>
    <div class="project-grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.title"
        :title="p.title"
        :description="p.description"
        :tags="p.tags"
        :thumb="p.thumb"
        :link="p.link"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'Synthetic Identity',
    description: 'AI 时代的个人 IP 品牌落地页，暗色玻璃态设计，纯静态 HTML/CSS 实现。',
    tags: ['HTML', 'CSS', 'Design'],
    thumb: '',
    link: 'https://github.com/aisams/hello',
  },
  {
    title: 'Personal Museum',
    description: '个人博物馆——你正在浏览的网站。Vue 3 + Vite 构建，黑金主题，存放履历与作品。',
    tags: ['Vue 3', 'Vite', 'SPA'],
    thumb: '',
    link: 'https://github.com/aisams/hello',
  },
]
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: var(--stack-md);
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
