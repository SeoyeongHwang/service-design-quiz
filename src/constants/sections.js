export const sections = [
  {
    id: "planning",
    name: "서비스·경험디자인 기획설계",
    shortDescription:
      "서비스디자인의 기본 개념, 디자인씽킹, 요구사항 정의, 사용성 개요를 다룹니다.",
    scope:
      "디자인 개요, 디자인씽킹, 서비스디자인, 경험디자인, UI, 사용성 평가, 요구사항 파악",
    highlights: ["디자인씽킹", "요구사항 정리", "사용성 평가"],
  },
  {
    id: "research",
    name: "사용자 조사·분석",
    shortDescription:
      "사용자 인터뷰, 관찰, 설문, 여정 분석처럼 실제 사용자 맥락을 읽는 리서치를 다룹니다.",
    scope: "인터뷰, 관찰, 설문 설계, 어피니티 다이어그램, 여정맵, 사용자 인사이트",
    highlights: ["인터뷰", "맥락 관찰", "인사이트 도출"],
  },
  {
    id: "strategy",
    name: "사용자 중심 전략수립",
    shortDescription:
      "페르소나, 가치제안, 우선순위 설정, 지표 설계 등 방향을 정하는 전략 단계를 다룹니다.",
    scope: "페르소나, 가치제안, 우선순위화, KPI, 가설 설정, 서비스 방향성 정리",
    highlights: ["페르소나", "가치제안", "우선순위"],
  },
  {
    id: "development_operation",
    name: "서비스·경험디자인 개발 및 운영",
    shortDescription:
      "프로토타입, 파일럿, 운영 지표, 접근성, VOC 반영처럼 출시 이후 실행과 운영을 다룹니다.",
    scope: "프로토타입, 파일럿 운영, 서비스 회복, VOC, 접근성, 운영 지표",
    highlights: ["프로토타입", "서비스 회복", "운영 지표"],
  },
];

export const sectionsById = Object.fromEntries(
  sections.map((section) => [section.id, section]),
);
