import { computed, onMounted } from 'vue'
import { useNavigation, type DayId, type NavigationState } from './useNavigation'

export function useCurrentDay(navContext?: { state: NavigationState, setDay: (day: DayId) => void }) {
  const { state, setDay } = navContext || useNavigation()

  onMounted(() => {
    // 轉為日本時區時間
    const nowInTokyo = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }))
    const month = nowInTokyo.getMonth() + 1
    const date = nowInTokyo.getDate()

    let detectedDay: DayId = 'day1'

    // 依據旅行日期（5/8 - 5/11）設定 Day1 ~ Day4
    if (month === 5 && date === 8) {
      detectedDay = 'day1'
    } else if (month === 5 && date === 9) {
      detectedDay = 'day2'
    } else if (month === 5 && date === 10) {
      detectedDay = 'day3'
    } else if (month === 5 && date === 11) {
      detectedDay = 'day4'
    } else {
      // 如果不在旅行日期內，預設回傳 Day1
      detectedDay = 'day1'
    }

    setDay(detectedDay)
  })

  // 回傳包含 currentDay 取值的 ref 綁定 (依據要求回傳 ref)
  return computed(() => state.currentDay)
}
