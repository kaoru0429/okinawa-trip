<template>
  <div class="px-4 py-8 pb-32 max-w-md mx-auto min-h-screen bg-slate-950">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-100 mb-2">準備清單</h1>
      <div class="flex items-center justify-between text-sky-400 font-medium bg-sky-950/30 p-4 rounded-2xl border border-sky-900/50">
        <span class="text-2xl font-bold">{{ progress.done }} / {{ progress.total }}</span>
        <span class="text-lg">{{ progress.percent }}% 完成</span>
      </div>
      
      <div class="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
        <div 
          class="h-full bg-sky-500 transition-all duration-700 ease-out rounded-full"
          :style="{ width: `${progress.percent}%` }"
        ></div>
      </div>
    </div>

    <div class="space-y-6">
      <ChecklistGroup 
        v-for="(items, category) in groupedItems" 
        :key="category"
        :category="category"
        :items="items"
        @toggle="toggle"
      />
    </div>

    <!-- Reset Button -->
    <div class="mt-12 text-center pb-8">
      <button 
        @click="confirmReset" 
        class="text-red-500/80 hover:text-red-500 text-sm font-bold bg-transparent border border-red-500/30 hover:border-red-500/80 px-6 py-3 rounded-full transition-all touch-target"
      >
        重置全部清單
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChecklist } from '@/composables/useChecklist'
import ChecklistGroup from '@/components/ChecklistGroup.vue'

const { items, toggle, resetAll, progress } = useChecklist()

const groupedItems = computed(() => {
  const groups: Record<string, typeof items.value> = {}
  for (const item of items.value) {
    if (!groups[item.category]) {
      groups[item.category] = []
    }
    groups[item.category].push(item)
  }
  return groups
})

const confirmReset = () => {
  if (window.confirm('確定要清除所有已勾選的項目嗎？此動作無法復原。')) {
    resetAll()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
