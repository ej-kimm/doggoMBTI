import { useState } from 'react'

export default function useAnswers(userId) {
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const addAnswer = (questionId, type, answer) => {
    setSelectedAnswers((prev) => {
      const userAnswers = prev[userId] || []

      return {
        ...prev,
        [userId]: [
          ...userAnswers,
          {
            question_id: questionId,
            type,
            answer,
          },
        ],
      }
    })
  }

  const getUserAnswers = () => selectedAnswers[userId] || []

  return { addAnswer, getUserAnswers }
}
