<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div v-if="isVisible" class="fixed bottom-[4.5rem] left-4 right-4 z-[90]">
        <div class="bg-slate-800 rounded-2xl border border-slate-600 p-4 shadow-2xl relative">
          <!-- Close button -->
          <button @click="dismiss" class="absolute top-2 right-2 p-2 text-slate-400 hover:text-white touch-target rounded-full bg-slate-700/50 flex items-center justify-center w-8 h-8">
            ✕
          </button>
          
          <div class="pr-8">
            <h3 class="font-bold text-slate-100 mb-2">安裝應用程式獲得最佳體驗</h3>
            <p class="text-xs text-slate-400 mb-4 tracking-wide leading-relaxed">不需要網路也能離線查看行程與 Map Code！</p>
            
            <div class="space-y-3 text-sm text-slate-300">
              <div class="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700">
                <div class="w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center text-xs">1</div>
                <div>點擊下方工具列的 <span class="text-sky-400 font-bold px-1 bg-slate-800 rounded">分享</span></div>
              </div>
              <div class="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700">
                <div class="w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center text-xs">2</div>
                <div>選擇 <span class="bg-slate-100 text-black font-bold px-1.5 py-0.5 rounded text-xs mx-1">＋ 加入主畫面</span></div>
              </div>
              <div class="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700">
                <div class="w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center text-xs">3</div>
                <div>點擊右上角的 <span class="text-sky-400 font-bold px-1">新增</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Check if dismissed before
  const dismissed = localStorage.getItem('ios-install-dismissed')
  if (dismissed === 'true') return

  // Detect iOS Safari
  const userAgent = window.navigator.userAgent.toLowerCase()
  const isIos = /iphone|ipad|ipod/.test(userAgent)
  const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent)
  
  // Detect if running as standalone PWA
  const isStandalone = (window.navigator as any).standalone === true || window.matchMedia('(display-mode: standalone)').matches

  if (isIos && isSafari && !isStandalone) {
    // Show after 2 seconds
    setTimeout(() => {
      isVisible.value = true
    }, 2000)
  }
})

const dismiss = () => {
  isVisible.value = false
  localStorage.setItem('ios-install-dismissed', 'true')
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
