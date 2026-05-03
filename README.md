# 서비스·경험디자인 기사 필기 퀴즈 MVP

모바일 웹에서 빠르게 섹션을 고르고, 객관식 문제를 섹션 안에서 중복 없이 랜덤으로 풀고, 바로 해설까지 확인하는 정적 퀴즈 앱입니다.

## 포함 범위

- 4개 섹션 선택
- 섹션 상세 화면
- 섹션별 중복 없는 랜덤 문제 출제
- 보기 1개 선택
- 같은 화면 내 정답 확인
- 해설, 관련 이론 페이지, 키워드 표시
- 섹션 내 모든 문제 풀이 완료 안내
- 저장 기능 없는 세션 기반 흐름

## 실행 방법

별도 빌드가 필요 없는 정적 프로젝트입니다.

1. 저장소를 열고 `index.html`을 브라우저에서 실행합니다.
2. 또는 GitHub Pages에 그대로 배포합니다.

문서 추출 작업이 필요할 때는 아래 스크립트를 사용합니다.

```bash
npm run extract:docs
```

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

앱에 노출되는 문제는 `src/data/questionBank.js`에서 `drafts/batches/*.js`의 섹션별 정적 배열을 모아 구성합니다.

- `section`: `planning`, `research`, `strategy`, `development_operation`
- `choices`: 4지 또는 5지 객관식 배열
- `answerIndex`: 정답 보기 인덱스
- `wrongExplanations`: 각 보기별 오답 이유
- `theoryPage`, `theoryRange`: 관련 이론서 페이지 정보
- `guidelineCode`, `guidelineTopic`: 출제기준 연결 정보

현재 버전에는 `docs` 폴더의 이론서, 기출문제집, 출제기준을 바탕으로 정리한 섹션별 30문항, 총 120문항이 들어 있습니다. 실제 시험 대비용으로 확장하려면 같은 배치 흐름으로 문항을 늘리고, 실제 사용 중인 이론서 기준으로 해설과 페이지 매핑을 더 촘촘히 보정하면 됩니다.

## 자료 폴더

- `docs/`: 사용자가 넣어 둔 원본 PDF 자료
- `docs/extracted/`: PDF에서 추출한 텍스트 결과물

`docs/extracted/`는 생성 파일이라 Git에는 포함하지 않도록 처리했습니다.

## 후속 권장 작업

1. 실제 이론서/핸드북 기준으로 문제 수를 섹션당 20문항 이상으로 확장합니다.
2. 기출문제집 기준으로 자주 반복되는 개념을 별도 태그로 분리합니다.
3. 문제 검수 기준을 정하고 정답, 해설, 페이지를 교차 검토합니다.
4. GitHub Pages를 활성화하고 배포 URL을 확정합니다.
5. 이후 단계에서 오답노트, PWA, 스와이프 제스처를 검토합니다.
