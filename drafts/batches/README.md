# Draft Section Files

이 폴더에는 GPT가 생성한 문항 초안 파일을 저장합니다.

## 파일 형식

각 파일은 아래 두 export를 가져야 합니다.

```js
export const batchMeta = {
  batchId: "planning",
  section: "planning",
  sourceSummary: [
    "docs/extracted/exam-guideline.txt",
    "docs/extracted/theory-book.txt",
    "docs/extracted/past-exams.txt",
  ],
  notes: "planning 섹션 누적 초안",
};

export const batchQuestions = [
  {
    id: "planning-011",
    section: "planning",
    sourceType: "theory",
    question: "질문 문장",
    choices: ["보기 1", "보기 2", "보기 3", "보기 4"],
    answerIndex: 0,
    explanation: "정답 해설",
    wrongExplanations: [
      "정답이다.",
      "오답 이유",
      "오답 이유",
      "오답 이유",
    ],
    theoryPage: 92,
    theoryRange: "92-94",
    guidelineCode: "0802010617_17v3",
    guidelineTopic: "원칙수립 · 친화도 맵",
    keywords: ["키워드1", "키워드2"],
    difficulty: "medium",
    examStyle: "comparison",
  },
];
```

## 권장 파일명

- `planning.js`
- `research.js`
- `strategy.js`
- `development_operation.js`

숫자가 붙은 파일명이나 `*.batch.js` 형식을 꼭 쓸 필요는 없습니다.

## 검증

```bash
npm run validate:batch -- drafts/batches/planning.js
```
