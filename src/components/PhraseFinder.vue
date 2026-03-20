<template>
  <div class="space-y-4">
    <!-- Search Bar -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-slate-500">🔍</span>
      </div>
      <input 
        v-model="searchQuery" 
        type="text" 
        class="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl pl-10 pr-4 py-3 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all font-medium placeholder-slate-500"
        placeholder="搜尋中文或發音 (ex. sumimasen)"
      >
      <button 
        v-if="searchQuery" 
        @click="searchQuery = ''"
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 touch-target"
      >
        ✕
      </button>
    </div>

    <!-- Results (Filtered or Grouped) -->
    <div v-if="filteredGroups.length === 0" class="text-center py-8 text-slate-500">
      找不到相關短句 🤷‍♂️
    </div>

    <div v-else class="space-y-4">
      <details 
        v-for="group in filteredGroups" 
        :key="group.category" 
        class="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl shadow-black/20"
        :open="searchQuery.trim() !== ''"
      >
        <summary class="flex justify-between items-center font-bold p-4 bg-slate-800/80 cursor-pointer touch-target select-none text-slate-200">
          <span class="flex items-center gap-2">
            <span>🗣️</span> 
            <span>{{ group.category }}</span>
            <span class="ml-2 bg-slate-700/50 text-sky-400 px-2 py-0.5 rounded-full text-xs font-mono">{{ group.phrases.length }}</span>
          </span>
          <span class="text-slate-500 transition-transform duration-300 group-open:rotate-180">▼</span>
        </summary>
        
        <div class="p-4 border-t border-slate-700 space-y-3">
          <div 
            v-for="phrase in group.phrases" 
            :key="phrase.id"
            class="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <div class="font-bold text-slate-200 mb-1 flex items-start gap-2">
              <span class="shrink-0 leading-tight">🇯🇵</span> 
              <span class="text-lg leading-snug">{{ phrase.ja }}</span>
            </div>
            
            <div class="text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <span class="shrink-0 text-sm">🇹🇼</span> 
              <span>{{ phrase.zh }}</span>
            </div>
            
            <div class="font-mono text-sm text-sky-400 font-bold mb-2 bg-slate-900/50 p-2 rounded block">
              <span class="text-slate-500 mr-2 uppercase text-[10px] tracking-wider">Romaji</span>{{ phrase.romaji }}
            </div>
            
            <div v-if="phrase.phonetic" class="text-xs text-amber-300/80 mb-2 italic">
              💡 發音技巧：{{ phrase.phonetic }}
            </div>
            
            <details v-if="phrase.situation" class="mt-2 text-sm text-slate-400 border-t border-slate-700 pt-2">
              <summary class="cursor-pointer hover:text-slate-200 touch-target w-full inline-block min-h-[32px] font-medium transition-colors">📍 使用情境 ▸</summary>
              <div class="mt-2 text-slate-300">{{ phrase.situation }}</div>
            </details>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { phrases } from '@/data/phrases'

const searchQuery = ref('')

const filteredGroups = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  
  // Group by category
  const grouped = new Map<string, typeof phrases>()
  phrases.forEach(p => {
    if (!grouped.has(p.category)) grouped.set(p.category, [])
    grouped.get(p.category)!.push(p)
  })
  
  // Filter
  const result = []
  for (const [category, groupPhrases] of grouped.entries()) {
    const filtered = query 
      ? groupPhrases.filter(p => 
          p.zh.toLowerCase().includes(query) || 
          p.romaji.toLowerCase().includes(query) || 
          p.phonetic?.toLowerCase().includes(query)
        )
      : groupPhrases
      
    if (filtered.length > 0) {
      result.push({
        category,
        phrases: filtered
      })
    }
  }
  
  return result
})
</script>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details[open] summary span:last-child {
  transform: rotate(180deg);
}
</style>
