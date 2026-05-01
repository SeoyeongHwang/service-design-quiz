import { readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { questions as existingQuestions } from "../src/data/questions.js";

const sections = [
  "planning",
  "research",
  "strategy",
  "development_operation",
];
const draftsDir = path.resolve("drafts/batches");

function collectMaxBySection(questionList, maxBySection) {
  for (const question of questionList) {
    const match = /^([a-z_]+)-(\d{3})$/.exec(question.id);

    if (!match) {
      continue;
    }

    const [, section, numericId] = match;

    if (!maxBySection.has(section)) {
      continue;
    }

    const value = Number.parseInt(numericId, 10);
    maxBySection.set(section, Math.max(maxBySection.get(section), value));
  }
}

const maxBySection = new Map(sections.map((section) => [section, 0]));
const appCountBySection = new Map(sections.map((section) => [section, 0]));
const draftCountBySection = new Map(sections.map((section) => [section, 0]));

for (const question of existingQuestions) {
  if (appCountBySection.has(question.section)) {
    appCountBySection.set(question.section, appCountBySection.get(question.section) + 1);
  }
}

collectMaxBySection(existingQuestions, maxBySection);

const entries = await readdir(draftsDir, { withFileTypes: true });
const draftFiles = entries
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith(".js") &&
      entry.name !== "README.md",
  )
  .map((entry) => path.join(draftsDir, entry.name))
  .sort((left, right) => left.localeCompare(right));

for (const filePath of draftFiles) {
  const moduleUrl = pathToFileURL(filePath).href;
  const { batchMeta, batchQuestions } = await import(moduleUrl);

  if (!batchMeta || !Array.isArray(batchQuestions)) {
    continue;
  }

  if (draftCountBySection.has(batchMeta.section)) {
    draftCountBySection.set(
      batchMeta.section,
      draftCountBySection.get(batchMeta.section) + batchQuestions.length,
    );
  }

  collectMaxBySection(batchQuestions, maxBySection);
}

for (const section of sections) {
  const nextId = String(maxBySection.get(section) + 1).padStart(3, "0");

  console.log(`[${section}]`);
  console.log(`  app questions: ${appCountBySection.get(section)}`);
  console.log(`  draft questions: ${draftCountBySection.get(section)}`);
  console.log(`  next id: ${section}-${nextId}`);
  console.log(`  target file: drafts/batches/${section}.js`);
}
