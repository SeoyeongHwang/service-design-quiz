/**
 * @typedef {import("../types/question.js").Question} Question
 */

/** @type {Question[]} */
export const questions = [
  {
    id: "planning-001",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 서비스디자인의 설명으로 가장 적절한 것은?",
    choices: [
      "시각 결과물의 조형 완성도만 높이는 활동",
      "서비스 접점 전반의 사용자 경험을 설계하는 활동",
      "개발 일정만 관리하는 프로젝트 통제 활동",
      "브랜드 로고를 통일하는 그래픽 작업",
    ],
    answerIndex: 1,
    explanation:
      "서비스디자인은 사용자가 경험하는 여러 접점과 흐름을 통합적으로 설계하는 접근이다.",
    wrongExplanations: [
      "서비스디자인은 시각물만 다루지 않고 경험 전체를 다룬다.",
      "정답이다.",
      "일정 관리는 일부일 뿐 서비스 경험 설계 전체를 뜻하지 않는다.",
      "브랜딩 요소는 일부 결과물일 뿐 핵심 정의가 아니다.",
    ],
    theoryPage: 18,
    theoryRange: "18-21",
    keywords: ["서비스디자인", "접점", "경험"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "planning-002",
    section: "planning",
    sourceType: "generated",
    question:
      "디자인씽킹의 일반적인 흐름을 가장 잘 나타낸 것은 무엇인가?",
    choices: [
      "공감 → 정의 → 아이디어 → 프로토타입 → 테스트",
      "정의 → 공감 → 테스트 → 아이디어 → 프로토타입",
      "아이디어 → 공감 → 구현 → 테스트 → 유지보수",
      "리서치 → 런칭 → 브랜딩 → 측정 → 종료",
    ],
    answerIndex: 0,
    explanation:
      "디자인씽킹은 공감으로 시작해 문제를 정의하고, 아이디어를 만든 뒤 프로토타입과 테스트로 검증하는 흐름이 대표적이다.",
    wrongExplanations: [
      "정답이다.",
      "문제 정의보다 공감이 먼저다.",
      "일반적인 디자인씽킹 단계와 다른 흐름이다.",
      "서비스 실행 단계 일부를 섞은 순서로 디자인씽킹의 대표 흐름이 아니다.",
    ],
    theoryPage: 24,
    theoryRange: "24-28",
    keywords: ["디자인씽킹", "프로세스"],
    difficulty: "low",
    examStyle: "process",
  },
  {
    id: "planning-003",
    section: "planning",
    sourceType: "generated",
    question:
      "사용성 평가에서 직접 관찰로 확인하기 가장 어려운 항목은 무엇인가?",
    choices: [
      "과업 완료 시간",
      "오류 발생 횟수",
      "작업 중 사용한 화면 경로",
      "서비스에 대한 장기적 브랜드 호감도",
    ],
    answerIndex: 3,
    explanation:
      "브랜드 호감도는 장기적 태도에 가까워 단일 사용성 테스트 현장에서 직접 관찰하기 어렵다.",
    wrongExplanations: [
      "과업 시간은 관찰과 측정이 가능하다.",
      "오류 횟수는 테스트 중 직접 기록할 수 있다.",
      "이동 경로는 화면 기록과 관찰로 쉽게 확인 가능하다.",
      "정답이다.",
    ],
    theoryPage: 41,
    theoryRange: "41-44",
    keywords: ["사용성 평가", "측정 지표"],
    difficulty: "medium",
    examStyle: "comparison",
  },
  {
    id: "planning-004",
    section: "planning",
    sourceType: "generated",
    question:
      "요구사항 우선순위를 정할 때 MoSCoW 분류의 'Must'에 해당하는 예로 가장 적절한 것은?",
    choices: [
      "있으면 좋지만 출시 이후에도 추가 가능한 기능",
      "서비스 핵심 가치가 성립하려면 반드시 필요한 기능",
      "논의는 되었지만 이번 범위에서는 제외된 기능",
      "마케팅용으로만 사용하는 선택 기능",
    ],
    answerIndex: 1,
    explanation:
      "MoSCoW의 Must는 해당 릴리스에서 빠지면 핵심 목표 달성이 어려운 필수 항목을 뜻한다.",
    wrongExplanations: [
      "이는 보통 Could에 가깝다.",
      "정답이다.",
      "이는 Won't에 해당한다.",
      "핵심 기능이 아니므로 Must로 보기 어렵다.",
    ],
    theoryPage: 56,
    theoryRange: "56-58",
    keywords: ["요구사항", "우선순위", "MoSCoW"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "planning-005",
    section: "planning",
    sourceType: "generated",
    question: "다음 중 UI와 UX의 관계를 올바르게 설명한 것은?",
    choices: [
      "UI와 UX는 동일한 개념이므로 구분할 필요가 없다.",
      "UX는 화면 색상 조합만 의미하고 UI는 흐름 설계를 뜻한다.",
      "UI는 경험을 구성하는 접점 중 하나이고 UX는 전체 경험을 포괄한다.",
      "UI는 오프라인 경험만, UX는 온라인 경험만 다룬다.",
    ],
    answerIndex: 2,
    explanation:
      "UI는 인터페이스라는 구체적 접점이고, UX는 그 접점을 포함한 전체 경험을 의미한다.",
    wrongExplanations: [
      "두 개념은 밀접하지만 범위가 다르다.",
      "설명이 서로 뒤바뀌었다.",
      "정답이다.",
      "UI와 UX 모두 온오프라인 접점 전반에서 다룰 수 있다.",
    ],
    theoryPage: 33,
    theoryRange: "33-35",
    keywords: ["UI", "UX"],
    difficulty: "low",
    examStyle: "comparison",
  },
  {
    id: "planning-006",
    section: "planning",
    sourceType: "generated",
    question:
      "서비스 블루프린트에 대한 설명으로 가장 옳은 것은?",
    choices: [
      "사용자의 감정 변화만 시간순으로 정리한 도구다.",
      "서비스 접점과 백스테이지 활동의 연결 구조를 표현하는 도구다.",
      "브랜드 자산의 시각 규칙만 정리한 문서다.",
      "사용성 테스트 결과를 통계로만 보여주는 표다.",
    ],
    answerIndex: 1,
    explanation:
      "서비스 블루프린트는 프론트스테이지, 백스테이지, 지원 프로세스를 함께 보여 주며 서비스 운영 구조를 이해하게 돕는다.",
    wrongExplanations: [
      "감정 변화 중심 도구는 여정맵에 가깝다.",
      "정답이다.",
      "브랜드 가이드는 다른 목적의 문서다.",
      "블루프린트는 정성적 흐름과 운영 구조를 시각화하는 도구다.",
    ],
    theoryPage: 62,
    theoryRange: "62-66",
    keywords: ["서비스 블루프린트", "백스테이지"],
    difficulty: "medium",
    examStyle: "definition",
  },
  {
    id: "research-001",
    section: "research",
    sourceType: "generated",
    question:
      "사용자가 실제 환경에서 어떤 우회 행동을 하는지 파악하려 할 때 가장 적절한 조사 방법은?",
    choices: [
      "현장 맥락 관찰과 인터뷰를 결합한 맥락 조사",
      "배너 클릭 수만 보는 로그 분석",
      "사내 구성원 대상 아이디어 투표",
      "완성된 보고서의 문장 교정",
    ],
    answerIndex: 0,
    explanation:
      "실제 행동과 맥락을 파악하려면 사용 환경에서 관찰하고 이유를 질문하는 맥락 조사가 적절하다.",
    wrongExplanations: [
      "정답이다.",
      "로그만으로는 우회 행동의 맥락과 이유를 알기 어렵다.",
      "내부 의견 수렴은 실제 사용자 조사와 다르다.",
      "문장 교정은 조사 방법이 아니다.",
    ],
    theoryPage: 74,
    theoryRange: "74-78",
    keywords: ["맥락 조사", "현장 관찰"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "research-002",
    section: "research",
    sourceType: "generated",
    question:
      "설문조사만으로 파악하기 어려운 정보로 가장 적절한 것은?",
    choices: [
      "응답자의 연령대 분포",
      "사용자가 특정 순간에 망설인 이유의 맥락",
      "기본 만족도 점수 평균",
      "선호 기능에 대한 선택 비율",
    ],
    answerIndex: 1,
    explanation:
      "설문은 넓게 수집하기 좋지만, 미묘한 맥락과 행동 이유를 깊게 이해하는 데는 한계가 있다.",
    wrongExplanations: [
      "인구통계 정보는 설문으로 수집하기 쉽다.",
      "정답이다.",
      "만족도 점수는 설문이 대표적인 방식이다.",
      "선택 비율 역시 설문으로 적합하게 수집 가능하다.",
    ],
    theoryPage: 82,
    theoryRange: "82-84",
    keywords: ["설문조사", "정성조사"],
    difficulty: "low",
    examStyle: "comparison",
  },
  {
    id: "research-003",
    section: "research",
    sourceType: "generated",
    question:
      "어피니티 다이어그램의 주된 목적은 무엇인가?",
    choices: [
      "조사 결과를 의미 있는 묶음으로 정리해 인사이트를 찾는 것",
      "정답률 통계를 실시간으로 시각화하는 것",
      "서비스 운영 조직도를 작성하는 것",
      "사용자에게 동일한 질문지를 반복 발송하는 것",
    ],
    answerIndex: 0,
    explanation:
      "어피니티 다이어그램은 흩어진 관찰과 발화를 묶어 패턴과 주제를 찾는 데 효과적이다.",
    wrongExplanations: [
      "정답이다.",
      "이는 분석 도구의 목적과 다르다.",
      "조직도 작성은 리서치 분석의 핵심 목적이 아니다.",
      "질문 반복 발송은 설문 운영에 가깝다.",
    ],
    theoryPage: 90,
    theoryRange: "90-93",
    keywords: ["어피니티 다이어그램", "인사이트"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "research-004",
    section: "research",
    sourceType: "generated",
    question:
      "표본 편향이 발생한 사례로 가장 적절한 것은 무엇인가?",
    choices: [
      "서비스를 사용하지 않는 잠재 고객도 함께 인터뷰한 경우",
      "다양한 연령대에서 균형 있게 참여자를 모집한 경우",
      "사내 직원만 대상으로 만족도 조사를 실시한 경우",
      "사용 맥락별로 인터뷰 질문을 다르게 구성한 경우",
    ],
    answerIndex: 2,
    explanation:
      "사내 직원만을 표본으로 삼으면 실제 사용자 집단을 대표하지 못해 편향 가능성이 높다.",
    wrongExplanations: [
      "잠재 고객 포함은 관점을 넓히는 데 도움이 될 수 있다.",
      "오히려 편향을 줄이는 방식이다.",
      "정답이다.",
      "질문 조정은 맥락 반영일 수 있으나 표본 편향 자체와는 다르다.",
    ],
    theoryPage: 97,
    theoryRange: "97-99",
    keywords: ["표본 편향", "리서치 설계"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "research-005",
    section: "research",
    sourceType: "generated",
    question:
      "다음 중 인터뷰 질문으로 가장 바람직한 것은?",
    choices: [
      "이 기능이 불편하다고 생각하시죠?",
      "왜 이 기능을 자주 사용하지 않는지 말씀해 주세요.",
      "이 화면은 잘 만든 화면 아닌가요?",
      "다른 사람들도 다 좋아하던데 어떠세요?",
    ],
    answerIndex: 1,
    explanation:
      "개방형 질문은 응답자의 실제 경험과 이유를 유도 없이 들을 수 있게 해 준다.",
    wrongExplanations: [
      "유도 질문이라 응답을 왜곡할 수 있다.",
      "정답이다.",
      "평가 방향을 미리 제시하는 유도 질문이다.",
      "사회적 압박을 주는 표현으로 적절하지 않다.",
    ],
    theoryPage: 103,
    theoryRange: "103-105",
    keywords: ["인터뷰", "개방형 질문"],
    difficulty: "low",
    examStyle: "application",
  },
  {
    id: "research-006",
    section: "research",
    sourceType: "generated",
    question:
      "여정맵에 주로 포함되는 요소로 보기 어려운 것은 무엇인가?",
    choices: [
      "단계별 사용자 행동",
      "감정 변화와 불편 지점",
      "서비스 접점과 채널",
      "서버 CPU 점유율 그래프",
    ],
    answerIndex: 3,
    explanation:
      "여정맵은 사용자 경험 흐름을 그리는 도구이며 서버 자원 그래프는 운영 모니터링 지표에 가깝다.",
    wrongExplanations: [
      "행동은 핵심 구성 요소다.",
      "감정 변화는 여정맵에서 자주 다룬다.",
      "접점과 채널도 함께 정리한다.",
      "정답이다.",
    ],
    theoryPage: 110,
    theoryRange: "110-113",
    keywords: ["여정맵", "접점"],
    difficulty: "low",
    examStyle: "comparison",
  },
  {
    id: "strategy-001",
    section: "strategy",
    sourceType: "generated",
    question:
      "페르소나를 만드는 가장 중요한 목적은 무엇인가?",
    choices: [
      "실제 사용자를 대신해 공감 가능한 의사결정 기준을 만드는 것",
      "모든 사용자를 하나의 평균값으로 단순화하는 것",
      "개발 일정을 자동으로 계산하는 것",
      "브랜드 슬로건을 정하는 것",
    ],
    answerIndex: 0,
    explanation:
      "페르소나는 대표 사용자상을 구체화해 팀이 같은 기준으로 판단하고 설계하도록 돕는다.",
    wrongExplanations: [
      "정답이다.",
      "모든 사용자를 뭉뚱그리는 것은 오히려 이해를 약화시킨다.",
      "일정 계산 도구가 아니다.",
      "브랜드 문구 개발이 주목적은 아니다.",
    ],
    theoryPage: 122,
    theoryRange: "122-125",
    keywords: ["페르소나", "의사결정"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "strategy-002",
    section: "strategy",
    sourceType: "generated",
    question:
      "가치제안(Value Proposition)에 대한 설명으로 가장 적절한 것은?",
    choices: [
      "서비스가 사용자 문제를 어떤 방식으로 해결하는지 정리한 약속",
      "조직의 인사평가 기준을 수치로 만든 표",
      "화면별 버튼 색상을 정리한 디자인 토큰 문서",
      "경쟁사 광고 문구를 모은 목록",
    ],
    answerIndex: 0,
    explanation:
      "가치제안은 사용자가 얻는 핵심 효용과 차별적 가치를 명확히 표현하는 전략 요소다.",
    wrongExplanations: [
      "정답이다.",
      "조직 내부 제도와는 다른 개념이다.",
      "디자인 시스템 문서는 가치제안과 목적이 다르다.",
      "경쟁 분석 자료일 수는 있어도 가치제안 정의 자체는 아니다.",
    ],
    theoryPage: 129,
    theoryRange: "129-132",
    keywords: ["가치제안", "핵심 효용"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "strategy-003",
    section: "strategy",
    sourceType: "generated",
    question:
      "영향도는 높고 구현 난이도는 낮은 개선안을 우선 검토하려는 경우 가장 적절한 도구는?",
    choices: [
      "우선순위 매트릭스",
      "어피니티 다이어그램",
      "서비스 블루프린트",
      "시맨틱 차등 척도",
    ],
    answerIndex: 0,
    explanation:
      "우선순위 매트릭스는 영향도와 노력도를 기준으로 개선 과제를 비교하는 데 적합하다.",
    wrongExplanations: [
      "정답이다.",
      "이는 인사이트 군집화에 더 적합하다.",
      "운영 구조 시각화 도구로 우선순위 평가와는 다르다.",
      "태도 측정 기법으로 우선순위 판단 도구가 아니다.",
    ],
    theoryPage: 137,
    theoryRange: "137-139",
    keywords: ["우선순위", "영향도", "노력도"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "strategy-004",
    section: "strategy",
    sourceType: "generated",
    question:
      "다음 중 허영 지표(vanity metric)보다 핵심 성과 지표(KPI)에 더 가까운 것은?",
    choices: [
      "누적 앱 다운로드 수만 지속해서 보는 것",
      "메인 화면의 배경색 선호도 투표 결과",
      "퀴즈 시작 사용자 대비 정답 확인 완료 비율",
      "사내 회의 참석자 수",
    ],
    answerIndex: 2,
    explanation:
      "정답 확인 완료 비율은 서비스 핵심 행동이 실제로 수행되는지를 보여 주는 실행 지표다.",
    wrongExplanations: [
      "다운로드만으로는 실제 사용성과 학습 흐름을 보기 어렵다.",
      "디자인 선호 조사일 뿐 핵심 성과와 직접 연결되기 어렵다.",
      "정답이다.",
      "서비스 사용자 가치와 직접 연결되지 않는다.",
    ],
    theoryPage: 144,
    theoryRange: "144-147",
    keywords: ["KPI", "허영 지표"],
    difficulty: "medium",
    examStyle: "comparison",
  },
  {
    id: "strategy-005",
    section: "strategy",
    sourceType: "generated",
    question:
      "가설 문장을 '만약 ~라면, 그러면 ~할 것이다, 왜냐하면 ~이기 때문이다' 형태로 쓰는 가장 큰 이유는?",
    choices: [
      "검증할 변화와 기대 결과, 근거를 한 문장으로 명확히 하기 위해",
      "모든 실험 결과를 자동으로 성공 처리하기 위해",
      "디자인 시안을 줄이고 문서를 없애기 위해",
      "사용자 인터뷰를 생략하기 위해",
    ],
    answerIndex: 0,
    explanation:
      "가설 문장은 무엇을 바꾸고 어떤 결과를 기대하는지, 그리고 왜 그런지까지 명료하게 정리하게 해 준다.",
    wrongExplanations: [
      "정답이다.",
      "가설은 검증 대상이지 성공 보장이 아니다.",
      "문서 축소가 목적이 아니다.",
      "가설 설정은 조사 생략의 근거가 되지 않는다.",
    ],
    theoryPage: 150,
    theoryRange: "150-152",
    keywords: ["가설", "실험 설계"],
    difficulty: "medium",
    examStyle: "definition",
  },
  {
    id: "strategy-006",
    section: "strategy",
    sourceType: "generated",
    question:
      "현재 서비스 흐름의 문제를 파악한 뒤 목표 상태를 설계하려 할 때 가장 적절한 접근은?",
    choices: [
      "현재 상태와 목표 상태를 비교하는 As-is / To-be 정리",
      "임의의 색상 테마를 먼저 확정하는 것",
      "실제 사용자 없이 내부 투표만 반복하는 것",
      "모든 기능을 같은 우선순위로 병행 개발하는 것",
    ],
    answerIndex: 0,
    explanation:
      "As-is / To-be 비교는 현재 문제와 목표 차이를 선명하게 보여 주어 전략 수립에 효과적이다.",
    wrongExplanations: [
      "정답이다.",
      "시각 스타일 우선 확정은 전략 정의보다 후행일 수 있다.",
      "내부 투표만으로는 사용자 중심 전략이 되기 어렵다.",
      "우선순위 없는 병행 개발은 전략적 선택과 거리가 멀다.",
    ],
    theoryPage: 158,
    theoryRange: "158-161",
    keywords: ["As-is", "To-be", "전략 설계"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "development_operation-001",
    section: "development_operation",
    sourceType: "generated",
    question:
      "로우파이 프로토타입의 장점으로 가장 적절한 것은?",
    choices: [
      "시각 완성도가 높아 출시용으로 바로 사용 가능하다.",
      "빠르게 아이디어를 검토하고 수정 방향을 확인할 수 있다.",
      "서버 성능을 실제와 동일하게 측정할 수 있다.",
      "운영 조직도를 자동 생성한다.",
    ],
    answerIndex: 1,
    explanation:
      "로우파이 프로토타입은 제작 비용이 낮아 빠른 검토와 반복 수정에 유리하다.",
    wrongExplanations: [
      "로우파이는 완성도보다 검증 속도에 초점이 있다.",
      "정답이다.",
      "성능 측정은 별도 환경이 필요하다.",
      "조직도 생성과는 관련이 없다.",
    ],
    theoryPage: 170,
    theoryRange: "170-172",
    keywords: ["프로토타입", "로우파이"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "development_operation-002",
    section: "development_operation",
    sourceType: "generated",
    question:
      "서비스를 전체 출시하기 전에 제한된 범위에서 먼저 운영해 보는 활동은 무엇인가?",
    choices: ["벤치마킹", "파일럿 운영", "브레인스토밍", "카드 소팅"],
    answerIndex: 1,
    explanation:
      "파일럿 운영은 실제 서비스 이전에 제한된 사용자와 범위로 문제를 점검하는 데 쓰인다.",
    wrongExplanations: [
      "벤치마킹은 비교 학습이다.",
      "정답이다.",
      "브레인스토밍은 아이디어 발산 기법이다.",
      "카드 소팅은 정보 구조 탐색 기법이다.",
    ],
    theoryPage: 176,
    theoryRange: "176-178",
    keywords: ["파일럿", "출시 검증"],
    difficulty: "low",
    examStyle: "definition",
  },
  {
    id: "development_operation-003",
    section: "development_operation",
    sourceType: "generated",
    question:
      "결제 장애가 발생한 뒤 신속한 사과, 안내, 보상 기준을 제공하는 활동은 무엇과 가장 관련이 깊은가?",
    choices: ["서비스 회복", "퍼널 확장", "브랜드 네이밍", "페르소나 통합"],
    answerIndex: 0,
    explanation:
      "서비스 회복은 실패 상황에서 신뢰를 회복하기 위한 대응 체계를 의미한다.",
    wrongExplanations: [
      "정답이다.",
      "퍼널 확장은 유입 확대 맥락에 가깝다.",
      "브랜드 네이밍은 장애 대응 체계와 다르다.",
      "페르소나 통합은 전략 단계의 작업이다.",
    ],
    theoryPage: 182,
    theoryRange: "182-185",
    keywords: ["서비스 회복", "장애 대응"],
    difficulty: "medium",
    examStyle: "application",
  },
  {
    id: "development_operation-004",
    section: "development_operation",
    sourceType: "generated",
    question:
      "접근성 관점에서 올바른 설명은 무엇인가?",
    choices: [
      "정답과 오답은 색상만 다르게 주면 충분하다.",
      "버튼 크기와 텍스트 명확성은 모바일 접근성에 중요하다.",
      "대체 텍스트는 이미지가 예쁠 때만 넣는다.",
      "명도 대비는 브랜딩보다 항상 덜 중요하다.",
    ],
    answerIndex: 1,
    explanation:
      "모바일에서는 충분한 터치 영역과 명확한 레이블이 핵심 접근성 요소다.",
    wrongExplanations: [
      "색상만으로 구분하면 일부 사용자는 정보를 놓칠 수 있다.",
      "정답이다.",
      "대체 텍스트는 정보 전달을 위해 필요하다.",
      "명도 대비 역시 중요한 접근성 기준이다.",
    ],
    theoryPage: 188,
    theoryRange: "188-191",
    keywords: ["접근성", "모바일 UX"],
    difficulty: "low",
    examStyle: "comparison",
  },
  {
    id: "development_operation-005",
    section: "development_operation",
    sourceType: "generated",
    question:
      "VOC(Voice of Customer)를 운영에 반영하는 선순환 구조로 가장 적절한 것은?",
    choices: [
      "수집 → 분류 → 우선순위화 → 개선 → 결과 공유",
      "수집 → 폐기 → 재수집 → 광고 집행",
      "노출 확대 → 이벤트 → 다운로드 집계",
      "디자인 변경 → 런칭 → 기록 삭제",
    ],
    answerIndex: 0,
    explanation:
      "VOC는 단순 수집이 아니라 분류, 우선순위 설정, 개선, 피드백 공유까지 이어져야 운영 가치가 생긴다.",
    wrongExplanations: [
      "정답이다.",
      "개선으로 이어지지 않는 수집은 운영 효과가 약하다.",
      "마케팅 지표 흐름이지 VOC 순환 구조가 아니다.",
      "기록 삭제는 학습을 단절시킨다.",
    ],
    theoryPage: 195,
    theoryRange: "195-198",
    keywords: ["VOC", "운영 개선"],
    difficulty: "medium",
    examStyle: "process",
  },
  {
    id: "development_operation-006",
    section: "development_operation",
    sourceType: "generated",
    question:
      "운영 지표를 설계할 때 학습 앱의 핵심 행동과 가장 가까운 것은?",
    choices: [
      "배경 일러스트 선호도 응답 수",
      "퀴즈 진입 후 정답 확인까지 완료한 세션 비율",
      "팀 내부 회의 시간 총합",
      "초기 로고 시안 개수",
    ],
    answerIndex: 1,
    explanation:
      "퀴즈 진입 후 정답 확인 완료 비율은 사용자가 핵심 루프를 실제로 수행했는지 보여 주는 지표다.",
    wrongExplanations: [
      "핵심 학습 행동과 직접 연결되기 어렵다.",
      "정답이다.",
      "운영 효율 참고는 가능하지만 사용자 행동 지표는 아니다.",
      "브랜딩 산출물 수는 핵심 서비스 이용 성과가 아니다.",
    ],
    theoryPage: 201,
    theoryRange: "201-204",
    keywords: ["운영 지표", "핵심 행동"],
    difficulty: "medium",
    examStyle: "application",
  },
];

export const questionsBySection = questions.reduce((accumulator, question) => {
  if (!accumulator[question.section]) {
    accumulator[question.section] = [];
  }

  accumulator[question.section].push(question);
  return accumulator;
}, {});
