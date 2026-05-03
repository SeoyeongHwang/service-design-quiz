export const batchMeta = {
  batchId: "planning",
  section: "planning",
  sourceSummary: [
    "provided PDF sources",
    "uploaded instruction text :contentReference[oaicite:0]{index=0}"
  ],
  notes: "서비스·경험디자인 기획설계 섹션 누적 초안. 신규 30문항."
};

export const batchQuestions = [
  {
    id: "planning-011",
    section: "planning",
    sourceType: "generated",
    question: "서비스·경험디자인 기획설계 단계에서 이해관계자 맵을 활용하는 목적과 가장 가까운 것은?",
    choices: [
      "서비스 접점별 화면 구성을 확정하고 세부 UI 컴포넌트를 배치하기 위해 사용한다.",
      "서비스에 영향을 주고받는 주체들의 관계, 이해, 영향력을 구조적으로 파악하기 위해 사용한다.",
      "프로토타입의 시각적 완성도를 높이기 위해 색상과 타이포그래피 기준을 정리한다.",
      "정량 설문 결과를 통계적으로 검증하여 가설의 유의수준을 계산하기 위해 사용한다."
    ],
    answerIndex: 1,
    explanation: "이해관계자 맵은 서비스와 관련된 사용자, 제공자, 파트너, 조직 등 다양한 주체의 관계와 영향력을 파악하는 도구이다. 기획설계 단계에서는 문제 구조와 협력 범위를 이해하는 데 활용된다.",
    wrongExplanations: [
      "UI 설계나 화면 배치의 목적이 아니라 서비스 관계 구조를 파악하는 목적에 가깝다.",
      "정답이다.",
      "시각 디자인 기준 정리는 스타일 가이드나 디자인 시스템에 더 가깝다.",
      "통계적 검증은 정량 분석 절차에 해당하며 이해관계자 맵의 직접 목적이 아니다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 이해관계자 분석",
    keywords: ["이해관계자 맵", "관계 분석", "서비스 기획"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "planning-012",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 경험의 문제를 정의하기 위한 리서치 결과 해석 방식으로 가장 적절한 것은?",
    choices: [
      "조사에서 가장 많이 언급된 의견만 남기고 소수 의견은 모두 제외한다.",
      "사용자의 발화, 행동, 맥락을 함께 검토하여 반복되는 패턴과 긴장을 도출한다.",
      "선호도가 높은 기능을 우선 개발 목록으로 옮기고 별도 해석 과정을 생략한다.",
      "경쟁사와 다른 기능을 찾는 데 집중하고 사용자 맥락은 후순위로 둔다."
    ],
    answerIndex: 1,
    explanation: "서비스 경험 문제 정의는 단순 빈도나 기능 선호를 넘어서 사용자의 발화, 행동, 상황, 감정 등을 종합해 의미 있는 패턴을 찾는 과정이다. 특히 반복되는 불편, 모순, 기대와 실제 경험의 간극을 해석하는 것이 중요하다.",
    wrongExplanations: [
      "빈도는 참고 지표일 수 있으나 소수 의견에도 중요한 맥락이나 잠재 니즈가 포함될 수 있다.",
      "정답이다.",
      "기능 선호를 바로 개발 목록으로 옮기면 문제 원인과 경험 맥락을 놓칠 수 있다.",
      "차별화만 강조하면 실제 사용자 문제와 서비스 가치가 약해질 수 있다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 리서치 분석",
    keywords: ["문제 정의", "패턴 도출", "사용자 맥락"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "planning-013",
    section: "planning",
    sourceType: "generated",
    question: "서비스 콘셉트를 수립할 때 가치제안문이 갖추어야 할 조건으로 가장 적절한 것은?",
    choices: [
      "제공자의 보유 기술을 상세히 나열하여 구현 가능성을 중심으로 설명한다.",
      "목표 사용자, 해결하려는 문제, 제공 가치가 한 문장 안에서 분명히 드러나야 한다.",
      "모든 기능 목록을 빠짐없이 포함하여 향후 개발 범위를 고정해야 한다.",
      "브랜드 슬로건처럼 추상적이고 감성적인 표현만으로 구성해야 한다."
    ],
    answerIndex: 1,
    explanation: "가치제안문은 누구에게, 어떤 문제를 해결하며, 어떤 차별적 가치를 제공하는지를 명확히 표현해야 한다. 기능 목록이나 감성 문구보다 서비스 방향과 판단 기준을 제공하는 것이 핵심이다.",
    wrongExplanations: [
      "기술 나열은 제공자 관점에 치우칠 수 있으며 사용자 가치가 분명히 드러나지 않을 수 있다.",
      "정답이다.",
      "기능 목록을 모두 포함하면 콘셉트가 복잡해지고 핵심 가치가 흐려질 수 있다.",
      "추상적 슬로건만으로는 대상, 문제, 제공 가치가 명확하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 가치제안",
    keywords: ["가치제안", "서비스 콘셉트", "목표 사용자"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "planning-014",
    section: "planning",
    sourceType: "generated",
    question: "다음 상황에서 가장 적절한 서비스·경험디자인 도구는 무엇인가? 신규 공공서비스 기획팀이 민원인이 서비스를 알게 되는 순간부터 신청, 심사, 결과 확인까지의 주요 접점과 감정 변화를 한눈에 파악하고자 한다.",
    choices: [
      "이해관계자 맵",
      "고객여정지도",
      "무드보드",
      "휴리스틱 평가"
    ],
    answerIndex: 1,
    explanation: "고객여정지도는 사용자가 서비스와 만나는 단계별 접점, 행동, 감정, 문제점을 시간 흐름에 따라 시각화하는 도구이다. 서비스 전 과정의 경험 흐름을 파악하려는 상황에 적합하다.",
    wrongExplanations: [
      "이해관계자 맵은 관련 주체 간 관계를 파악하는 데 적합하지만 단계별 경험 흐름을 표현하는 데는 제한적이다.",
      "정답이다.",
      "무드보드는 시각적 분위기나 디자인 방향을 공유하는 도구에 가깝다.",
      "휴리스틱 평가는 기존 인터페이스의 사용성 문제를 점검하는 평가 방법에 가깝다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 고객여정지도",
    keywords: ["고객여정지도", "접점", "감정 변화"],
    difficulty: "low",
    examStyle: "application"
  },
  {
    id: "planning-015",
    section: "planning",
    sourceType: "generated",
    question: "서비스 블루프린트와 고객여정지도의 차이에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "고객여정지도는 내부 운영 과정을, 서비스 블루프린트는 사용자의 감정 변화만을 다룬다.",
      "두 도구는 동일한 산출물이며 명칭만 다르다.",
      "고객여정지도는 사용자 경험 흐름을 중심으로, 서비스 블루프린트는 전면 접점과 후면 프로세스를 함께 다룬다.",
      "서비스 블루프린트는 시각 디자인 콘셉트를 표현하고 고객여정지도는 브랜드 언어를 정리한다."
    ],
    answerIndex: 2,
    explanation: "고객여정지도는 사용자의 단계별 행동, 접점, 감정, 페인포인트를 중심으로 한다. 서비스 블루프린트는 여기에 더해 전면 서비스, 후면 지원 활동, 내부 프로세스, 증거물 등을 연결해 운영 구조를 설계한다.",
    wrongExplanations: [
      "설명이 반대로 되어 있으며 고객여정지도는 내부 운영보다 사용자 경험 흐름을 중심으로 한다.",
      "두 도구는 관련이 있지만 목적과 표현 범위가 다르다.",
      "정답이다.",
      "시각 콘셉트나 브랜드 언어 정리는 두 도구의 핵심 목적이 아니다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 여정지도와 블루프린트",
    keywords: ["서비스 블루프린트", "고객여정지도", "후면 프로세스"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "planning-016",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 페르소나 작성 방식으로 가장 적절하지 않은 것은?",
    choices: [
      "리서치에서 반복적으로 확인된 행동 패턴과 목표를 중심으로 작성한다.",
      "대표 사용자의 니즈, 제약, 동기, 사용 맥락을 함께 반영한다.",
      "기획자의 상상으로 만든 극단적 캐릭터를 실제 사용자군처럼 사용한다.",
      "의사결정 과정에서 사용자 관점을 유지하기 위한 기준으로 활용한다."
    ],
    answerIndex: 2,
    explanation: "페르소나는 조사 기반의 대표 사용자 모델이어야 하며, 임의로 만든 캐릭터가 실제 사용자군을 대체해서는 안 된다. 리서치 근거 없이 작성하면 편견을 강화할 위험이 있다.",
    wrongExplanations: [
      "페르소나는 반복적으로 확인된 행동과 목표를 중심으로 구성하는 것이 적절하다.",
      "니즈, 제약, 동기, 맥락은 페르소나의 핵심 구성 요소가 될 수 있다.",
      "정답이다.",
      "페르소나는 기획과 설계 과정에서 사용자 관점을 유지하는 기준으로 활용된다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 페르소나",
    keywords: ["페르소나", "사용자 모델", "리서치 기반"],
    difficulty: "low",
    examStyle: "application"
  },
  {
    id: "planning-017",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 서비스 요구사항 도출에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 요구사항은 사용자 니즈뿐 아니라 제공 조직의 제약과 운영 조건도 함께 고려해야 한다.\nㄴ. 요구사항 도출은 기능 목록을 많이 확보하는 것이 목적이므로 우선순위 판단은 필요하지 않다.\nㄷ. 요구사항은 이후 콘셉트, 서비스 구조, 프로토타입 설계의 판단 기준으로 활용될 수 있다.\nㄹ. 모든 요구사항은 사용자의 직접 발화만으로 작성해야 하며 관찰 결과는 배제한다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ",
      "ㄴ, ㄹ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "요구사항은 사용자 니즈와 제공 환경의 제약을 함께 고려해 도출해야 하며, 이후 설계 의사결정의 기준이 된다. 단순히 기능을 많이 모으는 것이 아니라 중요도와 실현 가능성을 판단해야 한다.",
    wrongExplanations: [
      "ㄴ은 요구사항 도출에서 우선순위 판단의 필요성을 부정하므로 적절하지 않다.",
      "정답이다.",
      "ㄴ과 ㄹ 모두 적절하지 않다. 요구사항은 기능 수집만이 목적이 아니며 관찰 결과도 중요한 근거가 된다.",
      "ㄹ은 관찰과 맥락 분석을 배제하므로 적절하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 요구사항 도출",
    keywords: ["요구사항", "우선순위", "운영 제약"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "planning-018",
    section: "planning",
    sourceType: "generated",
    question: "서비스 아이디어 발산 단계에서 브레인스토밍을 운영할 때 가장 적절한 원칙은?",
    choices: [
      "초기에는 아이디어의 양을 충분히 확보하고 판단과 비판은 잠시 유보한다.",
      "처음 나온 아이디어를 기준안으로 확정하고 이후 의견은 보완에만 사용한다.",
      "실현 가능성이 낮아 보이는 아이디어는 제시되는 즉시 제외한다.",
      "책임 소재를 명확히 하기 위해 개인별 아이디어를 공개 평가한다."
    ],
    answerIndex: 0,
    explanation: "브레인스토밍의 발산 단계에서는 다양한 아이디어를 충분히 생성하기 위해 즉각적인 비판이나 평가를 유보하는 것이 일반적이다. 이후 수렴 단계에서 기준에 따라 선별하고 구체화한다.",
    wrongExplanations: [
      "정답이다.",
      "초기 아이디어를 바로 확정하면 발산의 폭이 좁아진다.",
      "낮은 실현 가능성처럼 보이는 아이디어도 변형이나 결합을 통해 유용한 방향으로 발전할 수 있다.",
      "공개 평가 중심 운영은 참여를 위축시키고 발산을 방해할 수 있다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 아이디어 발산",
    keywords: ["브레인스토밍", "발산", "아이디어 생성"],
    difficulty: "low",
    examStyle: "process"
  },
  {
    id: "planning-019",
    section: "planning",
    sourceType: "generated",
    question: "서비스 콘셉트 후보를 수렴할 때 평가 기준으로 가장 적절한 조합은?",
    choices: [
      "팀 선호도, 제작 편의성, 최신 시각 트렌드",
      "사용자 가치, 서비스 목표 적합성, 실행 가능성, 차별성",
      "기능 개수, 홍보 문구 길이, 개발 난이도",
      "경쟁사 기능 수, 화면 수, 내부 회의 횟수"
    ],
    answerIndex: 1,
    explanation: "서비스 콘셉트 수렴은 사용자에게 제공하는 가치, 프로젝트 목표와의 정합성, 실제 실행 가능성, 기존 대안과의 차별성을 함께 검토해야 한다. 이는 아이디어를 설계 가능한 방향으로 좁히는 기준이 된다.",
    wrongExplanations: [
      "팀 선호나 제작 편의성만으로는 사용자 가치와 서비스 목표 적합성을 충분히 판단하기 어렵다.",
      "정답이다.",
      "기능 개수나 문구 길이는 콘셉트의 본질적 적합성을 판단하는 기준으로 부족하다.",
      "경쟁사 기능 수나 화면 수는 참고 지표일 수 있으나 핵심 평가 기준으로 보기 어렵다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 콘셉트 평가",
    keywords: ["콘셉트 수렴", "사용자 가치", "실행 가능성"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "planning-020",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 시나리오 작성의 주된 목적에 해당하는 것은?",
    choices: [
      "서비스 이용 상황에서 사용자의 행동, 맥락, 서비스 반응을 구체적으로 검토한다.",
      "최종 화면 디자인의 픽셀 단위 여백을 확정한다.",
      "정량 조사 표본 수를 산정하고 통계 분석 방법을 결정한다.",
      "브랜드 로고의 형태와 색상 조합을 법적으로 보호한다."
    ],
    answerIndex: 0,
    explanation: "서비스 시나리오는 사용자가 특정 상황에서 서비스를 어떻게 발견하고 이용하며 어떤 반응을 경험하는지 구체화하는 도구이다. 이를 통해 기능, 접점, 흐름의 타당성을 검토할 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "픽셀 단위 화면 규격은 UI 상세 설계나 시각 디자인 단계에 더 가깝다.",
      "표본 수와 분석 방법 결정은 리서치 설계의 영역이다.",
      "로고 보호는 지식재산권 관리 영역에 가깝다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 서비스 시나리오",
    keywords: ["서비스 시나리오", "사용 맥락", "서비스 흐름"],
    difficulty: "low",
    examStyle: "definition"
  },
  {
    id: "planning-021",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 기획설계 단계에서 친화도 맵을 활용하는 방식으로 가장 적절한 것은?",
    choices: [
      "수집된 인터뷰 발화와 관찰 메모를 의미 단위로 묶어 상위 패턴과 주제를 도출한다.",
      "서비스의 서버 구조와 데이터베이스 테이블 관계를 정규화한다.",
      "모든 사용자 의견을 빈도순으로 정렬하여 가장 많은 의견만 설계안에 반영한다.",
      "완성된 화면의 색상 대비를 측정해 접근성 기준을 검증한다."
    ],
    answerIndex: 0,
    explanation: "친화도 맵은 다양한 정성 자료를 의미 단위로 분류하고 묶어 상위 주제, 패턴, 인사이트를 도출하는 데 사용된다. 문제 정의와 요구사항 도출의 근거를 만드는 데 유용하다.",
    wrongExplanations: [
      "정답이다.",
      "서버 구조와 데이터베이스 관계 정리는 정보시스템 설계 영역에 가깝다.",
      "친화도 맵은 단순 빈도 정렬이 아니라 의미적 유사성과 관계를 중심으로 해석한다.",
      "색상 대비 검증은 접근성 평가 방법에 해당한다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 친화도 맵",
    keywords: ["친화도 맵", "정성 분석", "인사이트"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "planning-022",
    section: "planning",
    sourceType: "generated",
    question: "사용자 리서치 계획을 수립할 때 조사 방법을 선택하는 기준으로 가장 적절한 것은?",
    choices: [
      "팀이 가장 익숙한 방법을 우선 선택하고 연구 질문은 이후에 맞춘다.",
      "조사 목적, 알고자 하는 정보의 성격, 대상자의 접근 가능성, 시간과 비용 제약을 함께 고려한다.",
      "정성 조사는 주관적이므로 서비스 기획설계 단계에서는 사용하지 않는다.",
      "설문조사는 항상 인터뷰보다 깊은 맥락을 제공하므로 우선 적용한다."
    ],
    answerIndex: 1,
    explanation: "조사 방법은 연구 질문과 필요한 데이터의 성격에 따라 선택해야 한다. 또한 대상자 모집 가능성, 일정, 예산, 윤리적 고려 등 현실적 제약도 함께 검토해야 한다.",
    wrongExplanations: [
      "팀의 익숙함만 기준이 되면 연구 질문과 맞지 않는 자료를 수집할 수 있다.",
      "정답이다.",
      "정성 조사는 맥락, 동기, 의미를 탐색하는 데 중요하게 활용된다.",
      "설문은 넓은 경향 파악에 유리하지만 깊은 맥락 이해는 인터뷰나 관찰이 더 적합할 수 있다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 리서치 계획",
    keywords: ["리서치 계획", "조사 방법", "연구 질문"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "planning-023",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 서비스·경험디자인의 문제 정의에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 문제 정의는 조사 결과를 바탕으로 설계가 다루어야 할 핵심 간극을 명확히 하는 과정이다.\nㄴ. 문제 정의는 한 번 작성하면 이후 검증이나 수정 없이 고정해야 한다.\nㄷ. 좋은 문제 정의는 특정 솔루션을 미리 정하기보다 해결해야 할 경험상의 조건을 드러낸다.\nㄹ. 문제 정의는 제공자의 내부 운영 효율만 고려하면 충분하다.",
    choices: [
      "ㄱ, ㄷ",
      "ㄱ, ㄴ",
      "ㄴ, ㄹ",
      "ㄱ, ㄴ, ㄷ"
    ],
    answerIndex: 0,
    explanation: "문제 정의는 조사 기반으로 사용자의 경험 간극과 설계가 다루어야 할 핵심 조건을 명확히 하는 과정이다. 초기 솔루션을 고정하기보다 이후 탐색과 검증의 기준을 제공해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "ㄴ은 반복적 검증과 수정 가능성을 부정하므로 적절하지 않다.",
      "ㄴ과 ㄹ 모두 적절하지 않다. 문제 정의는 고정된 문구가 아니며 사용자 가치도 함께 고려해야 한다.",
      "ㄴ이 포함되어 있어 적절하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 문제 정의",
    keywords: ["문제 정의", "경험 간극", "솔루션 중립성"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "planning-024",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 목표와 성과지표를 연결하는 방식으로 가장 적절한 것은?",
    choices: [
      "목표는 추상적으로 두고 성과지표는 개발 완료 여부만으로 통일한다.",
      "서비스가 만들고자 하는 사용자 행동 또는 경험 변화와 측정 가능한 지표를 연결한다.",
      "성과지표는 경쟁사보다 많은 기능 수를 확보하는 것으로만 설정한다.",
      "사용자 경험은 측정하기 어렵기 때문에 기획설계 단계에서는 지표를 설정하지 않는다."
    ],
    answerIndex: 1,
    explanation: "성과지표는 서비스 목표가 실제로 달성되었는지 판단할 수 있도록 사용자 행동, 경험 변화, 운영 성과 등과 연결되어야 한다. 단순 개발 완료나 기능 수보다 목표와의 정합성이 중요하다.",
    wrongExplanations: [
      "개발 완료 여부만으로는 사용자 가치나 경험 변화를 판단하기 어렵다.",
      "정답이다.",
      "기능 수는 서비스 가치 달성을 보장하지 않으며 목표와 직접 연결되지 않을 수 있다.",
      "사용자 경험도 만족도, 완료율, 재사용 의도, 오류율, 행동 변화 등 다양한 방식으로 측정 가능하다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 성과지표",
    keywords: ["서비스 목표", "성과지표", "경험 변화"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "planning-025",
    section: "planning",
    sourceType: "generated",
    question: "서비스 프로토타입의 충실도 선택에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "기획 초기에도 항상 고충실도 프로토타입을 만들어야 정확한 피드백을 얻을 수 있다.",
      "검증하려는 질문이 구조와 흐름인지, 세부 인터랙션인지에 따라 적절한 충실도를 선택한다.",
      "저충실도 프로토타입은 완성도가 낮으므로 사용자 테스트에는 사용할 수 없다.",
      "프로토타입은 최종 개발 직전에만 제작하며 기획설계 단계에서는 사용하지 않는다."
    ],
    answerIndex: 1,
    explanation: "프로토타입의 충실도는 검증 목적에 따라 달라져야 한다. 초기에는 구조와 흐름을 빠르게 확인하기 위해 저충실도를 사용할 수 있고, 세부 사용성이나 시각 요소 검증에는 더 높은 충실도가 필요할 수 있다.",
    wrongExplanations: [
      "초기부터 고충실도를 제작하면 시간과 비용이 커지고 핵심 구조 검토가 어려워질 수 있다.",
      "정답이다.",
      "저충실도 프로토타입도 개념, 흐름, 정보 구조 검토에 유용하게 활용된다.",
      "프로토타입은 기획설계 과정에서 아이디어를 검증하고 소통하는 데 활용된다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 프로토타이핑",
    keywords: ["프로토타입", "충실도", "검증 목적"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "planning-026",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 요구사항을 우선순위화할 때 MoSCoW 방식의 설명으로 가장 적절한 것은?",
    choices: [
      "요구사항을 반드시 포함, 포함해야 함, 포함 가능, 이번 범위 제외 등으로 구분한다.",
      "아이디어를 무작위로 배치한 뒤 참여자가 가장 좋아하는 항목에 투표한다.",
      "사용자 여정을 시간 순서로 나누어 각 단계의 감정 변화를 표시한다.",
      "조직 내 이해관계자를 영향력과 관심도 축으로 배치한다."
    ],
    answerIndex: 0,
    explanation: "MoSCoW 방식은 요구사항을 Must have, Should have, Could have, Won't have 등으로 나누어 우선순위를 정하는 방법이다. 제한된 자원 안에서 구현 범위를 판단하는 데 유용하다.",
    wrongExplanations: [
      "정답이다.",
      "선호 투표는 아이디어 평가 방식 중 하나일 수 있으나 MoSCoW의 핵심 설명이 아니다.",
      "시간 순서와 감정 변화를 표시하는 것은 고객여정지도에 가깝다.",
      "영향력과 관심도 축으로 이해관계자를 배치하는 것은 이해관계자 분석 방식에 가깝다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 요구사항 우선순위",
    keywords: ["MoSCoW", "요구사항", "우선순위"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "planning-027",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 서비스 블루프린트 구성 요소에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 고객 행동은 사용자가 서비스 이용 과정에서 수행하는 주요 행동을 의미한다.\nㄴ. 전면 접점은 고객에게 보이는 직원 행동, 시스템 반응, 인터페이스 등을 포함할 수 있다.\nㄷ. 후면 활동은 고객에게 직접 보이지 않지만 서비스 제공을 지원하는 내부 활동을 의미한다.\nㄹ. 물리적 증거는 서비스 제공과 무관하므로 블루프린트에서 제외해야 한다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "서비스 블루프린트는 고객 행동, 전면 접점, 후면 활동, 지원 프로세스, 물리적 증거 등을 통해 서비스 제공 구조를 시각화한다. 물리적 증거는 고객이 서비스의 존재와 품질을 인식하는 단서가 될 수 있다.",
    wrongExplanations: [
      "ㄷ이 빠져 있어 충분하지 않다. 후면 활동도 블루프린트의 중요한 구성 요소이다.",
      "정답이다.",
      "ㄹ은 물리적 증거를 제외해야 한다고 하므로 적절하지 않다.",
      "ㄹ이 포함되어 있어 적절하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 서비스 블루프린트",
    keywords: ["서비스 블루프린트", "전면 접점", "후면 활동"],
    difficulty: "high",
    examStyle: "definition"
  },
  {
    id: "planning-028",
    section: "planning",
    sourceType: "generated",
    question: "기획설계 단계에서 아이디어를 평가하는 매트릭스를 만들 때 축 설정으로 가장 적절한 것은?",
    choices: [
      "폰트 크기와 페이지 수",
      "회의 시간과 산출물 분량",
      "사용자 가치와 실행 가능성",
      "담당자 직급과 보고 횟수"
    ],
    answerIndex: 2,
    explanation: "아이디어 평가 매트릭스는 서비스 목표에 맞는 기준을 축으로 설정해야 한다. 일반적으로 사용자 가치와 실행 가능성은 아이디어의 우선순위를 판단하는 핵심 기준으로 활용될 수 있다.",
    wrongExplanations: [
      "폰트 크기와 페이지 수는 아이디어의 서비스 적합성을 판단하는 기준으로 부적절하다.",
      "회의 시간과 산출물 분량은 과정 관리 지표일 수 있으나 아이디어의 가치 판단 기준으로 부족하다.",
      "정답이다.",
      "담당자 직급과 보고 횟수는 아이디어 품질과 직접 관련이 없다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 아이디어 평가",
    keywords: ["평가 매트릭스", "사용자 가치", "실행 가능성"],
    difficulty: "low",
    examStyle: "application"
  },
  {
    id: "planning-029",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스·경험디자인 기획설계에서 사용자 니즈와 인사이트의 관계를 가장 적절하게 설명한 것은?",
    choices: [
      "니즈는 관찰된 요구나 바람이며, 인사이트는 그 이면의 의미와 설계 기회를 해석한 것이다.",
      "니즈와 인사이트는 동일한 의미이므로 구분하지 않아도 된다.",
      "인사이트는 사용자가 직접 말한 기능 요청을 그대로 옮긴 것이다.",
      "니즈는 설계자의 아이디어이고 인사이트는 최종 화면 디자인이다."
    ],
    answerIndex: 0,
    explanation: "사용자 니즈는 사용자가 느끼는 필요, 목표, 불편, 기대를 가리키며, 인사이트는 자료를 해석해 드러난 숨은 의미와 설계 기회를 말한다. 따라서 인사이트는 단순 발화 복사가 아니라 해석을 포함한다.",
    wrongExplanations: [
      "정답이다.",
      "니즈와 인사이트는 관련되어 있지만 같은 개념으로 보기 어렵다.",
      "기능 요청을 그대로 옮기는 것은 인사이트라기보다 원자료나 요구사항에 가깝다.",
      "니즈와 인사이트 모두 최종 화면 디자인 자체를 의미하지 않는다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 니즈와 인사이트",
    keywords: ["사용자 니즈", "인사이트", "해석"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "planning-030",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 관찰조사를 서비스 기획에 활용할 때의 장점으로 가장 적절한 것은?",
    choices: [
      "사용자가 말로 설명하지 못하거나 의식하지 못한 행동과 맥락을 파악할 수 있다.",
      "표본이 작아도 항상 전체 시장 규모를 정확히 추정할 수 있다.",
      "관찰자의 해석이 개입되지 않으므로 분석 과정이 필요 없다.",
      "응답자가 원하는 답을 선택하기 때문에 정량 통계 처리가 가장 쉽다."
    ],
    answerIndex: 0,
    explanation: "관찰조사는 사용자가 직접 말하지 않는 행동, 주변 환경, 도구 사용, 우회 행동 등을 파악하는 데 유용하다. 다만 해석과 기록의 편향을 줄이기 위한 체계적인 분석이 필요하다.",
    wrongExplanations: [
      "정답이다.",
      "소규모 관찰만으로 전체 시장 규모를 정확히 추정할 수는 없다.",
      "관찰자의 해석이 개입될 수 있으므로 기록과 분석 기준이 필요하다.",
      "정량 통계 처리가 쉬운 방법이라기보다 맥락 이해에 강점이 있는 정성적 방법에 가깝다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 관찰조사",
    keywords: ["관찰조사", "행동 맥락", "정성 리서치"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "planning-031",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 프로토타입 테스트 계획에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 테스트 전에 검증하려는 가설이나 질문을 명확히 해야 한다.\nㄴ. 테스트 참여자에게 정답 행동을 미리 알려주면 실제 사용성을 더 정확히 측정할 수 있다.\nㄷ. 테스트 결과는 성공 여부만 기록하기보다 혼란 지점, 발화, 행동 근거를 함께 기록하는 것이 좋다.\nㄹ. 초기 프로토타입 테스트는 완성 제품 출시 이후에만 실시할 수 있다.",
    choices: [
      "ㄱ, ㄷ",
      "ㄱ, ㄴ",
      "ㄴ, ㄹ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 0,
    explanation: "프로토타입 테스트는 무엇을 검증할지 명확히 한 뒤 참여자의 실제 행동, 혼란, 발화, 이유를 함께 관찰해야 한다. 정답 행동을 미리 알려주거나 출시 이후로만 미루면 기획설계 단계의 검증 효과가 약해진다.",
    wrongExplanations: [
      "정답이다.",
      "ㄴ은 실제 사용성을 왜곡할 수 있으므로 적절하지 않다.",
      "ㄴ과 ㄹ 모두 적절하지 않다.",
      "ㄹ은 프로토타입 테스트의 조기 검증 목적과 맞지 않는다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 프로토타입 테스트",
    keywords: ["프로토타입 테스트", "가설 검증", "사용성"],
    difficulty: "high",
    examStyle: "process"
  },
  {
    id: "planning-032",
    section: "planning",
    sourceType: "generated",
    question: "서비스 아이디어를 구체화하는 과정의 순서로 가장 적절한 것은?",
    choices: [
      "프로토타입 제작 → 문제 정의 → 사용자 조사 → 콘셉트 수립",
      "사용자 조사 → 문제 정의 → 아이디어 발산과 수렴 → 서비스 콘셉트 구체화",
      "화면 시각 디자인 → 이해관계자 분석 → 성과지표 폐기 → 출시",
      "개발 완료 → 사용자 니즈 조사 → 콘셉트 폐기 → 운영 중단"
    ],
    answerIndex: 1,
    explanation: "일반적으로 사용자 조사와 맥락 이해를 통해 문제를 정의하고, 아이디어 발산과 수렴을 거쳐 서비스 콘셉트를 구체화한다. 실제 프로젝트에서는 반복될 수 있지만 기본 흐름은 조사, 정의, 발상, 구체화의 논리를 따른다.",
    wrongExplanations: [
      "문제 정의와 사용자 조사보다 프로토타입 제작이 먼저 오면 검증할 방향이 불명확해질 수 있다.",
      "정답이다.",
      "화면 시각 디자인을 가장 먼저 두고 성과지표를 폐기하는 흐름은 기획설계 과정으로 부적절하다.",
      "개발 완료 이후 조사와 콘셉트 폐기를 배치한 흐름은 기획설계의 목적과 맞지 않는다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 설계 프로세스",
    keywords: ["설계 프로세스", "문제 정의", "콘셉트 구체화"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "planning-033",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 접점 분석에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "접점은 사용자가 서비스와 상호작용하거나 서비스를 인식하는 모든 지점을 포함할 수 있다.",
      "접점은 오프라인 매장에만 존재하며 디지털 서비스에는 적용되지 않는다.",
      "접점 분석은 내부 회계 자료를 정리하는 작업과 동일하다.",
      "접점은 최종 결제 단계만 의미하므로 초기 탐색 단계는 제외한다."
    ],
    answerIndex: 0,
    explanation: "서비스 접점은 사용자가 서비스를 발견하고 이용하고 평가하는 과정에서 만나는 사람, 공간, 기기, 메시지, 시스템 등을 포함한다. 온라인과 오프라인 모두에서 발생할 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "디지털 서비스에서도 웹사이트, 앱, 알림, 고객지원 등 다양한 접점이 존재한다.",
      "접점 분석은 사용자 경험과 서비스 상호작용을 분석하는 작업이지 회계 자료 정리가 아니다.",
      "탐색, 신청, 이용, 사후관리 등 다양한 단계의 접점을 포함할 수 있다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 서비스 접점",
    keywords: ["서비스 접점", "상호작용", "경험 단계"],
    difficulty: "low",
    examStyle: "definition"
  },
  {
    id: "planning-034",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 콘셉트 검증을 위한 사용자 피드백 질문으로 가장 적절한 것은?",
    choices: [
      "이 서비스의 로고 색상이 마음에 드는지 여부만 평가해 주세요.",
      "이 콘셉트가 어떤 상황에서 필요하다고 느껴지는지, 이해되지 않는 부분은 무엇인지 설명해 주세요.",
      "이 아이디어가 좋다고 답해야 다음 단계에 참여할 수 있습니다.",
      "팀이 정한 기능 목록 중 삭제하면 안 되는 항목을 모두 외워 주세요."
    ],
    answerIndex: 1,
    explanation: "콘셉트 검증에서는 사용자가 어떤 맥락에서 필요성을 느끼는지, 제안 가치가 이해되는지, 혼란이나 우려가 무엇인지 확인해야 한다. 단순 선호나 유도 질문보다 이해와 맥락을 파악하는 질문이 적절하다.",
    wrongExplanations: [
      "로고 색상 선호만으로는 서비스 콘셉트의 필요성과 가치 이해를 검증하기 어렵다.",
      "정답이다.",
      "응답을 유도하는 질문은 피드백의 신뢰성을 낮춘다.",
      "기능 목록 암기는 사용자 피드백의 목적과 맞지 않는다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 콘셉트 검증",
    keywords: ["콘셉트 검증", "사용자 피드백", "질문 설계"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "planning-035",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 기획에서 벤치마킹을 수행할 때 유의할 점으로 가장 적절한 것은?",
    choices: [
      "경쟁 서비스의 기능을 가능한 한 동일하게 복제하는 것을 목표로 한다.",
      "기능 목록뿐 아니라 대상 사용자, 제공 가치, 이용 맥락, 운영 방식의 차이를 함께 비교한다.",
      "시장에 이미 존재하는 서비스는 모두 실패 사례로 간주하고 분석에서 제외한다.",
      "시각적으로 유사한 화면을 찾는 것만으로 서비스 벤치마킹을 완료한다."
    ],
    answerIndex: 1,
    explanation: "벤치마킹은 단순 기능 복제가 아니라 유사 서비스가 어떤 사용자 문제를 어떤 방식으로 해결하는지 비교하는 과정이다. 제공 가치, 맥락, 운영 구조, 차별화 가능성을 함께 검토해야 한다.",
    wrongExplanations: [
      "동일 복제는 차별화와 사용자 가치 탐색에 도움이 되지 않으며 저작권과 윤리 문제도 발생할 수 있다.",
      "정답이다.",
      "기존 서비스는 성공과 한계 모두를 분석할 수 있는 중요한 자료이다.",
      "화면 유사성만으로는 서비스 구조와 가치 차이를 이해하기 어렵다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 벤치마킹",
    keywords: ["벤치마킹", "경쟁 분석", "제공 가치"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "planning-036",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 고객여정지도 작성에 대한 설명으로 옳지 않은 것을 모두 고른 것은?\n\nㄱ. 단계별 사용자 행동, 접점, 감정, 페인포인트를 함께 정리할 수 있다.\nㄴ. 여정지도는 서비스 제공자의 내부 부서 조직도만 표현하기 위한 도구이다.\nㄷ. 실제 조사 자료 없이도 기획자의 추정만으로 확정하면 충분하다.\nㄹ. 여정지도는 개선 기회와 아이디어 도출의 근거로 활용될 수 있다.",
    choices: [
      "ㄱ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "고객여정지도는 사용자 경험 흐름을 중심으로 작성되며, 내부 조직도만 표현하는 도구가 아니다. 또한 실제 조사 자료와 가설 검증을 통해 보완하는 것이 바람직하다.",
    wrongExplanations: [
      "ㄱ과 ㄹ은 고객여정지도에 대한 적절한 설명이므로 옳지 않은 것을 고른 답이 아니다.",
      "정답이다.",
      "ㄱ과 ㄹ이 포함되어 있어 옳지 않은 설명만 고른 조합이 아니다.",
      "ㄹ은 개선 기회 도출의 근거로 활용될 수 있으므로 옳지 않은 설명이 아니다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 고객여정지도",
    keywords: ["고객여정지도", "페인포인트", "개선 기회"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "planning-037",
    section: "planning",
    sourceType: "generated",
    question: "서비스·경험디자인 기획설계에서 공감하기 단계의 활동으로 가장 적절한 것은?",
    choices: [
      "사용자의 생활 맥락과 문제 상황을 이해하기 위해 인터뷰, 관찰, 자료조사를 수행한다.",
      "최종 코드를 배포하고 서버 안정성 지표만 점검한다.",
      "완성된 브랜드 매뉴얼의 색상 규정을 인쇄한다.",
      "프로젝트 종료 보고서의 예산 집행 내역만 검토한다."
    ],
    answerIndex: 0,
    explanation: "공감하기 단계는 사용자의 행동, 감정, 동기, 제약, 맥락을 이해하기 위한 탐색 활동에 해당한다. 인터뷰, 관찰, 데스크 리서치 등 다양한 방법이 사용될 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "배포와 서버 안정성 점검은 구현과 운영 단계에 가깝다.",
      "브랜드 매뉴얼 인쇄는 사용자 맥락 이해 활동이 아니다.",
      "예산 집행 검토는 프로젝트 관리 활동이지 공감하기 단계의 핵심 활동이 아니다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 공감하기",
    keywords: ["공감하기", "사용자 이해", "리서치"],
    difficulty: "low",
    examStyle: "process"
  },
  {
    id: "planning-038",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스 기획설계 산출물과 활용 목적의 연결이 가장 적절하지 않은 것은?",
    choices: [
      "페르소나: 대표 사용자군의 목표, 동기, 제약을 공유하기 위해 활용한다.",
      "고객여정지도: 단계별 접점과 감정 변화를 파악하기 위해 활용한다.",
      "서비스 블루프린트: 고객 접점과 내부 지원 프로세스를 연결해 보기 위해 활용한다.",
      "무드보드: 요구사항 우선순위를 Must, Should, Could, Won't로 구분하기 위해 활용한다."
    ],
    answerIndex: 3,
    explanation: "무드보드는 시각적 분위기, 이미지 방향, 감성적 톤을 공유하는 데 주로 활용된다. 요구사항을 Must, Should, Could, Won't로 구분하는 것은 MoSCoW 방식에 해당한다.",
    wrongExplanations: [
      "페르소나의 활용 목적에 대한 적절한 설명이다.",
      "고객여정지도의 활용 목적에 대한 적절한 설명이다.",
      "서비스 블루프린트의 활용 목적에 대한 적절한 설명이다.",
      "정답이다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 산출물 구분",
    keywords: ["산출물", "무드보드", "MoSCoW"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "planning-039",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 문제 재정의가 필요한 상황으로 가장 적절한 것은?",
    choices: [
      "초기 가설과 다른 사용자 행동 패턴이 반복적으로 관찰되었지만 기존 문제 정의가 이를 설명하지 못한다.",
      "회의 시간이 짧아졌기 때문에 아무 검토 없이 문제 정의를 그대로 유지한다.",
      "디자인 산출물의 파일 이름이 변경되었기 때문에 서비스 목표를 모두 폐기한다.",
      "팀원이 선호하는 기능이 많아졌기 때문에 사용자 조사 결과를 삭제한다."
    ],
    answerIndex: 0,
    explanation: "리서치와 검증 과정에서 기존 문제 정의가 실제 사용자 행동과 맥락을 설명하지 못한다면 문제 재정의가 필요하다. 문제 정의는 설계 과정에서 새로운 근거에 따라 조정될 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "회의 시간 변화는 문제 정의 유지의 충분한 근거가 아니며, 새로운 사용자 근거가 있다면 검토가 필요하다.",
      "파일 이름 변경은 서비스 목표 폐기의 근거가 아니다.",
      "팀 선호를 이유로 사용자 조사 결과를 삭제하는 것은 적절하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 문제 재정의",
    keywords: ["문제 재정의", "가설 검증", "사용자 행동"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "planning-040",
    section: "planning",
    sourceType: "generated",
    question: "다음 진술 중 서비스 콘셉트 수립과 검증에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 콘셉트는 목표 사용자와 제공 가치가 드러나도록 표현되어야 한다.\nㄴ. 콘셉트 검증은 사용자가 제안 가치를 이해하고 필요성을 느끼는지 확인하는 과정이 될 수 있다.\nㄷ. 콘셉트가 정해지면 이후 사용자 피드백은 설계에 반영하지 않는 것이 원칙이다.\nㄹ. 콘셉트 수립은 개별 기능을 나열하는 것보다 서비스 방향을 정리하는 데 초점을 둔다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "서비스 콘셉트는 목표 사용자, 문제, 제공 가치와 서비스 방향을 분명히 해야 한다. 검증 과정에서는 사용자가 그 가치를 이해하고 실제 맥락에서 필요성을 느끼는지 확인할 수 있다.",
    wrongExplanations: [
      "ㄹ이 빠져 있어 충분하지 않다. 콘셉트 수립은 기능 나열보다 방향 정리에 초점을 둔다.",
      "정답이다.",
      "ㄷ은 사용자 피드백 반영 가능성을 부정하므로 적절하지 않다.",
      "ㄷ이 포함되어 있어 적절하지 않다."
    ],
    theoryPage: 0,
    theoryRange: "PDF source",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "기획설계 · 콘셉트 수립과 검증",
    keywords: ["서비스 콘셉트", "콘셉트 검증", "제공 가치"],
    difficulty: "high",
    examStyle: "comparison"
  }
];