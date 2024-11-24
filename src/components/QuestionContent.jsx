import React from 'react'
import Button from './ui/Button'
import useQuestions from '../hooks/useQuestions'

export default function QuestionContent() {
  const { currentQuestion, goToNextQuestion } = useQuestions()

  return (
    currentQuestion && (
      <div className="question-content">
        <h3 className="title">{currentQuestion.question}</h3>
        {/* <div className="character"></div> */}
        <div className="button-wrapper">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              answer={option.answer}
              onClick={goToNextQuestion}
            />
          ))}
        </div>
      </div>
    )
  )
}
