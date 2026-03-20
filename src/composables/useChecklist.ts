import { ref, watch, computed } from 'vue'
import type { ChecklistItem } from '@/data/types'
import { checklistItems as initialChecklistItems } from '@/data/checklist'

// 將 items 維持在根作用域當作簡易的 Singleton 全域狀態，確保多處呼叫 useChecklist() 也是同一份資料
const items = ref<ChecklistItem[]>([])
let isInitialized = false

const LOCAL_STORAGE_KEY = 'okinawa-trip-checklist'

export function useChecklist() {
  // 如果尚未初始化，嘗試從 localStorage 讀取
  if (!isInitialized) {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData)
        // 使用 MAP 紀錄已存入之項目，防範後來新增的 Checklist 項目遭到覆蓋
        const checkedMap = new Map(parsed.map((item: any) => [item.id, item.checked]))
        
        items.value = initialChecklistItems.map((item) => ({
          ...item,
          checked: checkedMap.has(item.id) ? !!checkedMap.get(item.id) : false
        }))
      } catch (err) {
        // 如果 JSON 解析錯誤，回復全部預設值未勾選
        items.value = initialChecklistItems.map((item) => ({ ...item, checked: false }))
      }
    } else {
      // 沒有資料時，全部初始化為未勾選
      items.value = initialChecklistItems.map((item) => ({ ...item, checked: false }))
    }

    // 監聽變更並自動本地儲存
    watch(
      items,
      (newItems) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems))
      },
      { deep: true }
    )

    isInitialized = true
  }

  // 切換已完成/未完成狀態
  const toggle = (id: string) => {
    const item = items.value.find((i) => i.id === id)
    if (item) {
      item.checked = !item.checked
    }
  }

  // 一次性重置
  const resetAll = () => {
    items.value.forEach((item) => {
      item.checked = false
    })
  }

  // 計算所有項目的進度 (done, total, percent)
  const progress = computed(() => {
    const total = items.value.length
    const done = items.value.filter((i) => i.checked).length
    const percent = total > 0 ? Math.round((done / total) * 100) : 0
    return { done, total, percent }
  })

  // 以分類來計算進度
  const progressByCategory = computed(() => {
    const record: Record<string, { done: number; total: number }> = {}
    
    items.value.forEach((item) => {
      if (!record[item.category]) {
        record[item.category] = { done: 0, total: 0 }
      }
      record[item.category].total += 1
      if (item.checked) {
        record[item.category].done += 1
      }
    })
    
    return record
  })

  return {
    items,
    toggle,
    resetAll,
    progress,
    progressByCategory
  }
}
