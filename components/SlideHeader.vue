<template>
  <div class="relative w-full mb-3 select-none">
    <div class="flex items-end justify-between border-b-2 border-[#07819A]">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight m-0 pb-1.5 flex items-center gap-2">
        <slot name="title">{{ title }}</slot>
      </h2>
      <div v-if="category" class="px-7 py-1.5 bg-[#07819A] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-1.5" style="clip-path: polygon(20px 0, 100% 0, 100% 100%, 0% 100%);">
        <span v-if="iconClass" :class="[iconClass, 'w-3.5 h-3.5 text-white shrink-0']"></span>
        <span>{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  category: {
    type: String,
    default: '생성형 AI'
  }
})

const iconClass = computed(() => {
  const cat = props.category || ''
  if (cat.includes('개념') || cat.includes('기본')) return 'i-lucide-sparkles'
  if (cat.includes('텍스트')) return 'i-simple-icons-googlegemini'
  if (cat.includes('작성법')) return 'i-lucide-terminal'
  if (cat.includes('실습')) return 'i-lucide-file-code'
  if (cat.includes('Notebook')) return ''
  if (cat.includes('챗GPT') || cat.includes('ChatGPT')) return 'i-simple-icons-openai'
  if (cat.includes('제미나이') || cat.includes('Gemini')) return 'i-simple-icons-googlegemini'
  if (cat.includes('법') || cat.includes('주의')) return 'i-lucide-shield-check'
  if (cat.includes('참고')) return 'i-lucide-bookmark'
  return 'i-lucide-sparkles'
})
</script>
