# 서비스·경험디자인 기사 필기 무한 퀴즈 MVP

모바일 웹에서 빠르게 섹션을 고르고, 객관식 문제를 한 문제씩 반복해서 풀고, 바로 해설까지 확인하는 정적 퀴즈 앱입니다.

## 포함 범위

- 4개 섹션 선택
- 섹션 상세 화면
- 랜덤 문제 출제
- 보기 1개 선택
- 같은 화면 내 정답 확인
- 해설, 관련 이론 페이지, 키워드 표시
- 다음 문제로 루프 반복
- 저장 기능 없는 세션 기반 흐름

## 실행 방법

별도 빌드가 필요 없는 정적 프로젝트입니다.

1. 저장소를 열고 `index.html`을 브라우저에서 실행합니다.
2. 또는 GitHub Pages에 그대로 배포합니다.

## 파일 구조

```txt
assets/
  main.css
src/
  constants/
    sections.js
  data/
    questions.js
  types/
    question.js
  utils/
    getRandomQuestion.js
  app.js
index.html
PRD.md
```

## 문제 데이터 확장

문제는 `src/data/questions.js`에 정적 배열로 들어 있습니다.

- `section`: `planning`, `research`, `strategy`, `development_operation`
- `choices`: 4지 또는 5지 객관식 배열
- `answerIndex`: 정답 보기 인덱스
- `wrongExplanations`: 각 보기별 오답 이유
- `theoryPage`, `theoryRange`: 관련 이론서 페이지 정보

1차 MVP에는 동작 검증을 위한 초기 문제 세트 24문항을 넣었습니다. 실제 시험 대비용으로 확장하려면 섹션당 20문항 이상으로 늘리고, 실제 사용 중인 이론서 기준 페이지 매핑으로 교체하면 됩니다.

## 후속 권장 작업

1. 실제 이론서/핸드북 기준으로 문제 수를 80문항 이상으로 확장합니다.
2. 문제 검수 기준을 정하고 정답과 해설을 교차 검토합니다.
3. GitHub Pages를 활성화하고 배포 URL을 확정합니다.
4. 이후 단계에서 오답노트, PWA, 스와이프 제스처를 검토합니다.
