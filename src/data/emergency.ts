import type { EmergencyContact } from './types'

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'em-police',
    icon: '🚓',
    label: '報警',
    phone: '110',
    note: '',
    bgColor: 'bg-red-900/50'
  },
  {
    id: 'em-ambulance',
    icon: '🚑',
    label: '救護車/消防',
    phone: '119',
    note: '海上事故：118',
    bgColor: 'bg-red-900/50'
  },
  {
    id: 'em-ots-CS',
    icon: '🚗',
    label: 'OTS 租車中文客服',
    phone: '098-856-8877',
    note: '8:00-19:00',
    bgColor: 'bg-amber-900/50'
  },
  {
    id: 'em-ots-rescue',
    icon: '🔧',
    label: 'OTS 24小時道路救援',
    phone: '0120-34-3732',
    note: '',
    bgColor: 'bg-amber-900/50'
  },
  {
    id: 'em-hotel-manza',
    icon: '🏨',
    label: 'ANA萬座飯店 (Day1-2)',
    phone: '098-966-1211',
    note: '',
    bgColor: 'bg-emerald-900/50'
  },
  {
    id: 'em-hotel-naha',
    icon: '🏨',
    label: '那霸國際通飯店 (Day3)',
    phone: '待確認',
    note: '',
    bgColor: 'bg-emerald-900/50'
  },
  {
    id: 'em-hosp-chubu',
    icon: '🏥',
    label: '沖繩縣立中部醫院',
    phone: '098-973-4111',
    note: '24小時急診，有中文翻譯服務',
    bgColor: 'bg-blue-900/50'
  },
  {
    id: 'em-hosp-naha',
    icon: '🏥',
    label: '那霸市立病院',
    phone: '098-884-5111',
    note: 'Day3-4，單軌市立病院前站，24小時急診',
    bgColor: 'bg-blue-900/50'
  },
  {
    id: 'em-pharmacy',
    icon: '💊',
    label: 'Daikoku Drug 藥局',
    phone: '098-867-3910',
    note: '國際通店，常備藥品、兒童藥品',
    bgColor: 'bg-blue-900/50'
  },
  {
    id: 'em-tw-office',
    icon: '🏢',
    label: '台北駐日代表處那霸辦事處',
    phone: '098-862-7008',
    note: '緊急救難：+886-800-085-095',
    bgColor: 'bg-slate-800'
  },
  {
    id: 'em-tourist',
    icon: 'ℹ️',
    label: '沖繩觀光多語客服',
    phone: '098-851-5151',
    note: '中英文服務 9:00-18:00',
    bgColor: 'bg-slate-800'
  }
]

export const emergencySOP = [
  {
    title: '交通事故',
    steps: [
      '停車開雙閃',
      '確認人員安全',
      '報警 110',
      '聯絡 OTS 0120-34-3732',
      '拍照存證'
    ]
  },
  {
    title: '孩子身體不適',
    steps: [
      '輕微（感冒/流鼻涕）→ 藥局買兒童藥',
      '中度（發燒 37.5-38.5°C）→ 前往醫院看診',
      '嚴重（高燒 > 38.5°C / 嘔吐）→ 撥打 119 叫救護車'
    ]
  },
  {
    title: '車輛故障',
    steps: [
      '立即聯絡 OTS',
      '開雙閃',
      '放置三角警示牌',
      '等待道路救援'
    ]
  }
]
