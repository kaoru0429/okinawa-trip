<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-800 pb-safe">
    <div class="flex justify-around items-center h-16 w-full max-w-md mx-auto px-2">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="flex-1 flex flex-col items-center justify-center h-full min-h-[48px] touch-target transition-colors"
        :class="state.currentTab === tab.id ? 'text-sky-400' : 'text-slate-500'"
        @click="setTab(tab.id)"
      >
        <span class="text-xl mb-1 leading-none">{{ tab.icon }}</span>
        <span class="text-xs font-medium">{{ tab.label }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation'
import type { TabId } from '@/data/types'

const { state, setTab } = useNavigation()

const tabs: { id: TabId, icon: string, label: string }[] = [
  { id: 'day', icon: '📅', label: '行程' },
  { id: 'checklist', icon: '✅', label: '清單' },
  { id: 'child', icon: '👶', label: '親子' }
]
</script>
