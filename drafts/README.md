# Draft Question Workflow

이 폴더는 GPT로 만든 문제 초안을 먼저 저장하고, 검수한 뒤, 최종 문제은행으로 옮기기 위한 작업 공간입니다.

## 가장 쉬운 시작법

1. `drafts/templates/ready/` 아래에서 원하는 섹션 프롬프트 파일 하나를 엽니다.
2. 파일 내용을 통째로 GPT에 붙여 넣습니다.
3. GPT 응답 전체를 `drafts/batches/<section>.js`처럼 섹션별 파일로 저장합니다.
4. `npm run validate:batch -- drafts/batches/<파일명>.js`를 실행합니다.
5. 여러 섹션 파일이 쌓이면 `npm run merge:batches`를 실행합니다.
6. `drafts/compiled/questions.generated.js`를 보고 최종 검수한 뒤 `src/data/questions.js`에 반영합니다.

숫자가 붙은 파일명을 꼭 쓸 필요는 없습니다.

- 추천 파일명:
  - `drafts/batches/planning.js`
  - `drafts/batches/research.js`
  - `drafts/batches/strategy.js`
  - `drafts/batches/development_operation.js`

다음에 어떤 ID부터 이어야 하는지 헷갈리면 `npm run next:ids`를 실행하면 됩니다.

## ready 프롬프트

- `drafts/templates/ready/planning-batch-011.prompt.md`
- `drafts/templates/ready/research-batch-011.prompt.md`
- `drafts/templates/ready/strategy-batch-011.prompt.md`
- `drafts/templates/ready/development-operation-batch-011.prompt.md`

현재 ready 프롬프트는 첫 추가 배치 기준으로 `011-020` 생성용입니다. 이후에는 같은 섹션 파일에 이어서 추가하면 되고, 다음 시작 번호는 `npm run next:ids`로 확인하면 됩니다.

## 폴더 구조

```txt
drafts/
  README.md
  batches/
    README.md
  compiled/
    .gitkeep
  templates/
    gpt-question-batch.prompt.md
    question-batch.template.js
    ready/
      planning-batch-011.prompt.md
      research-batch-011.prompt.md
      strategy-batch-011.prompt.md
      development-operation-batch-011.prompt.md
```

## 파일 네이밍 규칙

- 숫자나 `batch` 접두어는 필수가 아닙니다.
- 섹션별 단일 파일을 권장합니다.
- 예시:
  - `planning.js`
  - `research.js`
  - `strategy.js`
  - `development_operation.js`

## 주의

- GPT 응답을 바로 `src/data/questions.js`에 넣지 않는 편이 안전합니다.
- 먼저 `drafts/batches`에 저장하고 검수하는 흐름을 권장합니다.
- `docs/extracted/`와 `drafts/compiled/`는 생성물이므로 기준 원본처럼 다루지 않습니다.
