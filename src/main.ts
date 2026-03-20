import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

// PWA Registration
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('已更新至最新版本，是否重新載入？')) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('App is ready for offline use.')
  },
})

createApp(App).mount('#app')
