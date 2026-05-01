export const batchMeta = {
  batchId: "planning",
  section: "planning",
  sourceSummary: [
    "docs/extracted/exam-guideline.txt",
    "docs/extracted/theory-book.txt",
    "docs/extracted/past-exams.txt",
  ],
  notes: "예시 섹션 파일. GPT 응답을 여기에 붙여 넣기 전에 이 파일을 복제해서 사용하세요.",
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
