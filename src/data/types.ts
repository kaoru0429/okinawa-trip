/**
 * 停車場資訊
 */
export interface ParkingInfo {
  /** 停車場名稱 */
  name: string;
  /** 停車費用，例如 "免費" 或 "¥500/小時" */
  fee: string;
  /** 使用嬰兒推車是否方便 */
  strollerFriendly: boolean;
}

/**
 * 設施資訊
 */
export interface Facilities {
  /** 是否有哺乳室 */
  nursingRoom: boolean;
  /** 是否有換尿布台 */
  diaperChange: boolean;
  /** 是否有小兒急診（特定地點） */
  emergency?: boolean;
  /** 是否有兒童放電設施 */
  playArea?: boolean;
}

/**
 * 駕駛路段資訊
 */
export interface DrivingInfo {
  /** 預估行駛時間（分鐘） */
  duration: number;
  /** 預估行駛距離（公里） */
  distance: number;
  /** 路段描述或行車注意事項 */
  note?: string;
}

/**
 * 門票資訊
 */
export interface Admission {
  /** 門票價格或說明 */
  fee: string;
  /** 是否需要提前購票 */
  advanceTicketAvailable?: boolean;
}

/**
 * 建議離開時間資訊
 */
export interface LeaveBy {
  /** 建議離開時間，格式如 "16:00" */
  time: string;
  /** 必須離開的原因，例如 "避免塞車" */
  reason: string;
}

/**
 * 餐飲選項
 */
export interface DiningOption {
  /** 餐廳或餐飲名稱 */
  name: string;
  /** 推薦餐點或說明 */
  recommendation: string;
  /** 是否適合兒童 */
  childFriendly?: boolean;
}

/**
 * 雨天或其他狀況備案
 */
export interface BackupPlan {
  /** 關聯的行程天數 ID，例如 "day1" */
  dayId: string;
  /** 觸發條件（例如: "天氣不佳", "塞車", "身體不適"） */
  trigger: string;
  /** 備案內容或描述 */
  plan: string;
  /** 選擇此備案的優點 */
  advantages?: string;
}

/**
 * 單一站點行程資訊
 */
export interface Spot {
  /** 站點唯一識別碼 */
  id: string;
  /** 所屬天數 ID，例如 "day1" */
  dayId: string;
  /** 當天排序順序 */
  order: number;
  /** 預計抵達/停留的文字描述，例如 "09:00 - 11:30" */
  time: string;
  /** 站點名稱 */
  name: string;
  /** 導航用的 Map Code */
  mapCode?: string;
  /** Google Maps 連結 */
  googleMapsUrl?: string | null;
  /** 前往該站點的駕駛資訊 */
  driving?: DrivingInfo;
  /** 停車場資訊 */
  parking?: ParkingInfo;
  /** 設施資訊 */
  facilities?: Facilities;
  /** 門票資訊 */
  admission?: Admission;
  /** 重點提示/快速攻略列表 */
  quickTips?: string[];
  /** 安全或注意事項列表 */
  warnings?: string[];
  /** 建議離開時間資訊 */
  leaveBy?: LeaveBy;
  /** 詳細說明，包含 SOP 等 */
  details?: string;
  /** 站點內的餐飲選項 */
  dining?: DiningOption[];
  /** 在地人秘訣列表 */
  insiderTips?: string[];
  /** 避開人潮建議 */
  crowdAvoidance?: string;
  /** 雨天或其他備案 (行內短述即可) */
  backupPlan?: string;
}

/**
 * 緊急聯絡人資訊
 */
export interface EmergencyContact {
  /** 聯絡人/單位唯一識別碼 */
  id: string;
  /** 顯示用的圖示 (emoji) */
  icon: string;
  /** Tailwind 顏色類別做為底色 */
  bgColor: string;
  /** 聯絡人/單位名稱 */
  label: string;
  /** 聯絡電話 */
  phone: string;
  /** 備註說明，例如營業時間或對應狀況 */
  note: string;
}

/**
 * 行李/準備清單項目
 */
export interface ChecklistItem {
  /** 項目唯一識別碼 */
  id: string;
  /** 顯示名稱 */
  label: string;
  /** 類別（例如: "證件與文件", "兒童必需品"） */
  category: string;
  /** 是否已勾選完成 */
  checked: boolean;
}

/**
 * 每日行程 Meta 資訊
 */
export interface DayMeta {
  /** 天數唯一識別碼，例如 "day1" */
  id: string;
  /** 日期，例如 "5/8" */
  date: string;
  /** 星期幾，例如 "週四" */
  weekday: string;
  /** 該天行程標題，例如 "抵達與那霸市區" */
  title: string;
  /** 該天行程主題 */
  theme: string;
  /** 該日預估總駕駛時間 */
  totalDriveTime?: string;
  /** 其他詳情（例如三種路線比較等） */
  details?: string;
}

/**
 * App 底部導航標籤 ID
 */
export type TabId = 'day' | 'checklist' | 'child';

/**
 * 日語短句
 */
export interface JapanesePhrase {
  /** 短句唯一識別碼 */
  id: string;
  /** 中文意思 */
  zh: string;
  /** 日文原文 */
  ja: string;
  /** 羅馬拼音 */
  romaji: string;
  /** 發音技巧/注音提示 */
  phonetic: string;
  /** 分類（例如: "基本禮貌", "餐廳實用句"） */
  category: string;
  /** 使用情境說明 */
  situation: string;
}

/**
 * 文化禮儀提示
 */
export interface CulturalTip {
  /** 提示唯一識別碼 */
  id: string;
  /** 類別 */
  category: string;
  /** 標題 */
  title: string;
  /** 內容清單 */
  items: string[];
}

/**
 * 省錢攻略
 */
export interface MoneySavingTip {
  /** 攻略唯一識別碼 */
  id: string;
  /** 類別 */
  category: string;
  /** 標題 */
  title: string;
  /** 內容清單 */
  items: string[];
}
