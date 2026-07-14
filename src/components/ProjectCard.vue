<template>
  <router-link :to="link" class="project-card card">
    <div class="project-thumb" v-if="thumb">
      <img :src="thumb" :alt="title" loading="lazy" />
    </div>
    <div class="project-body">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-desc">{{ description }}</p>
      <div class="project-tags" v-if="tags && tags.length">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  thumb: { type: String, default: '' },
  link: { type: String, default: '#' },
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  text-decoration: none;
}

.project-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--border);
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-thumb img {
  transform: scale(1.05);
}

.project-body {
  padding: 24px;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text);
}

.project-card:hover .project-title {
  color: var(--color-accent);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
