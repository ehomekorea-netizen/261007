import { defineConfig, presetUno, presetIcons, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  shortcuts: {
    'bg-main': 'bg-[#fcfbf9] text-[#1e293b] dark:(bg-[#0f172a] text-[#f1f5f9])',
    'card-box': 'p-4 rounded-xl border border-slate-200/80 bg-white/90 shadow-sm dark:(border-slate-800 bg-slate-900/90 shadow-none)',
    'card-accent': 'p-4 rounded-xl border border-blue-200/80 bg-blue-50/60 dark:(border-blue-900/50 bg-blue-950/30)',
    'badge-primary': 'px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:(bg-blue-900/60 text-blue-200)',
    'badge-success': 'px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:(bg-emerald-900/60 text-emerald-200)',
    'badge-warning': 'px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:(bg-amber-900/60 text-amber-200)',
    'badge-purple': 'px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:(bg-purple-900/60 text-purple-200)',
  },
  rules: [
    ['keep-all', { 'word-break': 'keep-all', 'overflow-wrap': 'break-word' }],
  ],
});
