import { onMounted, onBeforeUnmount } from 'vue'

export function useReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const targets = document.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  function refresh() {
    // Re-scan for new .reveal elements (call after DOM updates)
    if (!observer) return
    const targets = document.querySelectorAll('.reveal:not([data-observed])')
    targets.forEach((el) => {
      el.setAttribute('data-observed', '')
      observer.observe(el)
    })
  }

  return { refresh }
}
