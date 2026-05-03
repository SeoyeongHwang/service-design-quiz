export function getRandomQuestion(questionPool, excludedQuestionIds = new Set()) {
  if (!questionPool.length) {
    return null;
  }

  const excludedIds =
    excludedQuestionIds instanceof Set
      ? excludedQuestionIds
      : new Set(excludedQuestionIds);
  const candidatePool = questionPool.filter(
    (question) => !excludedIds.has(question.id),
  );

  if (!candidatePool.length) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * candidatePool.length);

  return candidatePool[randomIndex];
}
