<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="show" class="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div class="bg-slate-800/90 backdrop-blur-md rounded-full px-6 py-3 text-sm text-slate-200 border border-slate-700 shadow-xl flex items-center gap-2">
          <span>📴</span>
          <span class="font-medium">離線模式・所有資料可正常使用</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const triggerOfflineShow = () => {
  show.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    show.value = false
  }, 4000)
}

const handleOffline = () => {
  triggerOfflineShow()
}

onMounted(() => {
  window.addEventListener('offline', handleOffline)
  // 打開 App 時如果已經離線，顯示一次
  if (!navigator.onLine) {
    triggerOfflineShow()
  }
})

onUnmounted(() => {
  window.removeEventListener('offline', handleOffline)
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
