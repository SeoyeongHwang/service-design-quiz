import { sections, sectionsById } from "./constants/sections.js";
import { questions, questionsBySection } from "./data/questionBank.js";
import { getRandomQuestion } from "./utils/getRandomQuestion.js";

const root = document.querySelector("#app");

const state = {
  currentSectionId: null,
  currentQuestion: null,
  screen: "home",
  selectedChoiceIndex: null,
  isAnswerRevealed: false,
  answeredQuestionIdsBySection: {},
};

const difficultyLabelMap = {
  low: "기본",
  medium: "보통",
  high: "심화",
};

const examStyleLabelMap = {
  definition: "개념형",
  process: "절차형",
  comparison: "비교형",
  application: "적용형",
};

const sourceTypeLabelMap = {
  theory: "이론서 기반",
  keyword: "키워드 기반",
  generated: "생성형",
};

const sectionQuestionCount = sections.reduce((accumulator, section) => {
  accumulator[section.id] = questionsBySection[section.id]?.length ?? 0;
  return accumulator;
}, {});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getCurrentSection() {
  return state.currentSectionId ? sectionsById[state.currentSectionId] : null;
}

function getSectionQuestionPool(sectionId) {
  return questionsBySection[sectionId] ?? [];
}

function getAnsweredQuestionIds(sectionId) {
  if (!state.answeredQuestionIdsBySection[sectionId]) {
    state.answeredQuestionIdsBySection[sectionId] = new Set();
  }

  return state.answeredQuestionIdsBySection[sectionId];
}

function getAnsweredCount(sectionId) {
  return getAnsweredQuestionIds(sectionId).size;
}

function getRemainingCount(sectionId) {
  return Math.max(
    getSectionQuestionPool(sectionId).length - getAnsweredCount(sectionId),
    0,
  );
}

function isSectionComplete(sectionId) {
  const totalCount = getSectionQuestionPool(sectionId).length;
  return totalCount > 0 && getAnsweredCount(sectionId) >= totalCount;
}

function resetSectionProgress(sectionId) {
  state.answeredQuestionIdsBySection[sectionId] = new Set();
  state.currentQuestion = null;
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
}

function getCurrentQuestionNumber(sectionId) {
  const totalCount = getSectionQuestionPool(sectionId).length;
  const answeredCount = getAnsweredCount(sectionId);
  const currentQuestionOffset =
    state.currentQuestion && !state.isAnswerRevealed ? 1 : 0;

  return Math.min(answeredCount + currentQuestionOffset, totalCount);
}

function renderTags(tags, className = "") {
  if (!tags?.length) {
    return "";
  }

  return `
    <div class="tag-list">
      ${tags
        .map((tag) => `<span class="tag ${className}">${escapeHtml(tag)}</span>`)
        .join("")}
    </div>
  `;
}

function getChoiceLabel(index) {
  return `${index + 1}번`;
}

function goHome() {
  state.currentSectionId = null;
  state.currentQuestion = null;
  state.screen = "home";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  render();
}

function openSection(sectionId) {
  state.currentSectionId = sectionId;
  state.currentQuestion = null;
  state.screen = "section";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  render();
}

function loadNextQuestion() {
  const section = getCurrentSection();

  if (!section) {
    goHome();
    return;
  }

  const questionPool = getSectionQuestionPool(section.id);

  if (!questionPool.length) {
    state.currentQuestion = null;
    state.screen = "empty";
    state.selectedChoiceIndex = null;
    state.isAnswerRevealed = false;
    render();
    return;
  }

  const answeredQuestionIds = getAnsweredQuestionIds(section.id);
  const nextQuestion = getRandomQuestion(questionPool, answeredQuestionIds);

  if (!nextQuestion) {
    state.currentQuestion = null;
    state.screen = "complete";
    state.selectedChoiceIndex = null;
    state.isAnswerRevealed = false;
    render();
    return;
  }

  state.currentQuestion = nextQuestion;
  state.screen = "quiz";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  render();
}

function restartSection() {
  const section = getCurrentSection();

  if (!section) {
    goHome();
    return;
  }

  resetSectionProgress(section.id);
  loadNextQuestion();
}

function selectChoice(index) {
  if (state.isAnswerRevealed) {
    return;
  }

  state.selectedChoiceIndex = index;
  render();
}

function revealAnswer() {
  if (state.selectedChoiceIndex === null || !state.currentQuestion) {
    return;
  }

  const section = getCurrentSection();

  if (section) {
    getAnsweredQuestionIds(section.id).add(state.currentQuestion.id);
  }

  state.isAnswerRevealed = true;
  render();
}

function getChoiceClassName(index) {
  if (!state.isAnswerRevealed) {
    return state.selectedChoiceIndex === index ? "choice-button--selected" : "";
  }

  if (index === state.currentQuestion.answerIndex) {
    return "choice-button--correct";
  }

  if (state.selectedChoiceIndex === index) {
    return "choice-button--incorrect";
  }

  return "";
}

function getChoiceStatusText(index) {
  if (!state.isAnswerRevealed) {
    return state.selectedChoiceIndex === index ? "선택됨" : "";
  }

  if (index === state.currentQuestion.answerIndex) {
    return "정답";
  }

  if (state.selectedChoiceIndex === index) {
    return "내 선택";
  }

  return "";
}

function renderHome() {
  return `
    <main class="page-shell">
      <div class="app-shell">
        <section class="hero-panel">
          <p class="kicker">Service Design Quiz</p>
          <h1 class="hero-title">섹션별 문제은행에서 랜덤으로 뽑아 푸는 필기 학습 앱</h1>
          <p class="hero-description">
            현재 앱에는 검수된 문제만 노출됩니다. 더미 문항은 앱에서 제외했고,
            각 섹션은 준비된 문제은행 개수만큼만 랜덤 출제됩니다.
          </p>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-label">현재 노출 문제</span>
              <strong class="stat-value">${questions.length}문항</strong>
            </div>
            <div class="stat-card">
              <span class="stat-label">출제 방식</span>
              <strong class="stat-value">중복 없는 섹션 랜덤</strong>
            </div>
          </div>
        </section>

        <section class="section-header">
          <p class="kicker">4 Sections</p>
          <h2 class="section-title">학습할 섹션을 선택하세요</h2>
          <p class="section-description">
            문제 수가 있는 섹션은 바로 시작할 수 있고, 아직 비어 있는 섹션은
            준비중 상태로 표시됩니다.
          </p>
        </section>

        <section class="section-grid">
          ${sections
            .map((section) => {
              const count = sectionQuestionCount[section.id] ?? 0;

              return `
                <button
                  class="section-card"
                  data-action="open-section"
                  data-section-id="${section.id}"
                >
                  <div class="section-card-head">
                    <span class="count-badge">${count ? `${count}문항` : "준비중"}</span>
                    <span class="section-status">${count ? "중복 없이 랜덤 출제" : "문제 없음"}</span>
                  </div>
                  <h3 class="section-card-title">${escapeHtml(section.name)}</h3>
                  <p class="section-card-copy">${escapeHtml(section.shortDescription)}</p>
                  ${renderTags(section.highlights)}
                </button>
              `;
            })
            .join("")}
        </section>
      </div>
    </main>
  `;
}

function renderSectionDetail() {
  const section = getCurrentSection();

  if (!section) {
    return renderHome();
  }

  const count = sectionQuestionCount[section.id] ?? 0;
  const answeredCount = getAnsweredCount(section.id);
  const remainingCount = getRemainingCount(section.id);
  const isComplete = isSectionComplete(section.id);

  return `
    <main class="page-shell">
      <div class="app-shell">
        <div class="topbar">
          <button class="ghost-button" data-action="go-home">전체 섹션</button>
        </div>

        <section class="panel">
          <p class="kicker">Section Detail</p>
          <h1 class="section-title">${escapeHtml(section.name)}</h1>
          <p class="section-description">${escapeHtml(section.shortDescription)}</p>

          <div class="info-grid">
            <div class="info-card">
              <span class="info-label">학습 범위</span>
              <strong class="info-value">${escapeHtml(section.scope)}</strong>
            </div>
            <div class="info-card">
              <span class="info-label">현재 문제 수</span>
              <strong class="info-value">${count}문항</strong>
            </div>
            <div class="info-card">
              <span class="info-label">이번 학습 진행</span>
              <strong class="info-value">${answeredCount}문항 완료 · ${remainingCount}문항 남음</strong>
            </div>
          </div>

          ${renderTags(section.highlights, "tag--muted")}

          <div class="action-grid">
            <button class="ghost-button" data-action="go-home">다른 섹션 보기</button>
            <button
              class="primary-button"
              data-action="${isComplete ? "restart-section" : "start-quiz"}"
              ${count ? "" : "disabled"}
            >
              ${isComplete ? "다시 풀기" : answeredCount ? "이어 풀기" : "문제 풀기 시작"}
            </button>
          </div>

          <p class="helper-text">
            ${count
              ? "이 섹션의 문제은행에서 아직 풀지 않은 문제만 랜덤으로 출제합니다."
              : "이 섹션은 아직 검수된 문제가 없어 앱에서 노출되지 않습니다."}
          </p>
        </section>
      </div>
    </main>
  `;
}

function renderQuiz() {
  const section = getCurrentSection();
  const question = state.currentQuestion;

  if (!section || !question) {
    return renderEmpty();
  }

  const isCorrect = state.selectedChoiceIndex === question.answerIndex;
  const totalQuestionCount = sectionQuestionCount[section.id] ?? 0;
  const currentQuestionNumber = getCurrentQuestionNumber(section.id);
  const isLastQuestionRevealed =
    state.isAnswerRevealed && getRemainingCount(section.id) === 0;
  const resultMessage = isLastQuestionRevealed
    ? "이 섹션의 모든 문제를 풀었습니다."
    : isCorrect
      ? "개념을 잘 짚었습니다."
      : "해설을 읽고 다음 문제로 이어가세요.";
  const selectedWrongExplanation =
    state.selectedChoiceIndex !== null &&
    state.selectedChoiceIndex !== question.answerIndex
      ? question.wrongExplanations?.[state.selectedChoiceIndex]
      : "";

  return `
    <main class="page-shell">
      <div class="app-shell">
        <div class="topbar topbar--split">
          <button
            class="ghost-button"
            data-action="open-section"
            data-section-id="${section.id}"
          >
            섹션 정보
          </button>
          <button class="ghost-button" data-action="go-home">홈</button>
        </div>

        <section class="panel">
          <div class="quiz-head">
            <div class="meta-line">
              <span class="tag tag--dark">${escapeHtml(section.name)}</span>
              <span class="tag">문제 ${currentQuestionNumber} / ${totalQuestionCount}</span>
              ${
                question.difficulty
                  ? `<span class="tag">${escapeHtml(difficultyLabelMap[question.difficulty] ?? question.difficulty)}</span>`
                  : ""
              }
              ${
                question.examStyle
                  ? `<span class="tag">${escapeHtml(examStyleLabelMap[question.examStyle] ?? question.examStyle)}</span>`
                  : ""
              }
            </div>
            <h1 class="question-title">${escapeHtml(question.question)}</h1>
            <p class="question-caption">${escapeHtml(section.scope)}</p>
          </div>

          <div class="choice-list" role="list" aria-label="문제 보기">
            ${question.choices
              .map(
                (choice, index) => `
                  <button
                    class="choice-button ${getChoiceClassName(index)}"
                    data-action="select-choice"
                    data-choice-index="${index}"
                    ${state.isAnswerRevealed ? "disabled" : ""}
                    aria-pressed="${state.selectedChoiceIndex === index}"
                  >
                    <span class="choice-index">${index + 1}</span>
                    <span class="choice-copy">
                      <span>${escapeHtml(choice)}</span>
                      ${
                        getChoiceStatusText(index)
                          ? `<span class="choice-status">${escapeHtml(getChoiceStatusText(index))}</span>`
                          : ""
                      }
                    </span>
                  </button>
                `,
              )
              .join("")}
          </div>

          ${renderTags(question.keywords, "tag--muted")}
        </section>

        ${
          state.isAnswerRevealed
            ? `
              <section class="panel result-panel" aria-live="polite">
                <div class="result-banner ${isCorrect ? "result-banner--correct" : "result-banner--incorrect"}">
                  <span class="result-mark">${isCorrect ? "정답" : "오답"}</span>
                  <span>${resultMessage}</span>
                </div>

                <div class="info-grid">
                  <div class="info-card">
                    <span class="info-label">내가 고른 답</span>
                    <strong class="info-value">${escapeHtml(
                      state.selectedChoiceIndex !== null
                        ? `${getChoiceLabel(state.selectedChoiceIndex)} ${question.choices[state.selectedChoiceIndex]}`
                        : "선택 없음",
                    )}</strong>
                  </div>
                  <div class="info-card">
                    <span class="info-label">정답</span>
                    <strong class="info-value">${escapeHtml(
                      `${getChoiceLabel(question.answerIndex)} ${question.choices[question.answerIndex]}`,
                    )}</strong>
                  </div>
                </div>

                <div class="info-card">
                  <span class="info-label">정답 해설</span>
                  <strong class="info-value">${escapeHtml(question.explanation)}</strong>
                </div>

                ${
                  selectedWrongExplanation
                    ? `
                      <div class="info-card">
                        <span class="info-label">선택한 오답 설명</span>
                        <strong class="info-value">${escapeHtml(selectedWrongExplanation)}</strong>
                      </div>
                    `
                    : ""
                }

                <div class="info-grid">
                  <div class="info-card">
                    <span class="info-label">이론서 페이지</span>
                    <strong class="info-value">${escapeHtml(
                      question.theoryPage
                        ? `p.${question.theoryPage}${question.theoryRange ? ` (${question.theoryRange})` : ""}`
                        : "매핑 예정",
                    )}</strong>
                  </div>
                  <div class="info-card">
                    <span class="info-label">출처 유형</span>
                    <strong class="info-value">${escapeHtml(
                      sourceTypeLabelMap[question.sourceType] ?? question.sourceType,
                    )}</strong>
                  </div>
                </div>

                ${
                  question.guidelineCode || question.guidelineTopic
                    ? `
                      <div class="info-card">
                        <span class="info-label">출제기준 연결</span>
                        <strong class="info-value">${escapeHtml(
                          [question.guidelineCode, question.guidelineTopic]
                            .filter(Boolean)
                            .join(" · "),
                        )}</strong>
                      </div>
                    `
                    : ""
                }
              </section>
            `
            : ""
        }
      </div>

      <div class="cta-bar">
        <div class="cta-inner">
          <button
            class="primary-button primary-button--block"
            data-action="${state.isAnswerRevealed ? "next-question" : "reveal-answer"}"
            ${state.selectedChoiceIndex === null && !state.isAnswerRevealed ? "disabled" : ""}
          >
            ${
              state.isAnswerRevealed
                ? isLastQuestionRevealed
                  ? "완료 화면 보기"
                  : "다음 문제"
                : "정답 확인"
            }
          </button>
        </div>
      </div>
    </main>
  `;
}

function renderComplete() {
  const section = getCurrentSection();
  const sectionName = section?.name ?? "선택한 섹션";
  const count = section ? sectionQuestionCount[section.id] ?? 0 : 0;

  return `
    <main class="page-shell">
      <div class="app-shell">
        <div class="topbar">
          <button class="ghost-button" data-action="go-home">전체 섹션</button>
        </div>

        <section class="panel empty-panel">
          <p class="kicker">Section Complete</p>
          <h1 class="section-title">${escapeHtml(sectionName)} 다 풀었습니다!</h1>
          <p class="section-description">
            이 섹션의 ${count}문항을 모두 풀었습니다. 다시 풀기를 누르면 같은 문제은행을 새 랜덤 순서로 다시 시작합니다.
          </p>
          <div class="action-grid">
            <button class="ghost-button" data-action="go-home">홈으로 돌아가기</button>
            ${
              section
                ? `<button class="primary-button" data-action="restart-section">다시 풀기</button>`
                : ""
            }
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderEmpty() {
  const section = getCurrentSection();
  const sectionName = section?.name ?? "선택한 섹션";

  return `
    <main class="page-shell">
      <div class="app-shell">
        <section class="panel empty-panel">
          <p class="kicker">Coming Soon</p>
          <h1 class="section-title">${escapeHtml(sectionName)} 문제를 준비중입니다</h1>
          <p class="section-description">
            이 섹션은 아직 검수된 문제은행이 비어 있습니다. 다른 섹션을 먼저 학습하거나
            해당 섹션 파일에 문항을 추가해 주세요.
          </p>
          <div class="action-grid">
            <button class="ghost-button" data-action="go-home">홈으로 돌아가기</button>
            ${
              section
                ? `<button class="primary-button" data-action="open-section" data-section-id="${section.id}">섹션 다시 보기</button>`
                : ""
            }
          </div>
        </section>
      </div>
    </main>
  `;
}

function render() {
  if (!root) {
    return;
  }

  if (state.screen === "section") {
    root.innerHTML = renderSectionDetail();
    return;
  }

  if (state.screen === "quiz") {
    root.innerHTML = renderQuiz();
    return;
  }

  if (state.screen === "empty") {
    root.innerHTML = renderEmpty();
    return;
  }

  if (state.screen === "complete") {
    root.innerHTML = renderComplete();
    return;
  }

  root.innerHTML = renderHome();
}

root?.addEventListener("click", (event) => {
  const target =
    event.target instanceof HTMLElement
      ? event.target.closest("[data-action]")
      : null;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const { action } = target.dataset;

  if (action === "go-home") {
    goHome();
    return;
  }

  if (action === "open-section" && target.dataset.sectionId) {
    openSection(target.dataset.sectionId);
    return;
  }

  if (action === "start-quiz") {
    loadNextQuestion();
    return;
  }

  if (action === "restart-section") {
    restartSection();
    return;
  }

  if (action === "select-choice" && target.dataset.choiceIndex) {
    selectChoice(Number(target.dataset.choiceIndex));
    return;
  }

  if (action === "reveal-answer") {
    revealAnswer();
    return;
  }

  if (action === "next-question") {
    loadNextQuestion();
  }
});

render();
