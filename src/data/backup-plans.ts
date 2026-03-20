import type { BackupPlan } from './types'

export const backupPlans: BackupPlan[] = [
  // 身體不適 Plan B
  {
    dayId: 'day2',
    trigger: '🤒 身體不適',
    plan: '取消水族館 → ANA萬座飯店內活動（遊戲室/泳池/海灘散步）',
    advantages: '無需退票、無需長途駕駛、飯店內有醫療支援'
  },
  {
    dayId: 'day3',
    trigger: '🤒 身體不適',
    plan: '取消兒童王國 → 永旺來客夢室內活動（購物/用餐/兒童遊戲區）',
    advantages: '提早還車、回飯店休息'
  },
  {
    dayId: 'day4',
    trigger: '🤒 身體不適',
    plan: '取消首里城 → 國際通周邊輕鬆活動 / 飯店休息',
    advantages: '提早前往機場備位、減少奔波體力消耗'
  },

  // 天氣不佳 Plan B
  {
    dayId: 'day2',
    trigger: '🌧️ 天氣不佳',
    plan: '保留水族館（室內為主）；取消古宇利島 → 名護 AEON 購物中心',
    advantages: '躲避海風雨水，增加室內備案時間'
  },
  {
    dayId: 'day3',
    trigger: '🌧️ 天氣不佳',
    plan: '取消兒童王國 → 沖繩縣立博物館・美術館（室內，適合親子），或改為永旺來客夢全日活動',
    advantages: '室內設施完善，不受下雨干擾'
  },
  {
    dayId: 'day4',
    trigger: '🌧️ 天氣不佳',
    plan: '首里城有室內展區，可撐傘參觀外圍；取消波上宮 → 牧志公設市場 / RYUBO 百貨（室內）',
    advantages: '保持行程順暢，同時有室內空間避雨'
  },

  // 塞車應對策略
  {
    dayId: 'day1',
    trigger: '🚗 塞車',
    plan: '每 60-90 分鐘停靠休息站讓孩子活動（如：伊芸SA），準備充足零食飲水及車上娛樂（繪本/貼紙/平板）',
    advantages: '及時安撫孩子情緒，避免在車上長時間哭鬧'
  },
  {
    dayId: 'day2',
    trigger: '🚗 塞車',
    plan: '若石川IC高速車速<40km/h → 下交流道改走58號國道。前往休息站「道の駅かでな」看美軍基地飛機起降',
    advantages: '避開高速車流停滯路段，讓孩子下車走動並轉移注意力'
  }
]
