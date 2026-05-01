export function getRandomQuestion(questionPool, previousQuestionId = null) {
  if (!questionPool.length) {
    return null;
  }

  if (questionPool.length === 1) {
    return questionPool[0];
  }

  const filteredQuestions = questionPool.filter(
    (question) => question.id !== previousQuestionId,
  );
  const candidatePool = filteredQuestions.length ? filteredQuestions : questionPool;
  const randomIndex = Math.floor(Math.random() * candidatePool.length);

  return candidatePool[randomIndex];
}
