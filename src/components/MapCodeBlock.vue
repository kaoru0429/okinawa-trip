<template>
  <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
    <!-- Copy Map Code Area -->
    <button 
      @click="copyMapCode" 
      class="w-full text-left p-4 min-h-[48px] touch-target hover:bg-slate-700/50 transition-colors active:bg-slate-700"
    >
      <div class="text-xs text-slate-400 mb-1 flex justify-between items-center">
        <span>{{ label || 'Map Code' }}</span>
        <span v-if="copied" class="text-emerald-400 font-bold transition-opacity">✅ 已複製</span>
        <span v-else class="opacity-50">點擊複製</span>
      </div>
      <div class="text-2xl sm:text-3xl font-mono text-white font-bold tracking-wider selectable">
        {{ mapCode }}
      </div>
    </button>
    
    <!-- Google Maps Link -->
    <a 
      v-if="googleMapsUrl" 
      :href="googleMapsUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="block w-full border-t border-slate-700 bg-slate-800/50 p-3 text-center text-sm font-medium text-sky-400 hover:bg-slate-700 transition-colors min-h-[48px] touch-target"
    >
      📍 用 Google Maps 導航 →
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  mapCode: string
  googleMapsUrl?: string | null
  label?: string
}>()

const copied = ref(false)

const copyMapCode = async () => {
  if (!props.mapCode) return
  
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.mapCode)
      showCopiedFeedback()
    } else {
      throw new Error('Clipboard API not available')
    }
  } catch (err) {
    // Fallback
    const textArea = document.createElement("textarea")
    textArea.value = props.mapCode
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      showCopiedFeedback()
    } catch (fallbackErr) {
      prompt('請手動複製 Map Code：', props.mapCode)
    }
    document.body.removeChild(textArea)
  }
}

const showCopiedFeedback = () => {
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
