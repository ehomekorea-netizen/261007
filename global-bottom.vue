<template>
  <div v-if="$slidev.nav.currentLayout !== 'cover'" class="absolute bottom-2.5 left-8 right-8 flex items-center justify-between text-[11px] text-slate-400 select-none pointer-events-none">
    <span>교육자료 무단전재 및 재배포 금지</span>
    <span class="font-medium tracking-widest text-slate-500">- {{ $slidev.nav.currentPage }} -</span>
    <span></span>
  </div>
</template>
