<template>
  <canvas ref="canvas" class="starfield-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let ctx = null
let stars = []
let raf = 0
let w = 0
let h = 0

const STAR_COUNT = 200

function initStars() {
  stars = []
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      phase: Math.random() * Math.PI * 2,
    })
  }
}

function resize() {
  w = window.innerWidth
  h = window.innerHeight
  if (canvas.value) {
    canvas.value.width = w
    canvas.value.height = h
  }
  initStars()
}

function draw() {
  ctx.clearRect(0, 0, w, h)

  const t = performance.now() * 0.001

  for (const s of stars) {
    const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * s.speed * 3 + s.phase))
    const alpha = s.a * twinkle * 0.8

    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    ctx.fill()

    // Glow for bigger stars
    if (s.r > 0.8) {
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(150,200,255,${alpha * 0.15})`
      ctx.fill()
    }
  }

  raf = requestAnimationFrame(draw)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  draw()
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.starfield-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
