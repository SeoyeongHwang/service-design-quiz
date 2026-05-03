export const batchMeta = {
  batchId: "development_operation",
  section: "development_operation",
  sourceSummary: [
    "서비스·경험디자인기사 출제기준(2025.7.1.~2028.12.31)",
    "2025 서비스·경험디자인 이론서(개정판)",
    "서비스·경험디자인 기사 핵심키워드 핸드북",
    "2020-2022 서비스·경험디자인 기사 기출문제"
  ],
  notes: "서비스·경험디자인 개발 및 운영 섹션 누적 초안. 신규 30문항."
};

export const batchQuestions = [
  {
    id: "development_operation-021",
    section: "development_operation",
    sourceType: "keyword",
    question: "프로토타입 평가의 목적으로 가장 적절한 것은?",
    choices: [
      "최종 서비스의 브랜드명을 확정하고 상표 출원 가능성을 검토하는 것",
      "서비스 운영 이후 발생한 유지보수 이슈를 정기 보고서로 정리하는 것",
      "서비스를 시장에 선보이기 전에 초기 기획 의도, 품질, 성능, 사용자 피드백을 확인하는 것",
      "최종 결과물을 클라이언트와 디자이너가 공유할 수 있도록 데이터베이스화하는 것"
    ],
    answerIndex: 2,
    explanation: "프로토타입 평가는 실제 구현이나 시장 출시 전 개발된 서비스가 기획 의도와 가치를 구현하는지, 성능과 품질에 문제가 없는지, 사용자와 이해관계자의 피드백을 얻을 수 있는지를 확인하는 과정이다.",
    wrongExplanations: [
      "상표나 디자인권 검토는 디자인 권리 영역에 가깝고, 프로토타입 평가의 직접 목적이 아니다.",
      "운영 이후의 유지보수 이슈 정리는 사후관리와 완료보고에 더 가깝다.",
      "정답이다.",
      "최종 파일과 결과물의 데이터베이스화는 디자인 자료화에 해당한다."
    ],
    theoryPage: 282,
    theoryRange: "282-287",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 목표",
    keywords: ["프로토타입 평가", "사용자 피드백", "품질 검증"],
    difficulty: "low",
    examStyle: "definition"
  },
  {
    id: "development_operation-022",
    section: "development_operation",
    sourceType: "theory",
    question: "다음 중 프로토타입 평가 계획에 대한 설명으로 적절한 것을 모두 고른 것은?\n\nㄱ. 평가 목표와 확인할 가설을 정하고, 그에 맞는 평가 과업과 관찰 기준을 마련한다.\nㄴ. 실제 사용자 또는 이해관계자의 참여 구성을 평가 목적에 맞게 설계한다.\nㄷ. 평가 단계에서는 프로토타입을 수정하지 않도록 피드백 수집을 최소화한다.\nㄹ. 시뮬레이션 상황, 기록 방식, 평가 환경을 사전에 계획한다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 2,
    explanation: "프로토타입 평가 계획은 평가 방법, 사용자 평가 참여자 구성, 시뮬레이션과 기록 방식을 목적에 맞게 준비하는 활동이다. 피드백을 최소화하기보다 피드백을 체계적으로 얻기 위한 계획이 필요하다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 평가 환경과 기록 방식은 평가 계획에서 중요한 준비 요소이다.",
      "ㄴ과 ㄹ이 빠졌고, ㄷ은 피드백을 최소화한다는 점에서 틀렸다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄷ은 평가의 취지와 반대된다."
    ],
    theoryPage: 287,
    theoryRange: "287-290",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 방법 계획",
    keywords: ["평가 계획", "참여자 구성", "시뮬레이션"],
    difficulty: "high",
    examStyle: "process"
  },
  {
    id: "development_operation-023",
    section: "development_operation",
    sourceType: "keyword",
    question: "사용자 평가와 휴리스틱 평가의 차이를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "사용자 평가는 전문가가 체크리스트로 진단하고, 휴리스틱 평가는 실제 사용자가 과업을 수행한다.",
      "사용자 평가는 실제 사용자의 과업 수행을 관찰하고, 휴리스틱 평가는 전문가가 지식과 경험을 바탕으로 문제를 찾는다.",
      "사용자 평가는 서비스 구현 이후에만 가능하고, 휴리스틱 평가는 아이디어 단계에서만 가능하다.",
      "사용자 평가와 휴리스틱 평가는 모두 사용자의 감정 곡선만을 정량적으로 측정하는 방법이다."
    ],
    answerIndex: 1,
    explanation: "사용자 평가는 실제 사용자가 프로토타입을 사용하며 과업을 수행하는 과정을 관찰하는 방식이고, 휴리스틱 평가는 전문가가 평가 가이드라인과 경험을 바탕으로 문제점과 개선 방향을 제시하는 방식이다.",
    wrongExplanations: [
      "두 평가 방식의 주체가 서로 뒤바뀌었다.",
      "정답이다.",
      "두 방법 모두 단계에 따라 유연하게 활용될 수 있으며, 특정 단계에만 고정되지 않는다.",
      "감정 곡선 측정만을 목적으로 하는 평가가 아니며, 사용성과 품질, 문제점 등을 폭넓게 확인한다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용성 평가 도출",
    keywords: ["사용자 평가", "휴리스틱 평가", "사용성 평가"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-024",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 과정을 진행하는 순서로 가장 적절한 것은?",
    choices: [
      "개선안 확정 → 평가 결과 문서화 → 참여자 모집 → 평가 목표 수립",
      "참여자 모집 → 서비스 출시 → 평가 목표 수립 → 평가 결과 분석",
      "평가 목표와 방법 설정 → 참여자 구성 → 시뮬레이션 평가 → 결과 분석과 개선 방향 도출",
      "평가 결과 분석 → 프로토타입 폐기 → 서비스 블루프린트 작성 → 사용자 과업 설계"
    ],
    answerIndex: 2,
    explanation: "프로토타입 평가는 목표와 방법을 정하고, 적절한 참여자를 구성한 뒤, 시뮬레이션이나 사용성 평가를 수행하고, 그 결과를 분석해 개선 방향과 문서화로 이어지는 흐름이 적절하다.",
    wrongExplanations: [
      "개선안 확정과 문서화가 평가 계획보다 먼저 올 수 없다.",
      "서비스 출시 이전 검증이 프로토타입 평가의 핵심이므로 출시가 중간에 들어가는 흐름은 부적절하다.",
      "정답이다.",
      "평가 결과 분석 뒤 프로토타입을 무조건 폐기하는 것은 평가의 목적과 맞지 않는다."
    ],
    theoryPage: 290,
    theoryRange: "290-296",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 과정",
    keywords: ["평가 과정", "결과 분석", "개선 방향"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-025",
    section: "development_operation",
    sourceType: "theory",
    question: "모바일 민원 서비스 프로토타입 평가에서 일부 사용자는 신청 단계가 길다고 느꼈지만, 다른 사용자는 단계가 나뉘어 있어 안심된다고 응답했다. 평가 결과 분석으로 가장 적절한 접근은?",
    choices: [
      "부정 의견이 있으므로 신청 단계를 모두 하나의 화면으로 통합한다.",
      "긍정 의견이 있으므로 신청 단계의 길이에 대한 문제를 분석 대상에서 제외한다.",
      "피드백을 사용자 유형, 과업 맥락, 단계별 이탈 가능성으로 분류하고 개선 우선순위를 판단한다.",
      "사용자 의견이 엇갈리므로 평가를 실패로 보고 기존 기획안을 유지한다."
    ],
    answerIndex: 2,
    explanation: "평가 결과 분석에서는 상반된 피드백을 단순 다수결로 처리하기보다 사용자 유형과 사용 맥락, 과업 흐름, 문제의 심각도와 개선 가능성을 기준으로 해석해야 한다.",
    wrongExplanations: [
      "부정 의견만 반영해 전체 흐름을 바꾸는 것은 평가 결과를 과도하게 단순화한 것이다.",
      "긍정 의견이 존재하더라도 문제 가능성은 분석해야 한다.",
      "정답이다.",
      "의견이 엇갈릴수록 사용자 세그먼트와 맥락을 구분해 분석해야 한다."
    ],
    theoryPage: 294,
    theoryRange: "294-296",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 평가 결과 분석",
    keywords: ["피드백 분석", "우선순위", "사용자 유형"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-026",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 후 개선 방향을 수립할 때 가장 적절한 기준은?",
    choices: [
      "평가자가 개인적으로 선호하는 UI 스타일을 우선 적용한다.",
      "초기 서비스 목표, 사용자 피드백, 문제의 심각도와 구현 가능성을 함께 검토한다.",
      "가장 많은 텍스트 설명을 추가하여 사용자가 스스로 문제를 해결하게 한다.",
      "기존 기획안과 다른 의견은 평가 오류로 간주하고 제외한다."
    ],
    answerIndex: 1,
    explanation: "개선 방향은 초기 기획 의도와 서비스 목표를 기준으로 사용자 피드백, 사용성 문제, 구현 가능성, 영향도를 종합해 도출해야 한다.",
    wrongExplanations: [
      "개인적 선호는 객관적인 개선 기준이 될 수 없다.",
      "정답이다.",
      "텍스트 설명을 늘리는 것만으로 문제를 해결하는 방식은 서비스 흐름이나 상호작용의 문제를 가릴 수 있다.",
      "기존 기획안과 다른 의견일수록 실제 사용 맥락에서 중요한 발견일 수 있다."
    ],
    theoryPage: 296,
    theoryRange: "296-306",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 개선 방향 수립",
    keywords: ["개선 방향", "평가 결과", "서비스 목표"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-027",
    section: "development_operation",
    sourceType: "keyword",
    question: "사용성 평가에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 사용성은 특정 사용 맥락에서 사용자가 목표를 효과적, 효율적, 만족스럽게 달성하는 정도와 관련된다.\nㄴ. 닐슨의 사용성 요소에는 학습성, 효율성, 기억가능성, 오류, 만족도가 포함된다.\nㄷ. 사용성 평가는 반드시 전문가 평가만으로 수행해야 하며 실제 사용자는 배제한다.\nㄹ. 사용자 평가는 과업 수행 과정의 관찰, 인터뷰, 기록 분석 등을 활용할 수 있다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 2,
    explanation: "사용성 평가는 사용자가 목표를 효과적, 효율적, 만족스럽게 달성하는지를 확인하며, 실제 사용자 평가와 전문가 휴리스틱 평가 모두 활용될 수 있다. 닐슨의 5대 요소와 과업 기반 관찰도 핵심 내용이다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 실제 사용자 과업 수행의 관찰과 기록 분석은 사용자 평가에서 중요하다.",
      "ㄴ과 ㄹ이 빠졌고, ㄷ은 실제 사용자를 배제한다는 점에서 틀렸다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄷ은 사용성 평가의 범위를 잘못 제한한다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용성 평가",
    keywords: ["사용성 평가", "ISO 9241-11", "닐슨"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-028",
    section: "development_operation",
    sourceType: "keyword",
    question: "키오스크 주문 서비스의 사용자 평가를 설계할 때 가장 적절한 방법은?",
    choices: [
      "디자이너가 예상 사용자 행동을 대신 수행하고 성공 여부를 기록한다.",
      "실제 사용자에게 대표 과업을 부여하고 수행 과정, 오류, 발화, 소요 시간 등을 관찰한다.",
      "서비스 제공자의 내부 업무 절차만 점검하고 사용자 화면은 평가하지 않는다.",
      "최종 발표 자료에 포함할 이미지 품질만 확인한다."
    ],
    answerIndex: 1,
    explanation: "사용자 평가는 실제 사용자가 프로토타입을 사용하면서 과업을 수행하는 과정을 관찰하고 분석하는 방법이다. 제작자 관점을 배제하고 사용자 관점에서 문제를 확인해야 한다.",
    wrongExplanations: [
      "디자이너가 사용자를 대신하면 실제 사용자의 이해, 오류, 맥락을 확인하기 어렵다.",
      "정답이다.",
      "내부 절차만 점검하면 사용자가 겪는 인터페이스와 경험 문제를 확인할 수 없다.",
      "이미지 품질 확인은 발표 자료 검토에 가깝고 사용자 평가가 아니다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 사용자 평가",
    keywords: ["사용자 평가", "과업 수행", "관찰"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-029",
    section: "development_operation",
    sourceType: "keyword",
    question: "휴리스틱 평가를 적용하기에 가장 적절한 상황은?",
    choices: [
      "서비스가 시장에 출시된 뒤 법적 권리 보호만 검토해야 하는 상황",
      "전문가가 짧은 시간 안에 인터페이스와 서비스 품질의 주요 문제를 진단해야 하는 상황",
      "실제 사용자의 장기 이용 만족도를 정량적으로 추적해야 하는 상황",
      "최종 디자인 파일의 보존 규칙과 폐기 주기를 정해야 하는 상황"
    ],
    answerIndex: 1,
    explanation: "휴리스틱 평가는 사용성, UI, 정보구조 등 관련 전문가가 지식과 경험을 바탕으로 빠르게 문제점과 개선 방향을 찾는 평가 방법이다.",
    wrongExplanations: [
      "법적 권리 보호 검토는 지식재산권과 디자인 권리 영역이다.",
      "정답이다.",
      "장기 이용 만족도 추적은 별도의 운영 데이터 분석이나 사용자 조사에 더 적합하다.",
      "파일 보존과 폐기 규칙은 디자인 자료화 및 사후관리 영역이다."
    ],
    theoryPage: 306,
    theoryRange: "306-312",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 휴리스틱 평가",
    keywords: ["휴리스틱 평가", "전문가 평가", "개선 방향"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-030",
    section: "development_operation",
    sourceType: "theory",
    question: "병원 예약 서비스의 최종 모델을 정리하면서 사용자가 보는 화면, 접수 직원의 응대, 시스템 알림, 내부 확인 절차를 하나의 흐름으로 표현하려고 한다. 가장 적절한 산출물은?",
    choices: [
      "서비스 블루프린트",
      "공지증명 신청서",
      "저작권 등록증",
      "완료보고서 표지"
    ],
    answerIndex: 0,
    explanation: "서비스 블루프린트는 사용자 행동과 전방 영역, 후방 영역, 지원 프로세스 등 서비스 제공에 필요한 보이는 활동과 보이지 않는 활동을 통합적으로 표현하는 산출물이다.",
    wrongExplanations: [
      "정답이다.",
      "공지증명은 창작 사실과 시기를 입증하기 위한 권리 보호 제도와 관련된다.",
      "저작권 등록증은 권리 증빙과 관련되며 서비스 흐름을 구조화하는 산출물이 아니다.",
      "완료보고서 표지는 프로젝트 결과 보고의 일부일 수 있으나 서비스 구조를 표현하는 도구는 아니다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 블루프린트 작성",
    keywords: ["서비스 블루프린트", "가시선", "지원 프로세스"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-031",
    section: "development_operation",
    sourceType: "theory",
    question: "고객 여정 지도와 서비스 블루프린트의 차이를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "고객 여정 지도는 내부 지원 프로세스만 다루고, 서비스 블루프린트는 사용자의 감정 변화만 다룬다.",
      "고객 여정 지도는 사용자 경험의 시간적 흐름을 중심으로 보고, 서비스 블루프린트는 서비스 제공을 가능하게 하는 전방·후방 활동까지 통합해 본다.",
      "고객 여정 지도는 권리 보호를 위한 문서이고, 서비스 블루프린트는 저작권 등록을 위한 문서이다.",
      "두 도구는 모두 최종 발표를 위한 시각 장식 요소이므로 서비스 설계 판단에는 사용하지 않는다."
    ],
    answerIndex: 1,
    explanation: "고객 여정 지도는 사용자가 서비스를 경험하는 단계와 감정, 접점을 중심으로 시각화한다. 서비스 블루프린트는 여기에 더해 전방·후방 활동, 상호작용선, 내부 지원 절차 등 서비스 제공 구조를 함께 다룬다.",
    wrongExplanations: [
      "두 도구의 초점이 반대로 설명되었다.",
      "정답이다.",
      "두 도구 모두 서비스 경험과 제공 구조를 시각화하는 설계 도구이지 권리 등록 문서가 아니다.",
      "두 도구는 서비스 설계 판단과 문제 발견에 활용되는 핵심 시각화 도구이다."
    ],
    theoryPage: 312,
    theoryRange: "312-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 블루프린트 작성",
    keywords: ["고객 여정 지도", "서비스 블루프린트", "전방 후방 영역"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-032",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스디자인에서 비즈니스 모델 캔버스를 활용하는 방식으로 가장 적절한 것은?",
    choices: [
      "사업 계획서를 대체하기 위해 한 번 작성한 뒤 수정하지 않는다.",
      "고객 경험과 조직 운영의 영향을 예측하며 다양한 옵션을 반복적으로 테스트하고 보완한다.",
      "서비스의 시각 스타일만 결정하기 위해 색상, 서체, 아이콘 규칙만 기록한다.",
      "디자인권 출원 절차를 정리하기 위한 법률 문서로 사용한다."
    ],
    answerIndex: 1,
    explanation: "비즈니스 모델 캔버스는 서비스 운영 모델을 빠르게 시각화하고, 프로토타입이나 시나리오를 통해 사업성과 고객·조직 경험의 영향을 반복적으로 검토하는 보완적 도구이다.",
    wrongExplanations: [
      "비즈니스 모델 캔버스는 반복과 수정에 적합한 유연한 도구이며, 완성형 사업 계획서의 단순 대체물이 아니다.",
      "정답이다.",
      "색상과 서체 규칙은 주로 시각 디자인 시스템이나 가이드라인의 내용이다.",
      "디자인권 출원 절차 정리는 지식재산권 관리 영역이다."
    ],
    theoryPage: 317,
    theoryRange: "317-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 비즈니스 모델 캔버스",
    keywords: ["비즈니스 모델 캔버스", "서비스 운영 모델", "반복 테스트"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-033",
    section: "development_operation",
    sourceType: "theory",
    question: "비즈니스 모델 캔버스 구성 요소에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 고객 세그먼트, 가치 제안, 채널, 고객 관계는 고객 블록을 구성하는 주요 요소이다.\nㄴ. 핵심 자원, 핵심 활동, 핵심 파트너십은 서비스를 가능하게 하는 기반 구조와 관련된다.\nㄷ. 수익원과 비용 구조는 비즈니스 모델의 재무적 흐름을 파악하는 데 활용된다.\nㄹ. 서비스 블루프린트의 가시선은 비즈니스 모델 캔버스의 9개 블록 중 하나이다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ, ㄹ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ"
    ],
    answerIndex: 3,
    explanation: "비즈니스 모델 캔버스는 고객 세그먼트, 가치 제안, 채널, 고객 관계, 수익원, 핵심 자원, 핵심 활동, 핵심 파트너십, 비용 구조 등 9개 요소로 구성된다. 가시선은 서비스 블루프린트의 개념이다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 수익원과 비용 구조는 비즈니스 모델 캔버스의 중요한 요소이다.",
      "ㄴ이 빠졌고, ㄹ은 서비스 블루프린트의 개념을 잘못 포함했다.",
      "ㄱ이 빠졌고, ㄹ은 비즈니스 모델 캔버스의 구성 요소가 아니다.",
      "정답이다."
    ],
    theoryPage: 317,
    theoryRange: "317-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 비즈니스 모델 캔버스",
    keywords: ["비즈니스 모델 캔버스", "9개 블록", "재무 흐름"],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-034",
    section: "development_operation",
    sourceType: "theory",
    question: "비즈니스 모델 캔버스 워크숍을 준비하는 절차로 가장 적절한 것은?",
    choices: [
      "팀 내부 디자이너만 참여시킨 뒤 고객 관련 자료 없이 비용 구조부터 확정한다.",
      "서비스 배경을 아는 사람, 선입관이 적은 사람, 실행 팀, 사용자 등을 검토하고 페르소나, 이해관계자 지도, 여정 지도, 프로토타입 등을 함께 준비한다.",
      "법률 전문가만 초청하여 저작권 등록 가능성을 검토하고 캔버스의 고객 블록은 생략한다.",
      "서비스 출시 이후 매출 데이터가 모두 쌓일 때까지 캔버스 작성을 보류한다."
    ],
    answerIndex: 1,
    explanation: "비즈니스 모델 캔버스는 다양한 관점의 참여자와 기존 서비스디자인 산출물을 함께 활용할 때 고객 중심의 운영 모델을 더 잘 검토할 수 있다.",
    wrongExplanations: [
      "고객 관련 자료와 다양한 관점 없이 비용 구조만 확정하면 서비스 운영 모델의 균형을 보기 어렵다.",
      "정답이다.",
      "법률 검토만으로는 고객, 가치 제안, 채널, 파트너십 등 비즈니스 모델의 핵심 요소를 다룰 수 없다.",
      "캔버스는 출시 전에도 옵션을 테스트하고 보완하기 위해 활용될 수 있다."
    ],
    theoryPage: 316,
    theoryRange: "316-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 비즈니스 모델 캔버스 수행방법",
    keywords: ["워크숍 준비", "페르소나", "여정 지도"],
    difficulty: "high",
    examStyle: "process"
  },
  {
    id: "development_operation-035",
    section: "development_operation",
    sourceType: "theory",
    question: "사용자 경험에 따른 반응, 시간, 행동을 시각화하여 향후 서비스 변화를 예측하고 단계별 실행 방향을 제시하려고 한다. 가장 적절한 결과물은?",
    choices: [
      "서비스·경험 로드맵",
      "휴리스틱 평가표",
      "디자인권 출원서",
      "인터뷰 섭외 리스트"
    ],
    answerIndex: 0,
    explanation: "서비스·경험 로드맵은 사용자 경험의 반응, 시간, 행동을 바탕으로 서비스 변화와 실행 방향을 예측하고 제시하는 모델개발 산출물이다.",
    wrongExplanations: [
      "정답이다.",
      "휴리스틱 평가표는 전문가가 사용성 문제를 진단하는 평가 도구에 가깝다.",
      "디자인권 출원서는 권리 보호와 관련된 문서이지 서비스 변화 예측 산출물이 아니다.",
      "인터뷰 섭외 리스트는 조사 준비 문서에 해당한다."
    ],
    theoryPage: 306,
    theoryRange: "306-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스·경험 로드맵 작성",
    keywords: ["서비스 로드맵", "서비스 변화", "사용자 행동"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-036",
    section: "development_operation",
    sourceType: "theory",
    question: "새로운 공공 안내 서비스의 블루프린트는 작성되었지만 실제 현장에서 직원마다 응대 방식이 달라 서비스 품질이 흔들리고 있다. 모델개발 관점에서 우선 보완해야 할 내용은?",
    choices: [
      "서비스 제공자 행동양식과 내부 운영 절차를 구체화한다.",
      "최종 발표 자료의 표지 이미지를 더 강하게 만든다.",
      "저작권 등록 여부만 검토하고 현장 운영은 별도 관리하지 않는다.",
      "사용자의 모든 요구를 하나의 기능으로 통합한다."
    ],
    answerIndex: 0,
    explanation: "서비스 제공 품질을 안정화하려면 사용자 접점에서 제공자가 어떤 기준과 절차로 행동해야 하는지, 후방 프로세스와 어떻게 연결되는지를 구체화해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "표지 이미지는 설득 자료의 일부일 수 있으나 현장 응대 품질 문제를 해결하지 못한다.",
      "권리 검토만으로는 서비스 운영 방식의 일관성을 확보할 수 없다.",
      "모든 요구를 하나의 기능으로 통합하는 것은 문제를 단순화한 접근이며 운영 품질과 직접 연결되지 않는다."
    ],
    theoryPage: 319,
    theoryRange: "319-331",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 제공자 행동양식",
    keywords: ["서비스 제공자 행동양식", "운영 절차", "접점 품질"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-037",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 구현 단계에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "서비스 구현은 아이디어 발산을 위해 가능한 많은 콘셉트를 새로 만드는 단계이다.",
      "서비스 구현은 평가와 모델개발을 거친 서비스가 실제 운영될 수 있도록 실행 조건과 운영 방식을 정리하는 단계이다.",
      "서비스 구현은 사용자 조사 이전에 조사 대상을 임의로 정하는 단계이다.",
      "서비스 구현은 최종 산출물을 보관하지 않고 프로젝트 종료 즉시 폐기하는 단계이다."
    ],
    answerIndex: 1,
    explanation: "서비스 구현은 평가 결과와 모델개발 산출물을 바탕으로 서비스가 실제 현장에서 운영될 수 있도록 실행 조건, 운영 방식, 이해관계자 역할 등을 정리하는 활동과 연결된다.",
    wrongExplanations: [
      "아이디어 발산은 개발하기 단계의 아이데이션과 더 관련이 깊다.",
      "정답이다.",
      "조사 대상 설정은 조사 설계 단계의 활동이다.",
      "결과물은 자료화와 사후관리를 통해 공유, 보존, 유지보수되어야 한다."
    ],
    theoryPage: 319,
    theoryRange: "319-331",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 서비스 구현",
    keywords: ["서비스 구현", "운영 방식", "이해관계자 역할"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-038",
    section: "development_operation",
    sourceType: "theory",
    question: "지식재산권에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 상표권은 상품이나 서비스의 출처를 식별하게 하는 표장 보호와 관련된다.\nㄴ. 디자인권은 물품 등의 형상, 모양, 색채 또는 이들의 결합과 같은 디자인 보호와 관련된다.\nㄷ. 저작권은 아이디어 그 자체보다 구체적으로 표현된 저작물을 보호하는 권리이다.\nㄹ. BM특허는 순수한 영업 아이디어만 있으면 기술적 구현 없이도 항상 인정된다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "상표권, 디자인권, 저작권은 각각 식별 표지, 디자인 형상, 구체적 표현의 보호와 관련된다. BM특허는 일반 특허와 마찬가지로 특허 요건을 충족해야 하며 순수한 영업 아이디어만으로 항상 인정되는 것은 아니다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 저작권은 구체적으로 표현된 저작물 보호와 관련된다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄹ은 BM특허를 과도하게 설명했다.",
      "ㄹ은 틀린 진술이다. 순수 영업 아이디어만으로 항상 특허가 인정되는 것은 아니다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 지식재산권",
    keywords: ["상표권", "디자인권", "저작권", "BM특허"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "development_operation-039",
    section: "development_operation",
    sourceType: "generated",
    question: "온라인 예약 서비스의 새로운 영업 방식에 대해 BM특허 가능성을 검토하고 있다. 설명으로 가장 적절한 것은?",
    choices: [
      "영업 방식 아이디어를 말로 설명할 수 있으면 기술적 구성과 무관하게 BM특허가 성립한다.",
      "BM특허는 상표권의 하위 유형이므로 서비스명과 로고가 있으면 자동으로 인정된다.",
      "BM특허는 영업 방법과 관련될 수 있지만 특허로 인정되려면 특허 대상과 요건을 충족해야 한다.",
      "BM특허는 저작권 등록을 완료한 뒤에만 검토할 수 있는 권리이다."
    ],
    answerIndex: 2,
    explanation: "BM특허는 영업 방법을 대상으로 할 수 있지만 일반 특허와 마찬가지로 특허 대상과 요건을 충족해야 한다. 순수한 영업 방법 자체만으로 독점권이 인정되는 것은 아니다.",
    wrongExplanations: [
      "순수 영업 아이디어만으로 BM특허가 자동 성립하는 것은 아니다.",
      "BM특허는 특허의 한 분야이지 상표권의 하위 유형이 아니다.",
      "정답이다.",
      "BM특허 검토가 저작권 등록 완료를 전제로만 이루어지는 것은 아니다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · BM특허",
    keywords: ["BM특허", "특허 요건", "영업 방법"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-040",
    section: "development_operation",
    sourceType: "theory",
    question: "디자인권과 저작권의 차이를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "디자인권은 창작과 동시에 자동으로 발생하고, 저작권은 반드시 특허청 심사를 거쳐야 한다.",
      "디자인권은 출원과 등록 절차를 통해 보호를 확보하는 성격이 강하고, 저작권은 창작된 표현물에 대해 발생하며 등록은 권리관계 증명에 도움을 줄 수 있다.",
      "디자인권은 문학 저작물만 보호하고, 저작권은 제품의 외관만 보호한다.",
      "디자인권과 저작권은 모두 서비스 운영 모델을 시각화하기 위한 분석 도구이다."
    ],
    answerIndex: 1,
    explanation: "디자인권은 디자인 출원과 등록 절차를 통해 보호를 확보하는 권리이며, 저작권은 구체적으로 표현된 저작물에 대해 발생하는 권리이다. 저작권 등록은 창작 사실과 권리관계를 입증하는 데 도움을 줄 수 있다.",
    wrongExplanations: [
      "디자인권과 저작권의 발생 및 보호 절차가 반대로 설명되었다.",
      "정답이다.",
      "보호 대상이 서로 뒤바뀌었고 지나치게 제한적으로 설명되었다.",
      "두 권리는 분석 도구가 아니라 법적 권리 보호와 관련된다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 디자인권과 저작권",
    keywords: ["디자인권", "저작권", "등록"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-041",
    section: "development_operation",
    sourceType: "keyword",
    question: "공지증명제도에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 창작물의 창작 사실과 공지 시점을 증명하는 데 활용될 수 있다.\nㄴ. 디자인 등록 전 창작자의 권리 보호를 보완하기 위한 제도적 수단이 될 수 있다.\nㄷ. 공지증명을 받으면 별도의 출원 없이 모든 산업재산권이 자동으로 등록된다.\nㄹ. 디자인 출원 시 신규성 상실 예외 주장 자료로 활용될 수 있다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "공지증명제도는 창작 사실과 시기를 증명해 창작자 보호를 보완하고, 디자인 등록·출원 과정에서 신규성 상실 예외 주장 자료로 활용될 수 있다. 다만 모든 권리를 자동 등록해 주는 제도는 아니다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 공지증명은 신규성 상실 예외 주장 자료로 활용될 수 있다.",
      "정답이다.",
      "ㄱ과 ㄹ이 빠졌고, ㄷ은 공지증명의 효력을 과도하게 설명했다.",
      "ㄴ이 빠졌고, ㄷ은 틀린 진술이다."
    ],
    theoryPage: 5,
    theoryRange: "핵심키워드 핸드북 5",
    guidelineCode: "UNSPECIFIED",
    guidelineTopic: "디자인 권리 · 공지증명제도",
    keywords: ["공지증명제도", "창작 사실", "신규성 상실 예외"],
    difficulty: "medium",
    examStyle: "definition"
  },
  {
    id: "development_operation-042",
    section: "development_operation",
    sourceType: "theory",
    question: "완료 단계의 프레젠테이션 자료 형식을 정할 때 가장 적절한 판단은?",
    choices: [
      "모든 결과물은 세로 문서로만 작성해야 하며 발표용 가로 문서는 피한다.",
      "공식 보고서와 발표 자료의 용도에 따라 세로 문서, 가로 문서, 용지 크기, 컬러 사용 조건을 구분해 편집한다.",
      "발표용 문서는 텍스트를 최대한 많이 넣어 검토자가 오래 읽도록 만든다.",
      "자료 형식은 서비스 내용과 무관하므로 임의로 정해도 평가에 영향을 주지 않는다."
    ],
    answerIndex: 1,
    explanation: "프레젠테이션 및 결과 보고서 작성에서는 문서의 용도에 따라 세로·가로 형식, 용지 크기, 컬러 또는 흑백 기준을 검토하고 그에 맞게 편집해야 한다.",
    wrongExplanations: [
      "세로 문서만 허용되는 것이 아니라 문서 용도에 따라 형식을 정해야 한다.",
      "정답이다.",
      "발표 자료는 읽히는 문서보다 보여주는 문서로 기능해야 하므로 과도한 텍스트 중심 구성은 적절하지 않다.",
      "문서 형식과 편집 체계는 첫인상과 전달력에 영향을 준다."
    ],
    theoryPage: 333,
    theoryRange: "333-337",
    guidelineCode: "0802010106_15v2",
    guidelineTopic: "프레젠테이션 · 주제 및 방향 설정",
    keywords: ["프레젠테이션", "문서 형식", "편집"],
    difficulty: "low",
    examStyle: "application"
  },
  {
    id: "development_operation-043",
    section: "development_operation",
    sourceType: "theory",
    question: "결과 보고서 작성 원칙으로 가장 적절한 것은?",
    choices: [
      "보고서는 읽는 것이 아니라 보여주는 것이라는 관점에서 시각적 구조와 편집 체계를 통해 핵심을 빠르게 전달한다.",
      "검토자의 시선을 끌지 않기 위해 모든 페이지를 동일한 텍스트 밀도로 채운다.",
      "시각 자료는 장식 요소이므로 서비스 논리나 근거 자료와 분리한다.",
      "완료보고서는 프로젝트의 최종 이미지만 넣고 과정과 근거는 생략한다."
    ],
    answerIndex: 0,
    explanation: "이론서에서는 보고서를 보여주는 문서로 보고, 정돈된 편집과 문서 체계, 시각적 자극을 통해 검토자의 시선을 사로잡는 것이 중요하다고 설명한다.",
    wrongExplanations: [
      "정답이다.",
      "동일한 텍스트 밀도만 유지하면 핵심 전달과 시각적 위계가 약해질 수 있다.",
      "시각 자료는 장식이 아니라 논리와 근거를 효과적으로 전달하는 수단이다.",
      "완료보고서는 기획부터 최종 결과물까지 단계별 결과와 근거를 정리해야 한다."
    ],
    theoryPage: 333,
    theoryRange: "333-337",
    guidelineCode: "0802010106_15v2",
    guidelineTopic: "프레젠테이션 · 시각적 자료 활용",
    keywords: ["결과 보고서", "시각화", "문서 체계"],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-044",
    section: "development_operation",
    sourceType: "theory",
    question: "프레젠테이션 자료에서 그림과 시각 자료를 활용하는 방식으로 적절한 것을 모두 고른 것은?\n\nㄱ. 복잡한 서비스 구조는 도식, 흐름도, 표 등을 활용해 관계를 빠르게 파악할 수 있게 한다.\nㄴ. 시각 자료는 핵심 논리를 보완해야 하며 단순 장식으로만 사용하지 않는다.\nㄷ. 모든 데이터는 원문 텍스트 그대로 제시해야 하므로 요약이나 구조화는 피한다.\nㄹ. 서비스 전개 과정과 발표 계획에 맞게 시각 자료의 순서와 위계를 조정한다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "프레젠테이션에서는 시각적·논리적 자료를 효과적으로 활용해야 하므로 도식화, 구조화, 위계 설정이 중요하다. 원문 텍스트를 그대로 나열하는 방식은 전달력을 떨어뜨릴 수 있다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 발표 흐름에 맞는 시각 자료의 순서와 위계도 중요하다.",
      "정답이다.",
      "ㄱ과 ㄹ이 빠졌고, ㄷ은 자료를 구조화하지 말라는 점에서 부적절하다.",
      "ㄴ이 빠졌고, ㄷ은 틀린 진술이다."
    ],
    theoryPage: 337,
    theoryRange: "337-350",
    guidelineCode: "0802010106_15v2",
    guidelineTopic: "프레젠테이션 · 시각적·논리적 자료 활용",
    keywords: ["시각 자료", "논리적 자료", "도식화"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-045",
    section: "development_operation",
    sourceType: "theory",
    question: "프로젝트 완료보고서 작성의 핵심으로 가장 적절한 것은?",
    choices: [
      "최종 산출물 이미지만 모아 포트폴리오 형식으로 배열한다.",
      "과제 기획부터 최종 결과물까지 단계별 결과를 문서로 정리하고, 완료보고서 목적에 맞게 축약·편집한다.",
      "프로토타입 평가에서 나온 부정 의견은 프로젝트 완성도를 낮추므로 제외한다.",
      "프로젝트 종료 후 운영과 유지보수에 필요한 정보는 포함하지 않는다."
    ],
    answerIndex: 1,
    explanation: "완료보고서는 과제 기획부터 최종 결과물까지 각 단계별 결과를 문서로 정리하고, 보고 목적에 맞게 축약·편집하여 작성해야 한다.",
    wrongExplanations: [
      "최종 이미지만 배열하면 과정, 근거, 평가 결과, 의사결정 맥락을 전달하기 어렵다.",
      "정답이다.",
      "부정 의견은 개선 과정과 의사결정 근거를 설명하는 중요한 자료가 될 수 있다.",
      "운영과 유지보수에 필요한 정보는 사후관리와 결과물 관리 측면에서 중요하다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010608_17v3",
    guidelineTopic: "프로젝트 완료 · 완료보고서 작성",
    keywords: ["완료보고서", "단계별 결과", "축약 편집"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-046",
    section: "development_operation",
    sourceType: "theory",
    question: "디자인 자료화 단계에서 가장 적절한 활동은?",
    choices: [
      "최종 파일과 결과물을 체계적으로 데이터베이스화하고 클라이언트 및 디자이너와 공유·보존할 수 있게 정리한다.",
      "모든 원본 파일을 삭제하고 발표용 PDF만 남긴다.",
      "아이디어 발산 단계에서 나온 모든 스케치를 무작위 순서로 보관한다.",
      "저작권 등록을 하지 않은 자료는 프로젝트 기록에서 제외한다."
    ],
    answerIndex: 0,
    explanation: "디자인 자료화는 서비스 운영을 위한 최종 디자인 파일과 결과물을 데이터베이스화하고, 클라이언트와 디자이너 등 관계자가 공유하고 보존할 수 있도록 관리하는 활동이다.",
    wrongExplanations: [
      "정답이다.",
      "원본 파일을 삭제하면 수정, 유지보수, 후속 과제 참조가 어려워진다.",
      "무작위 보관은 검색과 재사용을 어렵게 하므로 체계적인 분류와 관리가 필요하다.",
      "권리 등록 여부와 별개로 프로젝트 결과물과 근거 자료는 관리 대상이 될 수 있다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010109_15v2",
    guidelineTopic: "디자인 자료화 · 데이터베이스 관리",
    keywords: ["디자인 자료화", "데이터베이스", "공유 보존"],
    difficulty: "low",
    examStyle: "process"
  },
  {
    id: "development_operation-047",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스·경험디자인 사후관리에 대한 설명으로 옳은 것을 모두 고른 것은?\n\nㄱ. 후속 과제 개발에 참조할 수 있도록 단계별 작업 결과물을 정해진 규칙에 따라 분류·보존·폐기한다.\nㄴ. 서비스 유지 요인을 파악하고 하자나 오류가 발생하면 보수 방안을 제시한다.\nㄷ. 사후관리는 최종 발표가 끝나면 모든 결과물을 폐기하는 절차를 의미한다.\nㄹ. 결과물 관리와 유지보수는 운영방안 제시의 핵심 내용이 될 수 있다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄷ, ㄹ"
    ],
    answerIndex: 1,
    explanation: "사후관리는 결과물을 규칙에 따라 분류·보존·폐기하고, 유지 요인과 하자 및 오류에 대한 보수 방안을 제시하는 운영 관리 활동이다.",
    wrongExplanations: [
      "ㄹ이 빠졌다. 결과물 관리와 유지보수는 사후관리의 핵심 내용이다.",
      "정답이다.",
      "ㄱ과 ㄹ이 빠졌고, ㄷ은 사후관리를 잘못 설명했다.",
      "ㄴ이 빠졌고, ㄷ은 틀린 진술이다."
    ],
    theoryPage: 350,
    theoryRange: "350-360",
    guidelineCode: "0802010609_17v3",
    guidelineTopic: "사후관리 · 운영방안 제시",
    keywords: ["사후관리", "결과물 관리", "유지보수"],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-048",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 운영 모델을 클라이언트에게 전달할 때, 설계된 운영원칙과 운영모델을 이해관계자가 실행 가능한 형태로 이해하도록 만드는 접근으로 가장 적절한 것은?",
    choices: [
      "시나리오, 블루프린트, 로드맵 등 시각적·언어적 산출물을 통해 서비스 흐름과 역할, 운영 방식을 구체화한다.",
      "서비스 운영 원칙은 내부 문서로만 남기고 사용자 접점과 제공자 행동은 표현하지 않는다.",
      "권리 보호 검토가 끝나기 전까지 모든 서비스 모델 산출물 작성을 중단한다.",
      "발표 시간을 줄이기 위해 문제 배경과 평가 결과를 모두 생략하고 최종 화면만 보여준다."
    ],
    answerIndex: 0,
    explanation: "개발 및 운영 단계에서는 서비스 시스템의 운영원칙과 운영모델을 시나리오, 블루프린트, 로드맵 등으로 구체화해 이해관계자가 실행과 개선 방향을 이해할 수 있도록 해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "운영 원칙만 내부 문서로 남기면 사용자 접점과 제공자 역할의 실행 가능성을 확인하기 어렵다.",
      "권리 검토는 중요하지만 서비스 모델 산출물 작성 전체를 중단해야 하는 것은 아니다.",
      "최종 화면만 제시하면 설계 근거, 평가 결과, 운영 방식이 전달되지 않는다."
    ],
    theoryPage: 306,
    theoryRange: "306-319",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 결과물 제시",
    keywords: ["운영모델", "시나리오", "블루프린트", "로드맵"],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-049",
    section: "development_operation",
    sourceType: "theory",
    question: "개발 및 운영 단계의 산출물과 활동 연결로 옳은 것을 모두 고른 것은?\n\nㄱ. 프로토타입 평가 결과 문서화는 사용성 문제와 개선 방향을 추적 가능하게 만든다.\nㄴ. 서비스 블루프린트는 사용자에게 보이는 활동과 보이지 않는 지원 활동을 함께 구조화하는 데 활용된다.\nㄷ. 비즈니스 모델 캔버스는 서비스 운영 모델을 반복적으로 검토하는 데 활용될 수 있다.\nㄹ. 디자인 자료화는 최종 결과물을 공유·보존하지 않기 위해 파일을 분산 폐기하는 절차이다.",
    choices: [
      "ㄱ, ㄴ",
      "ㄱ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answerIndex: 2,
    explanation: "프로토타입 평가 결과 문서화, 서비스 블루프린트, 비즈니스 모델 캔버스는 각각 개선 추적, 서비스 구조화, 운영 모델 검토에 활용된다. 디자인 자료화는 공유·보존을 위한 관리 활동이지 분산 폐기가 아니다.",
    wrongExplanations: [
      "ㄷ이 빠졌다. 비즈니스 모델 캔버스는 서비스 운영 모델 검토에 활용된다.",
      "ㄴ이 빠졌고, ㄹ은 디자인 자료화를 잘못 설명했다.",
      "정답이다.",
      "ㄱ이 빠졌고, ㄹ은 틀린 진술이다."
    ],
    theoryPage: 306,
    theoryRange: "306-360",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "모델개발 · 프로젝트 완료 및 자료화",
    keywords: ["결과 문서화", "블루프린트", "비즈니스 모델 캔버스", "자료화"],
    difficulty: "high",
    examStyle: "comparison"
  },
  {
    id: "development_operation-050",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가에서 고령 사용자들이 반복적으로 같은 오류를 보였고, 전문가 평가에서도 해당 화면의 정보 구조가 복잡하다는 의견이 나왔다. 다음 조치로 가장 적절한 것은?",
    choices: [
      "사용자와 전문가가 같은 문제를 지적했으므로 해당 문제를 개선 우선순위에 올리고, 개선안과 평가 근거를 문서화한다.",
      "전문가 의견과 사용자 의견이 모두 있으므로 추가 검토 없이 서비스를 즉시 출시한다.",
      "고령 사용자의 오류는 특정 집단의 문제이므로 전체 서비스 개선 대상에서 제외한다.",
      "정보 구조 문제는 발표 자료에서 설명을 추가하면 해결되므로 프로토타입은 유지한다."
    ],
    answerIndex: 0,
    explanation: "반복 오류와 전문가 평가가 같은 방향을 가리킨다면 문제의 심각도와 영향도가 높을 가능성이 크다. 개선 우선순위를 설정하고 개선안, 판단 근거, 평가 결과를 문서화해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "문제가 반복적으로 발견되었는데 즉시 출시하는 것은 평가 목적과 맞지 않는다.",
      "특정 사용자 집단에서 반복되는 오류는 접근성, 사용성, 핵심 사용자 요구 측면에서 중요한 개선 단서가 될 수 있다.",
      "발표 자료 설명만 추가하는 것은 실제 사용 과정의 정보 구조 문제를 해결하지 못한다."
    ],
    theoryPage: 294,
    theoryRange: "294-306",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 · 개선 방향 수립 및 문서화",
    keywords: ["반복 오류", "개선 우선순위", "평가 문서화"],
    difficulty: "high",
    examStyle: "application"
  }
];