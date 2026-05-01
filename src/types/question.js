/**
 * @typedef {"planning" | "research" | "strategy" | "development_operation"} SectionId
 * @typedef {"theory" | "keyword" | "generated"} SourceType
 * @typedef {"low" | "medium" | "high"} Difficulty
 * @typedef {"definition" | "process" | "comparison" | "application"} ExamStyle
 *
 * @typedef Question
 * @property {string} id
 * @property {SectionId} section
 * @property {SourceType} sourceType
 * @property {string} question
 * @property {string[]} choices
 * @property {number} answerIndex
 * @property {string} explanation
 * @property {string[]=} wrongExplanations
 * @property {number=} theoryPage
 * @property {string=} theoryRange
 * @property {string[]=} keywords
 * @property {Difficulty=} difficulty
 * @property {ExamStyle} examStyle
 */

export {};
