<template>
  <div class="w-full flex flex-col gap-4 select-none">
    <!-- 체크리스트 항목 (클릭하여 체크 가능) -->
    <div class="space-y-3">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="toggleCheck(index)"
        class="p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between"
        :class="[
          checked[index]
            ? 'bg-blue-50/80 border-[#07819A] text-slate-900 shadow-xs'
            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
        ]"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors"
            :class="[
              checked[index]
                ? 'bg-[#07819A] text-white'
                : 'border-2 border-slate-300 bg-white text-transparent'
            ]"
          >
            ✓
          </div>
          <span class="text-sm font-bold" :class="checked[index] ? 'text-slate-900 line-through opacity-80' : 'text-slate-800'">
            {{ item }}
          </span>
        </div>
        <div class="text-xs font-semibold px-2.5 py-1 rounded-full" :class="checked[index] ? 'bg-[#07819A] text-white' : 'bg-slate-200 text-slate-500'">
          {{ checked[index] ? '확인 완료' : '체크 대기' }}
        </div>
      </div>
    </div>

    <!-- 진행 상황 표시 바 -->
    <div class="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
      <div class="flex items-center gap-2 font-medium">
        <span>체크 진행 상황:</span>
        <span class="font-bold text-[#07819A]">{{ checkedCount }} / {{ items.length }}</span>
      </div>
      <div class="text-[11px] text-slate-400">모든 항목을 체크하면 최종 안내 모달이 노출됩니다</div>
    </div>

    <!-- 모두 체크되었을 때 노출되는 최종 안내 모달 -->
    <Teleport to="body">
      <div
        v-if="allChecked"
        class="fixed inset-0 z-9999 bg-black/70 backdrop-blur-xs flex items-center justify-center p-6 animate-fade-in"
        @click="closeModal"
      >
        <div
          class="relative bg-white rounded-2xl max-w-lg w-full p-6 text-center shadow-2xl border border-blue-200 animate-scale-up"
          @click.stop
        >
          <div class="w-16 h-16 rounded-full bg-blue-100 text-[#07819A] flex items-center justify-center mx-auto mb-4 text-2xl shadow-xs">
            <span class="i-lucide-shield-check w-8 h-8"></span>
          </div>
          
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">
            생성형 AI는 업무를 도와주는 보조 도구입니다.
          </h3>
          
          <p class="text-sm font-bold text-[#07819A] bg-blue-50 p-3 rounded-xl border border-blue-100 mb-6">
            ※ 작성 결과는 반드시 사람이 최종 확인 후 사용합니다.
          </p>

          <button
            type="button"
            @click="closeModal"
            class="px-6 py-2.5 rounded-xl bg-[#07819A] hover:bg-[#066a7f] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            확인 완료 및 실습 진행
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = [
  '수치가 내부 자료와 일치하는가',
  '기관명, 사업명이 정확한가',
  '일정과 기간이 맞는가',
  '과장된 표현은 없는가',
  '개인정보가 포함되어 있지 않은가'
]

const checked = ref([false, false, false, false, false])
const showModal = ref(true)

const toggleCheck = (index) => {
  checked.value[index] = !checked.value[index]
  if (checkedCount.value === items.length) {
    showModal.value = true
  }
}

const checkedCount = computed(() => {
  return checked.value.filter(Boolean).length
})

const allChecked = computed(() => {
  return checkedCount.value === items.length && showModal.value
})

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}

.animate-scale-up {
  animation: scaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
