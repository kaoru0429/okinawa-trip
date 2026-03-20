<template>
  <button 
    @click="isOpen = true" 
    class="fixed right-4 bottom-[5.5rem] w-14 h-14 bg-red-600 rounded-full shadow-lg shadow-red-900/50 flex items-center justify-center text-2xl z-40 touch-target animate-pulse hover:animate-none hover:bg-red-500 transition-colors"
  >
    🆘
  </button>

  <Teleport to="body">
    <Transition name="fade">
      <div v-show="isOpen" class="fixed inset-0 bg-black/60 backdrop-blur z-[100]" @click.self="isOpen = false">
        <Transition name="slide-up">
          <div v-show="isOpen" class="fixed bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto no-scrollbar bg-slate-900 rounded-t-3xl border-t border-slate-700 shadow-2xl p-4 safe-bottom">
            <!-- Drag Handle -->
            <div class="w-12 h-1.5 bg-slate-700 rounded-full mx-auto my-2 mb-6"></div>
            
            <h2 class="text-2xl font-bold text-red-500 mb-6 px-2 flex items-center gap-2">
              <span class="text-3xl">🛡️</span> 緊急聯絡卡
            </h2>

            <!-- Emergency Contacts List -->
            <div class="space-y-3 mb-8">
              <a 
                v-for="(contact, idx) in emergencyContacts" 
                :key="idx"
                :href="'tel:' + contact.phone"
                class="block p-4 rounded-xl border border-slate-700/50 flex items-start gap-3 touch-target active:bg-slate-700/50 transition-colors"
                :class="contact.bgColor || 'bg-slate-800'"
              >
                <span class="text-2xl mt-0.5">{{ contact.icon }}</span>
                <div class="flex-1">
                  <div class="font-bold text-slate-100 mb-1">{{ contact.label }}</div>
                  <div class="font-mono text-xl text-sky-400 font-bold mb-1">{{ contact.phone }}</div>
                  <div v-if="contact.note" class="text-xs text-slate-400">{{ contact.note }}</div>
                </div>
              </a>
            </div>

            <!-- Emergency SOP -->
            <h3 class="text-lg font-bold text-amber-500 mb-4 px-2">🚨 緊急 SOP</h3>
            <div class="space-y-3 mb-6">
              <details v-for="(v, k) in emergencySOP" :key="k" class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <summary class="p-4 font-bold text-slate-200 cursor-pointer touch-target select-none">
                  {{ v.title === '交通事故' ? '💥 交通事故處理' : v.title === '孩子身體不適' ? '🤒 孩子不適/發燒' : '🚗 車輛故障/爆胎' }}
                </summary>
                <div class="p-4 bg-slate-900 border-t border-slate-700 text-sm text-slate-300">
                  <ol class="list-decimal pl-5 space-y-2">
                    <li v-for="(step, sIdx) in v.steps" :key="sIdx">{{ step }}</li>
                  </ol>
                </div>
              </details>
            </div>
            
            <!-- Close Button -->
            <button @click="isOpen = false" class="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl touch-target transition-colors">
              關閉
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { emergencyContacts, emergencySOP } from '@/data/emergency'

const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
