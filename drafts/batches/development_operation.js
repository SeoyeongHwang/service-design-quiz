export const batchMeta = {
  batchId: "development_operation",
  section: "development_operation",
  sourceSummary: [
    "docs/extracted/exam-guideline.txt",
    "docs/extracted/theory-book.txt",
    "docs/extracted/past-exams.txt"
  ],
  notes: "서비스·경험디자인 개발 및 운영 섹션 누적 초안. 현재 문항은 011-020."
};

export const batchQuestions = [
  {
    id: "development_operation-011",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가를 계획할 때 가장 먼저 명확히 해야 할 사항으로 가장 적절한 것은?",
    choices: [
      "프로토타입에 대한 반응을 확인할지, 문제점을 진단할지 등 평가 목적을 정의한다.",
      "프로토타입의 시각적 완성도를 최대한 높여 최종 산출물처럼 보이게 한다.",
      "사용자 의견이 개입되지 않도록 내부 디자이너만 평가자로 구성한다.",
      "평가 결과가 나오기 전까지 개선 방향을 논의하지 않도록 한다."
    ],
    answerIndex: 0,
    explanation: "프로토타입 평가는 목적, 대상, 형식, 일정과 예산에 따라 방법이 달라지므로 평가 목적을 먼저 명확히 해야 한다. 반응 확인과 문제 진단은 서로 다른 평가 설계로 이어질 수 있다.",
    wrongExplanations: [
      "정답이다.",
      "완성도가 지나치게 높으면 이해관계자가 최종안으로 받아들여 자유로운 피드백을 주기 어려울 수 있다.",
      "프로토타입 평가는 사용자와 이해관계자로부터 피드백을 얻기 위한 과정이므로 내부자만으로 제한하는 것은 부적절하다.",
      "평가 결과는 개선 방향 수립과 문서화로 이어져야 하므로 개선 논의를 배제해서는 안 된다."
    ],
    theoryPage: 287,
    theoryRange: "287-288",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가 계획 · 평가 방법 계획",
    keywords: [
      "프로토타입 평가",
      "평가 목적",
      "사용자 피드백",
      "개선 방향"
    ],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-012",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 과정의 일반적인 흐름으로 가장 적절한 것은?",
    choices: [
      "평가 목적 설정 → 프로토타입과 과업 준비 → 파일럿 테스트 → 본 평가 실행 → 데이터 분석 및 개선안 도출",
      "본 평가 실행 → 평가 목적 설정 → 프로토타입 제작 → 파일럿 테스트 → 보고서 생략",
      "프로토타입 완성 → 결과 보고서 작성 → 사용자 모집 → 과업 설정 → 개선안 폐기",
      "이해관계자 승인 → 디자인 권리 등록 → 사용자 평가 생략 → 최종 구현"
    ],
    answerIndex: 0,
    explanation: "프로토타입 평가는 목적과 과업을 준비한 뒤 파일럿 테스트로 평가 설계의 적합성을 확인하고, 본 평가와 데이터 분석을 거쳐 개선 방향을 도출하는 흐름이 적절하다.",
    wrongExplanations: [
      "정답이다.",
      "평가 목적은 본 평가 실행 전에 설정되어야 하며, 결과 문서화는 평가 과정에서 중요한 산출물이다.",
      "결과 보고서는 평가와 분석 이후 작성되어야 하며, 개선안을 폐기하는 것은 평가의 목적과 맞지 않는다.",
      "디자인 권리 등록과 사용자 평가 생략은 프로토타입 평가 과정의 핵심 절차가 아니다."
    ],
    theoryPage: 288,
    theoryRange: "287-290",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가하기 · 프로토타입 시뮬레이션 평가",
    keywords: [
      "파일럿 테스트",
      "평가 실행",
      "데이터 분석",
      "프로토타입 평가 과정"
    ],
    difficulty: "medium",
    examStyle: "process"
  },
  {
    id: "development_operation-013",
    section: "development_operation",
    sourceType: "theory",
    question: "프로토타입 평가 결과 분석에서 정성적 데이터와 정량적 데이터의 구분으로 가장 적절한 것은?",
    choices: [
      "정성적 데이터는 언어적 표현, 비언어적 표현, 행동, 맥락 등을 포함하고, 정량적 데이터는 과업 성공률, 소요 시간, 오류 수 등 측정 가능한 값을 포함한다.",
      "정성적 데이터는 과업 완료 시간만을 의미하고, 정량적 데이터는 참여자의 말과 표정을 의미한다.",
      "정성적 데이터는 통계 처리가 가능해야 하며, 정량적 데이터는 연구자의 해석이 반드시 배제되어야 한다.",
      "정성적 데이터와 정량적 데이터는 모두 만족도 점수만으로 환산해야 분석할 수 있다."
    ],
    answerIndex: 0,
    explanation: "정성적 데이터는 관찰과 인터뷰에서 얻는 언어, 행동, 맥락 중심의 자료이며, 정량적 데이터는 사용성 평가에서 얻는 성공 여부, 시간, 오류 수, 만족도 등 수치화 가능한 자료이다.",
    wrongExplanations: [
      "정답이다.",
      "과업 완료 시간은 정량적 데이터이고, 참여자의 말과 표정은 정성적 데이터에 가깝다.",
      "정성적 데이터는 주관적 해석을 포함할 수 있으며, 정량적 데이터는 측정값을 중심으로 분석한다.",
      "모든 데이터를 만족도 점수로만 환산하면 행동, 맥락, 원인에 대한 중요한 해석을 놓칠 수 있다."
    ],
    theoryPage: 290,
    theoryRange: "290-294",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가하기 · 사용성 평가 도출",
    keywords: [
      "정성적 데이터",
      "정량적 데이터",
      "사용성 평가",
      "결과 분석"
    ],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-014",
    section: "development_operation",
    sourceType: "theory",
    question: "모바일 예약 서비스 프로토타입 평가에서 참여자들이 예약을 완료하지 못하는 원인을 파악하려고 한다. 가장 적절한 평가 자료 조합은?",
    choices: [
      "과업 성공률과 소요 시간, 오류 발생 지점, 참여자의 발화와 행동 관찰 기록을 함께 분석한다.",
      "브랜드 로고 선호도만 조사하여 예약 실패 원인을 판단한다.",
      "서비스 소개 영상의 조회 수만 확인하여 사용성 문제를 추정한다.",
      "개발자의 구현 난이도만 기준으로 예약 흐름의 적절성을 평가한다."
    ],
    answerIndex: 0,
    explanation: "예약 실패 원인을 파악하려면 정량적 성과 데이터와 정성적 관찰 및 코멘트를 함께 분석해야 한다. 과업 성공률, 소요 시간, 오류 지점은 행동의 패턴을 보여 주고 발화와 관찰 기록은 원인 해석을 돕는다.",
    wrongExplanations: [
      "정답이다.",
      "로고 선호도는 브랜드 인상과 관련될 수 있으나 예약 실패의 사용성 원인을 직접 설명하기 어렵다.",
      "조회 수는 사용자의 실제 과업 수행 문제나 오류 지점을 보여 주지 않는다.",
      "개발 난이도는 구현 측면의 판단 기준일 뿐 사용자 경험 평가 자료가 아니다."
    ],
    theoryPage: 293,
    theoryRange: "290-294",
    guidelineCode: "0802010621_17v3",
    guidelineTopic: "프로토타입 평가하기 · 사용성 평가 도출",
    keywords: [
      "과업 성공률",
      "오류",
      "관찰 기록",
      "코멘트 분석"
    ],
    difficulty: "high",
    examStyle: "application"
  },
  {
    id: "development_operation-015",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 청사진에서 가시선(Line of Visibility)의 역할로 가장 적절한 것은?",
    choices: [
      "고객에게 보이는 전방 영역과 고객에게 보이지 않는 후방 영역을 구분한다.",
      "서비스 제공 조직 외부의 지원 부서와 파트너를 모두 삭제한다.",
      "사용자의 감정 변화를 곡선 형태로만 표시한다.",
      "서비스 아이디어의 수익성과 비용 구조만을 비교한다."
    ],
    answerIndex: 0,
    explanation: "서비스 청사진에서 가시선은 고객이 직접 경험하는 전방 영역과 고객에게 보이지 않지만 서비스를 가능하게 하는 후방 영역을 나누는 기준선이다.",
    wrongExplanations: [
      "정답이다.",
      "지원 부서와 파트너의 활동은 청사진에서 지원 프로세스로 표현될 수 있으며 삭제 대상이 아니다.",
      "감정 변화를 곡선으로 표현하는 것은 고객 여정 지도에서 활용되는 감정 곡선에 가깝다.",
      "수익성과 비용 구조를 비교하는 것은 비즈니스 모델 캔버스의 일부 요소와 관련된다."
    ],
    theoryPage: 307,
    theoryRange: "307-310",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "결과물 제시 · 서비스·경험 블루프린트 작성",
    keywords: [
      "서비스 청사진",
      "가시선",
      "전방 영역",
      "후방 영역"
    ],
    difficulty: "low",
    examStyle: "definition"
  },
  {
    id: "development_operation-016",
    section: "development_operation",
    sourceType: "theory",
    question: "새로운 병원 접수 서비스를 블루프린트로 정리하려고 한다. 다음 중 서비스 청사진에 포함하기에 가장 적절한 내용은?",
    choices: [
      "환자의 접수 행동, 접수 직원의 전방 응대, 보이지 않는 내부 처리, 검사실·수납 부서의 지원 프로세스를 시간 흐름에 따라 배치한다.",
      "환자의 연령대별 선호 색상만 정리하고 운영 부서의 역할은 제외한다.",
      "병원 로고, 포스터, 명함 디자인 시안만 나열한다.",
      "서비스 아이디어 후보를 평가 점수순으로만 배열하고 실제 접점의 흐름은 생략한다."
    ],
    answerIndex: 0,
    explanation: "서비스 청사진은 고객 행동, 전방 활동, 후방 활동, 지원 프로세스와 그 연결 관계를 시간의 흐름에 따라 통합적으로 시각화하는 도구이다.",
    wrongExplanations: [
      "정답이다.",
      "선호 색상은 시각 디자인 판단에 도움을 줄 수 있지만 청사진의 핵심인 서비스 전달 구조를 설명하지 못한다.",
      "로고와 인쇄물 시안은 시각 산출물이며 서비스 과정의 전방·후방 활동을 나타내지 않는다.",
      "아이디어 포트폴리오는 후보 아이디어 관리에 가깝고, 청사진은 실제 서비스 전달 과정과 운영 구조를 시각화한다."
    ],
    theoryPage: 310,
    theoryRange: "307-312",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "결과물 제시 · 서비스·경험 블루프린트 작성",
    keywords: [
      "서비스 청사진",
      "고객 행동",
      "지원 프로세스",
      "시간 흐름"
    ],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-017",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 블루프린트와 비즈니스 모델 캔버스의 차이를 설명한 것으로 가장 적절한 것은?",
    choices: [
      "서비스 블루프린트는 서비스 전달 과정과 운영 구조를 시각화하고, 비즈니스 모델 캔버스는 가치 제안, 고객, 채널, 수익, 비용 등 사업 모델의 구성 요소를 정리한다.",
      "서비스 블루프린트는 재무제표 작성을 위한 도구이고, 비즈니스 모델 캔버스는 사용자 행동 관찰만을 기록하는 도구이다.",
      "서비스 블루프린트는 법적 권리 등록 절차이고, 비즈니스 모델 캔버스는 저작권 보호 기간을 계산하는 도구이다.",
      "서비스 블루프린트와 비즈니스 모델 캔버스는 모두 사용자의 감정 곡선만을 그리기 위한 동일한 도구이다."
    ],
    answerIndex: 0,
    explanation: "블루프린트는 서비스 경험과 전달 조직의 활동을 연결해 보여 주는 운영 구조 시각화 도구이고, 비즈니스 모델 캔버스는 서비스가 가치를 창출하고 전달하며 수익을 얻는 구조를 정리하는 도구이다.",
    wrongExplanations: [
      "정답이다.",
      "블루프린트는 재무제표 도구가 아니며, 비즈니스 모델 캔버스도 사용자 관찰만 기록하는 도구가 아니다.",
      "두 도구 모두 지식재산권 등록이나 저작권 보호 기간 산정 절차가 아니다.",
      "감정 곡선은 고객 여정 지도에서 사용될 수 있는 표현이며 두 도구의 핵심 목적과 다르다."
    ],
    theoryPage: 312,
    theoryRange: "307-317",
    guidelineCode: "0802010622_17v3",
    guidelineTopic: "결과물 제시 · 서비스·경험 블루프린트 작성 및 아이디어 포트폴리오 작성",
    keywords: [
      "서비스 블루프린트",
      "비즈니스 모델 캔버스",
      "가치 제안",
      "운영 구조"
    ],
    difficulty: "medium",
    examStyle: "comparison"
  },
  {
    id: "development_operation-018",
    section: "development_operation",
    sourceType: "theory",
    question: "프로젝트 완료보고서를 작성할 때 가장 적절한 접근은?",
    choices: [
      "과제 기획부터 최종 결과물까지 단계별 핵심 결과를 정리하고, 보고 목적에 맞게 축약·편집한다.",
      "모든 회의록과 원자료를 편집 없이 시간순으로 붙여 넣어 분량을 늘린다.",
      "최종 시안 이미지만 제시하고 조사, 분석, 평가, 개선 과정은 생략한다.",
      "프로젝트에서 실패한 평가 결과는 보고서 신뢰도를 낮추므로 삭제한다."
    ],
    answerIndex: 0,
    explanation: "완료보고서는 프로젝트 단계별 결과를 문서로 정리하고, 독자가 이해할 수 있도록 핵심 내용을 축약·편집해 전달해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "원자료를 그대로 나열하면 핵심 흐름과 의사결정 근거가 드러나기 어렵다.",
      "최종 시안만 제시하면 서비스·경험디자인 과정의 근거와 개선 논리가 전달되지 않는다.",
      "실패나 문제점도 개선 방향과 학습의 근거가 될 수 있으므로 임의로 삭제하는 것은 부적절하다."
    ],
    theoryPage: 350,
    theoryRange: "333-350",
    guidelineCode: "0802010608_17v3",
    guidelineTopic: "완료보고서 작성 · 프로세스 단계별 결과 정리",
    keywords: [
      "완료보고서",
      "결과 정리",
      "축약",
      "편집"
    ],
    difficulty: "low",
    examStyle: "process"
  },
  {
    id: "development_operation-019",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 운영을 앞둔 팀이 최종 산출물을 데이터베이스화하려고 한다. 가장 적절한 관리 방식은?",
    choices: [
      "최종 디자인 파일과 결과물을 버전, 용도, 담당자, 공유 범위에 따라 분류해 보존하고 관계자들이 재사용할 수 있게 관리한다.",
      "완료 후 수정 가능성을 없애기 위해 모든 원본 파일을 삭제하고 이미지 캡처만 남긴다.",
      "디자이너 개인 컴퓨터에만 저장해 외부 이해관계자가 접근하지 못하게 한다.",
      "운영 중 오류가 발생하면 기존 결과물과의 연결 없이 새 파일을 처음부터 다시 만든다."
    ],
    answerIndex: 0,
    explanation: "디자인 자료화는 서비스 운영을 위해 최종 파일과 결과물을 체계적으로 데이터베이스화하고, 클라이언트와 디자이너 등 관계자가 공유·보존할 수 있게 하는 과정이다.",
    wrongExplanations: [
      "정답이다.",
      "원본 파일을 삭제하면 유지보수와 후속 과제 참조가 어려워진다.",
      "개인 컴퓨터에만 저장하면 체계적 공유와 보존이 어렵고 운영 리스크가 커진다.",
      "운영 중 오류가 발생하면 기존 결과물과 이력을 참조해 보수방안을 제시해야 한다."
    ],
    theoryPage: 360,
    theoryRange: "350-360",
    guidelineCode: "0802010109_15v2",
    guidelineTopic: "데이터베이스 관리하기 · 최종 디자인 파일·결과물 데이터베이스화",
    keywords: [
      "디자인 자료화",
      "데이터베이스화",
      "공유",
      "보존"
    ],
    difficulty: "medium",
    examStyle: "application"
  },
  {
    id: "development_operation-020",
    section: "development_operation",
    sourceType: "theory",
    question: "서비스 아이디어와 디자인 산출물의 권리 보호에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "디자인권, 저작권, 상표권, 특허권 등 권리 유형의 성격을 구분하고, 산출물의 공개·출원·등록 시점과 절차를 고려해야 한다.",
      "디자인 산출물은 창작과 동시에 모든 국가에서 자동으로 특허권을 취득하므로 별도 절차가 필요 없다.",
      "서비스 이름은 저작권 등록만으로 충분하며 상표권 검토는 필요하지 않다.",
      "BM특허는 순수한 영업 아이디어만 있으면 기술적 구현 없이도 항상 인정된다."
    ],
    answerIndex: 0,
    explanation: "서비스·경험디자인 개발 및 운영에서는 산출물의 성격에 따라 디자인권, 저작권, 상표권, 특허권 등을 구분하고, 공개와 권리화 절차의 순서를 고려해야 한다.",
    wrongExplanations: [
      "정답이다.",
      "특허권은 창작만으로 자동 취득되는 권리가 아니며 출원과 심사 등 절차가 필요하다.",
      "서비스 명칭이나 브랜드 표지는 상표권 검토 대상이 될 수 있으므로 저작권만으로 충분하다고 볼 수 없다.",
      "BM특허는 단순한 영업 방법 자체만으로 인정되기 어렵고 특허 요건과 기술적 구현 가능성 등을 검토해야 한다."
    ],
    theoryPage: 360,
    theoryRange: "360-363",
    guidelineCode: "DESIGN_RIGHTS",
    guidelineTopic: "디자인 권리 · 지식재산권 이해 및 기본절차",
    keywords: [
      "지식재산권",
      "디자인권",
      "저작권",
      "BM특허"
    ],
    difficulty: "medium",
    examStyle: "application"
  }
];
