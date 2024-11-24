import React from 'react'
import Button from './ui/Button'
import useQuestions from '../hooks/useQuestions'
import useAnswers from '../hooks/useAnswers'
import useMbtiCalculator from '../hooks/useMbtiCalculator'
import { useNavigate } from 'react-router-dom'

export default function QuestionContent() {
  // TODO : 임시 userId 데이터
  const userId = '65235452-4e53-4a8c-bb33-606b21117fdf'

  const { currentQuestion, totalQuestions, goToNextQuestion } = useQuestions()
  const { addAnswer, getUserAnswers } = useAnswers(userId)
  const { incrementMbtiCount, calculateMbtiResult } = useMbtiCalculator()

  const navigate = useNavigate()

  const handleAnswerSelect = (type, answer) => {
    addAnswer(currentQuestion.id, type, answer)
    incrementMbtiCount(type)

    if (currentQuestion.id === totalQuestions) {
      const mbti = calculateMbtiResult()
      navigate(`/result/${mbti}`)
    } else {
      goToNextQuestion()
    }
  }
  console.log(getUserAnswers()) // 결과

  return (
    currentQuestion && (
      <div className="question-content">
        <h3 className="title">{currentQuestion.question}</h3>
        {/* TODO : 강아지 캐릭터 사진 중간에 넣기 */}
        {/* <div className="character"></div> */}
        <div className="button-wrapper">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              answer={option.answer}
              onClick={() => handleAnswerSelect(option.type, option.answer)}
            />
          ))}
        </div>
      </div>
    )
  )
}
