<template>
  <div 
    class="relative rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 hover:bg-blue-50/20 transition-all flex flex-col items-center justify-center p-3 text-center overflow-hidden group"
    :style="{ minHeight: minHeight || '140px', height: height || '100%' }"
  >
    <template v-if="src">
      <img :src="src" :alt="keyword || '슬라이드 에셋'" class="w-full h-full object-contain rounded-lg" />
    </template>
    <template v-else>
      <div class="w-8 h-8 rounded-full bg-blue-100/90 text-[#0B639A] flex items-center justify-center mb-1.5 shadow-xs group-hover:scale-105 transition-transform">
        <span :class="icon || 'i-lucide-image'" class="w-4 h-4"></span>
      </div>
      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B639A] text-[10px] font-bold mb-1">
        <span class="i-lucide-sparkles w-2.5 h-2.5 text-blue-500"></span>
        <span>권장 에셋 키워드</span>
      </div>
      <div class="font-bold text-slate-800 text-xs tracking-tight px-1.5 max-w-[95%] break-keep leading-snug">
        {{ keyword || '관련 실무 이미지' }}
      </div>
      <div v-if="desc || description" class="text-[10px] text-slate-500 mt-1 max-w-[90%] leading-tight break-keep">
        {{ desc || description }}
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  keyword: String,
  desc: String,
  description: String,
  icon: String,
  src: String,
  minHeight: String,
  height: String
})
</script>
