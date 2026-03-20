import type { ChecklistItem } from './types'

export const checklistItems: Omit<ChecklistItem, 'checked'>[] = [
  // 證件與文件
  { id: 'doc-passport', category: '證件與文件', label: '護照（全家 4 本，效期 6 個月以上）' },
  { id: 'doc-ticket', category: '證件與文件', label: '機票（電子票或紙本列印）' },
  { id: 'doc-hotel', category: '證件與文件', label: '飯店訂房確認信（Day1-2 萬座 + Day3 那霸）' },
  { id: 'doc-car', category: '證件與文件', label: 'OTS 租車預約確認信' },
  { id: 'doc-insurance', category: '證件與文件', label: '旅遊保險保單（含海外醫療）' },
  { id: 'doc-allergy', category: '證件與文件', label: '日文翻譯的兒童藥物過敏說明（如有）' },

  // 兒童必需品
  { id: 'child-carseat', category: '兒童必需品', label: '兒童安全座椅確認信（OTS 預約時已選）' },
  { id: 'child-stroller', category: '兒童必需品', label: '推車（輕便摺疊型）' },
  { id: 'child-carrier', category: '兒童必需品', label: '背巾/揹帶（首里城石疊道用）' },
  { id: 'child-bottle', category: '兒童必需品', label: '奶瓶/水杯' },
  { id: 'child-diaper', category: '兒童必需品', label: '尿布（帶 2 天量，其餘當地買）' },
  { id: 'child-wipes', category: '兒童必需品', label: '濕紙巾（2-3 包，前座置物箱隨時可取用）' },
  { id: 'child-meds', category: '兒童必需品', label: '兒童常備藥（退燒/止瀉/外傷/感冒）' },
  { id: 'child-sunscreen', category: '兒童必需品', label: '防曬乳（兒童專用 SPF50+，每2小時補擦）' },
  { id: 'child-bugspray', category: '兒童必需品', label: '防蚊液（兒童專用）' },
  { id: 'child-hat', category: '兒童必需品', label: '遮陽帽 × 2' },
  { id: 'child-toy', category: '兒童必需品', label: '小羊最愛的安撫玩具/小毯子' },
  { id: 'child-snack', category: '兒童必需品', label: '車上零食（餅乾/水果乾）' },
  { id: 'child-vomit', category: '兒童必需品', label: '車上嘔吐備品（塑膠袋 × 5 + 毛巾 × 2）' },
  { id: 'child-clothes', category: '兒童必需品', label: '備用衣物 × 2 套（防止弄髒弄濕）' },
  { id: 'child-jacket', category: '兒童必需品', label: '薄外套 × 2（冷氣太冷時使用）' },

  // 車內裝備
  { id: 'car-sunshade', category: '車內裝備', label: '車窗遮陽簾 × 2' },
  { id: 'car-trashbag', category: '車內裝備', label: '垃圾袋 + 掛鉤（10 個）' },
  { id: 'car-phoneholder', category: '車內裝備', label: '手機車架（夾式）' },
  { id: 'car-charger', category: '車內裝備', label: '車充充電線 × 2' },
  { id: 'car-powerbank', category: '車內裝備', label: '行動電源 × 1' },
  { id: 'car-tissue', category: '車內裝備', label: '面紙 × 3 盒（前後座）' },
  { id: 'car-sanitizer', category: '車內裝備', label: '乾洗手 × 1（用餐前消毒）' },
  { id: 'car-cooler', category: '車內裝備', label: '保冷袋 × 1' },
  { id: 'car-shoppingbag', category: '車內裝備', label: '購物袋 × 3-5' },
  { id: 'car-tent', category: '車內裝備', label: '遮陽帳篷 × 1' },
  { id: 'car-umbrella', category: '車內裝備', label: '雨傘 × 2（折疊傘）' },
  { id: 'car-raincoat', category: '車內裝備', label: '雨衣 × 2' },

  // 娛樂用品
  { id: 'fun-books', category: '娛樂用品', label: '繪本 3-5 本' },
  { id: 'fun-toys', category: '娛樂用品', label: '小玩具 5-8 個（車上專用）' },
  { id: 'fun-ipad', category: '娛樂用品', label: '平板電腦（預先下載影片）' },
  { id: 'fun-headphone', category: '娛樂用品', label: '兒童耳機 × 1' },

  // App安裝
  { id: 'app-go', category: 'App安裝', label: 'GO App（已綁定信用卡）' },
  { id: 'app-maps', category: 'App安裝', label: 'Google Maps（已下載離線地圖）' },
  { id: 'app-translate', category: 'App安裝', label: 'Google 翻譯（已下載日文離線包）' },
  { id: 'app-weather', category: 'App安裝', label: 'Yahoo! 天氣' },
  { id: 'app-pwa', category: 'App安裝', label: '本旅行 PWA（已加到主畫面）' },

  // 行前確認
  { id: 'chk-carseat', category: '行前確認', label: 'OTS 安全座椅型號與小羊體重/身高匹配' },
  { id: 'chk-hotel', category: '行前確認', label: '飯店確認信已截圖存手機' },
  { id: 'chk-vjw', category: '行前確認', label: 'Visit Japan Web 已填寫' },
  { id: 'chk-card', category: '行前確認', label: '信用卡海外交易已開啟' },
  { id: 'chk-internet', category: '行前確認', label: '手機漫遊 / eSIM / WiFi 機已準備' },
  { id: 'chk-ticket-buy', category: '行前確認', label: '水族館門票購買方式已確認' },
  { id: 'chk-sos', category: '行前確認', label: '緊急聯絡電話已存入手機' },
  { id: 'chk-meds-pic', category: '行前確認', label: '藥品說明書已拍照存手機' },

  // 出發前48小時
  { id: 'pre48-passport', category: '出發前48小時', label: '護照效期確認' },
  { id: 'pre48-cash', category: '出發前48小時', label: '現金準備（建議 ¥50,000）' },
  { id: 'pre48-weather', category: '出發前48小時', label: '確認天氣預報，調整行李' },
  { id: 'pre48-hotelpic', category: '出發前48小時', label: '飯店確認信截圖' },
  { id: 'pre48-insurpic', category: '出發前48小時', label: '保險單影本存手機' },
  { id: 'pre48-roaming', category: '出發前48小時', label: '手機開通國際漫遊或準備上網卡' },

  // 每日出發前5分鐘
  { id: 'day-seatbelt', category: '每日出發前5分鐘', label: '兒童座椅安全帶扣緊、座椅穩固' },
  { id: 'day-caritems', category: '每日出發前5分鐘', label: '車內物品確認（水/零食/尿布包/濕紙巾）' },
  { id: 'day-nav', category: '每日出發前5分鐘', label: '導航目的地輸入、路線確認' },
  { id: 'day-weather', category: '每日出發前5分鐘', label: '天氣確認（是否需雨具）' },
  { id: 'day-gas', category: '每日出發前5分鐘', label: '油量檢查（低於 1/2 就加油）' }
]
