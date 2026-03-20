<template>
  <OfflineIndicator />
  
  <!-- Header -->
  <header class="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-800 pt-safe">
    <div class="flex items-center justify-between px-4 h-14 max-w-md mx-auto">
      <h1 class="text-xl font-bold text-slate-100 flex items-center gap-2">
        <span class="text-2xl">🌴</span>
        <span v-if="state.currentTab === 'day'">沖繩自助指南</span>
        <span v-else-if="state.currentTab === 'checklist'">行前清單</span>
        <span v-else>親子便利貼</span>
      </h1>
      <!-- Weather Icon maybe? -->
      <span v-if="state.currentTab === 'day'" class="text-2xl">☀️</span>
    </div>
    
    <!-- Day Tabs nested inside header area for day view -->
    <DayTabs v-if="state.currentTab === 'day'" />
  </header>

  <!-- Main Content -->
  <main class="w-full">
    <Transition name="fade-slide" mode="out-in">
      <DayView v-if="state.currentTab === 'day'" />
      <ChecklistView v-else-if="state.currentTab === 'checklist'" />
      <ChildView v-else />
    </Transition>
  </main>

  <SOSButton />
  <BottomNav />
  <IOSInstallGuide />
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { provideNavigation } from '@/composables/useNavigation'
import { useCurrentDay } from '@/composables/useCurrentDay'

// Components
import OfflineIndicator from '@/components/OfflineIndicator.vue'
import DayTabs from '@/components/DayTabs.vue'
import SOSButton from '@/components/SOSButton.vue'
import BottomNav from '@/components/BottomNav.vue'
import IOSInstallGuide from '@/components/IOSInstallGuide.vue'

// Pages
import DayView from '@/pages/DayView.vue'
import ChecklistView from '@/pages/ChecklistView.vue'
import ChildView from '@/pages/ChildView.vue'

// Logic
const navContext = provideNavigation()
const { state } = navContext
const currentDay = useCurrentDay(navContext)

onMounted(() => {
  // Automatically switch to today based on useCurrentDay
  state.currentDay = currentDay.value

  // Initial scroll handling to prevent iOS gap issues
  window.scrollTo(0, 0)
})

watch(() => state.currentTab, () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
watch(() => state.currentDay, () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>

<style>
/* Global Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
