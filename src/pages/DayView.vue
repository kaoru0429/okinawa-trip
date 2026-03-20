<template>
  <div class="px-4 py-6 pb-32 max-w-md mx-auto min-h-screen bg-slate-950">
    <DrivingSafety v-if="state.currentDay === 'day1'" />
    
    <div class="space-y-6">
      <SpotCard 
        v-for="spot in currentSpots" 
        :key="spot.id" 
        :spot="spot" 
      />
      
      <div v-if="currentSpots.length === 0" class="text-center py-10 text-slate-500">
        目前這天沒有安排行程
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavigation } from '@/composables/useNavigation'
import { spots } from '@/data/spots'
import SpotCard from '@/components/SpotCard.vue'
import DrivingSafety from '@/components/DrivingSafety.vue'

const { state } = useNavigation()

const currentSpots = computed(() => {
  return spots.filter(spot => spot.dayId === state.currentDay).sort((a, b) => a.order - b.order)
})
</script>
