<template>
  <div
    class="cursor-glow"
    :class="{ active: visible }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

let mx = 0
let my = 0
let frame = 0

function onMove(e) {
  mx = e.clientX
  my = e.clientY
  if (!visible.value) visible.value = true
}

function onLeave() {
  visible.value = false
}

function update() {
  if (visible.value) {
    document.documentElement.style.setProperty('--mouse-x', mx + 'px')
    document.documentElement.style.setProperty('--mouse-y', my + 'px')
  }
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!isDesktop) return

  window.addEventListener('mousemove', onMove, { passive: true })
  document.addEventListener('mouseleave', onLeave)
  frame = requestAnimationFrame(update)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseleave', onLeave)
  cancelAnimationFrame(frame)
})
</script>

<style>
.cursor-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(56, 249, 215, 0.06),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-glow.active {
  opacity: 1;
}
</style>
