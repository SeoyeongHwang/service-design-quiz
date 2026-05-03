export const batchMeta = {
  batchId: "development_operation",
  section: "development_operation",
  sourceSummary: [
    "서비스·경험디자인기사 출제기준(2025.7.1.~2028.12.31)",
    "2025 서비스·경험디자인 이론서(개정판)",
    "서비스·경험디자인 기사 핵심키워드 핸드북",
    "2020-2022 서비스·경험디자인 기사 기출문제"
  ],
  notes: "서비스·경험디자인 개발 및 운영 섹션 누적 초안. 개선된 방식의 신규 30문항."
};

export const batchQuestions = [
  {
    id: "development_operation-021",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 앱의 클릭 가능한 프로토타입을 만든 뒤, 사용자가 목표 과업을 수행하는 과정에서 어디서 멈추는지 확인하려고 한다. 이때 평가 계획에서 가장 먼저 명확히 해야 할 것은?",
    choices: [
      "프로토타입의 시각적 완성도를 높이기 위한 최종 컬러 팔레트",
      "사용자가 수행할 대표 과업과 그 과업에서 확인할 평가 기준",
      "출시 이후 유지보수 담당자가 사용할 파일 저장 규칙",
      "최종 발표에서 사용할 서비스 콘셉트의 홍보 문구"
    ],
    answerIndex: 1,
    explanation: "프로토타입 평가는 무엇을 검증할 것인지가 먼저 정리되어야 한다. 대표 과업과 관찰 기준이 명확해야 참여자 구성, 기록 방식, 결과 분석도 평가 목적에 맞게 설계할 수 있다.",
    wrongExplanations: [
      "시각적 완성도는 평가 요소가 될 수 있지만, 과업 기반 평가의 출발점은 아니다.",
      "정답이다.",
      "파일 저장 규칙은 디자인 자료화와 사후관리에서 중요하지만 프로토타입 평가 계획의 첫 단계는 아니다.",
      "홍보 문구는 프레젠테이션 자료의 일부일 수 있으나 사용성 검증의 직접 기준이 아니다."
    ],
    theoryPage: 282,
    theoryRange: "282-287",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 방법 계획",
    keywords: ["프로토타입 평가", "대표 과업", "평가 기준"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-022",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 계획에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 평가 목표는 서비스 콘셉트, 시나리오, 프로토타입에서 검증해야 할 가정과 연결되어야 한다.\nㄴ. 참여자는 평가 목적에 따라 실제 사용자, 이해관계자, 전문가 등으로 구성할 수 있다.\nㄷ. 평가는 사용자의 자유 반응을 보기 위한 활동이므로 과업과 관찰 기준을 미리 정하지 않는 것이 원칙이다.\nㄹ. 평가 환경과 기록 방식은 결과 분석과 문서화를 고려하여 사전에 계획한다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 2,
    explanation: "프로토타입 평가는 검증할 가정, 평가 과업, 참여자 구성, 기록 방식이 평가 목적과 연결되어야 한다. 자유 반응을 수집할 수는 있지만 과업과 관찰 기준 없이 진행하면 결과 해석과 개선 방향 도출이 어려워진다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 평가 환경과 기록 방식은 결과 분석 및 문서화와 직접 연결된다.",
      "ㄴ과 ㄹ이 빠졌고, ㄷ은 평가 설계의 체계성을 부정한다는 점에서 틀렸다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄷ은 과업 기반 평가의 원칙과 맞지 않는다."
    ],
    theoryPage: 287,
    theoryRange: "287-290",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 계획",
    keywords: ["평가 목표", "참여자 구성", "기록 방식"],
    difficulty: "high",
    examStyle: "process"
  },
  {
    id: "development_operation-023",
    section: "development_operation",
    sourceType: "theory",
    question: "다음 중 프로토타입 평가에서 사용자 평가와 휴리스틱 평가를 함께 활용하는 이유로 가장 적절한 것은?",
    choices: [
      "사용자 평가는 실제 과업 수행의 문제를 확인하고, 휴리스틱 평가는 전문가 관점에서 구조적 사용성 문제를 보완적으로 진단할 수 있기 때문이다.",
      "사용자 평가는 정량 통계만 만들 수 있고, 휴리스틱 평가는 법적 권리 등록 여부만 판단할 수 있기 때문이다.",
      "사용자 평가와 휴리스틱 평가는 모두 동일한 참여자가 동일한 기준으로 수행하므로 결과 비교가 쉽기 때문이다.",
      "휴리스틱 평가를 먼저 하면 사용자 평가 결과는 더 이상 수집할 필요가 없어지기 때문이다."
    ],
    answerIndex: 0,
    explanation: "사용자 평가는 실제 사용 맥락에서 과업 수행 중 발생하는 문제를 확인하고, 휴리스틱 평가는 전문가가 원칙과 경험에 근거해 구조적 문제를 진단한다. 두 방법은 서로 대체 관계라기보다 보완 관계로 활용될 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "사용자 평가는 정량 통계에만 한정되지 않으며, 휴리스틱 평가는 권리 등록 판단 도구가 아니다.",
      "두 평가는 참여자와 평가 관점이 다르기 때문에 보완적 의미가 생긴다.",
      "전문가 평가가 사용자 평가를 완전히 대체한다고 보기 어렵다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용성 평가",
    keywords: ["사용자 평가", "휴리스틱 평가", "보완적 평가"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-024",
    section: "development_operation",
    sourceType: "theory",
    question: "고령층 대상 무인발급기 프로토타입을 평가했더니, 사용자는 버튼 위치를 찾지 못했고 전문가는 정보 위계가 약하다고 지적했다. 가장 적절한 후속 조치는?",
    choices: [
      "사용자의 조작 실패와 전문가의 정보 위계 지적을 같은 문제군으로 묶고, 화면 구조 개선안을 우선 도출한다.",
      "사용자와 전문가가 서로 다른 표현을 사용했으므로 두 결과를 별개 문제로 보고 개선 우선순위에서 제외한다.",
      "전문가가 문제를 지적했으므로 사용자 평가 기록은 중복 자료로 간주해 삭제한다.",
      "사용자가 버튼을 찾지 못한 것은 개인 숙련도 문제이므로 프로토타입 구조는 유지한다."
    ],
    answerIndex: 0,
    explanation: "사용자 행동 관찰과 전문가 진단이 같은 구조적 문제를 가리킬 수 있다. 평가 결과 분석에서는 표현이 다르더라도 원인을 연결해 문제군을 만들고 개선 우선순위를 판단해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "표현이 다르더라도 같은 정보 구조 문제일 수 있으므로 제외하는 것은 부적절하다.",
      "전문가 평가와 사용자 평가는 서로 다른 근거를 제공하므로 사용자 기록을 삭제해서는 안 된다.",
      "반복적 조작 실패는 개인 숙련도만의 문제가 아니라 서비스 구조 개선 단서일 수 있다."
    ],
    theoryPage: 294,
    theoryRange: "294-296",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 결과 분석",
    keywords: ["평가 결과 분석", "문제군", "개선 우선순위"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-025",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 결과 문서화에 포함될 내용으로 가장 적절한 것은?",
    choices: [
      "평가에서 발견된 문제, 관련 과업, 근거 자료, 개선 방향, 후속 검토 사항",
      "서비스 출시 후 실제 매출액만 정리한 재무 보고서",
      "완성된 화면 이미지만 모은 시각 스타일 가이드",
      "참여자의 개인정보 원본과 녹취록 전체를 가공 없이 공개한 문서"
    ],
    answerIndex: 0,
    explanation: "평가 결과 문서화는 발견된 문제와 근거, 과업 맥락, 개선 방향을 추적 가능하게 정리하는 활동이다. 이는 이후 프로토타입 보완과 모델개발의 근거가 된다.",
    wrongExplanations: [
      "정답이다.",
      "매출액은 운영 성과 지표가 될 수 있지만 프로토타입 평가 결과 문서화의 핵심은 아니다.",
      "화면 이미지만으로는 문제의 원인, 평가 근거, 개선 방향을 파악하기 어렵다.",
      "개인정보와 원자료는 윤리와 보호 원칙에 따라 처리해야 하며 전체 공개는 부적절하다."
    ],
    theoryPage: 296,
    theoryRange: "296-306",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 결과 문서화",
    keywords: ["결과 문서화", "개선 방향", "평가 근거"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-026",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 결과, 사용자는 화면 전환이 적어 편하다고 했지만 담당 직원은 후방 확인 절차가 보이지 않아 운영 오류가 날 수 있다고 했다. 이 상황에서 가장 적절한 판단은?",
    choices: [
      "사용자 만족도가 높으므로 후방 절차 문제는 평가 결과에서 제외한다.",
      "직원 의견이 내부 운영 관점이므로 사용자 경험과 무관하다고 보고 제외한다.",
      "사용자 화면의 편의성과 후방 운영 절차의 안정성을 함께 검토해 서비스 구조를 보완한다.",
      "평가 결과가 상충하므로 프로토타입 평가는 실패한 것으로 보고 기존 설계를 유지한다."
    ],
    answerIndex: 2,
    explanation: "서비스 경험은 사용자 화면만이 아니라 전방·후방 활동과 지원 절차의 연결을 포함한다. 사용자 만족과 운영 안정성이 충돌할 때는 양쪽 조건을 함께 반영해 구조를 보완해야 한다.",
    wrongExplanations: [
      "사용자 만족도가 높아도 후방 절차의 오류 가능성은 서비스 품질에 영향을 준다.",
      "직원 의견은 서비스 제공 구조와 운영 가능성을 파악하는 중요한 평가 근거가 될 수 있다.",
      "정답이다.",
      "상충하는 결과는 실패가 아니라 개선 기준을 정교화해야 하는 신호이다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 개선 방향 수립",
    keywords: ["사용자 만족", "후방 절차", "운영 안정성"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-027",
    section: "development_operation",
    sourceType: "theory",
    question: "사용성 평가에서 효과성, 효율성, 만족도를 구분한 설명으로 가장 적절한 것은?",
    choices: [
      "효과성은 과업 달성 여부, 효율성은 투입 자원 대비 수행 정도, 만족도는 사용자가 느끼는 주관적 수용성과 관련된다.",
      "효과성은 감정 곡선의 상승 정도, 효율성은 브랜드 인지도, 만족도는 특허 등록 가능성과 관련된다.",
      "효과성은 내부 직원의 처리 속도만, 효율성은 발표 자료의 페이지 수만, 만족도는 디자인권 보유 여부만 의미한다.",
      "효과성, 효율성, 만족도는 모두 동일한 개념이므로 평가에서 구분할 필요가 없다."
    ],
    answerIndex: 0,
    explanation: "사용성은 사용자가 특정 맥락에서 목표를 효과적, 효율적, 만족스럽게 달성하는 정도로 이해된다. 효과성은 목표 달성, 효율성은 자원과 수행의 관계, 만족도는 사용자의 주관적 반응과 연결된다.",
    wrongExplanations: [
      "정답이다.",
      "감정 곡선, 브랜드 인지도, 특허 등록 가능성은 사용성의 세 요소를 설명하는 기준이 아니다.",
      "각 요소를 지나치게 좁고 엉뚱한 지표로 설명했다.",
      "세 요소는 평가 관점이 다르므로 구분이 필요하다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용성 평가",
    keywords: ["효과성", "효율성", "만족도"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-028",
    section: "development_operation",
    sourceType: "theory",
    question: "사용성 평가에 대한 설명으로 옳지 않은 것을 모두 고른 것은?\n\nㄱ. 실제 사용자의 과업 수행을 관찰하면 인터페이스의 문제와 사용 맥락을 함께 파악할 수 있다.\nㄴ. 휴리스틱 평가는 전문가가 평가 기준과 경험을 바탕으로 문제를 진단하는 방식이다.\nㄷ. 사용성 평가는 완성된 서비스 출시 이후에만 가능하므로 프로토타입 단계에서는 적용하지 않는다.\nㄹ. 사용성 평가는 사용자가 목표를 달성하는 과정의 효과성, 효율성, 만족도와 관련된다.",
    choices: [
      "ㄱ",
      "ㄷ",
      "ㄱ, ㄴ",
      "ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "사용성 평가는 완성 서비스뿐 아니라 프로토타입 단계에서도 적용할 수 있다. 실제 사용자 평가와 전문가 평가를 통해 사용성 문제를 조기에 발견하고 개선할 수 있다.",
    wrongExplanations: [
      "ㄱ은 옳은 설명이다. 실제 사용자 관찰은 사용 맥락 파악에 유용하다.",
      "정답이다.",
      "ㄱ과 ㄴ은 모두 옳은 설명이다.",
      "ㄹ은 사용성의 핵심 기준을 설명하므로 옳다. 틀린 것은 ㄷ뿐이다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용성 평가",
    keywords: ["사용성 평가", "프로토타입", "휴리스틱 평가"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-029",
    section: "development_operation",
    sourceType: "theory",
    question: "사용자가 서비스에서 무엇을 경험하는지뿐 아니라, 직원의 응대, 시스템 처리, 내부 승인 절차가 어느 지점에서 연결되는지 함께 확인하려고 한다. 가장 적절한 산출물은?",
    choices: [
      "고객 여정 지도",
      "서비스 블루프린트",
      "서비스 로드맵",
      "비즈니스 모델 캔버스"
    ],
    answerIndex: 1,
    explanation: "서비스 블루프린트는 사용자 행동, 전방 활동, 후방 활동, 지원 프로세스를 함께 구조화하여 서비스 제공 체계를 파악하는 데 적합하다.",
    wrongExplanations: [
      "고객 여정 지도는 사용자 경험 흐름과 감정, 접점 파악에 강하지만 내부 승인 절차와 지원 프로세스의 연결을 구조화하는 데에는 블루프린트가 더 직접적이다.",
      "정답이다.",
      "서비스 로드맵은 시간에 따른 변화와 실행 계획을 제시하는 데 적합하다.",
      "비즈니스 모델 캔버스는 가치 제안, 고객, 자원, 비용 구조 등 운영 모델의 사업적 구성을 검토하는 데 적합하다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 블루프린트 작성",
    keywords: ["서비스 블루프린트", "전방 활동", "후방 활동"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-030",
    section: "development_operation",
    sourceType: "theory",
    question: "고객 여정 지도와 서비스 블루프린트의 구분으로 가장 적절한 것은?",
    choices: [
      "고객 여정 지도는 서비스의 법적 권리 보호를, 서비스 블루프린트는 화면의 시각 스타일을 검토한다.",
      "고객 여정 지도는 사용자 경험의 단계와 감정 변화를 중심으로, 서비스 블루프린트는 서비스 제공 구조와 내부 지원 활동까지 함께 다룬다.",
      "고객 여정 지도는 비즈니스 수익 구조를, 서비스 블루프린트는 디자인권 출원 가능성을 정리한다.",
      "고객 여정 지도와 서비스 블루프린트는 모두 사용자의 과거 구매 빈도만 분석하는 정량 도구이다."
    ],
    answerIndex: 1,
    explanation: "고객 여정 지도는 사용자의 서비스 경험 흐름, 접점, 감정과 문제를 중심으로 한다. 서비스 블루프린트는 사용자 경험과 더불어 전방·후방 활동 및 지원 프로세스까지 포함한다.",
    wrongExplanations: [
      "권리 보호와 시각 스타일은 두 도구의 핵심 목적이 아니다.",
      "정답이다.",
      "비즈니스 수익 구조는 비즈니스 모델 캔버스와 더 관련되고, 디자인권 출원 가능성은 지식재산권 영역이다.",
      "두 도구는 정량 구매 빈도만 분석하는 도구가 아니다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 블루프린트 작성",
    keywords: ["고객 여정 지도", "서비스 블루프린트", "서비스 구조"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-031",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 블루프린트 작성에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 사용자의 행동과 서비스 제공자의 전방 활동을 구분해 볼 수 있다.\nㄴ. 사용자가 직접 보지 못하는 후방 활동과 지원 프로세스도 함께 표현할 수 있다.\nㄷ. 서비스 블루프린트는 사용자의 감정 곡선만을 그리는 도구이므로 내부 운영 구조는 제외한다.\nㄹ. 가시선은 사용자가 경험할 수 있는 영역과 그렇지 않은 영역을 구분하는 기준으로 활용될 수 있다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 2,
    explanation: "서비스 블루프린트는 사용자 행동, 전방 활동, 후방 활동, 지원 프로세스의 연결을 표현한다. 가시선은 사용자가 볼 수 있는 영역과 보지 못하는 영역을 구분하는 핵심 개념이다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 가시선은 블루프린트에서 중요한 구분 기준이다.",
      "ㄴ과 ㄹ이 빠졌고, ㄷ은 블루프린트의 범위를 잘못 제한한다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄷ은 틀린 설명이다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 블루프린트 작성",
    keywords: ["가시선", "후방 활동", "지원 프로세스"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-032",
    section: "development_operation",
    sourceType: "theory",
    question: "공공 돌봄 서비스 모델을 정리하면서 사용자 가치, 제공 채널, 핵심 파트너, 비용 구조와 수익 또는 재원 구조를 한 장에서 검토하려고 한다. 가장 적절한 도구는?",
    choices: [
      "서비스 블루프린트",
      "비즈니스 모델 캔버스",
      "고객 여정 지도",
      "휴리스틱 평가표"
    ],
    answerIndex: 1,
    explanation: "비즈니스 모델 캔버스는 고객 세그먼트, 가치 제안, 채널, 고객 관계, 핵심 자원, 핵심 활동, 핵심 파트너십, 수익원, 비용 구조를 종합적으로 검토하는 도구이다.",
    wrongExplanations: [
      "서비스 블루프린트는 서비스 제공 구조와 전방·후방 활동을 표현하는 데 적합하지만, 비용 구조와 파트너십을 한 장에서 검토하는 목적에는 캔버스가 더 직접적이다.",
      "정답이다.",
      "고객 여정 지도는 사용자 경험 단계와 접점 분석에 적합하다.",
      "휴리스틱 평가표는 전문가가 사용성 문제를 진단하는 데 적합하다."
    ],
    theoryPage: 317,
    theoryRange: "317-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 비즈니스 모델 캔버스",
    keywords: ["비즈니스 모델 캔버스", "가치 제안", "비용 구조"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-033",
    section: "development_operation",
    sourceType: "theory",
    question: "비즈니스 모델 캔버스를 서비스디자인 프로젝트에서 사용할 때 가장 적절한 관점은?",
    choices: [
      "서비스 콘셉트가 운영 가능한 모델이 되기 위해 고객, 가치, 자원, 활동, 파트너, 재무 구조가 어떻게 맞물리는지 검토한다.",
      "사용자의 감정 변화만 정교하게 그려 고객 여정 지도를 대체한다.",
      "인터페이스의 버튼 위치를 전문가 원칙에 따라 점검해 사용성 평가를 대체한다.",
      "최종 파일의 보관 위치와 폐기 규칙만 정리해 사후관리 문서를 대체한다."
    ],
    answerIndex: 0,
    explanation: "비즈니스 모델 캔버스는 서비스의 가치 제안과 고객, 운영 기반, 파트너십, 수익과 비용 구조가 어떻게 연결되는지 검토하는 도구이다. 서비스 콘셉트를 실행 가능한 운영 모델로 구체화하는 데 활용할 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "사용자 감정 변화 중심의 도구는 고객 여정 지도에 더 가깝다.",
      "버튼 위치와 사용성 원칙 점검은 휴리스틱 평가와 더 관련된다.",
      "파일 보관과 폐기 규칙은 디자인 자료화와 사후관리의 내용이다."
    ],
    theoryPage: 317,
    theoryRange: "317-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 비즈니스 모델 캔버스",
    keywords: ["운영 모델", "가치 제안", "핵심 파트너십"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-034",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 블루프린트와 비즈니스 모델 캔버스를 모두 작성해야 하는 상황으로 가장 적절한 것은?",
    choices: [
      "사용자의 화면 흐름만 빠르게 확인하면 되고, 운영 주체나 비용 구조는 아직 검토하지 않는 경우",
      "서비스 제공 과정의 접점과 내부 절차를 정리하는 동시에, 서비스가 지속 가능하게 운영될 자원과 파트너십도 검토해야 하는 경우",
      "완료보고서의 표지 디자인만 정하고 본문 구성은 아직 정하지 않은 경우",
      "디자인권 출원 전에 창작 시점을 증명하는 서류만 준비해야 하는 경우"
    ],
    answerIndex: 1,
    explanation: "서비스 블루프린트는 서비스 제공 구조를, 비즈니스 모델 캔버스는 가치와 자원, 활동, 파트너십, 재무 구조를 검토한다. 접점 운영과 지속 가능성 모두를 검토할 때 두 도구를 함께 활용할 수 있다.",
    wrongExplanations: [
      "화면 흐름만 확인하려는 경우에는 블루프린트나 캔버스가 모두 필요한 상황이라고 보기 어렵다.",
      "정답이다.",
      "표지 디자인은 프레젠테이션 자료의 시각 편집 문제에 가깝다.",
      "창작 시점 증명은 공지증명제도나 권리 보호 절차와 관련된다."
    ],
    theoryPage: 312,
    theoryRange: "312-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 결과물 제시",
    keywords: ["블루프린트", "비즈니스 모델 캔버스", "지속 가능성"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-035",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스·경험 로드맵을 작성하기에 가장 적절한 상황은?",
    choices: [
      "현재 서비스 접점에서 사용자가 겪는 감정의 기복만 한 번에 파악하려는 상황",
      "서비스의 향후 변화 방향, 단계별 실행 시점, 사용자 행동 변화와 대응 과제를 시간 축으로 제시하려는 상황",
      "전문가가 화면별 사용성 원칙 위반 여부만 빠르게 점검하려는 상황",
      "창작물의 공지 시점을 입증해 신규성 상실 예외 주장을 준비하려는 상황"
    ],
    answerIndex: 1,
    explanation: "서비스·경험 로드맵은 시간의 흐름에 따른 서비스 변화와 사용자 경험, 실행 과제를 시각화하여 향후 방향과 단계를 제시하는 산출물이다.",
    wrongExplanations: [
      "사용자의 현재 경험과 감정 흐름은 고객 여정 지도와 더 가깝다.",
      "정답이다.",
      "화면별 원칙 위반 점검은 휴리스틱 평가의 성격이 강하다.",
      "공지 시점 입증은 공지증명제도와 관련된다."
    ],
    theoryPage: 306,
    theoryRange: "306-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스·경험 로드맵 작성",
    keywords: ["서비스 로드맵", "시간 축", "실행 과제"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-036",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 모델개발 산출물에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 서비스 블루프린트는 사용자 행동과 제공자 활동, 후방 지원 활동의 관계를 구조화할 수 있다.\nㄴ. 비즈니스 모델 캔버스는 가치 제안, 고객, 자원, 활동, 파트너십, 비용 구조 등을 검토하는 데 활용된다.\nㄷ. 서비스·경험 로드맵은 시간에 따른 서비스 변화와 실행 방향을 제시하는 데 활용될 수 있다.\nㄹ. 휴리스틱 평가표는 최종 서비스 운영 모델을 구성하는 9개 사업 블록을 정리하는 도구이다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "블루프린트, 비즈니스 모델 캔버스, 로드맵은 각각 서비스 제공 구조, 운영 모델, 시간에 따른 실행 방향을 다룬다. 휴리스틱 평가표는 전문가 사용성 평가 도구로, 9개 사업 블록을 정리하는 도구가 아니다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 로드맵은 시간에 따른 변화와 실행 방향을 다룬다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄹ은 비즈니스 모델 캔버스의 역할을 휴리스틱 평가표에 잘못 연결했다.",
      "ㄴ이 빠졌고, ㄹ은 틀린 진술이다."
    ],
    theoryPage: 312,
    theoryRange: "312-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 결과물 제시",
    keywords: ["블루프린트", "캔버스", "로드맵"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-037",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 제공자 행동양식을 구체화해야 하는 경우로 가장 적절한 것은?",
    choices: [
      "서비스명과 로고가 경쟁 서비스와 혼동될 가능성이 있는지 확인해야 하는 경우",
      "같은 접점에서 직원마다 안내 방식이 달라 사용자 경험 품질이 흔들리는 경우",
      "사용자가 서비스 이용 전후에 어떤 감정을 느꼈는지 단계별로 파악해야 하는 경우",
      "최종 산출물을 어떤 폴더 구조로 보관할지 정해야 하는 경우"
    ],
    answerIndex: 1,
    explanation: "서비스 제공자 행동양식은 접점에서 제공자가 어떤 기준과 절차로 행동해야 하는지를 구체화하여 서비스 품질의 일관성을 높이는 데 활용된다.",
    wrongExplanations: [
      "서비스명과 로고의 혼동 가능성은 상표권 등 권리 검토와 관련된다.",
      "정답이다.",
      "이용 전후 감정 흐름 파악은 고객 여정 지도와 더 직접적으로 연결된다.",
      "폴더 구조와 보관 규칙은 디자인 자료화와 사후관리의 내용이다."
    ],
    theoryPage: 319,
    theoryRange: "319-331",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 제공자 행동양식",
    keywords: ["서비스 제공자 행동양식", "접점 품질", "운영 일관성"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-038",
    section: "development_operation",
    sourceType: "theory",
    question: "디자인권, 상표권, 저작권을 구분한 설명으로 가장 적절한 것은?",
    choices: [
      "디자인권은 제품이나 물품 등의 외관적 디자인 보호와 관련되고, 상표권은 출처 식별 표지 보호와 관련되며, 저작권은 구체적으로 표현된 저작물 보호와 관련된다.",
      "디자인권은 서비스명 보호만, 상표권은 화면 레이아웃 보호만, 저작권은 영업 방법 보호만을 담당한다.",
      "디자인권, 상표권, 저작권은 모두 창작과 동시에 동일한 범위의 권리가 자동 등록되는 제도이다.",
      "디자인권은 완료보고서 작성 절차이고, 상표권은 사용성 평가 방법이며, 저작권은 서비스 로드맵 작성 기준이다."
    ],
    answerIndex: 0,
    explanation: "디자인권은 디자인의 외관적 형상과 관련되고, 상표권은 상품이나 서비스의 출처를 식별하는 표장과 관련되며, 저작권은 구체적으로 표현된 저작물 보호와 관련된다.",
    wrongExplanations: [
      "정답이다.",
      "각 권리의 보호 대상이 부정확하게 연결되어 있다.",
      "권리의 발생과 등록 절차, 보호 대상은 서로 다르다.",
      "세 권리는 개발 산출물 작성 방법이 아니라 지식재산권 영역의 권리이다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 지식재산권",
    keywords: ["디자인권", "상표권", "저작권"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-039",
    section: "development_operation",
    sourceType: "generated",
    question: "새로운 서비스의 이름과 로고는 공개 전이지만, 화면 UI 시안과 서비스 흐름도는 이미 클라이언트 미팅에서 공유되었다. 권리 검토 관점에서 가장 적절한 판단은?",
    choices: [
      "서비스명과 로고는 상표권 관점에서, UI 시안과 표현물은 디자인권 또는 저작권 관점에서 각각 검토할 필요가 있다.",
      "서비스명, 로고, UI 시안은 모두 감정 곡선에 해당하므로 고객 여정 지도에만 정리하면 충분하다.",
      "이미 미팅에서 공유된 자료는 어떠한 권리 보호 대상도 될 수 없으므로 모두 제외한다.",
      "권리 검토는 최종 발표가 끝난 뒤에만 가능하므로 공개 전 자료는 검토하지 않는다."
    ],
    answerIndex: 0,
    explanation: "서비스명과 로고는 출처 식별 표지로서 상표권 검토가 필요할 수 있고, UI 시안이나 구체적 표현물은 디자인권이나 저작권 관점에서 검토할 수 있다. 공개 여부와 시점도 권리 전략에서 고려해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "감정 곡선은 사용자 감정 흐름을 시각화하는 도구이지 권리 검토 도구가 아니다.",
      "공개된 자료도 조건에 따라 권리 검토와 보호 전략의 대상이 될 수 있다.",
      "권리 검토는 공개 전후 모두 중요하며, 공개 전 검토가 오히려 필요할 수 있다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 지식재산권 이해",
    keywords: ["권리 검토", "상표권", "디자인권", "저작권"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-040",
    section: "development_operation",
    sourceType: "keyword",
    question: "공지증명제도에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "창작 사실과 공지 시점을 입증해 창작자의 권리 보호와 신규성 상실 예외 주장에 활용될 수 있는 제도이다.",
      "서비스명과 로고의 출처 식별력을 심사해 상표권 등록을 자동으로 완료하는 제도이다.",
      "프로토타입 평가 결과를 저장하면 사용성 문제가 자동으로 개선되는 제도이다.",
      "저작권 등록을 대신해 모든 창작물의 독점 사용권을 무기한 보장하는 제도이다."
    ],
    answerIndex: 0,
    explanation: "공지증명제도는 창작물의 창작 사실과 공지 시점을 증명하는 권리 보호 수단이다. 디자인 출원 시 신규성 상실 예외 주장 자료로도 활용될 수 있지만 모든 권리를 자동 등록하는 제도는 아니다.",
    wrongExplanations: [
      "정답이다.",
      "상표권 등록을 자동 완료하는 제도가 아니다.",
      "사용성 문제 개선과는 관련이 없다.",
      "저작권 등록을 완전히 대체하거나 모든 창작물의 독점권을 무기한 보장하는 제도가 아니다."
    ],
    theoryPage: 0,
    theoryRange: "핵심키워드 핸드북 · 공지증명제도",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 공지증명제도",
    keywords: ["공지증명제도", "창작 사실", "신규성 상실 예외"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "development_operation-041",
    section: "development_operation",
    sourceType: "generated",
    question: "BM특허 검토가 필요한 상황으로 가장 적절한 것은?",
    choices: [
      "서비스의 화면 색상 조합이 브랜드 이미지와 어울리는지 확인하는 경우",
      "온라인 플랫폼의 거래 방식이 정보처리 기술과 결합된 새로운 영업 방법으로 구현되는 경우",
      "완료보고서에서 시선을 끄는 표지 레이아웃을 정해야 하는 경우",
      "서비스 사용자의 감정 변화를 여정 단계별로 시각화해야 하는 경우"
    ],
    answerIndex: 1,
    explanation: "BM특허는 영업 방법이 정보처리 기술 등과 결합되어 특허 요건을 검토할 수 있는 경우 관련된다. 단순한 시각 스타일, 보고서 편집, 감정 여정 시각화와는 구분해야 한다.",
    wrongExplanations: [
      "화면 색상 조합 검토는 시각 디자인 또는 브랜드 가이드 검토에 가깝다.",
      "정답이다.",
      "표지 레이아웃은 프레젠테이션 및 보고서 편집의 문제이다.",
      "감정 변화 시각화는 고객 여정 지도나 감정 곡선과 관련된다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 특허권 및 BM특허",
    keywords: ["BM특허", "영업 방법", "정보처리 기술"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-042",
    section: "development_operation",
    sourceType: "theory",
    question: "디자인 권리 검토에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 상표권은 서비스명, 로고 등 출처를 식별하게 하는 표장과 관련될 수 있다.\nㄴ. 디자인권은 외관상 디자인의 보호와 관련되며 출원과 등록 절차가 중요하다.\nㄷ. 저작권은 구체적으로 표현된 창작물과 관련되지만 아이디어 자체를 그대로 보호하는 권리는 아니다.\nㄹ. 공지증명은 특허청 심사 없이 모든 권리를 자동 등록하는 절차이다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "상표권, 디자인권, 저작권은 각각 보호 대상과 절차가 다르다. 공지증명은 창작 사실과 시점을 입증하는 수단이지 모든 권리를 자동 등록하는 절차가 아니다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 저작권은 표현물 보호와 관련된다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄹ은 공지증명의 효력을 과도하게 설명했다.",
      "ㄹ은 틀린 진술이다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 지식재산권 기본절차",
    keywords: ["지식재산권", "상표권", "디자인권", "저작권"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-043",
    section: "development_operation",
    sourceType: "theory",
    question: "프레젠테이션 자료와 완료보고서의 관계를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "프레젠테이션 자료는 핵심 메시지를 시각적으로 전달하는 데 초점을 두고, 완료보고서는 단계별 결과와 근거를 목적에 맞게 축약·편집해 정리한다.",
      "프레젠테이션 자료는 모든 원자료를 빠짐없이 싣는 문서이고, 완료보고서는 표지 이미지만 정리하는 문서이다.",
      "프레젠테이션 자료와 완료보고서는 모두 지식재산권 출원서이므로 서비스 과정 설명을 포함하지 않는다.",
      "완료보고서를 만들면 발표 자료는 항상 불필요하므로 별도 제작하지 않는다."
    ],
    answerIndex: 0,
    explanation: "프레젠테이션 자료는 발표 목적에 맞게 핵심 논리를 시각적으로 전달하고, 완료보고서는 과제 기획부터 최종 결과물까지 단계별 결과를 문서화하되 목적에 맞게 축약·편집한다.",
    wrongExplanations: [
      "정답이다.",
      "역할이 반대로 왜곡되어 있다. 원자료 전체 나열과 표지 이미지만 정리는 모두 부적절하다.",
      "두 문서는 권리 출원서가 아니라 프로젝트 결과 전달과 정리를 위한 산출물이다.",
      "완료보고서와 발표 자료는 목적과 형식이 달라 함께 필요할 수 있다."
    ],
    theoryPage: 333,
    theoryRange: "333-350",
    guidelineCode: "0802010106_15v2",
    guidelineTopic: "프레젠테이션 · 기획 제작",
    keywords: ["프레젠테이션", "완료보고서", "축약 편집"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-044",
    section: "development_operation",
    sourceType: "theory",
    question: "최종 발표 자료를 만들 때 '시각적·논리적 자료의 효과적 활용'에 가장 부합하는 방식은?",
    choices: [
      "서비스 구조는 블루프린트로, 실행 일정은 로드맵으로, 핵심 판단 근거는 요약 도표로 제시해 발표 흐름에 맞게 배열한다.",
      "조사 원문과 회의록을 모두 같은 글자 크기로 나열하여 발표자가 빠짐없이 읽는다.",
      "시각 자료가 많으면 객관성이 떨어지므로 모든 내용을 문장형 보고서로만 제시한다.",
      "서비스 모델의 논리보다 장식적 이미지와 애니메이션 효과를 우선한다."
    ],
    answerIndex: 0,
    explanation: "프레젠테이션에서는 서비스의 논리와 전개 과정을 시각 자료로 구조화하여 핵심을 빠르게 이해하게 해야 한다. 도식과 표, 로드맵, 블루프린트는 내용에 맞게 선택될 때 전달력을 높인다.",
    wrongExplanations: [
      "정답이다.",
      "원문을 나열하면 핵심 구조와 판단 근거가 드러나기 어렵다.",
      "시각 자료는 객관성을 떨어뜨리는 장식이 아니라 논리적 전달을 돕는 수단이 될 수 있다.",
      "장식 효과가 서비스 모델의 논리를 대신할 수 없다."
    ],
    theoryPage: 337,
    theoryRange: "337-350",
    guidelineCode: "0802010106_15v2",
    guidelineTopic: "프레젠테이션 · 시각적·논리적 자료 활용",
    keywords: ["시각 자료", "논리 구조", "발표 흐름"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-045",
    section: "development_operation",
    sourceType: "theory",
    question: "완료보고서 작성에 포함될 내용으로 적절한 것을 모두 고른 것은?\n\nㄱ. 과제 기획부터 최종 결과물까지 단계별 주요 결과와 의사결정 근거\nㄴ. 프로토타입 평가 결과와 이를 반영한 개선 방향\nㄷ. 보고 목적에 맞게 축약·편집된 산출물과 핵심 설명\nㄹ. 후속 활용을 막기 위해 원본 파일 위치와 관리 규칙을 의도적으로 숨긴 기록",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "완료보고서는 단계별 결과와 근거, 평가와 개선 과정, 최종 산출물을 보고 목적에 맞게 정리해야 한다. 원본 파일 관리 규칙을 숨기는 것은 자료화와 사후관리 취지에도 맞지 않는다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 완료보고서는 목적에 맞는 축약·편집이 필요하다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄹ은 부적절한 관리 방식이다.",
      "ㄹ은 틀린 진술이다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010608_17v3",
    guidelineTopic: "프로젝트 완료 · 완료보고서 작성",
    keywords: ["완료보고서", "의사결정 근거", "축약 편집"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-046",
    section: "development_operation",
    sourceType: "theory",
    question: "완료보고서를 작성할 때 프로토타입 평가의 부정적 결과를 다루는 방식으로 가장 적절한 것은?",
    choices: [
      "프로젝트 완성도를 낮춰 보일 수 있으므로 부정적 결과는 모두 삭제한다.",
      "부정적 결과를 문제 발견과 개선의 근거로 정리하고, 어떤 수정 또는 보완으로 이어졌는지 설명한다.",
      "부정적 결과는 사용자 개인의 취향으로만 처리하고 평가 근거에서 제외한다.",
      "부정적 결과가 있으면 최종 서비스 모델 산출물을 작성하지 않는다."
    ],
    answerIndex: 1,
    explanation: "완료보고서는 프로젝트의 과정과 근거를 설명하는 문서이므로 부정적 평가 결과도 개선 판단의 근거로 정리해야 한다. 문제 발견과 보완 과정을 보여주는 것이 결과의 신뢰도를 높인다.",
    wrongExplanations: [
      "부정적 결과를 삭제하면 의사결정 과정과 개선 근거가 불투명해진다.",
      "정답이다.",
      "반복적이거나 구조적인 문제는 개인 취향으로만 처리해서는 안 된다.",
      "부정적 결과는 모델개발을 중단할 이유가 아니라 보완의 근거가 된다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010608_17v3",
    guidelineTopic: "프로젝트 완료 · 단계별 결과 정리",
    keywords: ["부정적 결과", "개선 근거", "완료보고서"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-047",
    section: "development_operation",
    sourceType: "theory",
    question: "디자인 자료화와 사후관리의 차이를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "디자인 자료화는 최종 파일과 결과물을 공유·보존 가능한 상태로 정리하는 활동이고, 사후관리는 결과물 관리와 유지보수 방안을 포함한 운영 관리 활동이다.",
      "디자인 자료화는 사용자 감정 변화를 분석하는 활동이고, 사후관리는 비즈니스 모델의 수익 구조만 계산하는 활동이다.",
      "디자인 자료화는 권리 등록을 자동 완료하는 절차이고, 사후관리는 프로토타입 평가를 생략하는 절차이다.",
      "디자인 자료화와 사후관리는 모두 프로젝트 종료 즉시 모든 산출물을 폐기하는 활동이다."
    ],
    answerIndex: 0,
    explanation: "디자인 자료화는 최종 파일과 결과물을 데이터베이스화하고 공유·보존하는 활동이며, 사후관리는 결과물 관리와 유지보수, 오류 보수 방안 등 운영 이후의 관리와 연결된다.",
    wrongExplanations: [
      "정답이다.",
      "사용자 감정 분석과 수익 구조 계산은 각각 고객 여정 분석과 비즈니스 모델 검토에 더 가깝다.",
      "권리 등록 자동 완료나 평가 생략은 두 활동의 목적과 다르다.",
      "폐기가 필요한 경우도 규칙에 따라 판단해야 하며, 핵심은 무조건 폐기가 아니라 체계적 관리이다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010109_15v2",
    guidelineTopic: "디자인 자료화 · 사후관리",
    keywords: ["디자인 자료화", "사후관리", "유지보수"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-048",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 운영을 위해 최종 디자인 파일을 데이터베이스화할 때 가장 적절한 관리 기준은?",
    choices: [
      "최신 파일, 원본 파일, 전달용 파일, 수정 이력, 권한과 공유 범위를 구분해 후속 활용이 가능하게 정리한다.",
      "파일 수를 줄이기 위해 원본 파일과 수정 이력은 삭제하고 캡처 이미지만 보관한다.",
      "파일명이 길어지는 것을 피하기 위해 모든 파일명을 동일하게 지정한다.",
      "클라이언트 전달이 끝나면 내부 팀이 접근할 수 없도록 모든 자료를 무작위 위치에 분산 저장한다."
    ],
    answerIndex: 0,
    explanation: "디자인 자료화는 결과물을 체계적으로 공유하고 보존하기 위한 활동이다. 최신본과 원본, 전달용 파일, 수정 이력, 접근 권한을 구분해야 후속 유지보수와 참조가 가능하다.",
    wrongExplanations: [
      "정답이다.",
      "원본과 수정 이력을 삭제하면 후속 수정과 책임 추적이 어려워진다.",
      "동일한 파일명은 버전 구분과 검색을 어렵게 한다.",
      "무작위 분산 저장은 공유와 보존의 체계성을 해친다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010109_15v2",
    guidelineTopic: "디자인 자료화 · 데이터베이스 관리",
    keywords: ["데이터베이스화", "수정 이력", "공유 범위"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-049",
    section: "development_operation",
    sourceType: "theory",
    question: "사후관리에서 유지보수 방안을 제시해야 하는 상황으로 가장 적절한 것은?",
    choices: [
      "서비스 운영 중 특정 접점에서 오류가 반복되어 사용자 불편과 제공자 업무 지연이 발생하는 경우",
      "아이데이션 단계에서 가능한 많은 아이디어를 비판 없이 발산해야 하는 경우",
      "프로젝트 초기에 조사 대상자의 라이프스타일을 탐색해야 하는 경우",
      "서비스명 후보 중 가장 기억하기 쉬운 이름을 정해야 하는 경우"
    ],
    answerIndex: 0,
    explanation: "사후관리는 운영 이후 발생하는 하자나 오류, 유지 요인을 파악하고 보수 방안을 제시하는 활동이다. 반복 오류와 업무 지연은 유지보수 계획 수립의 직접 근거가 된다.",
    wrongExplanations: [
      "정답이다.",
      "아이디어 발산은 아이데이션 워크숍의 내용이다.",
      "라이프스타일 탐색은 사용자 조사와 대상 분석 단계에 가깝다.",
      "서비스명 선택은 브랜딩과 상표 검토 등과 연결될 수 있지만 유지보수 방안 제시 상황은 아니다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010609_17v3",
    guidelineTopic: "사후관리 · 유지보수",
    keywords: ["사후관리", "유지보수", "운영 오류"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-050",
    section: "development_operation",
    sourceType: "theory",
    question: "프로젝트 완료 이후 결과물 관리와 유지보수에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 단계별 작업 결과물은 후속 과제 참조 가능성을 고려해 정해진 규칙에 따라 분류·보존·폐기할 수 있다.\nㄴ. 운영 중 발견된 오류는 서비스 유지 요인과 함께 검토해 보수 방안을 제시한다.\nㄷ. 최종 발표가 끝난 뒤에는 자료 보존보다 산출물 폐기가 항상 우선된다.\nㄹ. 공유와 보존을 위해 최종 파일과 결과물을 데이터베이스화할 수 있다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "프로젝트 완료 이후에는 결과물을 정해진 기준으로 분류·보존·폐기하고, 운영 중 오류와 유지 요인을 바탕으로 보수 방안을 마련해야 한다. 또한 최종 파일과 결과물은 공유와 보존을 위해 데이터베이스화할 수 있다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 디자인 자료화에서는 최종 파일과 결과물의 데이터베이스화가 중요하다.",
      "정답이다.",
      "ㄱ과 ㄹ이 빠졌고, ㄷ은 무조건 폐기를 우선한다는 점에서 틀렸다.",
      "ㄴ이 빠졌고, ㄷ은 사후관리의 취지와 맞지 않는다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010609_17v3",
    guidelineTopic: "사후관리 · 결과물 관리와 유지보수",
    keywords: ["결과물 관리", "분류 보존 폐기", "유지보수"],
    difficulty: "high",
    examStyle: "process"
  }
];