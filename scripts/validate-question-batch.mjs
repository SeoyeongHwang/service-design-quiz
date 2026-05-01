import path from "node:path";
import { pathToFileURL } from "node:url";
import { questions as existingQuestions } from "../src/data/questions.js";

const allowedSections = new Set([
  "planning",
  "research",
  "strategy",
  "development_operation",
]);
const allowedSourceTypes = new Set(["theory", "keyword", "generated"]);
const allowedDifficulties = new Set(["low", "medium", "high"]);
const allowedExamStyles = new Set([
  "definition",
  "process",
  "comparison",
  "application",
]);

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

const inputPath = process.argv[2];

if (!inputPath) {
  fail("Usage: npm run validate:batch -- drafts/batches/<file>.js");
}

const absolutePath = path.resolve(inputPath);
const moduleUrl = pathToFileURL(absolutePath).href;
const batchModule = await import(moduleUrl);
const { batchMeta, batchQuestions } = batchModule;

assert(batchMeta && typeof batchMeta === "object", "batchMeta export is required.");
assert(Array.isArray(batchQuestions), "batchQuestions export must be an array.");
assert(
  allowedSections.has(batchMeta.section),
  `batchMeta.section must be one of ${Array.from(allowedSections).join(", ")}`,
);

const existingIds = new Set(existingQuestions.map((question) => question.id));
const batchIds = new Set();

for (const [index, question] of batchQuestions.entries()) {
  const label = `Question at index ${index}`;

  assert(typeof question.id === "string" && question.id.length > 0, `${label}: id is required.`);
  assert(
    /^([a-z_]+)-\d{3}$/.test(question.id),
    `${label}: id must match <section>-### format.`,
  );
  assert(
    !existingIds.has(question.id),
    `${label}: id ${question.id} already exists in src/data/questions.js.`,
  );
  assert(!batchIds.has(question.id), `${label}: duplicate id ${question.id} inside batch.`);
  batchIds.add(question.id);

  assert(
    question.section === batchMeta.section,
    `${label}: section must match batchMeta.section.`,
  );
  assert(
    allowedSections.has(question.section),
    `${label}: invalid section ${question.section}.`,
  );
  assert(
    allowedSourceTypes.has(question.sourceType),
    `${label}: invalid sourceType ${question.sourceType}.`,
  );
  assert(
    typeof question.question === "string" && question.question.trim().length > 0,
    `${label}: question text is required.`,
  );
  assert(Array.isArray(question.choices), `${label}: choices must be an array.`);
  assert(
    question.choices.length >= 4 && question.choices.length <= 5,
    `${label}: choices must contain 4 or 5 items.`,
  );
  assert(
    Number.isInteger(question.answerIndex) &&
      question.answerIndex >= 0 &&
      question.answerIndex < question.choices.length,
    `${label}: answerIndex must be a valid 0-based choice index.`,
  );
  assert(
    typeof question.explanation === "string" && question.explanation.trim().length > 0,
    `${label}: explanation is required.`,
  );
  assert(
    Array.isArray(question.wrongExplanations),
    `${label}: wrongExplanations must be an array.`,
  );
  assert(
    question.wrongExplanations.length === question.choices.length,
    `${label}: wrongExplanations length must match choices length.`,
  );
  assert(
    question.wrongExplanations[question.answerIndex] === "정답이다.",
    `${label}: wrongExplanations[answerIndex] must be "정답이다."`,
  );
  assert(
    typeof question.theoryPage === "number" && Number.isFinite(question.theoryPage),
    `${label}: theoryPage must be a number.`,
  );
  assert(
    typeof question.theoryRange === "string" && question.theoryRange.trim().length > 0,
    `${label}: theoryRange is required.`,
  );
  assert(
    typeof question.guidelineTopic === "string" && question.guidelineTopic.trim().length > 0,
    `${label}: guidelineTopic is required.`,
  );
  assert(Array.isArray(question.keywords), `${label}: keywords must be an array.`);
  assert(
    question.keywords.length >= 2,
    `${label}: keywords should contain at least 2 entries.`,
  );
  assert(
    allowedDifficulties.has(question.difficulty),
    `${label}: difficulty must be one of ${Array.from(allowedDifficulties).join(", ")}.`,
  );
  assert(
    allowedExamStyles.has(question.examStyle),
    `${label}: examStyle must be one of ${Array.from(allowedExamStyles).join(", ")}.`,
  );
}

console.log(
  `Validated ${batchQuestions.length} questions from ${path.relative(process.cwd(), absolutePath)}.`,
);
