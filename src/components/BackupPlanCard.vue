<template>
  <div v-if="filteredPlans.length > 0" class="space-y-4">
    <h2 class="text-xl font-bold flex items-center gap-2 text-slate-100">
      <span class="text-2xl">🌦️</span> 天氣/應急備案
    </h2>
    <div class="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-4">
      <details 
        v-for="plan in filteredPlans" 
        :key="plan.trigger" 
        class="group bg-slate-800 rounded-xl mb-3 last:mb-0 overflow-hidden border border-slate-700"
      >
        <summary class="flex justify-between items-center p-4 font-bold cursor-pointer touch-target select-none text-slate-200">
          <span class="flex items-center gap-2 text-sm sm:text-base">
            <span class="text-xl">{{ getTriggerIcon(plan.trigger) }}</span>
            {{ plan.trigger }}
          </span>
          <span class="text-slate-500 transition-transform duration-300 group-open:rotate-180">▼</span>
        </summary>
        <div class="p-4 border-t border-slate-700 bg-slate-800/50">
          <div class="mb-3">
            <h4 class="font-bold text-sky-400 mb-1 text-sm">🔄 備案方案</h4>
            <div class="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{{ plan.plan }}</div>
          </div>
          <div v-if="plan.advantages">
            <h4 class="font-bold text-emerald-400 mb-1 text-sm">✨ 優點 / 考量</h4>
            <div class="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{{ plan.advantages }}</div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { backupPlans } from '@/data/backup-plans'

const props = defineProps<{
  dayId: string
}>()

const filteredPlans = computed(() => {
  return backupPlans.filter(p => p.dayId === props.dayId)
})

const getTriggerIcon = (trigger: string) => {
  if (trigger.includes('雨天') || trigger.includes('天氣')) return '🌧️'
  if (trigger.includes('塞車') || trigger.includes('交通')) return '🚗'
  if (trigger.includes('不適') || trigger.includes('體力')) return '🤒'
  return '💡'
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
