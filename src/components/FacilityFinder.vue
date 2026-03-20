<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold flex items-center gap-2 text-slate-100">
      <span class="text-2xl">🍼</span> 親子友善設施速查
    </h2>
    
    <!-- Accordions -->
    <details v-for="group in groups" :key="group.id" class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
      <summary class="flex justify-between items-center font-bold p-4 bg-slate-800/80 cursor-pointer touch-target select-none text-slate-200">
        <span class="flex items-center gap-2">
          <span class="text-2xl">{{ group.icon }}</span>
          {{ group.title }}
          <span class="ml-2 bg-slate-700/50 text-sky-400 px-2 py-0.5 rounded-full text-xs font-mono">{{ group.items.length }}</span>
        </span>
        <span class="text-slate-500 transition-transform duration-300 group-open:rotate-180">▼</span>
      </summary>
      
      <div class="p-4 border-t border-slate-700 space-y-3">
        <div v-if="group.items.length === 0" class="text-sm text-slate-500 italic text-center py-4">
          沒有符合的設施
        </div>
        
        <div v-for="(item, idx) in group.items" :key="idx" class="flex flex-col gap-1 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <div class="flex items-baseline justify-between mb-1">
            <span class="font-bold text-sky-400">{{ item.spotName }}</span>
            <span class="text-xs text-slate-500 font-mono tracking-wider">{{ item.dayId.toUpperCase() }}</span>
          </div>
          <div class="text-sm text-slate-300">{{ item.desc }}</div>
        </div>
      </div>
    </details>

    <!-- Emergency Hospitals -->
    <details class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
      <summary class="flex justify-between items-center font-bold p-4 bg-slate-800/80 cursor-pointer touch-target select-none text-slate-200">
        <span class="flex items-center gap-2">
          <span class="text-2xl">🏥</span> 小兒急診與醫療
        </span>
        <span class="text-slate-500 transition-transform duration-300 group-open:rotate-180">▼</span>
      </summary>
      <div class="p-4 border-t border-slate-700 space-y-4">
        <div class="bg-red-900/20 border border-red-900/50 p-3 rounded-xl">
          <h4 class="font-bold text-red-500 mb-2">🚨 健康照護指南</h4>
          <ul class="text-sm text-slate-300 list-disc pl-5 space-y-1">
            <li>看診前請確認醫院是否有外語支援或使用翻譯軟體。</li>
            <li>出發前備妥常備藥：退燒藥、腸胃藥、外傷藥膏。</li>
            <li>緊急狀況請直撥 119 叫救護車。</li>
          </ul>
        </div>

        <div v-for="hosp in hospitals" :key="hosp.label" class="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <div class="font-bold text-slate-200 mb-1">{{ hosp.label }}</div>
          <a :href="'tel:' + hosp.phone" class="font-mono text-sky-400 font-bold block mb-1 touch-target inline-flex items-center">{{ hosp.phone }} 📞</a>
          <div v-if="hosp.note" class="text-xs text-slate-400">{{ hosp.note }}</div>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { spots } from '@/data/spots'
import { emergencyContacts } from '@/data/emergency'

const hospitals = computed(() => {
  return emergencyContacts.filter(c => c.label.includes('醫院') || c.label.includes('病院') || c.id.includes('hosp'))
})

const groups = computed(() => {
  const nursing: any[] = []
  const diaper: any[] = []
  const play: any[] = []
  
  // Extract all facilities
  for (const spot of spots) {
    if (!spot.facilities) continue
    
    if (spot.facilities.nursingRoom) {
      nursing.push({
        spotName: spot.name,
        dayId: spot.dayId,
        desc: '有提供'
      })
    }
    if (spot.facilities.diaperChange) {
      diaper.push({
        spotName: spot.name,
        dayId: spot.dayId,
        desc: '有提供'
      })
    }
    if (spot.facilities.playArea) {
      play.push({
        spotName: spot.name,
        dayId: spot.dayId,
        desc: '孩童放電區 / 遊戲區'
      })
    }
  }

  return [
    { id: 'nursing', title: '哺乳室', icon: '🍼', items: nursing },
    { id: 'diaper', title: '換尿布台', icon: '🚼', items: diaper },
    { id: 'play', title: '放電設施', icon: '🧸', items: play },
  ]
})
</script>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
