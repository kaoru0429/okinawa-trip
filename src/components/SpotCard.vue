<template>
  <div class="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-4 shadow-xl shadow-black/20">
    <!-- Header -->
    <div class="flex flex-col mb-2">
      <span class="text-sky-400 font-mono text-lg font-bold">{{ spot.time }}</span>
      <h2 class="text-2xl font-bold text-slate-100">{{ spot.name }}</h2>
    </div>

    <!-- Map Code Block -->
    <MapCodeBlock 
      v-if="spot.mapCode" 
      :mapCode="spot.mapCode" 
      :googleMapsUrl="spot.googleMapsUrl"
      :label="'Map Code'"
    />

    <!-- Leave By Warning -->
    <div v-if="spot.leaveBy" class="bg-amber-900/30 border border-amber-700 rounded-lg p-3 my-3">
      <div class="flex items-start gap-2 text-amber-300">
        <span class="text-xl">⏰</span>
        <div>
          <span class="font-bold block">最晚離開時間：{{ spot.leaveBy.time }}</span>
          <span class="text-sm opacity-90">{{ spot.leaveBy.reason }}</span>
        </div>
      </div>
    </div>

    <!-- Logistics (Parking & Facilities) -->
    <div class="space-y-2 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
      <div v-if="spot.parking" class="flex items-start gap-2">
        <span>🅿️</span>
        <div>
          <span class="font-medium text-slate-200">{{ spot.parking.name }}</span>
          <span v-if="spot.parking.fee" class="text-slate-400 ml-2">({{ spot.parking.fee }})</span>
          <div v-if="spot.parking.strollerFriendly !== undefined" class="text-xs text-sky-300 mt-1">
            推車：{{ spot.parking.strollerFriendly ? '友善 (可直達)' : '需搬運' }}
          </div>
        </div>
      </div>
      
      <div v-if="spot.facilities?.nursingRoom" class="flex items-start gap-2">
        <span>🍼</span>
        <span>哺乳室：有提供</span>
      </div>
    </div>

    <!-- Tips and Warnings -->
    <ul v-if="spot.quickTips?.length" class="space-y-2 text-sm text-slate-300">
      <li v-for="(tip, idx) in spot.quickTips" :key="idx" class="flex items-start gap-2">
        <span class="shrink-0">💡</span>
        <span>{{ tip }}</span>
      </li>
    </ul>

    <ul v-if="spot.warnings?.length" class="space-y-2 text-sm text-amber-400">
      <li v-for="(warn, idx) in spot.warnings" :key="idx" class="flex items-start gap-2">
        <span class="shrink-0">⚠️</span>
        <span>{{ warn }}</span>
      </li>
    </ul>

    <!-- Insider Tips -->
    <div v-if="spot.insiderTips?.length" class="mt-4 pt-3 border-t border-emerald-900/30">
      <h3 class="text-emerald-400 font-bold mb-2 text-sm flex items-center gap-1">
        <span>⭐</span> 在地人秘訣
      </h3>
      <ul class="space-y-2 text-sm text-emerald-200/80">
        <li v-for="(tip, idx) in spot.insiderTips" :key="idx" class="flex items-start gap-2">
          <span class="opacity-50">•</span>
          <span>{{ tip }}</span>
        </li>
      </ul>
    </div>
    
    <!-- Crowd Avoidance -->
    <div v-if="spot.crowdAvoidance" class="flex items-start gap-2 text-sm text-cyan-400 bg-cyan-950/30 p-2 rounded-lg mt-2">
      <span class="shrink-0">👥</span>
      <span>{{ spot.crowdAvoidance }}</span>
    </div>

    <!-- Expandable Details -->
    <details v-if="spot.details || spot.dining || spot.backupPlan" class="group mt-4 border border-slate-700 rounded-xl overflow-hidden bg-slate-800/30">
      <summary class="cursor-pointer font-medium p-3 hover:bg-slate-800 transition-colors text-slate-300 select-none min-h-[48px] flex items-center touch-target relative">
        <span class="flex-1 text-center">展開詳情 ▾</span>
      </summary>
      
      <div class="p-4 border-t border-slate-700 space-y-4 text-sm text-slate-300 leading-relaxed bg-slate-800/80">
        <!-- Text Details -->
        <div v-if="spot.details" class="whitespace-pre-line">{{ spot.details }}</div>
        
        <!-- Dining -->
        <div v-if="spot.dining" class="border-t border-slate-700 pt-3">
          <h4 class="font-bold text-orange-400 mb-2">🍽️ 用餐建議</h4>
          <div v-for="(option, idx) in spot.dining" :key="idx" class="mb-3 last:mb-0">
            <div class="font-bold text-slate-200">{{ option.name }}</div>
            <div class="text-xs text-slate-400 mb-1" v-if="option.childFriendly">
              親子友善
            </div>
            <div class="text-slate-300">{{ option.recommendation }}</div>
            <div v-if="option.childFriendly" class="text-xs text-emerald-400 mt-1">✓ 親子友善</div>
          </div>
        </div>
        
        <!-- Backup Plan -->
        <div v-if="spot.backupPlan" class="border-t border-slate-700 pt-3 text-indigo-300">
          <h4 class="font-bold mb-1">🌧️ 雨天 / 異動備案</h4>
          <p>{{ spot.backupPlan }}</p>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { Spot } from '@/data/types'
import MapCodeBlock from './MapCodeBlock.vue'

defineProps<{
  spot: Spot
}>()
</script>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details[open] summary span {
  transform: rotate(180deg);
}
</style>
