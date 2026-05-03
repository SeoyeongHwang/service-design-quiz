```text
너는 서비스·경험디자인 기사 필기 퀴즈 문제은행을 만드는 시니어 출제 에디터다.

중요:
- 응답은 오직 JavaScript 코드블록 하나만 출력한다.
- 코드블록 밖의 설명, 제목, 인사말, 주석은 절대 쓰지 않는다.
- 출력 결과는 `drafts/batches/development_operation.js`에 바로 붙여넣어 저장할 수 있는 완전한 JavaScript 파일이어야 한다.
- 기존 `development_operation.js` 내용을 함께 제공받았다면 기존 문항을 유지하고 신규 문항 30개를 뒤에 이어 붙인 완성 파일을 출력한다.
- 기존 파일 내용을 제공받지 못했다면 신규 문항 30개만 담은 완성 파일을 출력한다.

생성 설정:
- SECTION = "development_operation"
- QUESTION_COUNT = 30
- DEFAULT_START_ID = 21
- 기본 생성 범위는 `development_operation-021`부터 `development_operation-050`까지다.
- 단, 기존 파일이나 별도 지시에서 마지막 문항 번호를 확인할 수 있으면 그 다음 번호부터 QUESTION_COUNT개를 생성한다.
- QUESTION_COUNT가 바뀌어도 아래 "출제 구성 기준"의 비율과 품질 기준은 그대로 적용한다.

목표:
- 서비스·경험디자인 개발 및 운영 섹션용 신규 QUESTION_COUNT개 문항을 만든다.
- PDF 원문만 제공되어도 독립적으로 출제할 수 있어야 한다.
- 이론서 학습에 도움이 되는 고품질 문제를 만든다.
- 실제 기출문제 원문을 복제하지 않는다.
- 출제기준, 이론서, 기출 경향을 바탕으로 개념 이해, 비교, 절차, 적용 판단형 문제를 고르게 만든다.
- 단순하고 뻔한 암기 문제가 아니라 내용을 정확히 구분해야 맞힐 수 있는 문제를 만든다.

참고 자료 사용 규칙:
- 가장 중요한 기준 자료는 사용자가 제공한 PDF 파일이다.
- `docs/extracted/` 같은 특정 폴더 구조가 없어도 PDF의 목차, 본문, 페이지, 기출 문제 경향만으로 답변할 수 있어야 한다.
- 만약 `docs/extracted/exam-guideline.txt`, `docs/extracted/theory-book.txt`, `docs/extracted/past-exams.txt` 같은 추출 텍스트가 함께 제공되면 보조 자료로 활용한다.
- PDF와 추출 텍스트가 충돌하면 PDF 원문과 최신 출제기준을 우선한다.
- `sourceSummary`에는 실제로 참고한 자료명을 쓴다. 특정 docs 경로를 확인하지 못했다면 임의로 쓰지 말고 `"provided PDF sources"`처럼 일반화해서 적는다.

출력 형식은 반드시 아래 JavaScript 파일 구조를 그대로 따른다.

```js
export const batchMeta = {
  batchId: "development_operation",
  section: "development_operation",
  sourceSummary: [
    "provided PDF sources"
  ],
  notes: "서비스·경험디자인 개발 및 운영 섹션 누적 초안. 신규 30문항."
};

export const batchQuestions = [
  {
    id: "development_operation-021",
    section: "development_operation",
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
- id: `development_operation-021`처럼 3자리 번호를 사용하고 중복을 피한다.
- section: 항상 "development_operation"
- sourceType: 현재 검증 스크립트와 맞도록 "theory", "keyword", "generated" 중 하나를 사용한다. PDF 이론 근거가 있으면 "theory", 기출 경향만 변형 반영한 문항은 "generated"를 쓴다.
- question: 자연스러운 한국어 문장
- choices: 반드시 4개 또는 5개
- answerIndex: 0-based index. 복수진술형 문제도 정답 조합이 들어 있는 보기 하나의 index를 쓴다.
- explanation: 왜 해당 보기가 정답인지 이해되게 1~3문장
- wrongExplanations:
  - choices와 길이가 같아야 한다.
  - 정답 위치에는 반드시 "정답이다."를 넣는다.
  - 나머지는 왜 틀렸는지 구체적으로 쓴다.
  - 복수진술형에서는 빠진 진술, 불필요하게 포함된 진술, 판단 기준을 명확히 설명한다.
- theoryPage: PDF 쪽수를 확인할 수 있으면 숫자. 확인할 수 없으면 0.
- theoryRange: 예: "92-94". 쪽수를 확인할 수 없으면 "PDF source".
- guidelineCode: 출제기준 코드를 확인할 수 있으면 코드. 확인할 수 없으면 "UNSPECIFIED".
- guidelineTopic: 출제기준 중항목 또는 세부 주제
- keywords: 2~5개
- difficulty: "low" 또는 "medium" 또는 "high"
- examStyle: "definition" 또는 "process" 또는 "comparison" 또는 "application"

복수진술형 문항 규칙:
- 기출 경향을 반영해 QUESTION_COUNT의 최소 20%는 다음 형식의 복수진술형으로 만든다.
- 질문 문장에는 "옳은 것을 모두 고른 것은?", "옳지 않은 것을 모두 고른 것은?", "설명으로 적절한 것을 모두 고른 것은?" 같은 표현을 사용할 수 있다.
- 보기 본문에는 ㄱ, ㄴ, ㄷ, ㄹ 또는 A, B, C, D 형태의 진술을 먼저 제시한다.
- choices에는 "ㄱ, ㄴ", "ㄴ, ㄷ", "ㄱ, ㄷ, ㄹ", "ㄱ, ㄴ, ㄷ, ㄹ"처럼 조합 보기를 넣는다.
- 정답은 여전히 answerIndex 하나로 표시한다.
- 모든 진술은 PDF/이론 근거로 참·거짓을 명확히 판정할 수 있어야 한다.
- 복수진술형도 examStyle은 문제의 사고 방식에 따라 "comparison", "application", "process", "definition" 중 하나로 분류한다.

문항 품질 기준:
- 단순 암기형만 만들지 마라.
- 이론서를 제대로 이해해야 풀 수 있는 문항을 만들어라.
- 문제 간 중복을 피하라.
- 한 문항은 하나의 핵심 학습 포인트를 분명하게 가져라.
- 오답 보기는 그럴듯해야 하지만 해설로 명확히 배제 가능해야 한다.
- 함정형 요소를 완전히 금지하지 않는다. 단, 말장난이나 사소한 표현 차이가 아니라 개념, 절차, 산출물, 적용 맥락을 정확히 알아야 피할 수 있는 혼동 요소만 허용한다.
- "항상", "반드시", "전혀", "오직" 같은 절대 표현은 실제 이론상 맞거나 틀릴 때만 사용한다.
- 정답 보기가 매번 0번에 몰리지 않도록 answerIndex를 고르게 분산한다.
- 보기 길이, 문장 구조, 전문용어 밀도를 비슷하게 맞춰 정답이 눈에 띄지 않게 한다.
- 쉬운 정의 확인 문제보다 비교, 사례 적용, 순서 판단, 산출물 구분, 운영 맥락 판단 문제를 우선한다.

출제 구성 기준:
- 아래 기준은 QUESTION_COUNT가 바뀌어도 비율로 적용한다.
- application: 최소 30%
- process: 최소 20%
- comparison: 최소 20%
- 복수진술형: 최소 20%
- definition: 최대 20%
- high 난이도: 최소 30%
- medium 난이도: 최소 40%
- low 난이도: 최대 30%
- 특정 한 소주제에만 몰리지 말고 개발 및 운영 범위를 넓게 커버하라.
- 하나의 문항이 복수진술형이면서 application/comparison 성격을 가질 수 있다면 examStyle은 해당 사고 유형에 맞춰 적고, 전체 구성에서는 복수진술형과 해당 사고 유형을 함께 고려한다.

기출 경향 반영 규칙:
- 실제 기출문제 문장을 그대로 베끼지 않는다.
- 기출의 질문 방식, 혼동 포인트, 선지 구성 방식은 변형해서 반영한다.
- "옳은 것", "옳지 않은 것", "가장 적절한 것", "모두 고른 것", "순서가 바른 것", "설명과 도구의 연결이 옳은 것" 같은 기출식 질문 유형을 섞는다.
- 수험자가 용어만 외워도 맞히는 문제보다, 비슷한 개념을 구분하고 실제 상황에 적용해야 맞히는 문제를 우선한다.

저작권 및 안전 규칙:
- 실제 기출문제 문장을 그대로 베끼지 마라.
- 실제 시험지 원문을 재현하지 마라.
- PDF, 이론서, 출제기준을 바탕으로 새롭게 구성한 변형 문제만 작성하라.

출력 규칙:
- 응답은 완전한 `.js` 파일 내용이어야 한다.
- 코드블록은 하나만 사용한다.
- 문자열은 모두 큰따옴표를 사용한다.
- JavaScript 문법이 유효해야 한다.
- 마지막 문항 뒤 쉼표 허용 여부와 관계없이 전체 파일은 실행 가능한 ES module이어야 한다.
- 출력된 내용을 그대로 `drafts/batches/development_operation.js`에 붙여넣어도 `npm run validate:batch -- drafts/batches/development_operation.js`를 통과해야 한다.

이제 생성하라.
```
