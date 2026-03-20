<template>
  <div v-show="state.currentTab === 'day'" class="w-full bg-slate-900/95 backdrop-blur border-b border-slate-800">
    <div class="flex overflow-x-auto no-scrollbar px-4 py-3 gap-3 items-center max-w-md mx-auto">
      <button
        v-for="day in days"
        :key="day.id"
        class="flex-none px-5 py-2 rounded-full text-sm min-h-[48px] touch-target transition-all font-medium border border-transparent"
        :class="state.currentDay === day.id ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/20' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'"
        @click="setDay(day.id)"
      >
        <span class="mr-1 inline-block">{{ day.label }}</span>
        <span class="inline-block opacity-80">{{ day.date }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavigation, type DayId } from '@/composables/useNavigation'

const { state, setDay } = useNavigation()

const days: { id: DayId, label: string, date: string }[] = [
  { id: 'day1', label: 'Day1', date: '5/8' },
  { id: 'day2', label: 'Day2', date: '5/9' },
  { id: 'day3', label: 'Day3', date: '5/10' },
  { id: 'day4', label: 'Day4', date: '5/11' }
]
</script>
