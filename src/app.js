import { sections, sectionsById } from "./constants/sections.js";
import { questions, questionsBySection } from "./data/questions.js";
import { getRandomQuestion } from "./utils/getRandomQuestion.js";

const root = document.querySelector("#app");

const state = {
  currentSectionId: null,
  currentQuestion: null,
  screen: "home",
  selectedChoiceIndex: null,
  isAnswerRevealed: false,
  sessionQuestionCount: 0,
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

function renderChips(chips, className = "") {
  if (!chips?.length) {
    return "";
  }

  return `
    <div class="chip-row">
      ${chips
        .map(
          (chip) =>
            `<span class="chip ${className}">${escapeHtml(chip)}</span>`,
        )
        .join("")}
    </div>
  `;
}

function getCurrentSection() {
  return state.currentSectionId ? sectionsById[state.currentSectionId] : null;
}

function getAnswerLabel(index) {
  return `${index + 1}번`;
}

function goHome() {
  state.currentSectionId = null;
  state.currentQuestion = null;
  state.screen = "home";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  state.sessionQuestionCount = 0;
  render();
}

function openSection(sectionId) {
  state.currentSectionId = sectionId;
  state.currentQuestion = null;
  state.screen = "section";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  state.sessionQuestionCount = 0;
  render();
}

function loadNextQuestion() {
  const currentSection = getCurrentSection();

  if (!currentSection) {
    goHome();
    return;
  }

  const questionPool = questionsBySection[currentSection.id] ?? [];

  if (!questionPool.length) {
    state.currentQuestion = null;
    state.screen = "empty";
    state.selectedChoiceIndex = null;
    state.isAnswerRevealed = false;
    render();
    return;
  }

  state.currentQuestion = getRandomQuestion(
    questionPool,
    state.currentQuestion?.id ?? null,
  );
  state.screen = "quiz";
  state.selectedChoiceIndex = null;
  state.isAnswerRevealed = false;
  state.sessionQuestionCount += 1;
  render();
}

function revealAnswer() {
  if (state.selectedChoiceIndex === null) {
    return;
  }

  state.isAnswerRevealed = true;
  render();
}

function selectChoice(index) {
  if (state.isAnswerRevealed) {
    return;
  }

  state.selectedChoiceIndex = index;
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
    return "내가 고른 답";
  }

  return "";
}

function renderHome() {
  return `
    <main class="page-shell">
      <div class="app-shell">
        <section class="hero-card">
          <div class="hero-content">
            <span class="eyebrow">MVP Quiz Loop</span>
            <h1 class="hero-title">서비스·경험디자인 기사 필기 무한 퀴즈</h1>
            <p class="hero-description">
              모바일에서 빠르게 접속해 섹션을 고르고, 한 문제씩 풀고, 바로 해설까지 확인하는
              1차 MVP입니다. 별도 로그인이나 저장 없이 가볍게 반복 학습하는 흐름에 집중했습니다.
            </p>
            <div class="summary-row">
              <div class="summary-chip">
                <span class="summary-label">현재 문제 수</span>
                <strong class="summary-value">${questions.length}문항</strong>
              </div>
              <div class="summary-chip">
                <span class="summary-label">학습 방식</span>
                <strong class="summary-value">랜덤 반복 풀이</strong>
              </div>
            </div>
          </div>
        </section>

        <section class="screen-header">
          <span class="eyebrow">4 Sections</span>
          <h2 class="screen-title">오늘 풀어볼 섹션을 선택하세요</h2>
          <p class="screen-description">
            4개 필기 영역을 섹션 카드로 나눴습니다. 원하는 영역 하나를 고르면 설명과 함께 바로
            문제 풀이를 시작할 수 있습니다.
          </p>
        </section>

        <section class="section-grid">
          ${sections
            .map(
              (section) => `
                <button class="section-card" data-action="open-section" data-section-id="${section.id}">
                  <span class="section-count">준비된 문제 ${sectionQuestionCount[section.id]}문항</span>
                  <h3 class="section-card-title">${escapeHtml(section.name)}</h3>
                  <p class="section-scope">${escapeHtml(section.shortDescription)}</p>
                  ${renderChips(section.highlights.slice(0, 3))}
                </button>
              `,
            )
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

  return `
    <main class="page-shell">
      <div class="app-shell">
        <div class="nav-row">
          <button class="nav-button" data-action="go-home">전체 섹션</button>
        </div>

        <section class="panel">
          <span class="eyebrow">Section Detail</span>
          <h1 class="screen-title">${escapeHtml(section.name)}</h1>
          <p class="detail-copy">${escapeHtml(section.shortDescription)}</p>

          <div class="detail-list">
            <div class="detail-item">
              <span class="detail-label">예상 학습 범위</span>
              <strong>${escapeHtml(section.scope)}</strong>
            </div>
            <div class="detail-item">
              <span class="detail-label">준비된 문제 수</span>
              <strong>${count}문항</strong>
            </div>
          </div>

          ${renderChips(section.highlights, "chip--brand")}

          <div class="action-row">
            <button class="secondary-button" data-action="go-home">다른 섹션 보기</button>
            <button
              class="primary-button"
              data-action="start-quiz"
              ${count ? "" : "disabled"}
            >
              문제 풀기 시작하기
            </button>
          </div>

          ${
            count
              ? `<p class="footer-note">정답 확인 후 바로 다음 문제로 넘어가는 같은 화면 플로우로 구성했습니다.</p>`
              : `<p class="footer-note">아직 준비된 문제가 없습니다.</p>`
          }
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
  const selectedWrongExplanation =
    state.selectedChoiceIndex !== null &&
    state.selectedChoiceIndex !== question.answerIndex
      ? question.wrongExplanations?.[state.selectedChoiceIndex]
      : "";

  return `
    <main class="page-shell">
      <div class="app-shell">
        <div class="nav-row">
          <button class="nav-button" data-action="open-section" data-section-id="${section.id}">
            섹션 정보
          </button>
          <button class="nav-button" data-action="go-home">홈</button>
        </div>

        <section class="question-card">
          <div class="question-head">
            <div class="question-meta">
              <span class="chip chip--brand">${escapeHtml(section.name)}</span>
              <span class="chip">문제 ${state.sessionQuestionCount}</span>
              ${
                question.difficulty
                  ? `<span class="chip">난이도 ${escapeHtml(question.difficulty)}</span>`
                  : ""
              }
            </div>
            <h1 class="question-title">${escapeHtml(question.question)}</h1>
            <p class="meta-text">
              ${escapeHtml(section.scope)}
            </p>
          </div>

          <div class="choice-list" role="list" aria-label="객관식 보기">
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
                      ${escapeHtml(choice)}
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

          ${renderChips(question.keywords)}
        </section>

        ${
          state.isAnswerRevealed
            ? `
              <section class="result-card" aria-live="polite">
                <div class="result-banner ${isCorrect ? "result-banner--correct" : "result-banner--incorrect"}">
                  <span class="result-icon">${isCorrect ? "O" : "X"}</span>
                  <span>${isCorrect ? "정답입니다. 흐름을 잘 잡고 있어요." : "오답입니다. 해설을 보고 바로 다음 문제로 넘어가세요."}</span>
                </div>

                <div class="result-list">
                  <div class="result-item">
                    <span class="result-label">내가 고른 답</span>
                    <strong>${escapeHtml(
                      state.selectedChoiceIndex !== null
                        ? `${getAnswerLabel(state.selectedChoiceIndex)} ${question.choices[state.selectedChoiceIndex]}`
                        : "선택 안 함",
                    )}</strong>
                  </div>
                  <div class="result-item">
                    <span class="result-label">정답</span>
                    <strong>${escapeHtml(
                      `${getAnswerLabel(question.answerIndex)} ${question.choices[question.answerIndex]}`,
                    )}</strong>
                  </div>
                </div>

                <div class="result-item">
                  <span class="result-label">정답인 이유</span>
                  <strong>${escapeHtml(question.explanation)}</strong>
                </div>

                ${
                  selectedWrongExplanation
                    ? `
                      <div class="result-item">
                        <span class="result-label">내 선택이 오답인 이유</span>
                        <strong>${escapeHtml(selectedWrongExplanation)}</strong>
                      </div>
                    `
                    : ""
                }

                <div class="result-list">
                  <div class="result-item">
                    <span class="result-label">관련 이론서 페이지</span>
                    <strong>${escapeHtml(
                      question.theoryPage
                        ? `p.${question.theoryPage}${question.theoryRange ? ` (${question.theoryRange})` : ""}`
                        : "자료 매핑 예정",
                    )}</strong>
                  </div>
                  <div class="result-item">
                    <span class="result-label">문제 유형</span>
                    <strong>${escapeHtml(question.examStyle)}</strong>
                  </div>
                </div>
              </section>
            `
            : ""
        }
      </div>

      <div class="cta-bar">
        <div class="cta-inner">
          <button
            class="cta-button"
            data-action="${state.isAnswerRevealed ? "next-question" : "reveal-answer"}"
            ${state.selectedChoiceIndex === null && !state.isAnswerRevealed ? "disabled" : ""}
          >
            ${state.isAnswerRevealed ? "다음 문제" : "정답 확인"}
          </button>
        </div>
      </div>
    </main>
  `;
}

function renderEmpty() {
  const section = getCurrentSection();
  const sectionName = section ? section.name : "선택한 섹션";

  return `
    <main class="page-shell">
      <div class="app-shell">
        <section class="empty-card">
          <span class="eyebrow">Empty State</span>
          <h1 class="empty-title">${escapeHtml(sectionName)} 문제를 준비 중입니다</h1>
          <p class="empty-copy">
            현재 이 섹션에는 표시할 문제가 없습니다. 다른 섹션을 먼저 학습하거나 문제 더미를
            추가해 주세요.
          </p>
          <div class="action-row">
            <button class="secondary-button" data-action="go-home">홈으로 돌아가기</button>
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
  } else if (state.screen === "quiz") {
    root.innerHTML = renderQuiz();
  } else if (state.screen === "empty") {
    root.innerHTML = renderEmpty();
  } else {
    root.innerHTML = renderHome();
  }
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
