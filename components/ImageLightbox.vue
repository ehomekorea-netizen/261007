<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="isOpen"
        id="image-lightbox"
        class="fixed inset-0 z-[999999] bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 select-none"
        @click.self="close"
        @wheel="handleWheel"
      >
        <!-- Top Toolbar -->
        <div class="w-full flex items-center justify-between z-10 px-2 py-1 text-white">
          <div class="flex items-center gap-2 max-w-[60%]">
            <span class="px-2.5 py-1 rounded bg-[#07819A]/80 text-[11px] font-bold uppercase tracking-wider">
              IMAGE ZOOM
            </span>
            <span class="text-sm font-medium text-slate-200 truncate">
              {{ activeAlt || '이미지 상세 보기' }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Zoom Controls -->
            <div class="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15 backdrop-blur-sm">
              <button
                class="px-2.5 py-1 text-xs text-white hover:bg-white/20 rounded font-semibold transition cursor-pointer"
                title="축소 (-)"
                @click="zoomOut"
              >
                －
              </button>
              <span class="px-2 text-xs font-mono font-bold text-slate-200 min-w-[50px] text-center">
                {{ Math.round(scale * 100) }}%
              </span>
              <button
                class="px-2.5 py-1 text-xs text-white hover:bg-white/20 rounded font-semibold transition cursor-pointer"
                title="확대 (+)"
                @click="zoomIn"
              >
                ＋
              </button>
              <button
                class="ml-1 px-2.5 py-1 text-[11px] text-slate-300 hover:text-white hover:bg-white/20 rounded transition cursor-pointer border-l border-white/15"
                title="원본 배율 (0)"
                @click="resetZoom"
              >
                100%
              </button>
            </div>

            <!-- Close Button -->
            <button
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold transition shadow-md cursor-pointer border border-rose-400/30"
              title="닫기 (ESC)"
              @click="close"
            >
              <span>✕</span>
              <span>닫기 (ESC)</span>
            </button>
          </div>
        </div>

        <!-- Center Image Viewport -->
        <div
          ref="viewportRef"
          class="flex-1 w-full overflow-auto flex items-center justify-center p-2 relative my-2"
          @click.self="close"
        >
          <img
            :src="activeSrc"
            :alt="activeAlt"
            :style="{
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }"
            :class="[
              'max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl drop-shadow-2xl',
              scale > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
            ]"
            @click="toggleZoom"
          />
        </div>

        <!-- Bottom Guidance Bar -->
        <div class="w-full flex items-center justify-between text-[11px] text-slate-400 px-3 py-1 border-t border-white/10">
          <div class="flex items-center gap-3">
            <span>💡 <strong>클릭</strong> : 1.5배 확대 / 축소</span>
            <span>·</span>
            <span><strong>마우스 휠</strong> : 확대/축소</span>
            <span>·</span>
            <span><strong>ESC / 배경 클릭</strong> : 닫기</span>
          </div>
          <div v-if="scale > 1" class="text-amber-300 font-medium">
            마우스 스크롤로 이미지 구석구석을 자유롭게 탐색할 수 있습니다.
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSrc = ref('')
const activeAlt = ref('')
const scale = ref(1.0)
const isDragging = ref(false)
const viewportRef = ref(null)

const open = (src, alt = '') => {
  activeSrc.value = src
  activeAlt.value = alt
  scale.value = 1.0
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
  scale.value = 1.0
}

const zoomIn = () => {
  if (scale.value < 3.0) {
    scale.value = Math.min(3.0, Number((scale.value + 0.25).toFixed(2)))
  }
}

const zoomOut = () => {
  if (scale.value > 0.5) {
    scale.value = Math.max(0.5, Number((scale.value - 0.25).toFixed(2)))
  }
}

const resetZoom = () => {
  scale.value = 1.0
}

const toggleZoom = () => {
  if (scale.value === 1.0) {
    scale.value = 1.6
  } else {
    scale.value = 1.0
  }
}

const handleWheel = (e) => {
  if (e.ctrlKey || e.metaKey || isOpen.value) {
    e.preventDefault()
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }
}

const handleKeydown = (e) => {
  if (!isOpen.value) return

  if (e.key === 'Escape' || e.key === 'Backspace') {
    e.preventDefault()
    e.stopPropagation()
    close()
  } else if (e.key === '+' || e.key === '=') {
    e.preventDefault()
    e.stopPropagation()
    zoomIn()
  } else if (e.key === '-' || e.key === '_') {
    e.preventDefault()
    e.stopPropagation()
    zoomOut()
  } else if (e.key === '0') {
    e.preventDefault()
    e.stopPropagation()
    resetZoom()
  } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(e.key)) {
    // Prevent Slidev slide navigation while modal is active
    e.stopPropagation()
  }
}

const handleDocumentClick = (e) => {
  if (isOpen.value) return

  const target = e.target
  if (!target || target.tagName !== 'IMG') return

  // Exclude divider logos or explicitly skipped images
  const src = target.getAttribute('src') || ''
  if (
    src.includes('divider_logo') ||
    target.classList.contains('no-zoom') ||
    target.closest('#image-lightbox') ||
    target.naturalWidth < 60 ||
    target.naturalHeight < 60
  ) {
    return
  }

  // Prevent default behavior (e.g. parent anchor click) and open lightbox
  e.preventDefault()
  e.stopPropagation()
  open(target.src, target.alt || target.title || '')
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick, true)
  window.addEventListener('keydown', handleKeydown, true)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick, true)
  window.removeEventListener('keydown', handleKeydown, true)
})
</script>

<style>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* Ensure all lecture images show zoom-in cursor and no jumpy scale */
.slidev-page img:not([src*="divider_logo"]):not(.no-zoom) {
  cursor: zoom-in !important;
  transition: filter 0.15s ease !important;
}

.slidev-page img:not([src*="divider_logo"]):not(.no-zoom):hover {
  filter: brightness(1.02);
}
</style>
