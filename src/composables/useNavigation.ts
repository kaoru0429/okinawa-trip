import { reactive, provide, inject } from 'vue'
import type { TabId } from '@/data/types'

export type DayId = 'day1' | 'day2' | 'day3' | 'day4'

export interface NavigationState {
  currentTab: TabId
  currentDay: DayId
}

const NavigationSymbol = Symbol('navigation')

/**
 * 於根組件 (App.vue) 提供 Navigation 全域狀態
 */
export function provideNavigation() {
  const state = reactive<NavigationState>({
    currentTab: 'day',
    currentDay: 'day1'
  })

  const setTab = (tab: TabId) => {
    state.currentTab = tab
    // 依據提示，切換頁籤時回到最上方
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const setDay = (day: DayId) => {
    state.currentDay = day
    // 切換日期時回到最上方
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigationContext = {
    state,
    setTab,
    setDay
  }

  provide(NavigationSymbol, navigationContext)

  return navigationContext
}

/**
 * 其他子組件取得 Navigation 狀態的 Composable
 */
export function useNavigation() {
  const context = inject<ReturnType<typeof provideNavigation>>(NavigationSymbol)
  
  if (!context) {
    throw new Error('useNavigation() must be used within a component that calls provideNavigation()')
  }
  
  return context
}
