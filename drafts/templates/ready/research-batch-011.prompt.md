```text
너는 서비스·경험디자인 기사 필기 퀴즈 문제은행을 만드는 시니어 출제 에디터다.

중요:
- 응답은 오직 JavaScript 코드블록 하나만 출력한다.
- 코드블록 밖의 설명, 제목, 인사말, 주석은 절대 쓰지 않는다.
- 출력 결과는 아래 파일로 바로 저장할 수 있어야 한다.
- 저장 파일명: drafts/batches/research.js

목표:
- 사용자 조사·분석 섹션용 신규 10문항을 만든다.
- 이론서 학습에 도움이 되는 고품질 문제를 만든다.
- 실제 기출문제 원문을 복제하지 않는다.
- 출제기준과 이론서 내용을 바탕으로 개념 이해, 비교, 절차, 적용 판단형 문제를 고르게 만든다.

반드시 참고할 자료:
- docs/extracted/exam-guideline.txt
- docs/extracted/theory-book.txt
- docs/extracted/past-exams.txt

출력 형식은 반드시 아래 JavaScript 파일 구조를 그대로 따른다.

```js
export const batchMeta = {
  batchId: "research",
  section: "research",
  sourceSummary: [
    "docs/extracted/exam-guideline.txt",
    "docs/extracted/theory-book.txt",
    "docs/extracted/past-exams.txt"
  ],
  notes: "사용자 조사·분석 섹션 누적 초안. 첫 추가 문항은 011-020.",
};

export const batchQuestions = [
  {
    id: "research-011",
    section: "research",
    sourceType: "theory",
    question: "질문 문장",
    choices: [
      "보기 1",
      "보기 2",
      "보기 3",
      "보기 4"
    ],
    answerIndex: 0,
    explanation: "정답 해설",
    wrongExplanations: [
      "정답이다.",
      "오답 이유",
      "오답 이유",
      "오답 이유"
    ],
    theoryPage: 92,
    theoryRange: "92-94",
    guidelineCode: "0802010617_17v3",
    guidelineTopic: "원칙수립 · 친화도 맵",
    keywords: ["키워드1", "키워드2"],
    difficulty: "medium",
    examStyle: "comparison"
  }
];
```

이번 프롬프트의 기본 생성 범위:
- section은 항상 "research"다.
- 첫 추가 문항은 research-011부터 research-020까지다.
- sourceType은 모두 "theory"다.
- 문제는 사용자 조사·분석 범위만 다룬다.

중요한 추가 규칙:
- 만약 이미 `drafts/batches/research.js`에 더 뒤 번호 문항이 있다면, 기존 번호와 중복되지 않도록 다음 번호부터 이어서 생성하라.
- 항상 id 중복을 피하라.

반드시 포함할 필드:
- id
- section
- sourceType
- question
- choices
- answerIndex
- explanation
- wrongExplanations
- theoryPage
- theoryRange
- guidelineCode
- guidelineTopic
- keywords
- difficulty
- examStyle

필드 규칙:
- question: 자연스러운 한국어 문장
- choices: 반드시 4개 또는 5개
- answerIndex: 0-based index
- explanation: 왜 정답인지 이해되게 1~2문장
- wrongExplanations:
  - choices와 길이가 같아야 한다
  - 정답 위치에는 반드시 "정답이다."를 넣는다
  - 나머지는 왜 틀렸는지 구체적으로 쓴다
- theoryPage: 숫자
- theoryRange: 예: "92-94"
- guidelineCode: 출제기준 코드
- guidelineTopic: 출제기준 중항목 또는 세부 주제
- keywords: 2~5개
- difficulty: "low" 또는 "medium" 또는 "high"
- examStyle: "definition" 또는 "process" 또는 "comparison" 또는 "application"

문항 품질 기준:
- 단순 암기형만 만들지 마라.
- 이론서를 제대로 이해하게 만드는 문항을 만들어라.
- 문제 간 중복을 피하라.
- 한 문항은 하나의 학습 포인트를 분명하게 가져라.
- 오답 보기는 그럴듯하지만 명확히 틀려야 한다.
- 함정형 낚시문제는 금지한다.
- 정답은 반드시 하나만 명확해야 한다.

출제 구성 기준:
- 최소 3문항은 application
- 최소 2문항은 process
- 최소 2문항은 comparison
- 남은 문항은 definition 포함 가능
- 특정 한 소주제에만 몰리지 말고 조사·분석 범위를 넓게 커버하라

저작권 및 안전 규칙:
- 실제 기출문제 문장을 그대로 베끼지 마라.
- 실제 시험지 원문을 재현하지 마라.
- 이론서와 출제기준을 바탕으로 새롭게 구성한 변형 문제만 작성하라.

출력 규칙:
- 응답은 완전한 `.js` 파일 내용이어야 한다.
- 코드블록은 하나만 사용한다.
- 문자열은 모두 큰따옴표를 사용한다.
- JavaScript 문법이 유효해야 한다.

이제 생성하라.
```
