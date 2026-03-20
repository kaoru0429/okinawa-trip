<template>
  <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border-l-4 border-l-amber-500 border-t border-r border-b border-slate-700 shadow-xl shadow-amber-900/10 p-5 mb-4">
    <h2 class="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2">
      <span class="text-2xl shake-animation">🚗</span> 右駕左行安全備忘
    </h2>
    <ul class="space-y-3 text-sm text-slate-200">
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span class="font-bold text-slate-100">靠左、靠左、靠左</span>（轉彎/出停車場時默念）
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span><span class="font-bold text-sky-400">方向燈在右手邊</span>（左手邊是雨刷）</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span>停車場出來 → <span class="font-bold text-emerald-400">先看右邊來車</span></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span>疲勞/天黑 → 盡量<span class="font-bold text-red-500">不開車</span>（建議 18:00 前結束駕車）</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span>速限嚴守：一般道路 40-60km/h、高速公路 80km/h</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span><span class="font-bold text-red-500">紅燈右轉：禁止</span>（不同於台灣，紅燈就是停）</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span><span class="font-bold text-emerald-400">行人優先：</span>看到行人準備過馬路必須停車禮讓</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-amber-500 font-bold">✦</span>
        <span class="leading-relaxed">事故 SOP：停車開雙閃 → <a href="tel:110" class="font-mono text-sky-400 font-bold">報警 110</a> → <a href="tel:0120-34-3732" class="font-mono text-sky-400 font-bold">OTS 0120-34-3732</a></span>
      </li>
      <li class="flex items-start gap-2 mt-2 bg-slate-900/50 p-2 rounded-lg border border-slate-700">
        <span class="text-emerald-500 font-bold mt-0.5">⭐</span>
        <span class="text-emerald-300 font-medium">副駕職責：每次轉彎口頭提醒「靠左」</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}
.shake-animation:hover {
  animation: shake 0.5s ease-in-out;
}
</style>
