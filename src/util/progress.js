export function calculateProgress(questionId, totalQuestions) {
  const maxProgress = 80

  const progressPercentage =
    ((Number(questionId) - 1) / (totalQuestions - 1)) * maxProgress

  return progressPercentage
}
