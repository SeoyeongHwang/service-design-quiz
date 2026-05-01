import { batchQuestions as planningQuestions } from "../../drafts/batches/planning.js";
import { batchQuestions as researchQuestions } from "../../drafts/batches/research.js";
import { batchQuestions as strategyQuestions } from "../../drafts/batches/strategy.js";
import { batchQuestions as developmentOperationQuestions } from "../../drafts/batches/development_operation.js";

/** @typedef {import("../types/question.js").Question} Question */

/** @type {Question[]} */
export const questions = [
  ...planningQuestions,
  ...researchQuestions,
  ...strategyQuestions,
  ...developmentOperationQuestions,
];

export const questionsBySection = questions.reduce((accumulator, question) => {
  if (!accumulator[question.section]) {
    accumulator[question.section] = [];
  }

  accumulator[question.section].push(question);
  return accumulator;
}, {});
