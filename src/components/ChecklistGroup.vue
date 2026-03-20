<template>
  <div class="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-xl shadow-black/20">
    <div class="flex justify-between items-end mb-3">
      <h3 class="font-bold tracking-wider text-slate-100 uppercase text-sm">{{ category }}</h3>
      <div class="text-xs font-mono text-slate-400 font-bold bg-slate-800 px-2 py-1 rounded">{{ doneCount }}/{{ totalCount }} 完成</div>
    </div>
    
    <!-- Progress Bar -->
    <div class="w-full h-1.5 bg-slate-800 rounded-full mb-4 overflow-hidden">
      <div 
        class="h-full bg-sky-500 transition-all duration-500 ease-out rounded-full"
        :style="{ width: `${progressPercent}%` }"
      ></div>
    </div>

    <!-- Items -->
    <ul class="space-y-1">
      <li 
        v-for="item in items" 
        :key="item.id"
        class="group"
      >
        <button 
          @click="$emit('toggle', item.id)"
          class="w-full flex items-center gap-3 p-3 rounded-xl touch-target text-left transition-colors hover:bg-slate-800/50 active:bg-slate-800"
        >
          <!-- Custom Checkbox -->
          <div 
            class="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-transform duration-300 transform group-active:scale-90"
            :class="item.checked ? 'bg-sky-500 border-sky-500 text-white scale-110' : 'border-slate-600 border-dashed'"
          >
            <svg v-if="item.checked" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <span 
            class="transition-all duration-300 font-medium"
            :class="item.checked ? 'line-through text-slate-500' : 'text-slate-200'"
          >
            {{ item.label }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChecklistItem } from '@/data/types'

const props = defineProps<{
  category: string
  items: ChecklistItem[]
}>()

defineEmits<{
  (e: 'toggle', id: string): void
}>()

const totalCount = computed(() => props.items.length)
const doneCount = computed(() => props.items.filter(item => item.checked).length)
const progressPercent = computed(() => totalCount.value === 0 ? 0 : Math.round((doneCount.value / totalCount.value) * 100))
</script>
