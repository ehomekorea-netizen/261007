---
theme: academic
layout: cover
background: false
title: "생성형 AI 실무 교육"
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

<div class="h-full flex flex-col justify-center items-center text-center px-8 relative bg-white">
  <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#07819A] text-sm font-bold mb-6 shadow-xs">
    <span class="i-lucide-award w-4 h-4"></span>
    <span>2026 사회복지 실무 역량 강화 교육</span>
  </div>
  <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
    생성형 AI 실무 교육
  </h1>
  <p class="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
    프롬프트 엔지니어링 · Gemini Notebook 팩트 행정 · 비주얼 콘텐츠 실무 가이드
  </p>
  <div class="flex items-center gap-8 text-sm text-slate-600 border-t border-slate-200 pt-6">
    <div class="flex items-center gap-2">
      <span class="i-lucide-user w-4 h-4 text-[#07819A]"></span>
      <span>강사: <strong>오진실</strong></span>
    </div>
    <div class="flex items-center gap-2">
      <span class="i-lucide-building w-4 h-4 text-[#07819A]"></span>
      <span>전라남도사회복지사협회 보수교육</span>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-16 h-16 rounded-2xl bg-[#07819A] text-white flex items-center justify-center mb-6 shadow-md">
    <span class="i-lucide-sparkles w-8 h-8"></span>
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 01</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    생성형 AI 개념
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    인공지능의 기본 원리, 할루시네이션 완화 전략 및 현장 안전 수칙
  </p>
</div>

---

<SlideHeader title="AI란" category="생성형 AI 개념" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-center space-y-4">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#07819A]"></span>
        <span>인공지능 (AI)</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        인간의 지적 능력을 모방하여 기계나 소프트웨어가 학습, 추론, 지각 능력 등을 가지도록 구현한 기술
      </p>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
        <span>머신러닝 (ML)</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        방대한 데이터를 바탕으로 기계가 스스로 규칙과 패턴을 학습하는 알고리즘
      </p>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
        <span>딥러닝 (DL)</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        인간 뇌의 신경망 구조를 모방하여 복잡한 데이터를 심층 분석·처리
      </p>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <img src="/AITECH_AI의-시작과-발전-과정-미래-전망_04_표-1024x576.png" class="max-h-[350px] w-auto object-contain" alt="인공지능 발전 계보" />
    <div class="text-xs text-slate-600 mt-2 text-center font-semibold">인공지능(AI) ➔ 머신러닝(ML) ➔ 딥러닝(DL) ➔ 생성형 AI(Gen AI)</div>
  </div>
</div>

---

<SlideHeader title="생성형 AI(Generative AI)" category="생성형 AI 개념" />

<div class="space-y-2.5">
  <div class="p-2.5 px-4 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs leading-relaxed">
    <strong>생성형 AI 정의 :</strong> 텍스트, 비디오, 오디오, 이미지 등 학습 데이터를 기반으로 명령어(프롬프트)에 따라 다양한 콘텐츠를 새롭게 창작하는 인공지능 기술
  </div>

  <GenAiModalities />
</div>

---

<SlideHeader title="전통적 AI / 생성형 AI" category="생성형 AI 개념" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 패러다임의 전환 : 검색·분석에서 창작으로
</div>

<div class="grid grid-cols-2 gap-6 h-[340px]">
  <div class="p-5 rounded-xl bg-slate-50 border border-slate-300 flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-base mb-3 pb-2 border-b border-slate-200 flex items-center gap-2">
        <span class="i-lucide-database text-slate-600"></span>
        <span>전통적 AI (Discriminative)</span>
      </div>
      <ul class="text-xs text-slate-700 space-y-2">
        <li><strong>판별 (Classify) :</strong> 데이터의 종류와 범주 분류</li>
        <li><strong>예측 (Predict) :</strong> 과거 통계를 기반으로 수치 예측</li>
        <li><strong>정답 찾기 (Finding Answers) :</strong> 기존 데이터에서 검색</li>
        <li><strong>대표 예시 :</strong> 스팸 메일 필터, 유튜브 알고리즘, 알파고</li>
      </ul>
    </div>
    <div class="text-xs text-slate-500 bg-slate-100 p-2 rounded">
      기존 데이터 내에서 분석 및 판별만 수행
    </div>
  </div>
  <div class="p-5 rounded-xl bg-blue-50/40 border border-blue-300 flex flex-col justify-between">
    <div>
      <div class="font-bold text-[#07819A] text-base mb-3 pb-2 border-b border-blue-200 flex items-center gap-2">
        <span class="i-lucide-sparkles text-[#07819A]"></span>
        <span>생성형 AI (Generative)</span>
      </div>
      <ul class="text-xs text-slate-700 space-y-2">
        <li><strong>생성 (Generate) :</strong> 새로운 텍스트, 이미지 자율 생성</li>
        <li><strong>창작 (Create) :</strong> 새로운 아이디어와 콘텐츠 기획</li>
        <li><strong>새로운 결과물 (New Output) :</strong> 요청에 따른 독창적 산출</li>
        <li><strong>대표 예시 :</strong> 소설 쓰기, 코딩, 작곡, 디자인, 공문서 기안</li>
      </ul>
    </div>
    <div class="text-xs text-[#07819A] bg-blue-100/60 p-2 rounded font-semibold">
      학습한 패턴을 바탕으로 무에서 유를 창조
    </div>
  </div>
</div>

---

<SlideHeader title="다양한 생성형 AI" category="생성형 AI 개념" />

<div class="grid grid-cols-4 gap-3.5 h-[390px]">
  <!-- Col 1: 텍스트 (LLM) -->
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2.5 pb-1.5 border-b border-slate-200 flex items-center gap-1.5">
        <span class="i-lucide-message-square text-[#07819A]"></span>
        <span>텍스트 (LLM)</span>
      </div>
      <ul class="text-[11px] text-slate-700 space-y-2">
        <li class="flex items-center gap-2">
          <span class="i-logos-openai-icon w-3.5 h-3.5 shrink-0"></span>
          <span>ChatGPT (OpenAI)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-google-gemini w-3.5 h-3.5 shrink-0"></span>
          <span>Gemini (Google)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-claude-icon w-3.5 h-3.5 shrink-0"></span>
          <span>Claude (Anthropic)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-perplexity-icon w-3.5 h-3.5 shrink-0"></span>
          <span>Perplexity (검색)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-deepseek-icon w-3.5 h-3.5 shrink-0"></span>
          <span>DeepSeek (추론)</span>
        </li>
      </ul>
    </div>
    <div class="text-[10px] text-slate-500 bg-white p-1.5 rounded border border-slate-200 font-medium">
      보고서, 공문서, 기획서 작성
    </div>
  </div>
  <!-- Col 2: 이미지 (Image) -->
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2.5 pb-1.5 border-b border-slate-200 flex items-center gap-1.5">
        <span class="i-lucide-image text-emerald-700"></span>
        <span>이미지 (Image)</span>
      </div>
      <ul class="text-[11px] text-slate-700 space-y-2">
        <li class="flex items-center gap-2">
          <span class="i-logos-openai-icon w-3.5 h-3.5 shrink-0"></span>
          <span>GPT Image 2 (DALL·E)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-midjourney w-3.5 h-3.5 shrink-0"></span>
          <span>Midjourney v6</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-google-gemini w-3.5 h-3.5 shrink-0"></span>
          <span>Gemini Imagen 3</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-adobe-icon w-3.5 h-3.5 shrink-0"></span>
          <span>Adobe Firefly</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-palette text-pink-600 w-3.5 h-3.5 shrink-0"></span>
          <span>Leonardo AI</span>
        </li>
      </ul>
    </div>
    <div class="text-[10px] text-slate-500 bg-white p-1.5 rounded border border-slate-200 font-medium">
      홍보 포스터, 카드뉴스, 일러스트
    </div>
  </div>
  <!-- Col 3: 동영상 (Video) -->
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2.5 pb-1.5 border-b border-slate-200 flex items-center gap-1.5">
        <span class="i-lucide-video text-amber-700"></span>
        <span>동영상 (Video)</span>
      </div>
      <ul class="text-[11px] text-slate-700 space-y-2">
        <li class="flex items-center gap-2">
          <span class="i-logos-google-gemini w-3.5 h-3.5 shrink-0"></span>
          <span>Google Veo 3.1</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-openai-icon w-3.5 h-3.5 shrink-0"></span>
          <span>OpenAI Sora</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-clapperboard text-indigo-600 w-3.5 h-3.5 shrink-0"></span>
          <span>Kling AI (클링)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-film text-purple-600 w-3.5 h-3.5 shrink-0"></span>
          <span>Runway Gen-3</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-play-circle text-rose-600 w-3.5 h-3.5 shrink-0"></span>
          <span>Pixverse / Luma</span>
        </li>
      </ul>
    </div>
    <div class="text-[10px] text-slate-500 bg-white p-1.5 rounded border border-slate-200 font-medium">
      홍보 숏폼, 릴스, 활동 영상
    </div>
  </div>
  <!-- Col 4: 사무자동화 & 음성 -->
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2.5 pb-1.5 border-b border-slate-200 flex items-center gap-1.5">
        <span class="i-lucide-briefcase text-purple-700"></span>
        <span>사무자동화 & 음성</span>
      </div>
      <ul class="text-[11px] text-slate-700 space-y-2">
        <li class="flex items-center gap-2">
          <span class="i-logos-google-gemini w-3.5 h-3.5 shrink-0"></span>
          <span>Gemini Notebook</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-presentation text-amber-600 w-3.5 h-3.5 shrink-0"></span>
          <span>Gamma (AI PPT)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-logos-elevenlabs-icon w-3.5 h-3.5 shrink-0"></span>
          <span>ElevenLabs (AI 음성)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-simple-icons-suno w-3.5 h-3.5 shrink-0 text-amber-500"></span>
          <span>Suno AI (배경음악)</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="i-lucide-mic text-teal-600 w-3.5 h-3.5 shrink-0"></span>
          <span>클로바노트 (STT 전사)</span>
        </li>
      </ul>
    </div>
    <div class="text-[10px] text-slate-500 bg-white p-1.5 rounded border border-slate-200 font-medium">
      발표 슬라이드, RAG 행정 비서
    </div>
  </div>
</div>

---

<SlideHeader title="생성형 AI 특징" category="생성형 AI 개념" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 같은 질문인데도 답이 달라지는 이유
</div>

<div class="space-y-2.5">
  <div class="p-3 rounded-lg bg-blue-50/50 border border-blue-200 text-xs text-slate-800">
    💡 <strong>LLM은 정답을 검색하는 것이 아니라</strong>, 그 순간 문맥상 가장 자연스러운 단어를 확률적으로 만들어냅니다.
  </div>
  <div class="grid grid-cols-2 gap-3.5">
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. 확률 기반 생성</div>
      <div class="text-[11px] text-slate-600">가능한 여러 단어 중 확률적으로 하나를 선택하여 문장 구성</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. 무작위성(창의성) 설정</div>
      <div class="text-[11px] text-slate-600">매번 표현, 단어 순서, 제시되는 예시가 조금씩 달라짐</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 대화 맥락의 영향</div>
      <div class="text-[11px] text-slate-600">이전 질문, 사용자 말투, 대화 흐름이 실시간 반영됨</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">4. 길이·중단 지점 차이</div>
      <div class="text-[11px] text-slate-600">간단한 요약에서 끝나거나 구체적 예시까지 길게 이어질 수 있음</div>
    </div>
  </div>
  <div class="mt-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-800 font-bold">
    정리 : ✖ 오류 아님 ➔ ✔ 정상 작동 ➔ 기관 목적에 맞는 답을 선택하여 활용하면 됨
  </div>
</div>

---

<SlideHeader title="할루시네이션(Hallucination)" category="생성형 AI 개념" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 환각 현상 : AI가 존재하지 않거나 사실과 다른 정보를 실제처럼 만들어내는 현상
</div>

<div class="grid grid-cols-2 gap-6 h-[340px]">
  <div class="space-y-3">
    <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
      <div class="font-bold text-rose-700 text-xs mb-0.5">허위 출처 생성</div>
      <div class="text-[11px] text-slate-600">실제로 없는 논문, 판례, 언론 기사를 있는 것처럼 제시하는 경우</div>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
      <div class="font-bold text-rose-700 text-xs mb-0.5">확신하는 오답</div>
      <div class="text-[11px] text-slate-600">모른다고 하지 않고 완전히 틀린 내용을 단정적으로 당당하게 말함</div>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
      <div class="font-bold text-rose-700 text-xs mb-0.5">앞뒤가 다른 답변</div>
      <div class="text-[11px] text-slate-600">같은 주제에 대해 이전 답변과 정반대되는 내용을 말하는 경우</div>
    </div>
    <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
      <div class="font-bold text-rose-700 text-xs mb-0.5">정보의 잘못된 조합</div>
      <div class="text-[11px] text-slate-600">서로 다른 인물이나 사건을 섞어 사실과 다른 결론을 도출</div>
    </div>
  </div>
  <div class="flex flex-col justify-between items-center h-[280px]">
    <img src="/sejong-macbook-3d.jpg" class="h-[270px] w-auto object-contain" alt="세종대왕 맥북 던짐 사건" />
    <div class="text-[11px] text-slate-600 text-center font-medium mt-1">
      대표적인 할루시네이션 사례 : 조선왕조실록 세종대왕 맥북프로 던짐 사건
    </div>
  </div>
</div>

---

<SlideHeader title="할루시네이션 완화 방법" category="생성형 AI 개념" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 핵심 요약 : 정확한 질문 ➔ 근거 확인 ➔ 추가 검증 ➔ 교차 검증 ➔ 최종 판단
</div>

<div class="space-y-2.5">
  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">1</span>
    <div>
      <strong class="text-xs text-slate-900">질문을 구체적으로 작성하기</strong>
      <div class="text-[11px] text-slate-600">목적, 조건, 범위, 형식을 명확하게 제시하여 모호함을 줄입니다.</div>
    </div>
  </div>
  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">2</span>
    <div>
      <strong class="text-xs text-slate-900">답변의 출처와 근거 확인하기</strong>
      <div class="text-[11px] text-slate-600">출처나 참고 자료를 요청하고 공식 자료와 직접 비교하며 확인합니다.</div>
    </div>
  </div>
  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">3</span>
    <div>
      <strong class="text-xs text-slate-900">추가 질문으로 답변 검증하기</strong>
      <div class="text-[11px] text-slate-600">근거와 이유를 묻고, 다른 방식으로 설명을 재요청하여 일관성을 확인합니다.</div>
    </div>
  </div>
  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">4</span>
    <div>
      <strong class="text-xs text-slate-900">여러 정보와 교차 검증하기</strong>
      <div class="text-[11px] text-slate-600">다른 AI(ChatGPT vs Gemini), 웹 검색 결과, 공식 규정집과 교차 검증합니다.</div>
    </div>
  </div>
  <div class="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-[#07819A] text-white text-xs font-bold flex items-center justify-center shrink-0">5</span>
    <div>
      <strong class="text-xs text-[#07819A]">AI의 한계를 이해하고 최종 판단하기</strong>
      <div class="text-[11px] text-slate-700">AI 답변은 참고자료일 뿐이며, 중요한 행정·복지 결정은 전문가가 직접 최종 확인합니다.</div>
    </div>
  </div>
</div>

---

<SlideHeader title="생성형 AI 사용시 주의사항" category="생성형 AI 개념" />

<div class="grid grid-cols-2 gap-4 h-[380px]">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-rose-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-lock text-rose-600"></span>
        <span>개인정보 입력 금지</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        주민등록번호, 전화번호, 주소, 계정 정보, 회사 기밀 등 민감한 개인정보는 <strong>프롬프트에 절대 입력하지 않습니다.</strong>
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-rose-50 p-2 rounded">
      홍길동 ➔ OOO, 전화번호 ➔ 010-XXXX-XXXX 가명화
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-amber-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-alert-triangle text-amber-600"></span>
        <span>결과를 그대로 믿지 않기</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        AI는 그럴듯하지만 사실과 다른 허위 정보를 제공할 수 있으므로, <strong>중요한 공문·수치는 반드시 실무자가 검증</strong>합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-amber-50 p-2 rounded">
      공문서 발송 전 원문 법령 및 지침 대조 필수
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-emerald-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-check-circle text-emerald-600"></span>
        <span>저작권과 출처 확인</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        AI가 생성한 글이나 이미지를 대외 홍보물에 활용할 때는 <strong>타인의 저작권 침해 여부를 확인하고 적절히 활용</strong>합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-emerald-50 p-2 rounded">
      공유마당, 공공누리 안심 리소스 우선 활용
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-blue-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-shield text-blue-600"></span>
        <span>윤리적으로 사용하기</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        허위 정보 제작, 타인 비방, 표절, 상업적 부당 이득 등 <strong>공공 복지 기관의 신뢰를 훼손하는 부적절한 용도로 사용하지 않습니다.</strong>
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-blue-50 p-2 rounded">
      공공 서비스의 투명성과 사회복지 윤리 준수
    </div>
  </div>
</div>

---

<SlideHeader title="생성형 AI 결과 사용전 확인" category="생성형 AI 개념" />

<AiChecklist />

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6 p-4">
    <span class="i-logos-google-gemini w-12 h-12"></span>
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 02</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    Gemini
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    구글의 멀티모달 AI, 모델 개선 학습 차단 설정 및 실무 활용 화면
  </p>
</div>

---

<SlideHeader title="Gemini" category="텍스트 생성AI" />

<div class="space-y-3.5">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 text-xs mb-1 flex items-center gap-2">
      <span class="i-logos-google-gemini w-4 h-4 shrink-0"></span>
      <span>구글과 딥마인드(Google DeepMind) 공동 개발</span>
    </div>
    <div class="text-[11px] text-slate-600">구글의 최신 기술력이 결집된 차세대 초거대 멀티모달 생성형 AI 모델입니다.</div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 text-xs mb-1">Gemini 명칭의 유래</div>
    <div class="text-[11px] text-slate-600">라틴어로 '쌍둥이(Gemini)'를 의미하며 구글과 딥마인드의 결합 및 NASA 제미니 프로젝트를 오마주했습니다.</div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 text-xs mb-1">태생적 멀티모달(Multimodality) AI</div>
    <div class="text-[11px] text-slate-600">보고(이미지), 듣고(오디오), 말하는(텍스트·코드·영상) 능력을 하나의 모델에서 동시 처리합니다.</div>
  </div>
  <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
    <div class="font-bold text-[#07819A] text-xs mb-1 flex items-center gap-2">
      <span class="i-logos-google-icon w-3.5 h-3.5 shrink-0"></span>
      <span>구글 서비스와의 완벽한 연동 및 협업 파트너</span>
    </div>
    <div class="text-[11px] text-slate-700">Google Drive, Docs, Gmail 등 구글 생태계와 연결되어 단순 검색을 넘어 창의적 콘텐츠 생성과 문제 해결을 돕습니다.</div>
  </div>
</div>

---

<SlideHeader title="Gemini 모델개선 학습" category="텍스트 생성AI" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
        <span>모두를 위한 모델 개선 사용 중지</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        제미나이는 모델 개선 학습을 '사용 중지'할 경우 입력한 프롬프트가 구글의 AI 모델 학습 데이터로 영구 저장되지 않습니다.
      </p>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">2</span>
        <span>임시 채팅 활용</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        화면 오른쪽 상단의 임시 채팅을 켜면 대화 기록이 히스토리에 남지 않고 즉시 휘발됩니다.
      </p>
    </div>
    <div class="text-xs text-slate-500 bg-blue-50/60 p-3 rounded-lg border border-blue-200">
      💡 <strong>설정 경로 :</strong> 구글 계정 관리 ➔ 데이터 및 개인정보 보호 ➔ Gemini 앱 활동 ➔ '사용 안함' 체크
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="Gemini 모델개선 학습 및 활동 제어 설정 UI 화면" desc="Google 계정 관리 > 데이터 및 개인정보 보호 > Gemini 앱 활동 설정 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      활동 제어 설정 화면
    </div>
  </div>
</div>

---

<SlideHeader title="Gemini 화면" category="텍스트 생성AI" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="Gemini 메인 대시보드 및 채팅 입력 UI" desc="새 채팅 시작, 좌측 대화 보관함, 프롬프트 입력창 및 캔버스 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      Gemini 메인 작업 공간 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-800 text-xs mb-1">새 채팅 (New Chat)</div>
      <div class="text-[11px] text-slate-600">새로운 주제의 대화를 시작하여 이전 맥락과 분리</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-800 text-xs mb-1">채팅 검색 (Search History)</div>
      <div class="text-[11px] text-slate-600">과거에 나눈 대화 기록 중 필요한 공문이나 보고서 검색</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-800 text-xs mb-1">라이브러리 (Library)</div>
      <div class="text-[11px] text-slate-600">생성된 이미지 및 캔버스(Canvas) 작성 결과물 보관</div>
    </div>
    <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
      <div class="font-bold text-[#07819A] text-xs mb-1">줄바꿈 단축키</div>
      <div class="text-[11px] text-slate-700"><strong>Shift + Enter :</strong> 줄바꿈 / <strong>Enter :</strong> 프롬프트 전송</div>
    </div>
  </div>
</div>

---

<SlideHeader title="사용량 한도" category="텍스트 생성AI" />

<div class="space-y-3">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
    • 요금제의 한도에 따라 Gemini를 사용할 수 있는 쿼리 및 연산량이 결정됩니다.<br />
    • 고급 모델(Pro) 및 고화질 이미지·영상 생성에는 더 많은 사용량이 소모됩니다.
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-2">통합 연산량(Compute%) 체크 방식</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">
        사용량 메뉴는 "Flash 모델 몇 번, Pro 몇 번" 따로 세지 않고, 내 계정이 사용한 전체 <strong>'연산%(Compute)'을 하나로 합산하여 체크</strong>합니다.
      </p>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-2">미디어 생성 포함</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">
        제미나이 내에서의 <strong>이미지 생성, 사진 수정, 오디오 분석</strong> 작업이 전체 사용량에 합산 반영됩니다.
      </p>
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[180px]">
      <AssetSlot keyword="Gemini 계정 사용량 한도 및 초기화 주기 안내 UI" desc="사용량 퍼센트 게이지 및 일일/주간 초기화 시간 표시 화면" min-height="170px" />
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-16 h-16 rounded-2xl bg-[#07819A] text-white flex items-center justify-center mb-6 shadow-md">
    <span class="i-lucide-terminal w-8 h-8"></span>
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 03</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    프롬프트 작성법
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    2026 AI 프롬프트 핵심 변화, 나쁜 질문 vs 좋은 질문 비교 및 엔지니어링 공식
  </p>
</div>

---

<SlideHeader title="프롬프트" category="프롬프트 작성법" />

<div class="flex items-center gap-2 font-bold text-slate-900 text-base mb-4">
  <span class="text-[#F4BD38] text-lg">▶</span>
  <span>2026년 AI 프롬프트의 핵심 변화</span>
</div>

<table class="pdf-table mb-4">
  <thead>
    <tr>
      <th style="width: 25%;">변화</th>
      <th style="width: 37.5%;">이전</th>
      <th style="width: 37.5%;">현재</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-bold text-center">명시하지 않은 건 안 함</td>
      <td>요청 이상으로 알아서 채워줌</td>
      <td>
        요청한 것 정확히 실행<br />
        <strong>원하는 건 빠짐없이 써야 함</strong>
      </td>
    </tr>
    <tr>
      <td class="font-bold text-center">기본 출력이 간결해짐</td>
      <td>묻지 않아도 길고 친절하게 답변</td>
      <td>
        짧고 직접적으로 답변<br />
        <strong>상세함·친절한 톤은 명시 필요</strong>
      </td>
    </tr>
    <tr>
      <td class="font-bold text-center">절차 지시 효과 감소</td>
      <td>단계별로 지시해야 잘 작동</td>
      <td>
        <strong>결과 기준 제시가 더 효과적</strong><br />
        (GPT는 특히 강함)
      </td>
    </tr>
  </tbody>
</table>

---

<SlideHeader title="프롬프트" category="프롬프트 작성법" />

<div class="text-xl font-bold text-slate-900 text-center mb-6">
  평상시 어떻게 프롬프트를 작성하고 있나요?
</div>

<table class="w-full border-collapse border border-slate-900 mb-8 shadow-xs">
  <thead>
    <tr class="border-b border-slate-900 bg-white">
      <th class="p-3.5 w-5/12 text-center text-lg font-bold text-slate-900 border-r border-slate-900">
        ✖ 나쁜 프롬프트
      </th>
      <th class="p-3.5 w-7/12 text-center text-lg font-bold text-slate-900 flex items-center justify-center gap-2">
        <span class="w-3.5 h-3.5 bg-black inline-block"></span>
        <span>좋은 프롬프트</span>
      </th>
    </tr>
  </thead>
  <tbody class="text-slate-800 text-sm">
    <tr>
      <td class="p-6 text-center border-r border-slate-900 font-semibold text-slate-900 text-base">
        "자원봉사자 모집 안내문 써줘"
      </td>
      <td class="p-5 text-left leading-relaxed text-sm font-normal text-slate-800">
        "나는 복지관에서 자원봉사 업무를 관리하는 사회복지사야. 이번에 독거 어르신 도시락 배달 자원봉사자를 모집하려고 해. 기존 봉사자들의 재참여를 독려하고 신규 봉사자를 모집하기 위한 안내문 양식을 작성해 줘. 모집 대상, 활동 시간, 혜택 (VMS 봉사시간 인정) 항목을 포함해서 친근한 어조로 3문단 이내로 써줘."
      </td>
    </tr>
  </tbody>
</table>

<div class="text-2xl font-extrabold text-center text-slate-900 tracking-tight">
  같은 AI라도 프롬프트에 따라 결과가 크게 달라집니다
</div>

---

<SlideHeader title="효과적인 프롬프트 구조" category="프롬프트 작성법" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> AI가 더 정확하게 일하도록 만드는 구체적인 요청
</div>

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/5">기법</th>
        <th class="p-2.5 w-1/4">설명</th>
        <th class="p-2.5 w-11/20 text-[#07819A]">실무 예시</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">페르소나 (Persona)</td>
        <td class="p-2.5">AI의 역할과 전문성, 관점 설정</td>
        <td class="p-2.5 font-mono">너는 사회복지관에서 10년 이상 근무한 자원봉사 담당 복지사야.</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">컨텍스트 (Context)</td>
        <td class="p-2.5">업무의 배경, 목적, 대상 등 상황 정보 제공</td>
        <td class="p-2.5 font-mono">우리 기관은 지역 어르신 반찬 지원 사업 운영 중이야. 신규 자원봉사자 30명 모집 예정이며 대학생과 직장인이 대상이야.</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">지시 (Instruction)</td>
        <td class="p-2.5">수행할 작업의 명확한 지시</td>
        <td class="p-2.5 font-mono">자원봉사자 모집 홍보문 작성, SNS 게시글 작성, 포스터 문구 작성.</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">예시 (Few-shot)</td>
        <td class="p-2.5">원하는 문체나 형식의 예시 제공</td>
        <td class="p-2.5 font-mono">예시 문체: "따뜻한 한 끼를 전하는 봉사에 함께하세요. 작은 참여가 지역사회에 큰 힘이 됩니다."와 같은 따뜻하고 신뢰감 있는 문체 사용.</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">제약 (Constraint)</td>
        <td class="p-2.5">답변의 형식과 조건 제시</td>
        <td class="p-2.5 font-mono">SNS 게시글 300자 이내 작성, 이모지 3개 이하 사용, 해시태그 5개 이하 작성, 과장된 표현 사용 금지.</td>
      </tr>
    </tbody>
  </table>
</div>

---

<SlideHeader title="프롬프트 엔지니어링" category="프롬프트 작성법" />

<div class="space-y-3 mt-4">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
    <div>
      <strong class="text-sm text-slate-900">• 구체적으로 작성하기</strong>
      <div class="text-xs text-slate-500">무엇을 원하는지 명확하게 말한다.</div>
    </div>
    <span class="text-xs text-[#07819A] font-semibold">명확한 요청</span>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
    <div>
      <strong class="text-sm text-slate-900">• 컨텍스트 제공하기</strong>
      <div class="text-xs text-slate-500">기관과 업무 상황 정보를 상세히 알려준다.</div>
    </div>
    <span class="text-xs text-emerald-700 font-semibold">맥락 부여</span>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
    <div>
      <strong class="text-sm text-slate-900">• 출력 형식·성공 기준 제시하기</strong>
      <div class="text-xs text-slate-500">어떤 결과가 좋은 결과인지 형식을 정의한다.</div>
    </div>
    <span class="text-xs text-amber-700 font-semibold">표·개조식 규격</span>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
    <div>
      <strong class="text-sm text-slate-900">• 역질문 기법</strong>
      <div class="text-xs text-slate-500">정보가 부족하면 AI가 먼저 질문하게 한다.</div>
    </div>
    <span class="text-xs text-purple-700 font-semibold">상호 협업</span>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
    <div>
      <strong class="text-sm text-slate-900">• 자기 검증 기법</strong>
      <div class="text-xs text-slate-500">최종 답변 전에 오류와 누락을 스스로 점검하게 한다.</div>
    </div>
    <span class="text-xs text-rose-700 font-semibold">자가 점검</span>
  </div>
</div>

---

<SlideHeader title="프롬프트 엔지니어링" category="프롬프트 작성법" />

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">기법</th>
        <th class="p-2.5 w-1/4">설명</th>
        <th class="p-2.5 w-1/2 text-[#07819A]">실무 예시</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold">구체적으로 작성하기</td>
        <td class="p-2">원하는 결과를 구체적으로 요청하는 기법</td>
        <td class="p-2">대학생 대상 아동 돌봄 자원봉사자 모집 공고 작성, 활동 기간(8주), 활동 시간(매주 토요일 2시간), 친근한 문체, 500자 이내 조건 제시</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold">컨텍스트 제공하기</td>
        <td class="p-2">업무의 배경과 목적을 함께 제공하는 기법</td>
        <td class="p-2">자원봉사 참여율 감소 상황을 반영한 기존 자원봉사자 재참여 유도 감사 메시지 작성, 기관 특성과 대상자 정보 제공</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold">출력 형식·성공 기준 제시</td>
        <td class="p-2">원하는 결과의 형식과 기준을 명확히 제시하는 기법</td>
        <td class="p-2">자원봉사 운영계획서 작성 시 '사업목적-추진일정-모집방법-예산-기대효과' 순의 표 형식 구성</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold">역질문 기법</td>
        <td class="p-2">정보가 부족한 경우 먼저 필요한 정보를 질문하도록 유도</td>
        <td class="p-2">자원봉사 프로그램 기획 전 대상자, 예산, 운영 기간 등 필수 정보 확인 질문 요청</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold">자기 검증 기법</td>
        <td class="p-2">답변 완료 후 오류와 누락을 스스로 점검하도록 유도</td>
        <td class="p-2">자원봉사 안전교육 자료 작성 후 법적·윤리적 적절성, 안전수칙 누락 여부, 표현 명확성 자체 점검 및 수정</td>
      </tr>
    </tbody>
  </table>
</div>

---

<SlideHeader title="프롬프트 엔지니어링" category="프롬프트 작성법" />

<div class="h-[410px]">
  <PromptCard 
    title="프롬프트 엔지니어링 5대 기법 실전 적용 프롬프트"
    hint="역할, 상황, 출력형식, 역질문, 자기검증이 결합된 종합 프롬프트입니다."
  >
<pre class="font-sans text-[11.5px] leading-relaxed text-slate-800 whitespace-pre-wrap select-all">
<strong class="text-[#07819A] font-bold text-xs">[프롬프트 엔지니어링 5대 핵심 요소 결합]</strong>

• <span class="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold text-[10.5px]">컨텍스트</span> 우리 기관은 <strong>노인복지관</strong>입니다.
• <span class="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold text-[10.5px]">구체적 요청</span> 노인 말벗 자원봉사자를 모집하기 위한 <strong>홍보문을 작성</strong>해 주세요.
• <span class="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold text-[10.5px]">출력형식·기준</span> 출력은 <strong>'제목 - 활동 내용 - 참여 대상 - 신청 방법'</strong> 순으로 작성하고, <strong>700자 이내</strong>의 따뜻하고 신뢰감 있는 문체를 사용해 주세요.
• <span class="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold text-[10.5px]">역질문 유도</span> 모집 대상이나 활동 일정 등 <strong>정보가 부족하면 먼저 질문</strong>해 주세요.
• <span class="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold text-[10.5px]">자기 검증</span> 작성이 끝나면 모집 정보의 누락이나 표현상 오해의 소지가 없는지 <strong>스스로 검토한 후 최종본을 제시</strong>해 주세요.
</pre>
  </PromptCard>
</div>

---

<SlideHeader title="개인정보 보호 & 프롬프트 강화" category="프롬프트 작성법" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-rose-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-shield-alert text-rose-600"></span>
        <span>개인정보 보호 (마스킹 원칙)</span>
      </div>
      <p class="text-xs text-slate-700 leading-relaxed mb-4">
        입력된 내용 중 실명, 전화번호, 상세 주소 등 개인을 식별할 수 있는 정보가 있다면 결과물 출력 시 반드시 'OOO', 'XXX' 등으로 마스킹(익명화) 처리해.
      </p>
      <div class="p-3 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800">
        "출력 시 대상자 실명과 주민등록번호 뒷자리는 반드시 'OOO', 'XXXXXXX'로 가명화해서 출력해."
      </div>
    </div>
    <div class="text-[11px] text-slate-500 bg-rose-50 p-2 rounded">
      개인정보보호법 준수 필수 조항
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <PromptCard 
      title="프롬프트 강화 (Prompt Refiner)"
      hint="AI에게 나의 초안 질문을 더 정교한 전문가용 프롬프트로 업그레이드해 달라고 요청하는 기법입니다."
    >
<pre class="font-sans text-[11.5px] leading-relaxed text-slate-800 whitespace-pre-wrap select-all">
<strong class="text-slate-600 font-bold text-xs">[1단계 : 나의 단순한 초안 질문]</strong>
"자원봉사자 교육 문의에 대한 정중한 답변을 작성해줘. 감사 인사와 교육 일정 안내를 포함해줘."

<div class="border-t border-slate-200 my-2"></div>
<strong class="text-[#07819A] font-bold text-xs">[2단계 : 프롬프트 강화(Refiner) 명령어]</strong>
<span class="text-blue-950 font-bold">"위의 프롬프트를 더 정교한 프롬프트로 만들어줘."</span>

<span class="text-slate-500 text-[10.5px] block mt-2">💡 AI가 스스로 역할(Persona), 행정 제약조건, 추가 고려사항을 보강하여 전문가 수준의 프롬프트로 재작성해 줍니다.</span>
</pre>
    </PromptCard>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-16 h-16 rounded-2xl bg-[#07819A] text-white flex items-center justify-center mb-6 shadow-md">
    <span class="i-lucide-code-2 w-8 h-8"></span>
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 04</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    프롬프트 실습
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    사회복지 현장에서 매일 쓰는 8대 핵심 실무 문서 1-Click 자동화
  </p>
</div>

---

<SlideHeader title="AI 활용 분야" category="프롬프트 실습" />

<div class="grid grid-cols-4 gap-3 text-xs h-[380px]">
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">공문서 및 보고서 작성</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 정형화된 공문 양식 자동 생성<br />• 격식있는 문체로 변환<br />• 맞춤법 및 문법 오류 검토</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">홍보자료 제작</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 월간 뉴스레터 구성<br />• 카드뉴스 문구 작성<br />• SNS 게시글 초안 생성</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">사업계획서 초안 작성</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 목차 및 구성 자동 생성<br />• 예산 항목 제안<br />• 사업 목표 및 성과지표 설정</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">설문조사 문항 개발</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 목적에 맞는 문항 설계<br />• 객관식/주관식 문항 구성<br />• 결과 분석 방법 제안</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">이메일 답변 작성</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 정중한 공식 답변 작성<br />• 상황별 대응 문구 안내<br />• 긴 이메일 핵심 요약</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1">회의록 정리 요약</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 녹취록 요약 및 정리<br />• 주요 결정사항 추출<br />• 액션아이템 표 정리</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2">
    <div class="font-bold text-slate-900 mb-1">행사 기획안 작성</div>
    <div class="text-[11px] text-slate-600 leading-relaxed">• 행사 콘셉트 제안<br />• 프로그램 구성 지원<br />• 준비물 및 체크리스트 작성</div>
  </div>
</div>

---

<SlideHeader title="프롬프트 실습 - 구조화 설계" category="프롬프트 실습" />

<div class="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-slate-800 mb-3">
  <strong>실무 상황 :</strong> 복지관에서 독거 어르신 도시락 배달 봉사자를 모집해야 하는 상황입니다. 최근 봉사 인원이 부족하여 기존 봉사자들의 재참여를 독려하고, 신규 봉사자를 추가 모집하기 위한 안내문(공고문)을 작성하고자 합니다.
</div>

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">구조 요소</th>
        <th class="p-2.5 w-3/4 text-[#07819A]">상세 설계 내용</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">역할 (Persona)</td>
        <td class="p-2.5">복지관에서 자원봉사 관리 업무를 총괄하는 5년 차 베테랑 사회복지사</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">맥락 (Context)</td>
        <td class="p-2.5">지역 내 독거 어르신들을 위한 도시락 배달 봉사자가 부족한 상황이며, 기존 봉사자의 재참여 유도와 신규 봉사자 모집이 동시에 필요함</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">과업 (Task)</td>
        <td class="p-2.5">자원봉사자 모집 안내문 작성</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">출력 (Output)</td>
        <td class="p-2.5">모집 공고문 양식 (모집 대상, 활동 시간, 혜택 항목 포함)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">조건 (Constraint)</td>
        <td class="p-2.5">봉사 참여를 독려하는 친근하고 따뜻한 어조, VMS 봉사시간 인정 혜택 명시, 3문단 이내의 깔끔한 분량</td>
      </tr>
    </tbody>
  </table>
</div>

---

<SlideHeader title="프롬프트 실습 - 이메일" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="신규 자원봉사자 공식 환영 이메일 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[11px] leading-snug text-slate-800 m-0">
너는 따뜻하고 친근한 커뮤니티 매니저야.<br>
우리 기관에 새로 등록한 자원봉사자에게 보내는 공식 환영 이메일을 작성해 줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[입력 정보]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5">
<div>• 기관명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[00종합사회복지관]</span></div>
<div>• 자원봉사명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[어르신 스마트폰 교육 보조]</span></div>
<div>• 첫 활동일: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026년 00월 00일 (토) 10시]</span></div>
<div>• 활동 장소: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[1층 다목적실]</span></div>
<div>• 준비물: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[편한 복장, 신분증]</span></div>
<div>• 담당자: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[김복지 / 061-000-0000]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[이메일 구성 항목]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5">
<div>1. 제목: [기관명] 새로운 가족이 되신 것을 환영합니다!</div>
<div>2. 환영 인사 및 감사 표현 (신청 봉사명 언급)</div>
<div>3. 첫 활동일 · 장소 · 준비물 상세 안내</div>
<div>4. 궁금한 점 문의 안내 및 활동 기대감 표현</div>
<div>5. 유의사항 1줄 (예: "우천 시 일정 관련...")</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[출력 형식 및 톤앤매너]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
친근하고 따뜻한 톤, 공식적이지만 딱딱하지 않게, 단락 구분 명확히, <strong>300자 이내</strong>로 간결하게 작성
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 공문서" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="외부 기관 업무 협조 요청 공문서 초안 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 사회복지기관의 행정담당자로서 공문 작성 경험이 풍부한 실무자야.<br>
아래의 입력 내용을 바탕으로 외부 기관에 발송할 공식 공문 초안을 작성해줘.<br>
상대방(수신처)이 거절하기 어렵도록 정중하면서도 명확한 협조 명분을 포함해줘.
</p>
</div>
<div class="p-2 bg-slate-50/80 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[작성 조건]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5">
<div>• 공식 공문서에 적합한 정중하고 명확한 행정 문체 준수</div>
<div>• 불필요한 장황한 표현은 지양하고 핵심 위주 개조식 작성</div>
<div>• 공공기관 행정 관용구(기안·인사말, 끝 표시)와 전문 용어 배합</div>
<div>• 정보가 부족한 항목은 "[미정]" 또는 "[추후 안내]"로 표기</div>
</div>
</div>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[출력 : 아래 표준 양식을 반드시 준수한다]</div>
<div class="text-[10.5px] text-slate-700 space-y-1 pl-1">
<div>• <strong>수신:</strong> <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[받는 기관명]</span></div>
<div>• <strong>제목:</strong> <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[핵심 내용을 15자 이내로 간결하게 작성]</span></div>
<div>• <strong>본문:</strong></div>
<div class="pl-2 space-y-0.5 text-slate-600">
<div>1. 배경 : (상황 및 협조 요청 목적 간결 설명)</div>
<div>2. 요청사항 : (요청 내용을 구체적·명확히 정리)</div>
<div>3. 기한 : (회신 또는 처리 기한 명시)</div>
</div>
<div>• <strong>붙임:</strong> (첨부파일 목록 기재, 없을 경우 "없음" 명시)</div>
<div>• <strong>담당자:</strong> <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[이름 / 연락처 / 직통번호]</span></div>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 안내문" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="행사 현장 자원봉사자 5대 행동 요령 안내문 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 10년 경력의 자원봉사 담당 사회복지사이자 행사 기획 전문가야.<br>
이번 주말 행사에 참여하는 자원봉사자 전원에게 배포할 '봉사자 현장 행동 요령'을 작성해 줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[행사 정보 (수정 영역)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 행사명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[지역사회 자선 바자회]</span></div>
<div>• 일시: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026년 00월 00일 / 10시~16시]</span></div>
<div>• 장소: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[00공원 야외 광장]</span></div>
<div>• 봉사자 수: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[50명]</span> | 담당자: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[김복지 / 061-000-0000]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[포함 항목 (5대 수칙)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 친절한 응대 태도 (지역 주민 맞춤 인사 및 밝은 태도)</div>
<div>2. 안전 관리 (낙상 사고 · 물품 파손 대처 요령)</div>
<div>3. 분리수거 및 현장 환경 정리</div>
<div>4. 자리 정돈 및 대여 물품 철저 관리</div>
<div>5. 개인정보 보호 · 현장 촬영 및 SNS 무단 게시 주의사항</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[출력 형식]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
A4 반쪽 분량, 현장 배포용 출력 가능한 구조, 개조식 문장, 읽기 쉽고 명확하게 작성
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 안내문(문자/카톡용)" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="자원봉사자 봉사시간 인정 기준 카카오톡 알림톡 안내문"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 자원봉사활동 인증관리 담당자이자 공공기관 공식 안내문 작성 전문가야.<br>
자원봉사자에게 카카오톡으로 발송할 '봉사시간 인정 기준' 안내문을 작성해 줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[입력 정보 (기관 맞춤 수정)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 기관명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[00종합사회복지관]</span></div>
<div>• 담당자: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[김복지], 연락처: [061-000-0000]</span></div>
<div>• 활동일지 제출: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[활동 당일 현장 제출]</span></div>
<div>• VMS 입력 주기: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[매월 말일 일괄 입력]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[포함 내용 (필수 기준)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 출석 확인 방식 (QR코드 인증 또는 수기 출석부 서명)</div>
<div>• 지각(활동 시작 10분 초과) 및 조기퇴근 처리 기준 명시</div>
<div>• 활동일지 미제출 시 봉사시간 불인정 사유 사전 안내</div>
<div>• 문의 채널 (담당자 직통 연락처 및 상담 가능 시간)</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[형식 및 톤앤매너]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
카카오톡 발송용, 1,000자 이내, 친절하지만 단호한 행정 톤, 모바일 한눈 읽기용 줄바꿈 구분, 마지막에 기관명과 담당자 공식 서명 포함
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 문의 응대 FAQ" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="자원봉사 단골 문의 5대 FAQ 스크립트 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 자원봉사활동 인증관리 담당자이자 봉사자 문의 대응 안내 자료를 작성하는 행정 실무자야.<br>
자원봉사자들이 자주 묻는 단골 질문 5가지에 대한 공식 FAQ 답변 스크립트를 작성해 줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[FAQ 주제 5선]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 봉사시간 VMS 입력 방법 및 반영 소요 기간</div>
<div>2. 신청 완료한 봉사활동 취소 및 일정 변경 방법</div>
<div>3. 현장 지각(10분 초과) 시 봉사시간 인정 기준</div>
<div>4. VMS 공식 자원봉사활동 인증서 발급 절차</div>
<div>5. VMS 실적과 1365 자원봉사포털 연계 방법</div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[작성 형식]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 질문(Q) - 답변(A) 구조로 구성</div>
<div>• 각 답변은 3~4문장으로 명확하고 친절하게 작성</div>
<div>• 답변마다 오해 방지 문장 1개 반드시 포함<br><span class="text-slate-500 text-[10px]">(예: "단, 사전 연락 없는 당일 불참의 경우 실적이 인정되지 않습니다")</span></div>
<div>• 실무 담당자가 창구·전화 응대 시 바로 활용 가능한 정중한 구어체</div>
</div>
</div>
<div class="p-2 bg-amber-50/70 rounded-lg border border-amber-200">
<div class="text-[10px] font-bold text-amber-800 mb-0.5">[주의사항]</div>
<p class="text-[10.5px] text-amber-900 leading-snug m-0">
VMS / 1365 세부 메뉴 경로는 기관 실정에 맞게 수정하여 사용
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 회의록" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="회의 메모의 공식 표준 회의록 표 변환 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 지시</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 사회복지기관 행정 문서 작성 전문가야.<br>
첨부된 회의 메모 내용을 분석하여 공공기관 공식 회의록 양식에 맞게 체계적으로 정리해 줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[회의 기본 정보]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 회의명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[자원봉사 운영 월례 회의]</span></div>
<div>• 일시: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026년 00월 00일 오후 2시]</span></div>
<div>• 장소: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[00복지관 2층 소회의실]</span></div>
<div>• 참석자: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[김복지 팀장, 이봉사 대리 등 5명]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[출력 양식 (표 형태)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 회의 기본 개요 표 (회의명, 일시, 장소, 진행자, 참석자, 목적)</div>
<div>2. 주요 안건 목록 (1~3개)</div>
<div>3. 안건별 논의 내용 및 최종 결정 사항 (담당자 / 완료 기한)</div>
<div>4. 향후 조치 계획 (Action Item) 및 차기 회의 일정</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[작성 조건]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
논의 과정 요약, 결정 사항과 담당자는 별도 행 명확히 구분, 공식 행정 문체 및 존댓말 준수, 모호한 내용은 "[확인 필요]" 표기
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 모집 공고문" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="자원봉사자 모집 매력 포인트 도출 및 공고문 프롬프트"
    hint="우측 상단 [프롬프트 복사] 버튼을 눌러 Gemini나 ChatGPT에 붙여넣고 [ ] 안의 내용을 기관 상황에 맞게 수정하세요."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 상황</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 자원봉사 모집 홍보 전문 카피라이터이자 사회복지 행정 실무자야.<br>
우리 기관은 <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[노인복지관]</span>이야. 아래 정보를 바탕으로 매력적인 공고문을 완성해줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[입력 정보 (기관 맞춤 수정)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 기관명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[00노인종합복지관]</span></div>
<div>• 활동명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[독거 어르신 주거환경 개선 및 말벗]</span></div>
<div>• 모집 대상: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[대학생 및 일반 성인 (20명)]</span></div>
<div>• 활동 일시: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026년 11월 매주 토요일 10시~14시]</span></div>
<div>• 봉사 인정: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[VMS 4시간]</span> | 신청: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[온라인 구글폼]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[수행 단계 (3단계)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 이 봉사활동의 매력 포인트(참여 가치, 보람, 혜택) 3가지 도출</div>
<div>2. 공고문에 녹여낼 시선을 사로잡는 핵심 키워드 2~3개 제안</div>
<div>3. 위 키워드를 활용한 완성된 모집 공고문 작성</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[출력 구조 & 추가 제공]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
매력 포인트 ➔ 핵심 키워드 ➔ 완성 공고문 (제목 포함 300자 내외), 20대 청년 맞춤형 '캐주얼 톤' 버전 1부 추가 제공
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="프롬프트 실습 - 보도자료" category="프롬프트 실습" />

<div class="h-[410px]">
  <PromptCard 
    title="지역 언론 배포용 행사 결과 보도자료 프롬프트"
    hint="작성된 결과보고서가 있다면 세부 내용 대신 첨부하여 요약 작성을 유도할 수 있습니다."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 취지</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 사회공헌 및 자원봉사 전문 홍보 컨설턴트이자 베테랑 기자야.<br>
<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[행복아동복지센터]</span>의 <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[자원봉사자 연계 프로그램]</span> 언론 배포용 보도자료를 작성해 줘.<br>
자원봉사의 가치를 알리고 지역사회 참여 공감대를 확산하는 목적이야.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[입력 내용]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 프로그램: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[함께 여는 미래, 마음을 잇는 이야기]</span></div>
<div>• 대상: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[아동 20명 & 대학생 봉사자 10명]</span></div>
<div>• 활동: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[미술·음악·스토리텔링 통한 정서적 교감]</span></div>
<div>• 기간: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026.08.15 ~ 11.15]</span> | 장소: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[센터 내]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[작성 가이드라인]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 제목: 클릭을 부르는 헤드라인 (봉사자 헌신과 아동 변화 강조)</div>
<div>2. 형식: 정식 보도자료 규격 (리드문 ➔ 본문 ➔ 인용문 ➔ 문의처)</div>
<div>3. 분량: 공백 포함 800자~1,000자 내외</div>
<div>4. 필수 요소: 육하원칙(5W1H), 기관장 및 봉사자 감동 인용문</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[작성 어조]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
따뜻하고 감동적이면서 언론 보도에 적합한 공적 신뢰성과 전문성 준수
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6 p-3">
    <img src="/divider_logo/gemini_notebook.png" class="w-14 h-14 object-contain" alt="Gemini Notebook Logo" />
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 05</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    Gemini Notebook
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    내가 업로드한 문서에만 근거하는 100% 팩트 기반 RAG 지능형 행정 비서
  </p>
</div>

---

<SlideHeader title="Gemini Notebook이란" category="Gemini Notebook" />

<div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs leading-relaxed mb-3">
  <strong>Google이 개발한 문서 기반 지능형 메모 및 분석 도구</strong>로, 내가 올린 문서(VMS 사업지침 등) 내에서만 정답을 인출하여 할루시네이션(환각)을 원천 차단합니다.
</div>

<div class="grid grid-cols-2 gap-5 h-[310px]">
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5"><span class="i-lucide-file-search text-[#07819A]"></span> 1. 출처 기반 팩트 잠금 (RAG)</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">업로드한 문서 외의 외부 정보는 임의로 지어내지 않고 오직 제공된 데이터만을 근거로 완벽히 답변</p>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5"><span class="i-lucide-bookmark-check text-emerald-700"></span> 2. 1초 팩트체크 출처 각주</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">답변의 모든 문장마다 원본 문서의 정확한 페이지와 문단 번호 [1], [2]를 각주로 명시</p>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center">
    <img src="/llm-vs-rag.webp" class="max-h-[340px] w-auto object-contain" alt="일반 LLM vs RAG 아키텍처 비교" />
    <div class="text-xs text-slate-600 mt-2 text-center font-semibold">일반 LLM vs 문서 기반 RAG(검색 증강 생성) 비교</div>
  </div>
</div>

---

<SlideHeader title="사용 한도" category="Gemini Notebook" />

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs mb-3">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">항목</th>
        <th class="p-2.5 w-3/8 text-slate-700">Gemini Notebook (무료)</th>
        <th class="p-2.5 w-3/8 text-[#07819A]">Gemini Notebook Plus</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">가격</td>
        <td class="p-2.5">무료</td>
        <td class="p-2.5 font-semibold text-blue-700">Google AI Pro (29,000원/월) 이상</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">노트북 개수</td>
        <td class="p-2.5">최대 100개</td>
        <td class="p-2.5 font-semibold text-emerald-700">최대 500개 (5배 ↑)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">노트북당 소스 개수</td>
        <td class="p-2.5">50개</td>
        <td class="p-2.5 font-semibold text-emerald-700">300개 (6배 ↑)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">소스 한도</td>
        <td class="p-2.5">단어 수: 최대 50만 단어 / 파일당 200MB</td>
        <td class="p-2.5">단어 수: 최대 50만 단어 / 파일당 200MB</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">일일 채팅 횟수</td>
        <td class="p-2.5">50회</td>
        <td class="p-2.5 font-semibold text-emerald-700">500회 (10배 ↑)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold bg-slate-50/50">오디오 개요 / 슬라이드</td>
        <td class="p-2.5">오디오 하루 3회 / 슬라이드 3회</td>
        <td class="p-2.5 font-semibold text-emerald-700">오디오 하루 20회 / 슬라이드 대폭 확대</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="text-[11px] text-slate-500 text-center">
  * 복지관 실무에서는 무료 버전만으로도 1개 사업 전체 문서를 완벽히 분석할 수 있습니다.
</div>

---

<SlideHeader title="활용 예시" category="Gemini Notebook" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 사회복지 기관 실무 문서 적용
</div>

<div class="grid grid-cols-3 gap-5 h-[340px]">
  <div class="col-span-2">
    <table class="pdf-table">
      <thead>
        <tr>
          <th style="width: 25%;">구분</th>
          <th style="width: 35%;">문서 유형</th>
          <th style="width: 40%;">실무 활용 내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="font-bold text-center">자원봉사</td>
          <td class="font-medium">2026 VMS 사업지침서</td>
          <td>봉사시간 인정 기준, 상해보험 절차 즉시 질의응답</td>
        </tr>
        <tr>
          <td class="font-bold text-center">기관 행정</td>
          <td class="font-medium">운영규정, 취업규칙</td>
          <td>경조사 휴가, 인사 평가, 수당 지급 규정 확인</td>
        </tr>
        <tr>
          <td class="font-bold text-center">재무 회계</td>
          <td class="font-medium">사회복지법인 재무회계세칙</td>
          <td>후원금 영수증 발급, 비목별 지출 결의 기준 확인</td>
        </tr>
        <tr>
          <td class="font-bold text-center">사업 기획</td>
          <td class="font-medium">전년도 사업평가서, 통계 백서</td>
          <td>프로그램 만족도 분석, 2026 신규 사업계획서 벤치마킹</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-span-1 flex flex-col justify-center items-center">
    <img src="/vms-guide-2026-cover.png" class="h-[270px] w-auto object-contain" alt="2026년 사회복지 자원봉사 사업지침" />
    <div class="text-xs text-slate-600 text-center font-semibold mt-2">2026 사회복지 자원봉사 사업지침서</div>
  </div>
</div>

---

<SlideHeader title="소스 추가" category="Gemini Notebook" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between items-center h-[340px]">
    <img src="/notebook-source-modal.png" class="h-[310px] w-auto object-contain" alt="Gemini Notebook 소스 추가 화면" />
    <div class="text-[11px] text-slate-500 text-center font-medium mt-1">
      PDF, Drive, 웹사이트 등 다양한 문서 형식의 소스 추가 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. 파일 업로드</div>
      <div class="text-[11px] text-slate-600">내 컴퓨터에 있는 PDF, Word, 텍스트 파일을 직접 드래그앤드롭</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. Google 드라이브 연동</div>
      <div class="text-[11px] text-slate-600">Google Docs, Google Slides 등 클라우드 문서를 즉시 임포트</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 웹사이트 링크 및 YouTube</div>
      <div class="text-[11px] text-slate-600">공식 복지 뉴스 URL이나 세미나 유튜브 링크 입력 시 자막 분석</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">4. 복사한 텍스트 붙여넣기</div>
      <div class="text-[11px] text-slate-600">회의 메모나 일지 내용을 직접 텍스트로 붙여넣어 소스화</div>
    </div>
  </div>
</div>

---

<SlideHeader title="Gemini Notebook 화면" category="Gemini Notebook" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between items-center h-[340px]">
    <img src="/notebook-canvas-3split.png" class="h-[310px] w-auto object-contain" alt="Gemini Notebook 3분할 캔버스 화면" />
    <div class="text-[11px] text-slate-500 text-center font-medium mt-1">
      3분할 워크스페이스 : [좌측] 소스 | [중앙] 대화창 | [우측] 스튜디오
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">좌측 : 소스 검색 및 추가 패널</div>
      <div class="text-[11px] text-slate-600">업로드된 문서 목록이 표시되며, 질의에 반영할 소스를 체크박스로 선택</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">중앙 : 프롬프트 입력 및 대화창</div>
      <div class="text-[11px] text-slate-600">문서 기반 질의응답 및 원문 출처 번호 각주가 실시간 표시되는 공간</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">우측 : 스튜디오 패널</div>
      <div class="text-[11px] text-slate-600">오디오 개요, FAQ, 보고서, 타임라인 등 파생 콘텐츠를 생성하는 공간</div>
    </div>
  </div>
</div>

---

<SlideHeader title="소스생성" category="Gemini Notebook" />

<div class="space-y-3">
  <div class="text-sm font-bold text-slate-900">
    1. 입력한 소스를 기반으로 질문하여 답변 생성
  </div>
  <div class="text-sm font-bold text-slate-900">
    2. 답변을 소스로 전환 가능
  </div>
  <div class="text-xs text-slate-700 pl-4 space-y-1 mb-2">
    <div>- 답변을 메모에 저장</div>
    <div>- 스튜디오에 저장된 메모를 소스로 전환</div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[270px]">
      <AssetSlot keyword="Gemini Notebook 답변 노트를 소스로 전환하는 인터페이스" desc="대화 답변 하단 '메모에 저장' 클릭 후 스튜디오에서 '소스로 변환'하는 UI 화면" min-height="260px" />
    </div>
  </div>
</div>

---

<SlideHeader title="스튜디오" category="Gemini Notebook" />

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">항목</th>
        <th class="p-2.5 w-3/4 text-[#07819A]">상세 기능 설명</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">오디오 오버뷰 (Audio Overview)</td>
        <td class="p-2.5">두 명의 AI 호스트가 대화하는 팟캐스트 형식의 오디오 자동 생성 (MP3)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">슬라이드 자료 (Slides)</td>
        <td class="p-2.5">업로드한 문서를 분석하여 핵심 내용이 정리된 발표용 슬라이드 덱 아웃라인 생성</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">인포그래픽 / FAQ</td>
        <td class="p-2.5">복잡한 데이터와 개념을 한눈에 보여주는 시각적 질의응답 및 도표 요약집 생성</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">보고서 (Briefing Doc)</td>
        <td class="p-2.5">방대한 지침서의 핵심을 A4 1~2장 분량의 공식 임원 보고용 브리핑 문서로 변환</td>
      </tr>
    </tbody>
  </table>
</div>

---

<SlideHeader title="슬라이드 생성" category="Gemini Notebook" />

<div class="space-y-4">
  <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-800 leading-relaxed">
    <strong>스튜디오 슬라이드 생성 기능 :</strong> 업로드된 방대한 분량의 지침서나 보고서를 분석하여, 발표용 슬라이드 덱(제목, 개요, 핵심 내용, 발표자 노트)을 자동으로 구성합니다.
  </div>
  <div class="grid grid-cols-2 gap-5 h-[300px]">
    <div class="space-y-3">
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div class="font-bold text-slate-900 text-xs mb-1">1. 스튜디오 패널 이동</div>
        <div class="text-[11px] text-slate-600">화면 우측 스튜디오에서 '슬라이드 자료' 항목 클릭</div>
      </div>
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div class="font-bold text-slate-900 text-xs mb-1">2. 대상 소스 지정</div>
        <div class="text-[11px] text-slate-600">슬라이드에 반영할 핵심 출처 문서 체크박스 선택</div>
      </div>
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div class="font-bold text-slate-900 text-xs mb-1">3. 발표 슬라이드 자동 완성</div>
        <div class="text-[11px] text-slate-600">청중 수준에 맞춘 시각적 카드 형태의 슬라이드 초안 즉시 생성</div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <img src="/gemini-notebook-bts.webp" class="h-[260px] w-auto object-contain" alt="Gemini Notebook 스튜디오 기능" />
      <div class="text-xs text-slate-600 mt-2 text-center font-semibold">Gemini Notebook 스튜디오의 멀티모달 산출물 생성 기능</div>
    </div>
  </div>
</div>

---

<SlideHeader title="슬라이드 화면 및 수정" category="Gemini Notebook" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="Gemini Notebook 슬라이드 생성 결과 및 Google Slides 내보내기 화면" desc="생성된 슬라이드 확인 및 Google 프레젠테이션 내보내기 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      슬라이드 확인 및 내보내기 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">Google 프레젠테이션으로 내보내기</div>
      <div class="text-[11px] text-slate-600">클릭 한 번으로 구글 드라이브에 정식 프레젠테이션 파일이 생성되어 즉시 발표 가능</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">대화형 실시간 수정</div>
      <div class="text-[11px] text-slate-600">"3번 슬라이드 글자 수를 줄여줘", "자원봉사자 눈높이에 맞춰 친절하게 바꿔줘" 요청 시 즉시 반영</div>
    </div>
    <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
      <div class="font-bold text-[#07819A] text-xs mb-1">파워포인트(PPTX) 저장</div>
      <div class="text-[11px] text-slate-700">Google Slides에서 [파일] ➔ [다운로드] ➔ Microsoft PowerPoint(.pptx)로 로컬 저장 가능</div>
    </div>
  </div>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="h-20 px-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6">
    <img src="/divider_logo/images.jpg" class="h-14 w-auto object-contain" alt="ChatGPT Images Logo" />
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 06</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    비주얼 콘텐츠 제작
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    GPT Image 2 기반의 홍보 포스터, 인스타그램 카드뉴스 시리즈 및 실무 비주얼
  </p>
</div>

---

<SlideHeader title="AI 개인정보 학습 차단" category="챗GPT" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
        <span>모두를 위한 모델 개선 OFF</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        설정 ➔ Data Controls ➔ '모든 사람을 위해 모델 개선(Improve the model for everyone)' 토글을 끕니다.
      </p>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">2</span>
        <span>임시 채팅(Temporary Chat)</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        히스토리에 남기지 않고 즉시 휘발성으로 사용하려면 상단 모델 선택창에서 '임시 채팅'을 켭니다.
      </p>
    </div>
    <div class="text-xs text-slate-500 bg-blue-50/60 p-3 rounded-lg border border-blue-200">
      💡 프롬프트에 작성한 복지관 내부 정보가 모델 학습에 사용되지 않도록 필수 세팅합니다.
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="ChatGPT Data Controls 설정 UI 화면" desc="설정 > Data Controls 메뉴의 모델 개선 끄기 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      ChatGPT 데이터 제어 설정 화면
    </div>
  </div>
</div>

---

<SlideHeader title="빠른 답변 설정" category="챗GPT" />

<div class="space-y-4">
  <div class="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs flex items-center gap-3">
    <span class="i-logos-openai-icon w-6 h-6 shrink-0"></span>
    <div>
      <strong>개인 맞춤 설정 (Custom Instructions) :</strong> 질문할 때마다 사회복지사라는 역할을 반복 입력할 필요 없이 기본 세팅으로 고정합니다.
  </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-2">1. 사용자 정보 (나에 대해 알아야 할 점)</div>
      <p class="text-[11px] text-slate-700 font-mono bg-white p-2.5 rounded border border-slate-200 leading-relaxed m-0">
        "나는 대한민국 사회복지관에서 자원봉사 관리 및 홍보를 담당하는 사회복지사입니다. 이용자와 자원봉사자 안내문을 자주 작성합니다."
      </p>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-2">2. 응답 스타일 (어떻게 응답하길 원하나요)</div>
      <p class="text-[11px] text-slate-700 font-mono bg-white p-2.5 rounded border border-slate-200 leading-relaxed m-0">
        "항상 정중하고 친절한 존댓말로 작성해 주세요. 공문서는 공공 표준 서식을 엄수하고, 안내문은 쉬운 일상어로 풀어써 주세요."
      </p>
    </div>
  </div>
</div>

---

<SlideHeader title="ChatGPT 화면" category="챗GPT" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="ChatGPT 메인 웹 인터페이스 UI 화면" desc="좌측 대화 목록, 상단 GPT-4o 모델 선택, 파일 및 사진 첨부(+) 버튼 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      ChatGPT 작업 인터페이스
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">상단 모델 선택 (Model Switcher)</div>
      <div class="text-[11px] text-slate-600">GPT-4o, GPT-5 등 최신 프론티어 모델을 작업 성격에 맞게 선택</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">사진 및 파일 첨부 도구 (+)</div>
      <div class="text-[11px] text-slate-600">클립 아이콘을 눌러 포스터 초안, 공문서 사진, 사업 지침서 업로드</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">웹 검색 연동 (Web Search)</div>
      <div class="text-[11px] text-slate-600">최신 보건복지 정책이나 조례 정보를 실시간 인터넷 검색을 통해 확인</div>
    </div>
  </div>
</div>

---

<SlideHeader title="GPT Image 2" category="챗GPT" />

<div class="space-y-4">
  <div class="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs">
    <strong>DALL-E 3 기반의 최신 고화질 공공 일러스트 생성 엔진</strong>으로 복지 홍보물에 최적화된 그림을 렌더링합니다.
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1.5 flex items-center gap-1.5"><span class="i-lucide-languages text-blue-600"></span> 한글 프롬프트 완벽 이해</div>
      <div class="text-[11px] text-slate-600 leading-relaxed">복잡한 영어 번역 없이 "어르신께 따뜻한 도시락을 배달하는 청년"처럼 한글로 자연스럽게 묘사 가능</div>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1.5 flex items-center gap-1.5"><span class="i-lucide-type text-emerald-700"></span> 간단한 텍스트 인쇄</div>
      <div class="text-[11px] text-slate-600 leading-relaxed">포스터나 카드뉴스 표지에 "행복나눔", "자원봉사" 같은 핵심 타이틀 글씨를 깔끔하게 삽입</div>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1.5 flex items-center gap-1.5"><span class="i-lucide-brush text-purple-700"></span> 다양한 복지 화풍 지원</div>
      <div class="text-[11px] text-slate-600 leading-relaxed">따뜻한 수채화, 정갈한 공공 플랫 벡터 일러스트, 3D 클레이 등 기관의 톤앤매너에 맞춤 생성</div>
    </div>
  </div>
</div>

---

<SlideHeader title="GPT Image 2 이미지 생성" category="챗GPT" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="ChatGPT 이미지 생성 프롬프트 입력 및 렌더링 결과 UI" desc="대화창에 한글 프롬프트 입력 후 일러스트가 생성되는 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      이미지 생성 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. 주제 (Subject)</div>
      <div class="text-[11px] text-slate-600">누가, 무엇을 하고 있는지 명확히 지정 ("어르신에게 반찬을 건네는 봉사자")</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. 화풍 스타일 (Style)</div>
      <div class="text-[11px] text-slate-600">공공기관 홍보용 깔끔한 플랫 벡터 일러스트(Flat Vector Illustration)</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 색감 및 분위기 (Mood)</div>
      <div class="text-[11px] text-slate-600">초록색과 주황색 계열의 따뜻하고 희망찬 분위기</div>
    </div>
    <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
      <div class="font-bold text-[#07819A] text-xs mb-1">4. 화면 비율</div>
      <div class="text-[11px] text-slate-700">A4 세로 비율(포스터용) 또는 1:1 정사각형(인스타그램 피드용)</div>
    </div>
  </div>
</div>

---

<SlideHeader title="GPT Image 2 이미지 수정/저장" category="챗GPT" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="ChatGPT 인페인팅 브러시 선택 도구 및 수정 화면" desc="생성된 이미지 위에서 브러시로 특정 영역을 지정해 다시 그리는 UI" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      부분 편집(Inpainting) 브러시 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1단계 : 이미지 클릭 후 '선택(Select)' 클릭</div>
      <div class="text-[11px] text-slate-600">상단에 브러시 도구가 활성화되어 편집 모드 진입</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2단계 : 수정할 영역을 브러시로 마스킹</div>
      <div class="text-[11px] text-slate-600">캐릭터의 표정, 옷, 또는 배경의 불필요한 물체를 칠함</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3단계 : 변경 요청 프롬프트 입력</div>
      <div class="text-[11px] text-slate-600">"봉사자 조끼에 기관 로고를 그려줘", "표정을 더 환하게 웃는 모습으로 바꿔줘"</div>
    </div>
    <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
      <div class="font-bold text-[#07819A] text-xs mb-1">4단계 : 고화질 원본 다운로드</div>
      <div class="text-[11px] text-slate-700">우측 상단 다운로드 버튼을 눌러 인쇄용 PNG 원본 파일 보관</div>
    </div>
  </div>
</div>

---

<SlideHeader title="포스터 생성" category="챗GPT" />

<div class="h-[410px]">
  <PromptCard 
    title="사회복지기관 홍보 포스터 기획 및 DALL-E 생성 공식"
    hint="기관명과 사업 내용만 수정하면 기획안부터 일러스트 생성 프롬프트까지 일괄 도출됩니다."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[목표]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
입력자료를 참고하여 지역주민에게 자원봉사 활동을 알리고 참여를 독려하는 사회복지기관 홍보 포스터 기획안 및 이미지 생성 프롬프트를 작성해줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[입력 자료 (수정 영역)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• 기관명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[햇살종합사회복지관]</span></div>
<div>• 행사명: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[2026 희망나눔 자원봉사자 대축제]</span></div>
<div>• 주요 테마: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[지역 어르신과 청년의 따뜻한 동행]</span></div>
<div>• 핵심 상징: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[맞잡은 두 손, 파릇한 새싹, 희망 햇살]</span></div>
</div>
</div>
</div>
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[출력 형식 (기획 & 프롬프트)]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>1. 메인 헤드라인 제목 (3가지 감성 카피 제안)</div>
<div>2. 서브 슬로건 문구 (참여 행동 유도 카피)</div>
<div>3. 포스터 3단 레이아웃 (상단 타이틀 ➔ 중앙 비주얼 ➔ 하단 정보)</div>
<div>4. DALL-E 이미지 생성용 프롬프트 (한글/영문 버전 각 1부)</div>
</div>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[화풍 및 디자인 조건]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
깔끔하고 정갈한 공공 플랫 벡터 일러스트, 따뜻한 파스텔톤, 텍스트 배치를 위한 상·하단 여백 넉넉히 확보
</p>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="포스터 생성 실습" category="챗GPT" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#07819A]"></span>
        <span>실전 적용 프롬프트 요약</span>
      </div>
      <div class="text-[11px] text-slate-700 font-mono space-y-1.5 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
        <div><strong>기관명 :</strong> 구례군종합사회복지관</div>
        <div><strong>주제 :</strong> 「행복나눔 자원봉사단」 신규 봉사자 모집</div>
        <div><strong>대상 :</strong> 성인, 대학생, 직장인, 은퇴자</div>
        <div><strong>활동 :</strong> 말벗, 도시락 배달, 행사 보조, 환경정화</div>
        <div><strong>문의 :</strong> 061-780-2321</div>
        <div class="pt-1.5 border-t border-slate-100 text-blue-700">
          "위 내용으로 따뜻하고 산뜻한 일러스트 스타일의 A4 세로형 자원봉사자 모집 홍보 포스터를 그려줘."
        </div>
      </div>
    </div>
    <div class="text-[11px] text-slate-500 bg-blue-50/60 p-2 rounded">
      초록·주황 계열의 친근하고 따뜻한 공공 복지 비주얼 도출
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="전남 구례 산수유 축제 자원봉사자 모집 포스터 완성본" desc="어르신 동행 산수유꽃 배경과 모집 안내 문구가 조화된 완성 포스터 (추후 에셋 교체 영역)" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      포스터 생성 결과 예시 (에셋 교체 공란)
    </div>
  </div>
</div>

---

<SlideHeader title="카드뉴스 3단계 제작 공식" category="챗GPT" />

<div class="h-[410px]">
  <PromptCard 
    title="인스타그램 카드뉴스 기획-카피-생성 3단계 레시피"
    hint="1단계 구성안 표 도출 ➔ 2단계 문구 확정 ➔ 3단계 이미지 생성으로 분리하여 질문하면 완성도가 극대화됩니다."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[1단계 : 카드뉴스 구성안 기획]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[햇살종합사회복지관]</span> 인스타그램 홍보용 카드뉴스 기획<br>
• 주제: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[자원봉사자 모집]</span><br>
• 표 포함 항목: 핵심 대상, 홍보 목적, 적합한 카드 수(6~8장), 슬라이드별 핵심 내용 1줄 요약
</p>
</div>
<div class="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200">
<div class="text-[10px] font-bold text-emerald-800 mb-0.5">[3단계 : 표지 및 컷 이미지 생성]</div>
<p class="text-[10.5px] text-emerald-900 leading-snug m-0">
위 확정 문구로 1번 표지 카드뉴스 이미지를 DALL-E로 생성<br>
• 조건: 1:1 정방형, 모던 플랫 일러스트, 청록·파랑 메인 톤, 상단 텍스트용 여백 확보, 공공기관 신뢰감
</p>
</div>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[2단계 : 각 컷별 문구 작성]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>위 구성안대로 각 카드의 상세 문구를 작성해줘.</div>
<div class="pt-1 text-slate-600 space-y-0.5">
<div>• 작성 조건: 카드당 헤드라인(20자) + 본문(40자)</div>
<div>• 행정 용어는 쉬운 일상어로 풀어서, 친근한 존댓말</div>
<div>• 사실 정보: "[OOO (확인 필요)]"로 표기</div>
<div>• 결과 형식: | 카드 번호 | 역할 | 헤드라인 | 본문 | 표 형태</div>
</div>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="카드뉴스" category="챗GPT" />

<div class="flex flex-col justify-between h-[410px]">
  <div class="h-[280px]">
    <AssetSlot keyword="사회복지 자원봉사 모집 7컷 카드뉴스 세트" desc="01 나눔이 필요한 순간부터 07 지금 함께해주세요까지 일관된 화풍으로 제작된 인스타그램 카드뉴스 (추후 에셋 교체 영역)" min-height="270px" />
  </div>
  <div class="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold text-slate-700 mt-2">
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">01 나눔의 순간</div>
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">02 어렵지 않아요</div>
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">03 이런 활동 해요</div>
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">04 맞는 봉사 찾기</div>
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">05 간단한 신청</div>
    <div class="p-1.5 bg-blue-50 rounded border border-blue-200">06 참여 혜택</div>
    <div class="p-1.5 bg-[#07819A] text-white rounded">07 지금 함께해요!</div>
  </div>
  <div class="text-[11px] text-slate-500 text-center">
    * 한 번에 전체를 만들려 하지 말고, 동일한 색상 코드(#청록·#파랑)를 프롬프트에 지정해 컷별 일관성을 유지하세요.
  </div>
</div>

---

<SlideHeader title="다양한 활용법" category="챗GPT" />

<div class="h-[410px]">
  <PromptCard 
    title="교육자료 일러스트 · 감사장 배경 · 기관 캐릭터 프롬프트"
    hint="각 실무 목적에 맞게 중앙 여백이나 캐릭터 특징을 지정하여 다양한 홍보 자산을 구축하세요."
  >
<div class="space-y-2 text-xs leading-relaxed text-slate-800">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[1. 교육자료용 일러스트]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
"<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[노인 낙상 예방 수칙]</span>에 대한 자원봉사자 교육용 일러스트를 제작해 주세요. 교육 대상은 <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[대학생 봉사자]</span>이며, 다음 상황을 이해하기 쉽게 표현: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[어르신 보행 보조 시 양손 지지 요령]</span>. PPT 삽입용 배경 투명 또는 흰색의 깔끔한 2D 벡터 플랫 일러스트 스타일로 그려줘."
</p>
</div>
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[2. 자원봉사 감사장 배경]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
"<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[햇살종합사회복지관]</span> 자원봉사자의 날 기념 공식 감사장 배경 이미지를 제작해 주세요. 따뜻하고 은은하며 격조 있는 공식 감사장 느낌이며, 중앙 감사 문구용 넉넉한 여백을 비워두고 테두리에 금빛 나뭇잎 패턴을 섬세하게 배치해줘."
</p>
</div>
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[3. 기관 자원봉사 마스코트 캐릭터]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
"<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[구례종합복지관]</span>을 대표하는 친근한 자원봉사 캐릭터를 디자인해 주세요. 특징: <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[지리산 반달가슴곰 모티브 자원봉사 조끼 착용]</span>, 활용 목적: [인스타그램 카드뉴스, 홍보 스티커], 귀엽고 심플한 2D 벡터 스타일로 제작해줘."
</p>
</div>
</div>
  </PromptCard>
</div>

---

<SlideHeader title="다양한 활용법" category="챗GPT" />

<div class="h-[410px]">
  <PromptCard 
    title="봉사 후기 카드뉴스 표지 & 5단계 절차 인포그래픽 프롬프트"
    hint="단계별 절차 안내문은 텍스트 줄글보다 화살표와 아이콘이 결합된 인포그래픽이 참여율을 높입니다."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[1. 봉사 후기 카드뉴스 첫 페이지 표지]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
"<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[사랑의 연탄 나눔 봉사활동]</span> 후기 홍보 카드뉴스 이미지를 제작해 주세요.<br><br>
• 활동 내용: 추운 겨울 청년 봉사자들이 땀 흘리며 연탄을 나르고 어르신과 함께 환하게 웃는 모습<br>
• 분위기: 감동적이고 가슴 뭉클하며 따뜻한 나눔의 온기<br>
• 레이아웃: SNS 인스타그램 카드뉴스 표지(1:1), 상단에 제목 글씨를 얹을 수 있는 깔끔한 하늘 여백 제공"
</p>
</div>
<div class="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[2. 활동 절차 5단계 안내 인포그래픽]</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
"<span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[자원봉사 VMS 실적 등록 및 활동 5단계]</span> 절차를 인포그래픽으로 제작해 주세요.<br><br>
• 5단계 절차:<br>
  [1단계: 1365/VMS 가입] ➔ [2단계: 봉사 프로그램 신청] ➔ [3단계: 현장 오리엔테이션 및 활동] ➔ [4단계: 활동일지 제출] ➔ [5단계: VMS 실적 승인 및 인증서 발급]<br>
• 디자인 조건: 아이콘과 화살표를 결합하여 스마트폰 화면에서도 한눈에 이해되는 공공기관 안내문 스타일"
</p>
</div>
</div>
  </PromptCard>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mb-6 p-2">
    <img src="/divider_logo/nanobanana.jpg" class="w-20 h-20 object-contain" alt="Google Nano Banana Logo" />
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 07</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    제미나이 이미지 생성
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    Gemini 3.1 Flash Image 기반의 초고속 이미지 생성과 인페인팅 편집
  </p>
</div>

---

<SlideHeader title="제미나이 이미지 생성" category="제미나이" />

<div class="space-y-4">
  <div class="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs">
    <strong>제미나이 이미지 생성 모델 : Gemini 3.1 Flash Image</strong> (구글의 초경량 고속 모델 기반 1~2초 즉시 렌더링)
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1.5 flex items-center gap-1.5"><span class="i-lucide-sparkles text-blue-600"></span> 텍스트 기반 이미지 생성 (Text-to-image)</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">
        입력한 텍스트 프롬프트를 바탕으로 고품질의 새로운 복지 홍보 이미지를 즉시 생성
      </p>
    </div>
    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1.5 flex items-center gap-1.5"><span class="i-lucide-paint-brush text-emerald-700"></span> 이미지 편집 (Image+text-to-image)</div>
      <p class="text-[11px] text-slate-600 leading-relaxed m-0">
        기존 사진을 업로드하고 대화형 프롬프트로 배경을 바꾸거나 스타일을 변경하는 편집
      </p>
    </div>
  </div>
</div>

---

<SlideHeader title="제미나이 이미지 7대 기능" category="제미나이" />

<div class="grid grid-cols-4 gap-3 text-xs h-[380px]">
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-image text-blue-600"></span> 1. 텍스트생성</div>
    <div class="text-[11px] text-slate-600">텍스트 프롬프트로 일러스트 생성</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-brush text-blue-600"></span> 2. 인페인팅</div>
    <div class="text-[11px] text-slate-600">브러시로 영역을 칠해 부분 수정</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-sliders text-blue-600"></span> 3. 사진수정</div>
    <div class="text-[11px] text-slate-600">배경 교체, 조명 및 화풍 변경</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-file-text text-blue-600"></span> 4. 포스터</div>
    <div class="text-[11px] text-slate-600">행사 안내 및 모집 포스터 제작</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-layout text-blue-600"></span> 5. 인포그래픽</div>
    <div class="text-[11px] text-slate-600">신청 절차 도식화 및 아이콘 배치</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-smile text-blue-600"></span> 6. 4컷 웹툰</div>
    <div class="text-[11px] text-slate-600">봉사자 일상 공감 4컷 인스타툰</div>
  </div>
  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-maximize text-blue-600"></span> 7. 다양한 비율 지원</div>
    <div class="text-[11px] text-slate-600">1:1(SNS 피드), 16:9(유튜브·PPT), 9:16(릴스·숏폼) 완벽 지원</div>
  </div>
</div>

---

<SlideHeader title="제미나이 이미지 생성/저장" category="제미나이" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="Gemini 이미지 생성 및 저장 UI 인터페이스" desc="대화창에 생성된 다중 시안 이미지와 다운로드 버튼 화면" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      제미나이 이미지 렌더링 화면
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. "~그려줘" 명령어 사용</div>
      <div class="text-[11px] text-slate-600">프롬프트 끝에 명확한 이미지 생성 동사 명시</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. 2~4가지 시안 제시</div>
      <div class="text-[11px] text-slate-600">서로 다른 구도와 분위기의 시안이 함께 생성되어 비교 선택 가능</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 확대 및 고화질 다운로드</div>
      <div class="text-[11px] text-slate-600">마음에 드는 이미지를 클릭하여 전체 화면 미리보기 후 우측 상단 다운로드</div>
    </div>
  </div>
</div>

---

<SlideHeader title="제미나이 이미지 수정" category="제미나이" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="복지관 김장 나눔 행사 사진 편집 전후 비교" desc="원본 행사 사진 ➔ 얼굴 가상 변경 ➔ 헤어캡 추가 ➔ 배경 야외 변경 4단계 비교 (추후 에셋 교체 영역)" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      부분 수정(인페인팅) 브러시 화면 (에셋 교체 공란)
    </div>
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. 상단 브러시 도구 선택</div>
      <div class="text-[11px] text-slate-600">수정하고 싶은 이미지 클릭 후 브러시 모드 활성화</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. 수정할 부분만 칠하기</div>
      <div class="text-[11px] text-slate-600">손가락, 얼굴 표정, 또는 배경의 특정 영역만 마스킹</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 변경할 내용 지시</div>
      <div class="text-[11px] text-slate-600">"이 부분에 자원봉사 앞치마를 입혀줘", "배경을 따뜻한 햇살로 바꿔줘"</div>
    </div>
    <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
      <div class="font-bold text-[#07819A] text-xs mb-1">4. 자연스러운 재생성</div>
      <div class="text-[11px] text-slate-700">전체 그림의 화풍을 그대로 유지한 채 마스킹 영역만 감쪽같이 교체</div>
    </div>
  </div>
</div>

---

<SlideHeader title="프롬프트로 이미지 수정" category="제미나이" />

<div class="space-y-3 mt-4">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
    <div>
      <strong class="text-xs text-slate-900">원본 생성 :</strong> "사랑의 김장 나눔 행사에서 봉사자들이 배추를 버무리는 모습을 일러스트로 그려줘."
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
    <div>
      <strong class="text-xs text-slate-900">얼굴 및 표정 변경 :</strong> "방금 그린 그림에서 자원봉사자들의 표정을 더 밝고 환하게 활짝 웃는 표정으로 바꿔줘."
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
    <div>
      <strong class="text-xs text-slate-900">위생 소품 착용 :</strong> "사람들의 머리에 모두 흰색 위생모를 씌워주고, 빨간 고무장갑을 착용하게 해줘."
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-[#07819A] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
    <div>
      <strong class="text-xs text-[#07819A]">상단 여백 확보 :</strong> "상단에 '2026 사랑의 김장 나눔' 글씨를 넣을 수 있도록 하늘색 여백을 넉넉히 비워줘."
    </div>
  </div>
</div>

---

<SlideHeader title="포스터 실습" category="제미나이" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#07819A]"></span>
        <span>실전 적용 프롬프트</span>
      </div>
      <div class="text-[11px] text-slate-700 font-mono space-y-1.5 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
        <div>"사회복지관 게시판에 부착할 <strong>「자원봉사 시간 인정 기준 안내 포스터」</strong>를 그려줘.</div>
        <div>1. 상단에 큼직한 시계 아이콘과 VMS 로고 느낌의 하트 심볼 배치</div>
        <div>2. 1일 최대 8시간 인정, 단순 행사 참석 미인정 등 핵심 규칙 3가지를 귀여운 일러스트 아이콘으로 표현</div>
        <div>3. 공공기관의 신뢰감을 주는 파란색과 따뜻한 노란색의 조화</div>
        <div>4. 하단에 기관명 [햇살종합사회복지관] 표기 공간 확보"</div>
      </div>
    </div>
    <div class="text-[11px] text-slate-500 bg-blue-50/60 p-2 rounded">
      규정 안내문을 직관적 인포 포스터로 제작
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="자원봉사 시간 인정 기준 안내 홍보 포스터 디자인" desc="시계와 하트 아이콘, 봉사시간 인정 수칙이 일러스트로 표현된 안내 포스터" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      포스터 생성 결과 예시
    </div>
  </div>
</div>

---

<SlideHeader title="인포그래픽 프롬프트" category="제미나이" />

<div class="space-y-4">
  <div class="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-slate-800 text-xs">
    <strong>[꿀조합 공식] :</strong> 스타일 이름 + 만들려는 매체 + 주제 + 핵심 분위기 1~2단어
  </div>
  <div class="space-y-3">
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">1. 스타일 이름 지정</div>
      <div class="text-[11px] text-slate-600">"플랫 벡터 일러스트", "핸드 드로잉 스케치", "클린 인포그래픽 스타일"</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">2. 만들려는 매체 규격</div>
      <div class="text-[11px] text-slate-600">"인스타그램 카드뉴스용 1:1 정사각형", "A4 세로형 인쇄용 포스터"</div>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <div class="font-bold text-slate-900 text-xs mb-1">3. 단계별 절차와 핵심 아이콘</div>
      <div class="text-[11px] text-slate-600">"4단계(신청 ➔ 교육 ➔ 활동 ➔ 승인)를 연결하는 화살표와 아이콘 배치"</div>
    </div>
  </div>
</div>

---

<SlideHeader title="인포그래픽 프롬프트 비교" category="제미나이" />

<div class="space-y-3 mt-4 text-xs">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-x text-rose-600"></span> 1단계 (초보자) : 모호한 지시</div>
    <div class="text-slate-600 text-[11px]">"봉사활동 신청하는 방법 인포그래픽으로 그려줘." ➔ 너무 많은 정보가 뒤섞여 가독성 떨어짐</div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5"><span class="i-lucide-check text-blue-600"></span> 2단계 (중급자) : 단계와 텍스트 명시</div>
    <div class="text-slate-600 text-[11px]">"VMS 회원가입부터 봉사 신청, 활동, 실적 승인까지 4단계를 화살표로 연결해서 깔끔하게 그려줘." ➔ 구조는 잡히나 디자인 완성도 아쉬움</div>
  </div>
  <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
    <div class="font-bold text-[#07819A] mb-1 flex items-center gap-1.5"><span class="i-lucide-award text-emerald-700"></span> 3단계 (전문가) : 스타일, 비율, 아이콘, 색상 완벽 디렉팅</div>
    <div class="text-slate-700 text-[11px] leading-relaxed">
      "스마트폰 카드뉴스용 1:1 비율로, 공공기관 스타일의 심플한 4단계 플랫 벡터 인포그래픽을 그려줘. 흰색 배경에 파란색과 초록색 아이콘을 사용하고 각 단계 아래에 핵심 키워드 2단어씩만 깔끔하게 배열해줘." ➔ <strong>즉시 인쇄 가능한 프로급 인포그래픽 산출</strong>
    </div>
  </div>
</div>

---

<SlideHeader title="인포그래픽 실습" category="제미나이" />

<div class="grid grid-cols-2 gap-6 h-[400px]">
  <div class="flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-[#07819A]"></span>
        <span>적용 프롬프트</span>
      </div>
      <div class="text-[11px] text-slate-700 font-mono space-y-1.5 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
        <div>"경로식당 어르신들을 위한 <strong>「무료급식 4단계 이용 수칙 인포그래픽」</strong>을 그려줘.</div>
        <div>1단계: 식당 입구 손 소독 및 발열 체크</div>
        <div>2단계: 번호표 수령 및 차례대로 대기</div>
        <div>3단계: 따뜻한 식사 맛있게 하기 (잔반 줄이기)</div>
        <div>4단계: 퇴식구에 식판 반납 및 출구 이동</div>
        <div>* 글씨를 잘 못 보시는 어르신도 이해할 수 있도록 큼직하고 친근한 일러스트 아이콘 중심 표현"</div>
      </div>
    </div>
    <div class="text-[11px] text-slate-500 bg-blue-50/60 p-2 rounded">
      식당 벽면 부착용 A3 가로 규격 최적화
    </div>
  </div>
  <div class="flex flex-col justify-between">
    <div class="h-[340px]">
      <AssetSlot keyword="경로식당 무료급식 4단계 이용 수칙 인포그래픽" desc="손소독, 번호표, 식사, 퇴식구 반납이 큼직한 아이콘으로 표현된 인포그래픽" min-height="330px" />
    </div>
    <div class="text-[11px] text-slate-500 text-center">
      인포그래픽 결과 예시
    </div>
  </div>
</div>

---

<SlideHeader title="4컷 만화 프롬프트 예시" category="제미나이" />

<div class="h-[410px]">
  <PromptCard 
    title="자원봉사 일상 공감 4컷 인스타툰 제작 프롬프트"
    hint="카드뉴스 피드에 웹툰 형식을 도입하면 젊은 층과 청년 자원봉사자의 참여 공감대가 비약적으로 상승합니다."
  >
<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed text-slate-800">
<div class="space-y-2">
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">역할 및 시나리오 의뢰</div>
<p class="text-[10.5px] leading-snug text-slate-800 m-0">
너는 따뜻한 일상을 그리는 인기 웹툰 작가야. '처음으로 도시락 배달 봉사를 시작한 대학생의 하루'를 주제로 인스타그램 게시용 4컷 웹툰 시나리오와 각 컷 이미지 프롬프트를 작성해줘.
</p>
</div>
<div class="p-2 bg-white rounded-lg border border-slate-200 space-y-0.5">
<div class="text-[10px] font-bold text-[#07819A] mb-0.5">[캐릭터 설정 & 스타일]</div>
<div class="text-[10.5px] text-slate-700 space-y-0.5 pl-1">
<div>• <strong>주인공:</strong> <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[20대 초반 대학생 '지우']</span> (노란 조끼, 밝은 성격)</div>
<div>• <strong>보조 인물:</strong> <span class="bg-blue-100 text-blue-900 px-1 py-0.2 rounded font-semibold">[반갑게 맞아주시는 홀몸 어르신]</span> (인자한 미소)</div>
<div>• <strong>스타일:</strong> 2D 플랫 파스텔톤, 컷마다 말풍선 텍스트 영역 확보</div>
</div>
</div>
</div>
<div class="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
<div class="text-[10px] font-bold text-slate-800 mb-0.5">[4컷 스토리보드 구성]</div>
<div class="text-[10.5px] text-slate-700 space-y-1 pl-1">
<div>• <strong>1컷 (기대·긴장):</strong> 복지관 도착 후 무거운 도시락 가방 챙기기</div>
<div>• <strong>2컷 (첫 만남):</strong> 가파른 언덕길 올라 문 두드리며 긴장하는 모습</div>
<div>• <strong>3컷 (따뜻한 온기):</strong> "고마워요 학생" 사탕 건네시는 어르신과 감동</div>
<div>• <strong>4컷 (보람찬 마무리):</strong> 돌아오는 길 환한 미소 (말풍선: "다음 주에도!")</div>
</div>
</div>
</div>
  </PromptCard>
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl border border-slate-200 p-12">
  <div class="w-16 h-16 rounded-2xl bg-[#07819A] text-white flex items-center justify-center mb-6 shadow-md">
    <span class="i-lucide-gavel w-8 h-8"></span>
  </div>
  <div class="text-[#07819A] font-bold tracking-widest uppercase text-sm mb-2">SECTION 08</div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    2026 인공지능 기본법 & 저작권
  </h1>
  <p class="text-base text-slate-600 max-w-lg">
    공공 복지 기관이 반드시 준수해야 할 AI 윤리·투명성·저작권 가이드라인
  </p>
</div>

---

<SlideHeader title="AI 활용 주의사항" category="2026년 인공지능 기본법" />

<div class="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
  <span class="text-[#F4BD38]">▶</span> 보고서·문서 작성 시 점검 항목 (2026년 인공지능 기본법)
</div>

<div class="space-y-3 mt-4">
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">1</span>
    <div>
      <strong class="text-xs text-slate-900">사실관계 검증 및 표기</strong>
      <div class="text-[11px] text-slate-600">AI가 작성한 통계, 정책 수치, 법률 조항은 원본 문서를 대조하여 사실관계를 반드시 검증</div>
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">2</span>
    <div>
      <strong class="text-xs text-slate-900">개인정보보호 및 비식별화</strong>
      <div class="text-[11px] text-slate-600">이용자의 이름, 주민등록번호, 연락처 등 민감 정보가 포함되지 않도록 철저히 마스킹</div>
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-blue-100 text-[#07819A] text-xs font-bold flex items-center justify-center shrink-0">3</span>
    <div>
      <strong class="text-xs text-slate-900">편향성 및 차별 표현 배제</strong>
      <div class="text-[11px] text-slate-600">성별, 연령, 장애, 다문화 등에 대한 편견이나 차별적인 묘사가 들어가지 않도록 사전 필터링</div>
    </div>
  </div>
  <div class="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
    <span class="w-6 h-6 rounded-full bg-[#07819A] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
    <div>
      <strong class="text-xs text-[#07819A]">AI 인용 표기 (투명성 의무)</strong>
      <div class="text-[11px] text-slate-700">생성형 AI로 제작된 대외 홍보물이나 문서의 경우 "본 자료는 AI 보조를 받아 작성되었습니다" 명시</div>
    </div>
  </div>
</div>

---

<SlideHeader title="홍보 콘텐츠 활용 주의사항" category="2026년 인공지능 기본법" />

<div class="grid grid-cols-2 gap-4 h-[380px]">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-rose-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-user-x text-rose-600"></span>
        <span>초상권 및 딥페이크 오인 방지</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        실제 이용자나 자원봉사자의 얼굴을 AI로 변형하여 무단 사용하지 않으며, 가상 인물임을 표기하여 혼란을 방지합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-rose-50 p-2 rounded">
      생성된 인물 이미지임을 대외 공시
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-amber-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-copyright text-amber-600"></span>
        <span>로고 및 상표권 침해 금지</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        AI가 이미지 내부에 생성한 특정 상업용 브랜드 로고나 유명 캐릭터 형태는 반드시 제거 후 배포합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-amber-50 p-2 rounded">
      기관 공식 로고는 별도 오버레이 삽입
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-emerald-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-type text-emerald-600"></span>
        <span>상업용 무료 폰트 준수</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        포스터나 카드뉴스 텍스트 삽입 시 라이선스가 검증된 상업용 무료 폰트(눈누 안심 폰트)만 사용합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-emerald-50 p-2 rounded">
      인쇄/웹 배포 허용 폰트 선별 사용
    </div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
    <div>
      <div class="font-bold text-blue-700 text-sm mb-2 flex items-center gap-2">
        <span class="i-lucide-shield-check text-blue-600"></span>
        <span>공공누리·공유마당 우선 활용</span>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed m-0">
        한국저작권위원회 공유마당과 정부 공공누리 제1유형 저작물을 우선적으로 결합하여 법적 리스크를 원천 차단합니다.
      </p>
    </div>
    <div class="text-[11px] text-slate-500 bg-blue-50 p-2 rounded">
      출처 표기 의무 준수
    </div>
  </div>
</div>

---

<SlideHeader title="무료 사이트" category="참고자료" />

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">플랫폼명</th>
        <th class="p-2.5 w-1/4">제공 리소스</th>
        <th class="p-2.5 w-1/2 text-[#07819A]">실무 활용 팁 및 웹사이트</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">공유마당 (KCC)</td>
        <td class="p-2.5">무료 글꼴, 이미지, 음악</td>
        <td class="p-2.5">gongu.copyright.or.kr (한국저작권위원회 만료 저작물 및 기증 사진)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">공공누리 (KOGL)</td>
        <td class="p-2.5">이미지, 영상, 음악, 서체</td>
        <td class="p-2.5">www.kogl.or.kr (정부·지자체 공공 저작물, 제1유형 출처표시 시 자유 이용)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">눈누 (Noonnu)</td>
        <td class="p-2.5">상업용 무료 한글 폰트</td>
        <td class="p-2.5">noonnu.cc (웹폰트 및 인쇄물용 안심 글꼴 선별 다운로드)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">AI-Hub (NIA)</td>
        <td class="p-2.5">AI 학습용 공공 데이터</td>
        <td class="p-2.5">aihub.or.kr (한국어 공공 행정 문서 표준 데이터셋 참조)</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2.5 font-bold">Unsplash / Pixabay</td>
        <td class="p-2.5">고화질 무료 감성 사진</td>
        <td class="p-2.5">unsplash.com (CC0 라이선스 준수 스톡 사진, PPT 표지 배경 최적)</td>
      </tr>
    </tbody>
  </table>
</div>

---

<SlideHeader title="공유저작물 사용 기준" category="참고자료" />

<div class="overflow-hidden rounded-xl border border-slate-200 shadow-xs mb-3">
  <table class="w-full text-xs text-left border-collapse">
    <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
      <tr>
        <th class="p-2.5 w-1/4">CCL 표기</th>
        <th class="p-2.5 w-1/3">조건 명칭</th>
        <th class="p-2.5 w-5/12 text-[#07819A]">허용 기준 및 실무 유의점</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 text-[11px]">
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold font-mono">CC-BY</td>
        <td class="p-2">저작자 표시</td>
        <td class="p-2">저작자의 이름, 출처를 밝히면 상업적 이용 및 2차 변형 자유</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold font-mono">CC-BY-NC</td>
        <td class="p-2">저작자 표시 - 비영리</td>
        <td class="p-2">출처를 표기하되, 영리적 이익 창출 목적의 이용은 금지</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold font-mono">CC-BY-ND</td>
        <td class="p-2">저작자 표시 - 변경금지</td>
        <td class="p-2">출처를 밝히되, 원본을 자르거나 가공·변형하지 않고 그대로 사용</td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="p-2 font-bold font-mono">CC-BY-SA</td>
        <td class="p-2">저작자 표시 - 동일조건변경허락</td>
        <td class="p-2">2차적 저작물 제작 시 원저작물과 동일한 CCL 조건을 부여해야 함</td>
      </tr>
      <tr class="hover:bg-slate-50 bg-emerald-50/50">
        <td class="p-2 font-bold font-mono text-emerald-800">CC0 (Public Domain)</td>
        <td class="p-2 font-bold text-emerald-800">공공 저작물 / 저작권 만료</td>
        <td class="p-2 font-bold text-emerald-800">저작권 표기 없이도 누구나 자유롭게 복제, 수정, 배포 가능</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="text-[11px] text-slate-500 text-center">
  * 복지관 홍보물 제작 시 <strong>CC0</strong> 또는 <strong>공공누리 제1유형(출처표시)</strong> 에셋을 우선 활용하는 것이 가장 안전합니다.
</div>

---

<div class="h-full flex flex-col justify-center items-center text-center px-8 relative bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-2xl border border-slate-200 p-12">
  <div class="w-16 h-16 rounded-full bg-blue-100 text-[#07819A] flex items-center justify-center mb-6 shadow-sm">
    <span class="i-lucide-help-circle w-8 h-8"></span>
  </div>
  <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
    질의응답 (Q & A)
  </h1>
  <p class="text-base text-slate-600 max-w-xl mb-8 leading-relaxed">
    생성형 AI는 기술이 아니라 <strong>현장 사회복지사의 전문성을 증폭시키는 날개</strong>입니다.<br />
    궁금하신 점을 자유롭게 질문해 주세요.
  </p>
  <div class="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center gap-6 shadow-xs">
    <span>강사: <strong>오진실</strong></span>
    <span>•</span>
    <span>전라남도사회복지사협회 보수교육</span>
    <span>•</span>
    <span>함께해 주셔서 대단히 감사합니다.</span>
  </div>
</div>