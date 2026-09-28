<template>
  <div 
    class="relative bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex flex-col justify-between h-full"
    :style="{ minHeight: minHeight || 'auto', maxHeight: maxHeight || '100%' }"
  >
    <!-- Card Header -->
    <div class="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-200/80 shrink-0">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#07819A]"></span>
        <span class="font-bold text-slate-900 text-xs tracking-tight">{{ title || '프롬프트 실습 레시피' }}</span>
      </div>
      <button 
        v-if="!hideCopy"
        @click="copyPrompt"
        type="button"
        class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold transition-all shadow-sm cursor-pointer select-none"
        :class="copied ? 'bg-emerald-600 text-white shadow-emerald-200' : 'bg-white hover:bg-[#07819A] text-[#07819A] hover:text-white border border-[#07819A]/40 hover:border-[#07819A] shadow-slate-100'"
      >
        <span v-if="copied" class="i-lucide-check w-3 h-3"></span>
        <span v-else class="i-lucide-copy w-3 h-3"></span>
        <span>{{ copied ? '복사 완료!' : '프롬프트 복사' }}</span>
      </button>
    </div>

    <!-- Card Body -->
    <div 
      ref="contentRef" 
      class="prompt-body flex-1 overflow-y-auto pr-1 text-slate-800 text-[11px] leading-[1.42] select-all custom-scrollbar font-sans"
    >
      <slot>{{ text }}</slot>
    </div>

    <!-- Card Footer (Hint) -->
    <div 
      v-if="hint" 
      class="mt-1.5 pt-1.5 border-t border-slate-100 text-[10px] text-slate-500 font-sans flex items-center gap-1.5 shrink-0 bg-slate-50/70 -mx-3 -mb-3 px-3 py-1 rounded-b-xl"
    >
      <span class="i-lucide-info w-3 h-3 text-[#07819A] shrink-0"></span>
      <span>{{ hint }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  text: String,
  hint: String,
  icon: String,
  minHeight: String,
  maxHeight: String,
  hideCopy: Boolean
})

const copied = ref(false)
const contentRef = ref(null)

const copyPrompt = async () => {
  let contentToCopy = props.text || contentRef.value?.innerText || ''

  try {
    await navigator.clipboard.writeText(contentToCopy.trim())
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Copy failed', err)
  }
}
</script>

<style scoped>
.prompt-body :deep(pre) {
  font-family: -apple-system, BlinkMacSystemFont, "Pretendard", "Segoe UI", Roboto, sans-serif !important;
  white-space: pre-wrap !important;
  word-break: break-word !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
</style>
