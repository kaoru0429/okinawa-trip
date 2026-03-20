import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // 自動更新 Service Worker，當有新版本時自動取代舊版
      registerType: 'autoUpdate',
      
      // 開發模式下也啟用 PWA，方便在本機端進行除錯和測試
      devOptions: {
        enabled: true
      },

      // PWA 應用程式清單設定，控制安裝到手機主畫面的外觀與行為
      manifest: {
        name: '沖繩親子旅行隨身手冊',
        short_name: '沖繩手冊',
        description: '羊爸羊媽的沖繩四天三夜自駕旅行隨身工具',
        // 背景顏色，這裡使用深色主題的 slate-950 近似色
        theme_color: '#0f172a',
        // 啟動畫面背景色
        background_color: '#0f172a',
        // 顯示模式：standalone 表現得像獨立原生應用程式，無瀏覽器原生 UI (網址列、導覽列)
        display: 'standalone',
        // 鎖定螢幕方向為直向，方便駕車或抱小孩時的單手操作
        orientation: 'portrait',
        // App 圖示設定 (會在安裝時被讀取)
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'  // 支援 Android 適應性圖示 (可轉換為圓形、方形等)
          }
        ],
        // 捷徑設定，長按 App 圖示可以快速進入特定頁面 (視 OS 支援度而定)
        shortcuts: [
          {
            name: '查看行程',
            short_name: '行程',
            description: '查看每日行程',
            url: '/',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192' }]
          },
          {
            name: 'SOS 緊急聯絡',
            short_name: 'SOS',
            description: '緊急聯絡與 SOP',
            url: '/',
            icons: [{ src: '/pwa-192x192.png', sizes: '192x192' }]
          }
        ]
      },

      // Workbox 設定，控制 Service Worker 緩存行為，達成離線可用性
      workbox: {
        // 要預先快取的檔案類型，確保基礎結構離線時也能載入
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // SPA 所有的導航都退回 index.html，確保前端路由正常運作
        navigateFallback: '/index.html',
        // 清理過期的快取，避免佔用手機儲存空間
        cleanupOutdatedCaches: true,
        // 下載新版 Service Worker 後立即接管，不等待舊版標籤頁關閉
        skipWaiting: true,
        // 立即讓所有的用戶端頁面受到新版 Service Worker 控制，不需重新整理
        clientsClaim: true
      }
    })
  ],
  resolve: {
    alias: {
      // 設定路徑別名，將 @ 對應到 src 目錄，方便專案各處匯入檔案
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
