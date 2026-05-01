# GPT Ready Prompts

지금은 `{{...}}`를 채우는 템플릿보다, 바로 GPT에 붙여 넣는 완성 프롬프트를 쓰는 편이 더 편합니다.

현재 ready 프롬프트는 첫 추가 배치 기준으로 `011-020` 생성용입니다.

바로 쓸 파일:

- `drafts/templates/ready/planning-batch-011.prompt.md`
- `drafts/templates/ready/research-batch-011.prompt.md`
- `drafts/templates/ready/strategy-batch-011.prompt.md`
- `drafts/templates/ready/development-operation-batch-011.prompt.md`

사용 순서:

1. 원하는 섹션의 `ready/*.prompt.md` 파일 내용을 통째로 복사합니다.
2. GPT에 그대로 붙여 넣습니다.
3. GPT 응답 전체를 지정된 파일명으로 `drafts/batches/` 아래에 저장합니다.
4. `npm run validate:batch -- drafts/batches/<파일명>.js`로 검사합니다.
5. 다음 시작 번호가 헷갈리면 `npm run next:ids`로 확인합니다.

예:

- `planning` 프롬프트 사용
- GPT 응답 저장 위치: `drafts/batches/planning.js`

즉, 이제 이 파일은 템플릿 자체보다 "어느 프롬프트를 복사하면 되는지"와 "어디에 저장하면 되는지"를 안내하는 인덱스 역할만 합니다.
