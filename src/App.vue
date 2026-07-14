<template>
  <div class="app">
    <Header v-if="!isHome" />
    <main class="main" :class="{ 'main-home': isHome }" id="main">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
    <Footer v-if="!isHome" />
    <!-- Global background effects -->
    <Starfield />
    <CursorGlow />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Starfield from './components/Starfield.vue'
import CursorGlow from './components/CursorGlow.vue'

const route = useRoute()
const isHome = computed(() => route.name === 'Home')
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  position: relative;
  z-index: 2;
}

.main-home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
