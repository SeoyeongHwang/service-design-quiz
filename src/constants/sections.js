export const sections = [
  {
    id: "planning",
    name: "서비스·경험디자인 기획설계",
    shortDescription:
      "서비스디자인 기본 개념, 디자인 방법론, 요구사항 정의와 학습 범위 정리에 집중합니다.",
    scope:
      "서비스디자인 개요, 디자인 방법론, 사용자 경험 개념, 요구사항 정의",
    highlights: ["디자인 방법론", "요구사항 정의", "학습 범위"],
  },
  {
    id: "research",
    name: "사용자 조사·분석",
    shortDescription:
      "인터뷰, 관찰, 설문, 인사이트 도출처럼 실제 사용자 맥락을 읽는 조사 방법을 다룹니다.",
    scope:
      "인터뷰, 관찰, 설문 설계, 에스노그라피, 여정맵, 인사이트 도출",
    highlights: ["인터뷰", "맥락 관찰", "인사이트"],
  },
  {
    id: "strategy",
    name: "사용자 중심 전략수립",
    shortDescription:
      "페르소나, 가치제안, 우선순위 설정, KPI 설계 등 전략의 방향을 구체화합니다.",
    scope:
      "페르소나, 가치제안, 우선순위, KPI, 가설 수립, 전략 정렬",
    highlights: ["페르소나", "가치제안", "우선순위"],
  },
  {
    id: "development_operation",
    name: "서비스·경험디자인 개발 및 운영",
    shortDescription:
      "프로토타입 평가, 결과물 정리, 운영 지표, VOC 반영처럼 출시 이후 실행까지 연결합니다.",
    scope:
      "프로토타입 평가, 결과물 정리, 서비스 블루프린트, 운영 지표",
    highlights: ["프로토타입", "블루프린트", "운영 지표"],
  },
];

export const sectionsById = Object.fromEntries(
  sections.map((section) => [section.id, section]),
);
