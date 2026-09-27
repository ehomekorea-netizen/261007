<template>
  <div class="w-full flex flex-col gap-3 select-none">
    <!-- 4대 모달리티 단순 탭 -->
    <div class="grid grid-cols-4 gap-3">
      <button
        v-for="item in modalities"
        :key="item.id"
        type="button"
        @click="activeId = item.id"
        class="py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2"
        :class="[
          activeId === item.id
            ? item.activeClass
            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
        ]"
      >
        <span :class="[item.icon, item.iconClass, 'text-base']"></span>
        <span class="font-bold text-xs">{{ item.name }}</span>
      </button>
    </div>

    <!-- 이미지 페이드인 디스플레이 영역 (박스 섹션 없음) -->
    <div class="relative min-h-[300px] flex items-center justify-center pt-2">
      <Transition name="fade" mode="out-in">
        <div :key="currentModality.id" class="w-full grid grid-cols-2 gap-6 items-start">
          <div
            v-for="(asset, idx) in currentModality.assets"
            :key="idx"
            class="flex flex-col items-center text-center space-y-2 cursor-pointer group"
            @click="openModal(asset)"
          >
            <!-- 이미지 그자체 (박스 둘러싸기 금지) -->
            <img
              :src="asset.src"
              :alt="asset.title"
              class="max-h-[230px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <!-- 간결한 텍스트 설명 -->
            <div class="text-center">
              <div class="font-bold text-xs text-slate-900">{{ asset.title }}</div>
              <div class="text-[11px] text-slate-600 mt-0.5 leading-tight">{{ asset.desc }}</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- 이미지 클릭 확대 라이트박스 모달 -->
    <Teleport to="body">
      <div
        v-if="modalAsset"
        class="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center p-6 animate-fade-in"
        @click="closeModal"
      >
        <div
          class="relative max-w-4xl max-h-[90vh] overflow-hidden flex flex-col items-center"
          @click.stop
        >
          <img
            :src="modalAsset.src"
            :alt="modalAsset.title"
            class="max-h-[75vh] max-w-full object-contain rounded shadow-2xl"
          />
          <div class="mt-3 text-center text-white">
            <div class="font-bold text-sm">{{ modalAsset.title }}</div>
            <div class="text-xs text-slate-300 mt-0.5">{{ modalAsset.desc }}</div>
          </div>
          <button
            type="button"
            @click="closeModal"
            class="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeId = ref('text')
const modalAsset = ref(null)

const openModal = (asset) => {
  modalAsset.value = asset
}

const closeModal = () => {
  modalAsset.value = null
}

const modalities = [
  {
    id: 'text',
    name: '텍스트 (LLM)',
    icon: 'i-lucide-file-text',
    iconClass: 'text-[#07819A]',
    activeClass: 'bg-sky-50 border-[#07819A] text-[#07819A] font-bold shadow-xs',
    assets: [
      {
        src: '/deck_4/text_chatgpt.png',
        title: 'ChatGPT 사업계획서 기획',
        desc: '아이디어 및 지시문 기반 사업계획서 대화 예시'
      },
      {
        src: '/deck_4/text_letter.png',
        title: 'AI 행정 추천서 및 공문 기안',
        desc: '공공 표준 양식에 맞춘 추천서·공문 초안 생성'
      }
    ]
  },
  {
    id: 'image',
    name: '이미지 (Image)',
    icon: 'i-lucide-image',
    iconClass: 'text-emerald-600',
    activeClass: 'bg-emerald-50 border-emerald-600 text-emerald-700 font-bold shadow-xs',
    assets: [
      {
        src: '/deck_4/poster.png',
        title: '상업용 브랜드 홍보 포스터',
        desc: 'GPT Image 2 고화질 브랜드 포스터 렌더링'
      },
      {
        src: '/deck_4/cardnews.webp',
        title: '모바일 맞춤형 안내 카드뉴스',
        desc: '1장 1메시지 모바일 가독성 안내 카드뉴스'
      }
    ]
  },
  {
    id: 'audio',
    name: '음성 (Audio)',
    icon: 'i-lucide-mic',
    iconClass: 'text-purple-600',
    activeClass: 'bg-purple-50 border-purple-600 text-purple-700 font-bold shadow-xs',
    assets: [
      {
        src: '/deck_4/gemini_podcast.webp',
        title: 'NotebookLM 2인 팟캐스트 브리핑',
        desc: '문서 기반 2인 AI 진행자 오디오 팟캐스트'
      },
      {
        src: '/deck_4/supertone.jpg',
        title: 'Supertone 초실사 보이스 합성',
        desc: 'AI 다국어 더빙 및 음성 변환 솔루션'
      }
    ]
  },
  {
    id: 'video',
    name: '비디오 (Video)',
    icon: 'i-lucide-video',
    iconClass: 'text-amber-600',
    activeClass: 'bg-amber-50 border-amber-600 text-amber-700 font-bold shadow-xs',
    assets: [
      {
        src: '/deck_4/kling.jpeg',
        title: 'Kling v2.6 AI 비디오 모션',
        desc: '초고화질 인물 모션 및 물리 엔진 렌더링'
      },
      {
        src: '/deck_4/seedance.jpg',
        title: 'Seedance 2.0 시네마틱 영상',
        desc: '프롬프트 기반 시네마틱 비디오 연출'
      }
    ]
  }
]

const currentModality = computed(() => {
  return modalities.find(m => m.id === activeId.value) || modalities[0]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.15s ease-out forwards;
}
</style>
