<template>
  <div class="px-4 py-6 pb-32 max-w-md mx-auto space-y-8 min-h-screen bg-slate-950">
    <FacilityFinder />
    
    <div class="space-y-4">
      <h2 class="text-xl font-bold flex items-center gap-2 text-slate-100">
        <span class="text-2xl">🗣️</span> 旅遊日語速查
      </h2>
      <PhraseFinder />
    </div>

    <div class="space-y-4">
      <h2 class="text-xl font-bold flex items-center gap-2 text-slate-100">
        <span class="text-2xl">🇯🇵</span> 攻略與禮儀
      </h2>
      
      <!-- 文化禮儀 -->
      <details class="group bg-emerald-950/30 border border-emerald-900/50 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
        <summary class="flex justify-between items-center font-bold p-4 cursor-pointer touch-target select-none text-emerald-400">
          <span class="flex items-center gap-2">
            <span class="text-2xl">🍽️</span> 文化禮儀
          </span>
          <span class="opacity-70 transition-transform duration-300 group-open:rotate-180">▼</span>
        </summary>
        <div class="p-4 border-t border-emerald-900/50 space-y-5 bg-emerald-950/20">
          <div v-for="tip in culturalTips" :key="tip.id">
            <h4 class="font-bold text-emerald-300 mb-2 border-b border-emerald-900/50 pb-1 flex items-center gap-2">
              <span class="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded">{{ tip.category }}</span>
              {{ tip.title }}
            </h4>
            <ul class="space-y-2 text-sm text-emerald-100/80 pl-5 list-disc">
              <li v-for="(item, idx) in tip.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </div>
      </details>
      
      <!-- 省錢攻略 -->
      <details class="group bg-yellow-950/30 border border-yellow-900/50 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
        <summary class="flex justify-between items-center font-bold p-4 cursor-pointer touch-target select-none text-yellow-500">
          <span class="flex items-center gap-2">
            <span class="text-2xl">💰</span> 省錢攻略
          </span>
          <span class="opacity-70 transition-transform duration-300 group-open:rotate-180">▼</span>
        </summary>
        <div class="p-4 border-t border-yellow-900/50 space-y-5 bg-yellow-950/20">
          <div v-for="tip in moneySavingTips" :key="tip.id">
            <h4 class="font-bold text-yellow-400 mb-2 border-b border-yellow-900/50 pb-1 flex items-center gap-2">
              <span class="text-xs bg-yellow-900/50 text-yellow-500 px-2 py-0.5 rounded">{{ tip.category }}</span>
              {{ tip.title }}
            </h4>
            <ul class="space-y-2 text-sm text-yellow-100/80 pl-5 list-disc">
              <li v-for="(item, idx) in tip.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </div>
      </details>
    </div>

    <!-- 備案 -->
    <BackupPlanCard :dayId="state.currentDay" />

    <!-- 車上備品清單 -->
    <div class="space-y-4">
      <h2 class="text-xl font-bold flex items-center gap-2 text-slate-100">
        <span class="text-2xl">🚗</span> 租車 / 車上備品確認
      </h2>
      <div class="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl">
        <ul class="space-y-2 text-slate-300 text-sm">
          <li v-for="(item, idx) in carItems" :key="idx" class="flex flex-col gap-1 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 touch-target active:bg-slate-800 transition-colors" @click="toggleLocalItem(idx)">
            <div class="flex items-center gap-3">
              <div 
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-transform duration-300"
                :class="localChecked[idx] ? 'bg-sky-500 border-sky-500 text-white scale-110' : 'border-slate-600 border-dashed'"
              >
                <svg v-if="localChecked[idx]" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="font-medium" :class="localChecked[idx] ? 'line-through text-slate-500' : 'text-slate-200'">{{ item.label }}</span>
            </div>
            <div class="text-xs text-slate-500 ml-9">{{ item.desc }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '@/composables/useNavigation'
import { culturalTips, moneySavingTips } from '@/data/tips'
import FacilityFinder from '@/components/FacilityFinder.vue'
import PhraseFinder from '@/components/PhraseFinder.vue'
import BackupPlanCard from '@/components/BackupPlanCard.vue'

const { state } = useNavigation()

const carItems = [
  { label: '遮陽簾', desc: '沖繩太陽大，避免後座孩童曬傷' },
  { label: '車用垃圾袋', desc: '保持車內清潔' },
  { label: '嘔吐備品', desc: '塑膠袋、濕紙巾' },
  { label: '車用快充', desc: '確保導航手機電量充足' },
  { label: '面紙包', desc: '車內隨時需要' },
  { label: '防曬與墨鏡', desc: '駕駛與乘客防曬' }
]

const localChecked = ref(Array(carItems.length).fill(false))

const toggleLocalItem = (idx: number) => {
  localChecked.value[idx] = !localChecked.value[idx]
}
</script>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
