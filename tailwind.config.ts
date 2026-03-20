import type { Config } from 'tailwindcss'

export default {
  // 定義要掃描 class 的檔案路徑，確保 Tailwind 能夠產生有用到的 CSS
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // 使用 class 來控制深色模式
  // 本專案原則為「深色唯一」，因此常駐 dark mode 類別
  darkMode: 'class',
  theme: {
    extend: {
      // 自訂字體大小，調整 xs 使其符合車上距離 30cm 閱讀的 13px 最小字體要求 (13px = 0.8125rem)
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5' }],
      },
      // 自訂間距，處理 iPhone 劉海及底部 home bar 的安全區域 (Safe Area)
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      // 自訂過渡動畫持續時間，符合「電量友善」原則限制在 150ms 內
      transitionDuration: {
        DEFAULT: '150ms',
      }
    },
  },
  plugins: [],
} satisfies Config
