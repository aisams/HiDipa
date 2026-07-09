<template>
  <div class="page container">
    <h1 class="page-title">Blog</h1>
    <p class="page-subtitle">技术笔记与随笔，记录学习过程中的思考与发现。</p>
    <div class="blog-list">
      <article class="blog-item card" v-for="post in posts" :key="post.title">
        <time class="blog-date" :datetime="post.date">{{ post.date }}</time>
        <h3 class="blog-title">{{ post.title }}</h3>
        <p class="blog-excerpt">{{ post.excerpt }}</p>
        <div class="blog-tags" v-if="post.tags">
          <span class="tag" v-for="t in post.tags" :key="t">{{ t }}</span>
        </div>
      </article>
    </div>
    <p class="blog-empty" v-if="!posts.length">还没有文章，敬请期待。</p>
  </div>
</template>

<script setup>
const posts = [
  {
    title: '从零搭建个人博物馆',
    date: '2026-07-08',
    excerpt: '用 Vue 3 + Vite 从零构建一个黑金主题的个人站点，记录搭建过程与技术选型。',
    tags: ['Vue 3', 'Vite', 'GitHub Pages'],
  },
]
</script>

<style scoped>
.blog-list {
  margin-top: var(--stack-md);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-item {
  cursor: default;
}

.blog-date {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-dim);
}

.blog-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-block: 8px 8px;
}

.blog-excerpt {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 16px;
}

.blog-tags {
  display: flex;
  gap: 8px;
}

.blog-empty {
  text-align: center;
  color: var(--text-muted);
  padding-block: 60px;
}
</style>
