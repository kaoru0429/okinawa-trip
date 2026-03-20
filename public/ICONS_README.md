# PWA 圖示

部署前請準備以下圖示檔案：

| 檔案名稱 | 尺寸 | 用途 |
|---------|------|------|
| favicon.ico | 32×32 | 瀏覽器 tab |
| favicon.svg | any | 現代瀏覽器 favicon |
| apple-touch-icon-180x180.png | 180×180 | iOS 主畫面圖示 |
| pwa-192x192.png | 192×192 | Android PWA 圖示 |
| pwa-512x512.png | 512×512 | Android splash |
| maskable-icon-512x512.png | 512×512 | Android adaptive icon |

自動產生指令：
```bash
npx @vite-pwa/assets-generator --preset minimal public/favicon.svg
```
